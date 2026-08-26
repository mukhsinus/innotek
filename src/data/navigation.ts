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
      { labelKey: "product.heavyDuty", path: "/catalog/stellazhi/tyazhelogruzovye-stellazhi/" },
      { labelKey: "product.palletFlow", path: "/catalog/stellazhi/gravitacionnye-stellazhi/" },
      { labelKey: "product.shuttle", path: "/catalog/stellazhi/shuttle-stellazhi/" },
      { labelKey: "product.cantilever", path: "/catalog/stellazhi/konsolnye-stellazhi/" },
      { labelKey: "product.mezzanine", path: "/catalog/stellazhi/mezoninnye-stellazhi/" },
      { labelKey: "product.mould", path: "/catalog/stellazhi/stellazhi-dlya-pressform/" },
      { labelKey: "product.archive", path: "/catalog/stellazhi/arhivnye-stellazhi/" },
      { labelKey: "product.mobile", path: "/catalog/stellazhi/peredvizhnye-mobilnye-stellazhi/" },
      { labelKey: "product.library", path: "/catalog/stellazhi/stellazhi-dlya-bibliotek/" },
      { labelKey: "product.cable", path: "/catalog/stellazhi/kabelnye-stellazhi/" },
      { labelKey: "product.selfSupporting", path: "/catalog/stellazhi/samonesushchie-stellazhi/" },
      { labelKey: "product.smart", path: "/catalog/stellazhi/smart-stellazhi/" },
    ],
  },
  {
    labelKey: "nav.platforms",
    path: "/catalog/metallicheskie-platformy/",
    children: [
      { labelKey: "product.industrialPlatforms", path: "/catalog/metallicheskie-platformy/promyshlennye-platformy/" },
      { labelKey: "product.techPlatforms", path: "/catalog/metallicheskie-platformy/tehnologicheskie-platformy/" },
      { labelKey: "product.equipPlatforms", path: "/catalog/metallicheskie-platformy/platformy-dlya-oborudovaniya/" },
      { labelKey: "product.servicePlatforms", path: "/catalog/metallicheskie-platformy/obsluzhivayushchie-platformy/" },
      { labelKey: "product.workPlatforms", path: "/catalog/metallicheskie-platformy/rabochie-ploshchadki/" },
      { labelKey: "product.multiLevelPlatforms", path: "/catalog/metallicheskie-platformy/mnogourovnevye-platformy/" },
    ],
  },
  {
    labelKey: "nav.trolleys",
    path: "/catalog/telezhki/",
    children: [
      { labelKey: "product.platformTrolleys", path: "/catalog/telezhki/platformennye-telezhki/" },
      { labelKey: "product.meshTrolleys", path: "/catalog/telezhki/setchatye-telezhki/" },
      { labelKey: "product.twoTierTrolleys", path: "/catalog/telezhki/dvuhyarusnye-telezhki/" },
      { labelKey: "product.multiTierTrolleys", path: "/catalog/telezhki/mnogoyarusnye-telezhki/" },
      { labelKey: "product.orderPickingTrolleys", path: "/catalog/telezhki/telezhki-dlya-komplektacii-zakazov/" },
      { labelKey: "product.toolTrolleys", path: "/catalog/telezhki/instrumentalnye-telezhki/" },
      { labelKey: "product.productionTrolleys", path: "/catalog/telezhki/proizvodstvennye-telezhki/" },
      { labelKey: "product.longLoadTrolleys", path: "/catalog/telezhki/telezhki-dlya-dlinnomernyh-gruzov/" },
    ],
  },
  {
    labelKey: "nav.warehouseTech",
    path: "/catalog/skladskaya-tehnika/",
    children: [
      { labelKey: "product.palletJack", path: "/catalog/skladskaya-tehnika/ruchnaya-gidravlicheskaya-telezhka-rohli/" },
      { labelKey: "product.electricPalletTruck", path: "/catalog/skladskaya-tehnika/samohodnaya-elektricheskaya-telezhka/" },
      { labelKey: "product.manualStacker", path: "/catalog/skladskaya-tehnika/shtabeler-ruchnoj-gidravlicheskij/" },
      { labelKey: "product.semiElectricStacker", path: "/catalog/skladskaya-tehnika/shtabeler-polu-elektricheskij/" },
      { labelKey: "product.electricStacker", path: "/catalog/skladskaya-tehnika/shtabeler-elektricheskij/" },
      { labelKey: "product.heavyElectricStacker", path: "/catalog/skladskaya-tehnika/tyazhelyj-shtabeler-elektricheskij/" },
      { labelKey: "product.reachTruck", path: "/catalog/skladskaya-tehnika/elektricheskij-uzkoprohodnyj-richtrak/" },
      { labelKey: "product.forklift", path: "/catalog/skladskaya-tehnika/elektricheskij-vilochnyj-pogruzchik-forklift/" },
      { labelKey: "product.hydraulicLiftTable", path: "/catalog/skladskaya-tehnika/gidravlicheskij-podemnyj-stol/" },
    ],
  },
  {
    labelKey: "nav.cargoLifts",
    path: "/catalog/lift-gruzovoj/",
    children: [
      { labelKey: "product.hydraulicCargoLift", path: "/catalog/lift-gruzovoj/gidravlicheskij-gruzovoj-lift/" },
      { labelKey: "product.electricCargoLift", path: "/catalog/lift-gruzovoj/elektricheskij-gruzovoj-lift/" },
      { labelKey: "product.cargoLiftPlatform", path: "/catalog/lift-gruzovoj/podemnaya-platforma/" },
      { labelKey: "product.shaftCargoLift", path: "/catalog/lift-gruzovoj/shahtnyj-gruzovoj-lift/" },
    ],
  },
  {
    labelKey: "nav.dockLevelers",
    path: "/catalog/doklevellery/",
    children: [
      { labelKey: "product.hydraulicDockLeveler", path: "/catalog/doklevellery/gidravlicheskij-dokleveller/" },
      { labelKey: "product.electroHydraulicDockLeveler", path: "/catalog/doklevellery/elektrogidravlicheskij-dokleveller/" },
      { labelKey: "product.mechanicalDockLeveler", path: "/catalog/doklevellery/mehanicheskij-dokleveller/" },
      { labelKey: "product.swingLipDockLeveler", path: "/catalog/doklevellery/povorotnyj-dokleveller/" },
      { labelKey: "product.telescopicDockLeveler", path: "/catalog/doklevellery/teleskopicheskij-dokleveller/" },
      { labelKey: "product.verticalDockLeveler", path: "/catalog/doklevellery/vertikalnyj-dokleveller/" },
    ],
  },
  {
    labelKey: "nav.loadingRamps",
    path: "/catalog/pogruzochnye-rampy/",
    children: [
      { labelKey: "product.mobileRamps", path: "/catalog/pogruzochnye-rampy/mobilnye-pogruzochnye-rampy/" },
      { labelKey: "product.stationaryRamps", path: "/catalog/pogruzochnye-rampy/stacionarnye-rampy/" },
      { labelKey: "product.hydraulicRamps", path: "/catalog/pogruzochnye-rampy/gidravlicheskie-rampy/" },
      { labelKey: "product.mobileFlyovers", path: "/catalog/pogruzochnye-rampy/peredvizhnye-estakady/" },
    ],
  },
  {
    labelKey: "nav.warehouseAuto",
    path: "/catalog/avtomatizaciya-sklada/",
    children: [
      { labelKey: "product.asrsPallet", path: "/catalog/avtomatizaciya-sklada/palletnye-as-rs-sistemy/" },
      { labelKey: "product.asrsMiniLoad", path: "/catalog/avtomatizaciya-sklada/mini-load-sistemy/" },
      { labelKey: "product.asrsShuttle", path: "/catalog/avtomatizaciya-sklada/shuttle-sistemy/" },
      { labelKey: "product.stackerCrane", path: "/catalog/avtomatizaciya-sklada/stacker-crane-sistemy/" },
      { labelKey: "product.vlm", path: "/catalog/avtomatizaciya-sklada/vertical-lift-module-vlm/" },
      { labelKey: "product.carouselSystems", path: "/catalog/avtomatizaciya-sklada/carousel-sistemy/" },
      { labelKey: "product.sortingSystem", path: "/catalog/avtomatizaciya-sklada/sortirovochnaya-sistema/" },
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
  { labelKey: "service.laserCutting", path: "/services/lazernaya-rezka-metalla/" },
  { labelKey: "service.sheetBending", path: "/services/gibka-listovogo-metalla/" },
  { labelKey: "service.stamping", path: "/services/shtampovka-metalla/" },
  { labelKey: "service.rollForming", path: "/services/profilirovanie-metalla/" },
  { labelKey: "service.sheetRolling", path: "/services/valcovka-metalla/" },
  { labelKey: "service.welding", path: "/services/svarochnye-raboty/" },
  { labelKey: "service.roboticWelding", path: "/services/robotizirovannaya-svarka/" },
  { labelKey: "service.turning", path: "/services/tokarnaya-obrabotka/" },
  { labelKey: "service.milling", path: "/services/frezernaya-obrabotka/" },
  { labelKey: "service.grinding", path: "/services/shlifovka-metalla/" },
  { labelKey: "service.metalStructures", path: "/services/izgotovlenie-metallokonstrukcij/" },
  { labelKey: "service.designAndCalc", path: "/services/proektirovanie-i-raschet/" },
  { labelKey: "service.perforation", path: "/services/perforaciya-metalla/" },
  { labelKey: "service.customFabrication", path: "/services/izgotovlenie-po-chertezham/" },
];

export const primaryNav: NavLink[] = [
  { labelKey: "nav.catalog", path: "/catalog/", children: catalogNav },
  { labelKey: "nav.about", path: "/about/" },
  { labelKey: "nav.services", path: "/services/", children: servicesNav },
  { labelKey: "nav.video", path: "/video/" },
  { labelKey: "nav.contacts", path: "/contacts/" },
];
