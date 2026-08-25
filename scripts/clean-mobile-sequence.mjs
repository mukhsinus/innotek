/**
 * Удаление всех .jpg / .jpeg файлов из папки src/assets/sequenceMobile/
 * Оставляем только .webp файлы.
 */
import { readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = fileURLToPath(new URL("../", import.meta.url));
const SEQ_MOBILE_DIR = join(ROOT_DIR, "src", "assets", "sequenceMobile");

console.log("🧹 Очистка src/assets/sequenceMobile/ от .jpg файлов...");

const files = readdirSync(SEQ_MOBILE_DIR);
let deletedCount = 0;
let remainingWebpCount = 0;

for (const file of files) {
  const fullPath = join(SEQ_MOBILE_DIR, file);
  if (statSync(fullPath).isDirectory()) continue;

  const lower = file.toLowerCase();
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) {
    rmSync(fullPath, { force: true });
    deletedCount++;
  } else if (lower.endsWith(".webp")) {
    remainingWebpCount++;
  }
}

console.log(`✅ Удалено .jpg файлов: ${deletedCount}`);
console.log(`📦 Оставлено .webp файлов: ${remainingWebpCount}`);
