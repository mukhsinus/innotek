/**
 * Генератор public/_redirects из urls.csv (шаг 7).
 *
 * - 301 со всех старых живых URL на новые адреса. Кириллические пути пишем
 *   в трёх вариантах: декодированный, percent-encoded (lower/upper hex) —
 *   поведение CDN по декодированию пути перед матчингом не задокументировано,
 *   поэтому покрываем оба.
 * - 301 для схлопнутых дублей (palletnie-stellaji-2/-3, stellaji-dlya-bibliotek-2,
 *   оборудование-и-металлоконструкции-2, about-us-v2, uz/service/metallni-boyash-2).
 * - 410 для демо-мусора темы: посты 2020, теги, рубрики, layout'ы, careers,
 *   gallery и пр. — отдаём public/410.html со статусом 410.
 *
 * Запуск: node scripts/generate-redirects.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";

const csv = readFileSync(new URL("../urls.csv", import.meta.url), "utf8");

/** Декодированный путь → канонический новый путь. */
const REDIRECTS = new Map([
  // --- кириллические URL исходника → карточки каталога ---
  ["/въездные-набивные/", "/catalog/stellazhi/nabivnye-stellazhi/"],
  ["/кабельные-стеллажи/", "/catalog/stellazhi/kabelnye-stellazhi/"],
  ["/конвейерные-линии/", "/catalog/konvejernye-linii/"],
  ["/консольные/", "/catalog/stellazhi/konsolnye-stellazhi/"],
  ["/ленточные-конвейеры/", "/catalog/konvejernye-linii/lentochnye-konvejery/"],
  ["/мебель-для-производства/", "/catalog/metallicheskaya-mebel/mebel-dlya-proizvodstva/"],
  ["/мебель-для-раздевалок/", "/catalog/metallicheskaya-mebel/mebel-dlya-razdevalok/"],
  ["/мезонинные/", "/catalog/stellazhi/mezoninnye-stellazhi/"],
  ["/металлическая-мебель/", "/catalog/metallicheskaya-mebel/"],
  ["/оборудование-и-металлоконструкции/", "/catalog/oborudovanie/"],
  ["/оборудование-и-металлоконструкции-2/", "/catalog/oborudovanie/"], // схлопнутый дубль
  ["/островные-стеллажи/", "/catalog/torgovye-stellazhi/ostrovnye-stellazhi/"],
  ["/офисная-мебель/", "/catalog/ofisnaya-mebel/"],
  ["/паллетные-стеллажи/", "/catalog/stellazhi/palletnye-stellazhi/"],
  ["/паллето-полочные-стеллажи/", "/catalog/stellazhi/palletno-polochnye-stellazhi/"],
  // приставные секции — часть островных линий, отдельной карточки нет
  ["/приставные-стеллажи/", "/catalog/torgovye-stellazhi/ostrovnye-stellazhi/"],
  ["/производственные-сборочные-линии/", "/catalog/konvejernye-linii/sborochnye-linii/"],
  ["/ролики/", "/catalog/roliki/"],
  ["/роликовые-конвейеры/", "/catalog/konvejernye-linii/rolikovye-konvejery/"],
  ["/самонесущие-стеллажи/", "/catalog/stellazhi/samonesushchie-stellazhi/"],
  ["/стеллаж-для-прессформ/", "/catalog/stellazhi/stellazhi-dlya-pressform/"],
  ["/столы/", "/catalog/ofisnaya-mebel/stoly/"],
  ["/стулья/", "/catalog/ofisnaya-mebel/stulya/"],
  ["/товары/", "/catalog/"],
  ["/торговые-стеллажи/", "/catalog/torgovye-stellazhi/"],
  ["/шкафы-для-офиса/", "/catalog/metallicheskaya-mebel/shkafy-dlya-ofisa/"],

  // --- латинские URL исходника → SEO-посадки и каталог ---
  ["/gravitatsionnie-stellaji/", "/gravitatsionnye-stellazhi/"],
  ["/metalliceskie-stellaji/", "/catalog/stellazhi/"],
  ["/mezonin-stellaj/", "/mezoninnye-stellazhi/"],
  ["/ofisnie-stellaji/", "/ofisnye-stellazhi/"],
  ["/palletnie-stellaji-2/", "/palletnye-stellazhi/"], // схлопнутый дубль
  ["/palletnie-stellaji-3/", "/palletnye-stellazhi/"], // схлопнутый дубль
  ["/perforirovannie-stellaji/", "/perforirovannye-stellazhi/"],
  ["/pristennie-stellaji/", "/catalog/torgovye-stellazhi/pristennye-stellazhi/"],
  ["/promishlennie-stellaji/", "/promyshlennye-stellazhi/"],
  ["/stellaji-dlya-bibliotek/", "/stellazhi-dlya-bibliotek/"],
  ["/stellaji-dlya-bibliotek-2/", "/stellazhi-dlya-bibliotek/"], // схлопнутый дубль
  ["/stellaji-dlya-magazina/", "/stellazhi-dlya-magazina/"],
  ["/stellaji-dlya-odejdi/", "/stellazhi-dlya-odezhdy/"],
  ["/stellaji-dlya-sklada/", "/stellazhi-dlya-sklada/"],
  ["/stellaji-dlya-xraneniya/", "/stellazhi-dlya-hraneniya/"],
  ["/stellaji/", "/stellazhi/"],
  ["/service/", "/services/"],
  ["/service/chistka-metalla/", "/services/chistka-metalla/"],
  ["/service/pokraska-metalla/", "/services/pokraska-metalla/"],
  ["/contact-us/", "/contacts/"],
  ["/get-in-touch/", "/contacts/"],
  ["/about-us-v2/", "/about/"], // схлопнутый дубль «О компании»

  // --- узбекская версия ---
  ["/uz/drive-in-nabiv-stelajlar/", "/uz/catalog/stellazhi/nabivnye-stellazhi/"],
  ["/uz/metall-stelajlar/", "/uz/catalog/stellazhi/"],
  ["/uz/pallet-polokali-stelajlar/", "/uz/catalog/stellazhi/palletno-polochnye-stellazhi/"],
  ["/uz/pallet-stelajlari/", "/uz/catalog/stellazhi/palletnye-stellazhi/"],
  ["/uz/service/", "/uz/services/"],
  ["/uz/service/metallni-boyash/", "/uz/services/pokraska-metalla/"],
  ["/uz/service/metallni-boyash-2/", "/uz/services/pokraska-metalla/"], // схлопнутый дубль
]);

/** Демо-мусор темы: целые ветки закрываем splat'ами. */
const GONE_SPLATS = ["/2020/*", "/author/*", "/category/*", "/tag/*"];

/** Демо-мусор темы: одиночные страницы. */
const GONE_PAGES = [
  "/14292-2/", // пустой черновик без заголовка
  "/shop/", // пустая витрина WooCommerce
  "/blog-full-width/",
  "/blog-masonry/",
  "/blog-sidebar/",
  "/careers/",
  "/cart/",
  "/ceo-company/",
  "/checkout/",
  "/coming-soon/",
  "/company-history/",
  "/gallery/",
  "/help-faqs/",
  "/home-layout-1/",
  "/home-layout-2/",
  "/home-layout-3/",
  "/home-layout-4/",
  "/home-layout-6/",
  "/landing-page/",
  "/locations/",
  "/my-account/",
  "/newsletter/",
  "/our-process/",
  "/our-services/",
  "/our-team/",
  "/package-and-price/",
  "/partners-clients/",
  "/project-grid-layout-1/",
  "/project-grid-layout-2/",
  "/project-masonry/",
  "/sustainability/",
];

/** URL совпадают со старыми — правила не нужны, страницы отдаёт CDN напрямую. */
const UNCHANGED = new Set(["/", "/about/", "/video/", "/uz/"]);

/** Пути, которых не было в urls.csv, но которые закрываем на всякий случай. */
const EXTRA_GONE = [];

// --- сборка и самопроверка покрытия urls.csv ---

const rows = csv
  .split(/\r?\n/)
  .slice(1)
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => line.slice(0, line.indexOf(",")));

const covered = (path) =>
  UNCHANGED.has(path) ||
  REDIRECTS.has(path) ||
  GONE_PAGES.includes(path) ||
  GONE_SPLATS.some((splat) => path.startsWith(splat.slice(0, -1)));

const missed = [];
for (const url of rows) {
  const path = decodeURIComponent(new URL(url).pathname);
  if (!covered(path)) missed.push(path);
}
if (missed.length) {
  console.error("Нет правила для URL из urls.csv:");
  for (const p of missed) console.error("  " + p);
  process.exit(1);
}

const variants = (path) => {
  if (!/[^\x00-\x7F]/.test(path)) return [path];
  const upper = encodeURIComponent(path).replace(/%2F/g, "/");
  const lower = upper.replace(/%[0-9A-F]{2}/g, (m) => m.toLowerCase());
  return [path, lower, upper];
};

const lines = [
  "# Сгенерировано scripts/generate-redirects.mjs из urls.csv — не править вручную.",
  "# 301: старые живые URL -> новые. Кириллица: декодированный + percent-encoded (lower/upper).",
  "",
];

for (const [from, to] of REDIRECTS) {
  for (const variant of variants(from)) {
    lines.push(`${variant}  ${to}  301`);
  }
}

lines.push("", "# 410: демо-мусор темы (посты 2020, теги, рубрики, layout'ы и пр.).", "");
for (const splat of [...GONE_SPLATS]) lines.push(`${splat}  /410.html  410`);
for (const page of [...GONE_PAGES, ...EXTRA_GONE]) {
  for (const variant of variants(page)) lines.push(`${variant}  /410.html  410`);
}
lines.push("");

writeFileSync(new URL("../public/_redirects", import.meta.url), lines.join("\n"), "utf8");
console.log(
  `_redirects: ${REDIRECTS.size} 301-правил (${lines.filter((l) => l.endsWith("301")).length} строк), ` +
    `${GONE_SPLATS.length + GONE_PAGES.length} 410-правил. Покрыто URL из urls.csv: ${rows.length}.`,
);
