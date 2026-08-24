import type { UiKey } from "../i18n/ui";

export type NavLink = {
  /** Ключ подписи в i18n/ui.ts */
  labelKey: UiKey;
  path: string;
  children?: NavLink[];
};

/** Дерево каталога — 3 уровня URL, как утверждено. */
export const catalogNav: NavLink[] = [
  {
    labelKey: "nav.racks",
    path: "/catalog/stellazhi/",
    children: [
      { labelKey: "product.pallet", path: "/catalog/stellazhi/palletnye-stellazhi/" },
      { labelKey: "product.palletShelf", path: "/catalog/stellazhi/palletno-polochnye-stellazhi/" },
      { labelKey: "product.driveIn", path: "/catalog/stellazhi/nabivnye-stellazhi/" },
      { labelKey: "product.cantilever", path: "/catalog/stellazhi/konsolnye-stellazhi/" },
      { labelKey: "product.mezzanine", path: "/catalog/stellazhi/mezoninnye-stellazhi/" },
      { labelKey: "product.mould", path: "/catalog/stellazhi/stellazhi-dlya-pressform/" },
      { labelKey: "product.library", path: "/catalog/stellazhi/stellazhi-dlya-bibliotek/" },
      { labelKey: "product.cable", path: "/catalog/stellazhi/kabelnye-stellazhi/" },
      { labelKey: "product.selfSupporting", path: "/catalog/stellazhi/samonesushchie-stellazhi/" },
      { labelKey: "product.smart", path: "/catalog/stellazhi/smart-stellazhi/" },
    ],
  },
  {
    labelKey: "nav.retail",
    path: "/catalog/torgovye-stellazhi/",
    children: [
      { labelKey: "product.wall", path: "/catalog/torgovye-stellazhi/pristennye-stellazhi/" },
      { labelKey: "product.island", path: "/catalog/torgovye-stellazhi/ostrovnye-stellazhi/" },
    ],
  },
  {
    labelKey: "nav.office",
    path: "/catalog/ofisnaya-mebel/",
    children: [
      { labelKey: "product.desks", path: "/catalog/ofisnaya-mebel/stoly/" },
      { labelKey: "product.chairs", path: "/catalog/ofisnaya-mebel/stulya/" },
    ],
  },
  {
    labelKey: "nav.metalFurniture",
    path: "/catalog/metallicheskaya-mebel/",
    children: [
      { labelKey: "product.cabinets", path: "/catalog/metallicheskaya-mebel/shkafy-dlya-ofisa/" },
      { labelKey: "product.lockers", path: "/catalog/metallicheskaya-mebel/mebel-dlya-razdevalok/" },
      { labelKey: "product.workshop", path: "/catalog/metallicheskaya-mebel/mebel-dlya-proizvodstva/" },
    ],
  },
  {
    labelKey: "nav.conveyors",
    path: "/catalog/konvejernye-linii/",
    children: [
      { labelKey: "product.rollerConv", path: "/catalog/konvejernye-linii/rolikovye-konvejery/" },
      { labelKey: "product.beltConv", path: "/catalog/konvejernye-linii/lentochnye-konvejery/" },
      { labelKey: "product.assembly", path: "/catalog/konvejernye-linii/sborochnye-linii/" },
    ],
  },
  { labelKey: "nav.equipment", path: "/catalog/oborudovanie/" },
  { labelKey: "nav.rollers", path: "/catalog/roliki/" },
];

export const servicesNav: NavLink[] = [
  { labelKey: "service.install", path: "/services/montazh-demontazh/" },
  { labelKey: "service.paint", path: "/services/pokraska-metalla/" },
  { labelKey: "service.clean", path: "/services/chistka-metalla/" },
  { labelKey: "service.design", path: "/services/proektirovanie/" },
];

export const primaryNav: NavLink[] = [
  { labelKey: "nav.catalog", path: "/catalog/", children: catalogNav },
  { labelKey: "nav.about", path: "/about/" },
  { labelKey: "nav.services", path: "/services/", children: servicesNav },
  { labelKey: "nav.video", path: "/video/" },
  { labelKey: "nav.contacts", path: "/contacts/" },
];
