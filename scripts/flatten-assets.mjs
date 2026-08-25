/**
 * Скрипт для перемещения всех изображений из вложенных папок (2023/10/, 2024/01/ и т.д.)
 * в одну общую плоскую папку src/assets/images/
 * и обновления ссылок в src/data/*.ts
 *
 * Запуск:
 *   node scripts/flatten-assets.mjs
 */

import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = fileURLToPath(new URL("../", import.meta.url));
const ASSETS_ROOT = join(ROOT_DIR, "src", "assets");
const SOURCE_UPLOADS = join(ASSETS_ROOT, "uploads");
const TARGET_FLAT_DIR = join(ASSETS_ROOT, "images");
const DATA_DIR = join(ROOT_DIR, "src", "data");

if (!existsSync(SOURCE_UPLOADS)) {
  console.error("❌ Папка src/assets/uploads/ не найдена.");
  process.exit(1);
}

mkdirSync(TARGET_FLAT_DIR, { recursive: true });

// 1. Собираем все файлы рекурсивно
const allFiles = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else {
      allFiles.push(full);
    }
  }
}
walk(SOURCE_UPLOADS);

console.log(`📁 Найдено файлов во вложенных папках: ${allFiles.length}`);

// 2. Формируем карту соответствия старого пути к новому плоскому имени
// Чтобы избежать конфликтов имен (например, 2023/10/1.jpg и 2024/01/1.jpg)
const oldToNewMap = new Map(); // oldRelativeFromUploads -> newFilename
const usedFilenames = new Map(); // filename -> originalFullPath

for (const fullPath of allFiles) {
  const relPathFromUploads = relative(SOURCE_UPLOADS, fullPath).replace(/\\/g, "/");
  const origBaseName = basename(fullPath);

  let targetName = origBaseName;

  // Если такое имя уже занято другим файлом с другим содержанием
  if (usedFilenames.has(targetName)) {
    const prevFile = usedFilenames.get(targetName);
    const prevRel = relative(SOURCE_UPLOADS, prevFile).replace(/\\/g, "/");
    // Добавляем префикс пути к имени (например, 2023-10-1.jpg)
    const prefix = dirname(relPathFromUploads).replace(/[\/\\]/g, "-");
    targetName = `${prefix}-${origBaseName}`;
  }

  usedFilenames.set(targetName, fullPath);
  oldToNewMap.set(relPathFromUploads, targetName);

  const destPath = join(TARGET_FLAT_DIR, targetName);
  copyFileSync(fullPath, destPath);
}

console.log(`✅ Все ${oldToNewMap.size} фото скопированы в одну плоскую папку: src/assets/images/`);

// 3. Обновляем ссылки во всех файлах src/data/*.ts
console.log("\n🔄 Обновление ссылок в src/data/*.ts...");
let updatedFilesCount = 0;

for (const file of readdirSync(DATA_DIR).filter((f) => f.endsWith(".ts"))) {
  const fullPath = join(DATA_DIR, file);
  let text = readFileSync(fullPath, "utf8");
  let modified = false;

  for (const [oldRel, newName] of oldToNewMap.entries()) {
    // Варианты путей:
    // 1. /src/assets/uploads/...
    // 2. https://innotek.uz/wp-content/uploads/...
    const searchLocal = `/src/assets/uploads/${oldRel}`;
    const searchRemote = `https://innotek.uz/wp-content/uploads/${oldRel}`;
    const searchEncodedRemote = `https://innotek.uz/wp-content/uploads/${encodeURI(oldRel)}`;
    const newLocalPath = `/src/assets/images/${newName}`;

    if (text.includes(searchLocal)) {
      text = text.replaceAll(searchLocal, newLocalPath);
      modified = true;
    }
    if (text.includes(searchRemote)) {
      text = text.replaceAll(searchRemote, newLocalPath);
      modified = true;
    }
    if (text.includes(searchEncodedRemote)) {
      text = text.replaceAll(searchEncodedRemote, newLocalPath);
      modified = true;
    }
  }

  // Также общий regex fallback для любых оставшихся путей
  text = text.replace(/\/src\/assets\/uploads\/([^\s"'`\)]+)/g, (match, p) => {
    const decoded = decodeURIComponent(p);
    const mapped = oldToNewMap.get(decoded);
    return mapped ? `/src/assets/images/${mapped}` : `/src/assets/images/${basename(decoded)}`;
  });

  writeFileSync(fullPath, text, "utf8");
  updatedFilesCount++;
  console.log(`- Обновлен: src/data/${file}`);
}

// 4. Удаляем старую вложенную папку src/assets/uploads/
rmSync(SOURCE_UPLOADS, { recursive: true, force: true });
console.log("🗑️ Старая папка со вложенными подпапками src/assets/uploads/ удалена.");

console.log("\n🎉 Готово! Все фотографии теперь находятся в одной единой папке: src/assets/images/");
