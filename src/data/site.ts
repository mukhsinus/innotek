/**
 * Факты о компании — только из content/ (contact-us.md, карточки товаров, index.md).
 * Ничего не выдумываем: пустые поля оставляем TODO на страницах, не здесь.
 */

export const SITE = {
  name: "Innotek",
  legalName: "Иннотек Инвест",
  url: "https://innotek.uz",
  email: "info@innotek.uz",
  /** Основной городской номер с главной и карточек. */
  phone: {
    display: "+998 71 200 50 51",
    tel: "+998712005051",
  },
  /** Мобильные с страницы контактов. */
  mobiles: [
    { display: "+998 99 863 50 50", tel: "+998998635050" },
    { display: "+998 99 864 50 50", tel: "+998998645050" },
    { display: "+998 99 958 50 50", tel: "+998999585050" },
    { display: "+998 99 954 50 50", tel: "+998999545050" },
  ],
  address: {
    ru: "Иннотек Инвест, массив Жангох 2аБ, 100128, Ташкент",
    uz: "Innotek Invest, Jangoh 2aB massivi, 100128, Toshkent",
  },
  mapsUrl:
    "https://www.google.com/maps/place/Innotek+Invest/@41.3300559,69.2501784,19z",
  mapsLat: 41.3300559,
  mapsLng: 69.2501784,
  hours: {
    ru: "9:00–18:00 (Пн–Пт). Сб, Вс и праздничные дни — закрыто",
    uz: "9:00–18:00 (Du–Ju). Shanba, yakshanba va bayramlar — yopiq",
  },
  socials: {
    facebook: "https://m.facebook.com/innotekinvest.uz/",
    instagram: "https://www.instagram.com/innotek_invest/",
    telegram: "https://t.me/Innotek_invest",
    youtube: "https://www.youtube.com/@innotek_invest",
  },
} as const;

/**
 * Пути, для которых есть готовый узбекский текст (8 исходных файлов → 7 канонических URL).
 * Языковой переключатель и hreflang опираются только на этот список.
 */
export const UZ_PATHS = new Set<string>([
  "/",
  "/catalog/stellazhi/",
  "/catalog/stellazhi/palletnye-stellazhi/",
  "/catalog/stellazhi/palletno-polochnye-stellazhi/",
  "/catalog/stellazhi/nabivnye-stellazhi/",
  "/services/",
  "/services/pokraska-metalla/",
]);
