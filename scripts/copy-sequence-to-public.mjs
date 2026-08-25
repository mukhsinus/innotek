import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = fileURLToPath(new URL("../", import.meta.url));

const SRC_DESKTOP = join(ROOT_DIR, "src", "assets", "sequnceDesktop");
const SRC_MOBILE = join(ROOT_DIR, "src", "assets", "sequenceMobile");

const PUB_DESKTOP = join(ROOT_DIR, "public", "sequnceDesktop");
const PUB_DESKTOP_ALT = join(ROOT_DIR, "public", "sequenceDesktop");
const PUB_MOBILE = join(ROOT_DIR, "public", "sequenceMobile");

if (!existsSync(PUB_DESKTOP)) mkdirSync(PUB_DESKTOP, { recursive: true });
if (!existsSync(PUB_DESKTOP_ALT)) mkdirSync(PUB_DESKTOP_ALT, { recursive: true });
if (!existsSync(PUB_MOBILE)) mkdirSync(PUB_MOBILE, { recursive: true });

console.log("🚚 Копирование sequence кадров в public/...");

if (existsSync(SRC_DESKTOP)) {
  cpSync(SRC_DESKTOP, PUB_DESKTOP, { recursive: true });
  cpSync(SRC_DESKTOP, PUB_DESKTOP_ALT, { recursive: true });
  console.log("✅ Desktop кадры скопированы в public/sequnceDesktop и public/sequenceDesktop");
}

if (existsSync(SRC_MOBILE)) {
  cpSync(SRC_MOBILE, PUB_MOBILE, { recursive: true });
  console.log("✅ Mobile кадры скопированы в public/sequenceMobile");
}

console.log("🎉 Все кадры теперь доступны как статические публичные файлы!");
