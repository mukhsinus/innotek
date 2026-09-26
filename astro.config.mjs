// @ts-check
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { netlifyImagesDev } from "./image-dev.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));

/**
 * Статическая генерация, русский без префикса, узбекский — /uz/.
 * Fallback на ru для отсутствующих uz-страниц НЕ включаем:
 * узбекские URL без перевода не должны существовать.
 */
export default defineConfig({
  site: "https://innotek.uz",
  trailingSlash: "always",
  output: "static",
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "uz"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [netlifyImagesDev(path.join(root, "public")), tailwindcss()],
  },
});
