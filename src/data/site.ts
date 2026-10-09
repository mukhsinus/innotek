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
    /** Части той же строки адреса — для schema.org PostalAddress. */
    street: { ru: "массив Жангох 2аБ", uz: "Jangoh 2aB massivi" },
    locality: { ru: "Ташкент", uz: "Toshkent" },
    postalCode: "100128",
    country: "UZ",
  },
  mapsUrl:
    "https://maps.google.com/maps?cid=14800132729307474564",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1497.9872814196726!2d69.25151702750858!3d41.33116649016305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7ab210e081%3A0xcd64a24d87012a84!2zODdKMitGUFIsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2str!4v1791549999891!5m2!1sru!2str",
  mapsLat: 41.3311577,
  mapsLng: 69.2516676,
  /** Статическая карта (не iframe) — OSM; клик ведёт на Google Maps из content/. */
  mapsImage:
    "https://staticmap.openstreetmap.de/staticmap.php?center=41.3311577,69.2516676&zoom=17&size=1200x640&maptype=mapnik&markers=41.3311577,69.2516676,red-pushpin",
  socials: {
    facebook: "https://m.facebook.com/innotekinvest.uz/",
    instagram: "https://www.instagram.com/innotek_invest/",
    telegram: "https://t.me/Innotek_invest",
  },
  hours: {
    weekdays: "9:00–18:00",
    days: "Пн–Пт",
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
