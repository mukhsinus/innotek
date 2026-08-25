/**
 * Скрипт для скачивания всех медиафайлов (изображений) с innotek.uz в папку src/assets/uploads/
 *
 * Источники URL:
 *  1. Все файлы src/data/*.ts (каталог, услуги, лендинги, клиенты)
 *  2. Все файлы content/*.md (архив страниц старого сайта)
 *
 * Запуск:
 *   node scripts/download-assets.mjs
 *   node scripts/download-assets.mjs --include-content
 *   node scripts/download-assets.mjs --update-data
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = fileURLToPath(new URL("../", import.meta.url));
const DATA_DIR = join(ROOT_DIR, "src", "data");
const CONTENT_DIR = join(ROOT_DIR, "content");
const TARGET_ASSETS_DIR = join(ROOT_DIR, "src", "assets", "images");

const args = process.argv.slice(2);
const includeContent = args.includes("--include-content") || args.includes("--all");
const updateData = args.includes("--update-data");

/** Регулярное выражение для поиска URL файлов из uploads */
const UPLOADS_REGEX = /https:\/\/innotek\.uz\/wp-content\/uploads\/[^\s"'`\)]+/g;

function collectUrlsFromDir(dir, ext) {
  const urls = new Set();
  if (!existsSync(dir)) return urls;

  const files = readdirSync(dir).filter((f) => f.endsWith(ext));
  for (const file of files) {
    const content = readFileSync(join(dir, file), "utf8");
    const matches = content.match(UPLOADS_REGEX) || [];
    for (const match of matches) {
      // Очищаем от возможных завершающих знаков препинания
      const cleanUrl = match.replace(/[,;]+$/, "");
      urls.add(cleanUrl);
    }
  }
  return urls;
}

console.log("🔍 Поиск URL изображений...");

const dataUrls = collectUrlsFromDir(DATA_DIR, ".ts");
console.log(`- Найдено в src/data/*.ts: ${dataUrls.size} уникальных URL`);

let allUrls = new Set([...dataUrls]);

if (includeContent) {
  const contentUrls = collectUrlsFromDir(CONTENT_DIR, ".md");
  console.log(`- Найдено в content/*.md: ${contentUrls.size} уникальных URL`);
  allUrls = new Set([...allUrls, ...contentUrls]);
}

console.log(`📦 Всего к скачиванию: ${allUrls.size} файлов\n`);

async function downloadFile(rawUrl) {
  // Корректно кодируем кириллические символы в URL для запроса
  const decoded = decodeURI(rawUrl);
  const parsed = new URL(decoded);
  const encodedUrl = parsed.origin + parsed.pathname.split("/").map(encodeURIComponent).join("/");

  // Относительный путь после /wp-content/uploads/
  const relativePath = decodeURIComponent(parsed.pathname).replace(/^\/wp-content\/uploads\//, "");
  const localFilePath = join(TARGET_ASSETS_DIR, ...relativePath.split("/"));

  if (existsSync(localFilePath)) {
    return { status: "skipped", url: rawUrl, path: localFilePath };
  }

  mkdirSync(dirname(localFilePath), { recursive: true });

  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://innotek.uz/",
  };

  try {
    const res = await fetch(encodedUrl, { headers });
    if (!res.ok) {
      // Попытка с исходным URL, если перекодировка не сработала
      const resFallback = await fetch(rawUrl, { headers });
      if (!resFallback.ok) {
        return { status: "error", url: rawUrl, error: `HTTP ${res.status} (${res.statusText})` };
      }
      const buffer = Buffer.from(await resFallback.arrayBuffer());
      writeFileSync(localFilePath, buffer);
      return { status: "downloaded", url: rawUrl, path: localFilePath, size: buffer.length };
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    writeFileSync(localFilePath, buffer);
    return { status: "downloaded", url: rawUrl, path: localFilePath, size: buffer.length };
  } catch (err) {
    return { status: "error", url: rawUrl, error: err.message };
  }
}

async function run() {
  mkdirSync(TARGET_ASSETS_DIR, { recursive: true });

  let downloadedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  const errors = [];

  const urlList = Array.from(allUrls);
  const CONCURRENCY = 5;

  for (let i = 0; i < urlList.length; i += CONCURRENCY) {
    const batch = urlList.slice(i, i + CONCURRENCY);
    const results = await Promise.all(batch.map(downloadFile));

    for (const r of results) {
      if (r.status === "downloaded") {
        downloadedCount++;
        const rel = r.path.slice(ROOT_DIR.length).replace(/\\/g, "/");
        console.log(`✅ [${downloadedCount + skippedCount}/${urlList.length}] Скачан: ${rel} (${(r.size / 1024).toFixed(1)} KB)`);
      } else if (r.status === "skipped") {
        skippedCount++;
        console.log(`⏩ [${downloadedCount + skippedCount}/${urlList.length}] Пропущен (уже существует): ${r.url}`);
      } else {
        errorCount++;
        errors.push(r);
        console.error(`❌ Ошибка загрузки ${r.url}: ${r.error}`);
      }
    }
  }

  console.log("\n==========================================");
  console.log(`Итог загрузки в src/assets/uploads/:`);
  console.log(`- Успешно скачано: ${downloadedCount}`);
  console.log(`- Пропущено (уже есть): ${skippedCount}`);
  console.log(`- Ошибок: ${errorCount}`);
  console.log("==========================================\n");

  if (updateData) {
    console.log("🔄 Обновление путей в src/data/*.ts на локальные /src/assets/uploads/...");
    const files = readdirSync(DATA_DIR).filter((f) => f.endsWith(".ts"));
    for (const file of files) {
      const fullPath = join(DATA_DIR, file);
      let text = readFileSync(fullPath, "utf8");
      const updated = text.replace(
        /https:\/\/innotek\.uz\/wp-content\/uploads\/([^\s"'`\)]+)/g,
        (match, path) => `/src/assets/uploads/${decodeURIComponent(path)}`
      );
      if (text !== updated) {
        writeFileSync(fullPath, updated, "utf8");
        console.log(`- Обновлен файл: src/data/${file}`);
      }
    }
    console.log("✅ Все ссылки в src/data/*.ts обновлены!");
  }
}

run();
