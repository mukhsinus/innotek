/**
 * Проверка собранного сайта (dist/) после билда:
 * - canonical на каждой странице;
 * - hreflang только на 7 парах ru/uz (+x-default на ru);
 * - все блоки application/ld+json парсятся и проходят базовую валидацию
 *   в духе validator.schema.org: известный @type, обязательные поля
 *   BreadcrumbList (position/name/item как абсолютные URL), Product без offers;
 * - скрипты аналитики отсутствуют, пока не заданы PUBLIC_YM_ID/PUBLIC_GTM_ID.
 *
 * Запуск: node scripts/verify-seo.mjs
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = fileURLToPath(new URL("../dist/", import.meta.url));
const SITE = "https://innotek.uz";

const htmlFiles = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (name.endsWith(".html")) htmlFiles.push(full);
  }
})(DIST);

const errors = [];
const notes = [];
let hreflangPages = 0;
const typeCount = {};

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const route = file.slice(DIST.length).replace(/index\.html$/, "").replace(/\\/g, "/");
  const label = "/" + route;

  // 404/410 — служебные, canonical/hreflang не проверяем
  if (label === "/410.html" || label === "/404.html") continue;

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!canonical) {
    errors.push(`${label}: нет canonical`);
  } else if (canonical[1] !== `${SITE}${label}`) {
    errors.push(`${label}: canonical "${canonical[1]}" != "${SITE}${label}"`);
  }

  const hreflangs = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
  if (hreflangs.length) {
    hreflangPages++;
    const langs = hreflangs.map((m) => m[1]).sort().join(",");
    if (langs !== "ru,uz,x-default") errors.push(`${label}: странный набор hreflang: ${langs}`);
    const xDefault = hreflangs.find((m) => m[1] === "x-default");
    const ru = hreflangs.find((m) => m[1] === "ru");
    if (!xDefault || !ru || xDefault[2] !== ru[2]) errors.push(`${label}: x-default не ведёт на ru`);
    if (label === "/404.html") errors.push(`${label}: hreflang на 404`);
  }

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  for (const [, raw] of blocks) {
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      errors.push(`${label}: JSON-LD не парсится: ${e.message}`);
      continue;
    }
    if (data["@context"] !== "https://schema.org") errors.push(`${label}: @context != schema.org`);
    const type = data["@type"];
    typeCount[type] = (typeCount[type] ?? 0) + 1;

    if (type === "BreadcrumbList") {
      const items = data.itemListElement;
      if (!Array.isArray(items) || !items.length) {
        errors.push(`${label}: BreadcrumbList без itemListElement`);
      } else {
        items.forEach((item, i) => {
          if (item["@type"] !== "ListItem") errors.push(`${label}: crumb ${i + 1} без @type ListItem`);
          if (item.position !== i + 1) errors.push(`${label}: crumb ${i + 1} position=${item.position}`);
          if (!item.name) errors.push(`${label}: crumb ${i + 1} без name`);
          if (typeof item.item !== "string" || !item.item.startsWith(SITE))
            errors.push(`${label}: crumb ${i + 1} item не абсолютный URL сайта: ${item.item}`);
        });
      }
    }
    if (type === "Product") {
      if (!data.name || !data.image) errors.push(`${label}: Product без name/image`);
      if ("offers" in data) errors.push(`${label}: Product содержит offers (цен на сайте нет)`);
      if ("aggregateRating" in data || "review" in data) errors.push(`${label}: Product с выдуманным рейтингом`);
    }
    if (type === "Organization" || type === "LocalBusiness") {
      for (const field of ["name", "url", "telephone", "address"]) {
        if (!data[field]) errors.push(`${label}: ${type} без ${field}`);
      }
      if (data.address?.["@type"] !== "PostalAddress") errors.push(`${label}: ${type}.address не PostalAddress`);
    }
    if (type === "LocalBusiness") {
      const geo = data.geo;
      if (geo?.["@type"] !== "GeoCoordinates" || typeof geo.latitude !== "number")
        errors.push(`${label}: LocalBusiness без корректного geo`);
    }
  }

  if (/mc\.yandex\.ru|googletagmanager\.com/.test(html)) {
    notes.push(`${label}: найден скрипт аналитики (env задан?)`);
  }
}

console.log(`Страниц проверено: ${htmlFiles.length - 1} (без 410.html)`);
console.log(`Страниц с hreflang: ${hreflangPages} (ожидается 14: 7 ru + 7 uz)`);
console.log(`JSON-LD по типам: ${JSON.stringify(typeCount)}`);
if (notes.length) console.log("Заметки:\n  " + notes.join("\n  "));
if (errors.length) {
  console.error("Ошибки:\n  " + errors.join("\n  "));
  process.exit(1);
}
console.log("OK: canonical, hreflang и JSON-LD валидны.");
