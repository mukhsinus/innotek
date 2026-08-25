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

export type AssemblyStep = {
  step: string;
  title: string;
  desc: string;
  image: string;
  annotations: { label: string; value: string; pos: string }[];
};

export type HomeCopy = {
  title: string;
  description: string;
  h1: string;
  heroLead: string;
  heroImage: string;
  assemblyHeading: HomeHeading;
  assemblyLead: string;
  assemblySteps: AssemblyStep[];
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
  racks: "/src/assets/images/2.jpg",
  retail: "/src/assets/images/ost6.jpeg",
  metal: "/src/assets/images/17.jpg",
  office: "/src/assets/images/25-2.jpg",
  conveyors: "/src/assets/images/40-969x1024.jpg",
  equipment: "/src/assets/images/1-13.jpg",
  rollers: "/src/assets/images/photo_2024-05-16_10-06-30.jpg",
} as const;

export const HOME: Record<Lang, HomeCopy> = {
  ru: {
    title: "Стеллажи в Ташкенте от производителя | Innotek",
    description:
      "Стеллажи в Ташкенте от производителя Innotek. Купить металлические стеллажи для склада, магазина и бизнеса по выгодной цене. Доставка и монтаж.",
    h1: "Стеллажи\nс завода.",
    heroLead: "Ташкент. Системы хранения для склада, магазина и производства.",
    heroImage: IMG.racks,
    assemblyHeading: { before: "Инженерная ", accent: "сборка стеллажа" },
    assemblyLead: "Поэтапная интеграция: от несущей стойки до предельной нагрузки на ярус.",
    assemblySteps: [
      {
        step: "01",
        title: "Несущая рама",
        desc: "Стойки профилируются из конструкционной стали ST 37 толщиной до 2.5 мм. Шаг перфорации 50 мм под любые типоразмеры.",
        image: "/src/assets/images/1-1.jpg",
        annotations: [
          { label: "Высота (H)", value: "до 14 000 мм", pos: "top-8 left-6" },
          { label: "Сталь", value: "ST 37 · 2.5 мм", pos: "bottom-8 left-6" },
        ],
      },
      {
        step: "02",
        title: "Фиксация балок",
        desc: "Продольные балки коробчатого сечения с зацепными замками и защитными фиксаторами от случайного выбивания погрузчиком.",
        image: "/src/assets/images/2-1.jpg",
        annotations: [
          { label: "Длина (L)", value: "1800 – 3600 мм", pos: "top-8 right-6" },
          { label: "Замок", value: "8-зацепной + шплинт", pos: "bottom-8 right-6" },
        ],
      },
      {
        step: "03",
        title: "Загрузка паллет",
        desc: "Готовая секция готова к размещению европаллет (EUR) и финпаллет (FIN) с гарантированной жесткостью по ISO 9001:2015.",
        image: "/src/assets/images/2.jpg",
        annotations: [
          { label: "Нагрузка", value: "до 4 500 кг / ярус", pos: "top-8 left-1/2 -translate-x-1/2" },
          { label: "Стандарт", value: "ISO 9001:2015", pos: "bottom-8 left-1/2 -translate-x-1/2" },
        ],
      },
    ],
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
    assemblyHeading: { before: "Muhandislik ", accent: "yig'ish jarayoni" },
    assemblyLead: "Bosqichma-bosqich integratsiya: ko'taruvchi ustundan tortib to'liq yuk ko'tarishgacha.",
    assemblySteps: [
      {
        step: "01",
        title: "Yuk ko'taruvchi rama",
        desc: "Ustunlar qalinligi 2.5 mm gacha bo'lgan ST 37 po'latidan tayyorlanadi. 50 mm teshilish qadami.",
        image: "/src/assets/images/1-1.jpg",
        annotations: [
          { label: "Balandlik (H)", value: "14 000 mm gacha", pos: "top-8 left-6" },
          { label: "Po'lat", value: "ST 37 · 2.5 mm", pos: "bottom-8 left-6" },
        ],
      },
      {
        step: "02",
        title: "Balkalarni mahkamlash",
        desc: "Ilgakli qulflar va himoya fiksatorlari bilan mustahkamlangan bo'ylama balkalar.",
        image: "/src/assets/images/2-1.jpg",
        annotations: [
          { label: "Uzunlik (L)", value: "1800 – 3600 mm", pos: "top-8 right-6" },
          { label: "Qulf", value: "8-ilgakli + shplint", pos: "bottom-8 right-6" },
        ],
      },
      {
        step: "03",
        title: "Palletalarni joylashtirish",
        desc: "ISO 9001:2015 bo'yicha kafolatlangan qattiqlik bilan yevropalletlar (EUR) va finpalletlar (FIN) uchun tayyor.",
        image: "/src/assets/images/2.jpg",
        annotations: [
          { label: "Yuklama", value: "4 500 kg / yarusgacha", pos: "top-8 left-1/2 -translate-x-1/2" },
          { label: "Standart", value: "ISO 9001:2015", pos: "bottom-8 left-1/2 -translate-x-1/2" },
        ],
      },
    ],
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
