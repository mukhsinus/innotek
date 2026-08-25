/**
 * Аудит dist/ для шага 8:
 * - каждый <img> имеет width+height (анти-CLS) и loading (lazy вне первого экрана);
 * - <link rel="preload" as="font"> присутствует;
 * - скрипты chrome-бандла подключены с defer/module (не блокируют рендер).
 *
 * Запуск: node scripts/audit-media.mjs
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = fileURLToPath(new URL("../dist/", import.meta.url));

const htmlFiles = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (name.endsWith(".html")) htmlFiles.push(full);
  }
})(DIST);

const errors = [];
let imgTotal = 0;
let imgLazy = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const route = "/" + file.slice(DIST.length).replace(/\\/g, "/").replace(/index\.html$/, "");
  const standalone = route === "/410.html"; // автономная страница без бандла

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    imgTotal++;
    const tag = m[0];
    if (!/\bwidth="/.test(tag) || !/\bheight="/.test(tag)) errors.push(`${route}: img без width/height: ${tag.slice(0, 120)}`);
    if (!/\bloading="/.test(tag)) errors.push(`${route}: img без loading: ${tag.slice(0, 120)}`);
    else if (/\bloading="lazy"/.test(tag)) imgLazy++;
    if (!/\bdecoding="async"/.test(tag)) errors.push(`${route}: img без decoding=async: ${tag.slice(0, 120)}`);
  }

  if (!standalone && !/<link rel="preload"[^>]*as="font"/.test(html)) errors.push(`${route}: нет preload шрифтов`);

  for (const m of html.matchAll(/<script\b(?![^>]*application\/ld)[^>]*\bsrc="[^"]+"[^>]*>/g)) {
    const tag = m[0];
    if (!/\btype="module"/.test(tag) && !/\bdefer\b/.test(tag) && !/\basync\b/.test(tag)) {
      errors.push(`${route}: блокирующий внешний скрипт: ${tag.slice(0, 140)}`);
    }
  }
}

console.log(`HTML-файлов: ${htmlFiles.length}, <img>: ${imgTotal}, из них lazy: ${imgLazy}`);
if (errors.length) {
  console.error("Проблемы:\n  " + errors.join("\n  "));
  process.exit(1);
}
console.log("OK: у всех img есть размеры и loading; шрифты предзагружены; скрипты не блокируют рендер.");
