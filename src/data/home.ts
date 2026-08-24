/**
 * Тексты главной — короткие. SEO-абзацы сюда не переносятся.
 * Цифры только из content/: 8 лет, 5 линий, 0,2–6 мм.
 */
import type { Lang, UiKey } from "../i18n/ui";

export type HomeCategory = {
  path: string;
  labelKey: UiKey;
  image: string;
  featured?: boolean;
};

export type HomeCase = {
  image: string;
  labelKey: UiKey;
};

export type HomeHeading = {
  before: string;
  accent: string;
};

export type HomeCopy = {
  title: string;
  description: string;
  h1: string;
  heroLead: string;
  heroImage: string;
  catalogLead: string;
  catalogHeading: HomeHeading;
  categories: HomeCategory[];
  productionHeading: HomeHeading;
  productionLead: string;
  casesHeading: HomeHeading;
  casesLead: string;
  cases: HomeCase[];
  ctaHeading: HomeHeading;
  ctaLead: string;
  marquee: string;
};

const IMG = {
  racks: "https://innotek.uz/wp-content/uploads/2023/10/2.jpg",
  retail: "https://innotek.uz/wp-content/uploads/2023/08/ost6.jpeg",
  metal: "https://innotek.uz/wp-content/uploads/2023/10/17.jpg",
  office: "https://innotek.uz/wp-content/uploads/2023/10/25-2.jpg",
  conveyors: "https://innotek.uz/wp-content/uploads/2023/10/40-969x1024.jpg",
  equipment: "https://innotek.uz/wp-content/uploads/2024/05/Снимок-экрана-2024-05-03-163152.png",
  rollers: "https://innotek.uz/wp-content/uploads/2024/01/rolik.png",
} as const;

export const HOME: Record<Lang, HomeCopy> = {
  ru: {
    title: "Стеллажи в Ташкенте от производителя | Innotek",
    description:
      "Стеллажи в Ташкенте от производителя Innotek. Купить металлические стеллажи для склада, магазина и бизнеса по выгодной цене. Доставка и монтаж.",
    h1: "Стеллажи\nс завода.",
    heroLead: "Ташкент. Системы хранения для склада, магазина и производства.",
    heroImage: IMG.racks,
    catalogLead: "Склад, магазин, производство.",
    catalogHeading: { before: "", accent: "Каталог" },
    categories: [
      { path: "/catalog/stellazhi/", labelKey: "nav.racks", image: IMG.racks, featured: true },
      { path: "/catalog/torgovye-stellazhi/", labelKey: "nav.retail", image: IMG.retail },
      { path: "/catalog/ofisnaya-mebel/", labelKey: "nav.office", image: IMG.office },
      { path: "/catalog/metallicheskaya-mebel/", labelKey: "nav.metalFurniture", image: IMG.metal },
      { path: "/catalog/konvejernye-linii/", labelKey: "nav.conveyors", image: IMG.conveyors },
      { path: "/catalog/oborudovanie/", labelKey: "nav.equipment", image: IMG.equipment },
      { path: "/catalog/roliki/", labelKey: "nav.rollers", image: IMG.rollers },
    ],
    productionHeading: { before: "Наше ", accent: "производство" },
    productionLead: "Пять автоматических линий. Сталь толщиной 0,2–6 мм.",
    casesHeading: { before: "", accent: "Кейсы" },
    casesLead: "Как производятся и устанавливаются стеллажные системы.",
    cases: [
      { image: IMG.racks, labelKey: "nav.racks" },
      { image: IMG.retail, labelKey: "nav.retail" },
      { image: IMG.conveyors, labelKey: "nav.conveyors" },
    ],
    ctaHeading: { before: "Рассчитать ", accent: "проект." },
    ctaLead: "Подберём конфигурацию и организуем поставку.",
    marquee: "стеллажи · мезонины · конвейеры · монтаж · ",
  },
  uz: {
    title: "Toshkentda stelajlar sotib olish | Innotek",
    description:
      "Toshkentda Innotek ishlab chiqaruvchisidan stelajlar. Ombor, do‘kon va biznes uchun metall stelajlarni qulay narxda sotib oling. Yetkazib berish va o‘rnatish xizmati mavjud.",
    h1: "Stelajlar\nzavoddan.",
    heroLead: "Toshkent. Ombor, do‘kon va ishlab chiqarish uchun saqlash tizimlari.",
    heroImage: IMG.racks,
    catalogLead: "Ombor, do‘kon, ishlab chiqarish.",
    catalogHeading: { before: "", accent: "Katalog" },
    categories: [
      { path: "/catalog/stellazhi/", labelKey: "nav.racks", image: IMG.racks, featured: true },
      { path: "/catalog/torgovye-stellazhi/", labelKey: "nav.retail", image: IMG.retail },
      { path: "/catalog/ofisnaya-mebel/", labelKey: "nav.office", image: IMG.office },
      { path: "/catalog/metallicheskaya-mebel/", labelKey: "nav.metalFurniture", image: IMG.metal },
      { path: "/catalog/konvejernye-linii/", labelKey: "nav.conveyors", image: IMG.conveyors },
      { path: "/catalog/oborudovanie/", labelKey: "nav.equipment", image: IMG.equipment },
      { path: "/catalog/roliki/", labelKey: "nav.rollers", image: IMG.rollers },
    ],
    productionHeading: { before: "Bizning ", accent: "ishlab chiqarish" },
    productionLead: "Besh avtomatik liniya. Po‘lat qalinligi 0,2–6 mm.",
    casesHeading: { before: "", accent: "Keys" },
    casesLead: "Stelaj tizimlari qanday ishlab chiqariladi va o‘rnatiladi.",
    cases: [
      { image: IMG.racks, labelKey: "nav.racks" },
      { image: IMG.retail, labelKey: "nav.retail" },
      { image: IMG.conveyors, labelKey: "nav.conveyors" },
    ],
    ctaHeading: { before: "Loyihani ", accent: "hisoblang." },
    ctaLead: "Konfiguratsiyani tanlab, yetkazib berishni tashkil qilamiz.",
    marquee: "stelajlar · mezoninlar · konveyerlar · montaj · ",
  },
};

export const HOME_STATS = {
  years: 8,
  lines: 5,
  thickness: "0,2–6",
} as const;
