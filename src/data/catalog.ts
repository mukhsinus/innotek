import type { UiKey } from "../i18n/ui";
import type { FaqItem, SpecRow } from "./examples";

export type { FaqItem, SpecRow };

export type CatalogProductCard = {
  path: string;
  labelKey: UiKey;
  image?: string;
  excerpt?: string;
};

export type CatalogCategory = {
  slug: string;
  path: string;
  labelKey: UiKey;
  title: string;
  description: string;
  h1: string;
  lead: string;
  image?: string;
  body?: string[];
  /** Общеизвестные факты, не из content/. В разметке: <!-- AI-текст, проверить --> */
  aiBody?: string[];
  specs?: SpecRow[];
  features?: string[];
  embedQuote?: boolean;
  ctaCatalog?: { path: string; label: string };
  todo?: boolean;
  products: CatalogProductCard[];
  seo?: {
    heading: string;
    paragraphs: string[];
    faqs: FaqItem[];
  };
};

export type CatalogProduct = {
  slug: string;
  categorySlug: string;
  path: string;
  parentPath: string;
  parentLabelKey: UiKey;
  labelKey: UiKey;
  title: string;
  description: string;
  h1: string;
  lead: string;
  images: string[];
  specs: SpecRow[];
  features: string[];
  todo?: boolean;
};

const CERT = "O'z DSt ISO 9001:2015";

const SPEC_RACK: SpecRow[] = [
  { key: "Материал", value: "ST 37" },
  { key: "Цвет", value: "Рама RAL 5005 · Балка RAL 2004. Под заказ — по коду RAL." },
  { key: "Стойка", value: "70/90 × 1.5 / 1.8 / 2.0 / 2.5 mm" },
  { key: "Балка", value: "40×60 / 40×80 / 50×100 / 40×120 / 50×140 / 50×190 × 1.5/2.0 mm" },
  { key: "Высота", value: "По высоте склада" },
  { key: "Применение", value: "Промышленный склад, распределительный центр" },
  { key: "Сертификат", value: CERT },
];

const SPEC_RETAIL: SpecRow[] = [
  { key: "Материал", value: "ST 37" },
  { key: "Цвет", value: "Рама RAL 9016 · полки и панели RAL 9016. Под заказ — по коду RAL." },
  { key: "Сертификат", value: CERT },
];

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    slug: "stellazhi",
    path: "/catalog/stellazhi/",
    labelKey: "nav.racks",
    title: "Металлические стеллажи в Ташкенте — купить от производителя | Innotek",
    description:
      "Купить металлические стеллажи в Ташкенте для склада, магазина и хранения. Прочные металлические стеллажи по выгодной цене. Доставка по Ташкенту и Узбекистану.",
    h1: "Металлические стеллажи",
    lead: "Для склада, магазина и производства. Собственный завод в Ташкенте.",
    image: "/src/assets/images/2.jpg",
    products: [
      { path: "/catalog/stellazhi/palletnye-stellazhi/", labelKey: "product.pallet", image: "/src/assets/images/2.jpg", excerpt: "Классика склада: хранение на паллетах с прямым доступом к каждому месту." },
      { path: "/catalog/stellazhi/palletno-polochnye-stellazhi/", labelKey: "product.palletShelf", image: "/src/assets/images/2-1.jpg", excerpt: "Сборно-разборные стеллажи для паллет и штучного товара." },
      { path: "/catalog/stellazhi/nabivnye-stellazhi/", labelKey: "product.driveIn", image: "/src/assets/images/1-1.jpg", excerpt: "Плотное хранение: техника заезжает внутрь системы, проходы не нужны." },
      { path: "/catalog/stellazhi/konsolnye-stellazhi/", labelKey: "product.cantilever", image: "/src/assets/images/1-2.jpg", excerpt: "Длинномер: трубы, профиль, балки. До 1500 кг на пару консолей." },
      { path: "/catalog/stellazhi/mezoninnye-stellazhi/", labelKey: "product.mezzanine", image: "/src/assets/images/1-3.jpg", excerpt: "Дополнительные этажи хранения при высоких потолках." },
      { path: "/catalog/stellazhi/stellazhi-dlya-pressform/", labelKey: "product.mould", image: "/src/assets/images/1-4.jpg", excerpt: "Выкатные платформы для штампов, пресс-форм и станков." },
      { path: "/catalog/stellazhi/stellazhi-dlya-bibliotek/", labelKey: "product.library", image: "/src/assets/images/биб-с-1.jpg", excerpt: "Полочные системы для книг, архивов и документов." },
      { path: "/catalog/stellazhi/kabelnye-stellazhi/", labelKey: "product.cable", image: "/src/assets/images/kabelniy-stellaj_1.jpg", excerpt: "Катушки и бухты: хранение кабеля на базе фронтальной системы." },
      { path: "/catalog/stellazhi/samonesushchie-stellazhi/", labelKey: "product.selfSupporting", image: "/src/assets/images/samonesushchie_konsolnye_stellazhi_07.jpg", excerpt: "Стеллаж как каркас здания: кровля и стены крепятся к конструкции." },
      { path: "/catalog/stellazhi/smart-stellazhi/", labelKey: "product.smart", image: "/src/assets/images/IMAGE-2023-10-31-123248.jpg", excerpt: "Системы SMART для склада." },
    ],
    seo: {
      heading: "Производитель металлических стеллажей в Ташкенте",
      paragraphs: [
        "Металлические стеллажи Innotek отличаются прочной конструкцией, долговечностью и высокой нагрузочной способностью. Благодаря качественным материалам и продуманной конструкции они позволяют эффективно организовать хранение продукции и максимально использовать пространство помещения.",
        "Специалисты компании помогут подобрать тип стеллажей с учётом задач, размеров помещения и необходимой нагрузки. Мы предлагаем складские, консольные, мезонинные и специализированные системы и обеспечиваем консультацию, проектирование, доставку и монтаж.",
      ],
      faqs: [
        { q: "Где купить металлические стеллажи в Ташкенте?", a: "Купить металлические стеллажи в Ташкенте можно в компании Innotek. Мы предлагаем стеллажные системы для складов, магазинов, архивов и производственных помещений с доставкой и установкой." },
        { q: "Сколько стоят металлические стеллажи в Ташкенте?", a: "Цена зависит от размеров конструкции, количества полок, допустимой нагрузки и типа металла. Чтобы узнать точную стоимость, обратитесь к специалистам компании." },
        { q: "Можно ли заказать металлические стеллажи по индивидуальным размерам?", a: "Да, металлические стеллажи можно изготовить по индивидуальным параметрам. Это позволяет максимально эффективно использовать пространство склада или помещения." },
      ],
    },
  },
  {
    slug: "torgovye-stellazhi",
    path: "/catalog/torgovye-stellazhi/",
    labelKey: "nav.retail",
    title: "Купить торговые стеллажи в Ташкенте и Узбекистане | Innotek",
    description: "Купить торговые стеллажи в Ташкенте и Узбекистане. Металлические стеллажи для магазинов, складов и торговых залов от компании Innotek.",
    h1: "Торговые стеллажи",
    lead: "Для магазинов и торговых залов. Пристенные и островные системы.",
    image: "/src/assets/images/ost6.jpeg",
    products: [
      { path: "/catalog/torgovye-stellazhi/pristennye-stellazhi/", labelKey: "product.wall", image: "/src/assets/images/2-6.jpg", excerpt: "Вдоль стен и в линиях островных стеллажей, в том числе для обхода колонн." },
      { path: "/catalog/torgovye-stellazhi/ostrovnye-stellazhi/", labelKey: "product.island", image: "/src/assets/images/1-3.png", excerpt: "Двухсторонние стеллажи в центре зала. Высота, как правило, до 1850 мм." },
    ],
  },
  {
    slug: "ofisnaya-mebel",
    path: "/catalog/ofisnaya-mebel/",
    labelKey: "nav.office",
    title: "Купить офисную мебель в Ташкенте и Узбекистане | Innotek",
    description: "Купить офисную мебель в Ташкенте и Узбекистане. Современная офисная мебель для компаний и бизнеса от компании Innotek.",
    h1: "Офисная мебель",
    lead: "Столы и стулья для офиса. Изготовление под заказ.",
    image: "/src/assets/images/25-2.jpg",
    products: [
      { path: "/catalog/ofisnaya-mebel/stoly/", labelKey: "product.desks", image: "/src/assets/images/26.jpg", excerpt: "Рабочие, компьютерные, переговорные, приставные и журнальные." },
      { path: "/catalog/ofisnaya-mebel/stulya/", labelKey: "product.chairs", image: "/src/assets/images/40.png", excerpt: "Кресла для персонала, руководителя, посетителей и зоны ожидания." },
    ],
  },
  {
    slug: "metallicheskaya-mebel",
    path: "/catalog/metallicheskaya-mebel/",
    labelKey: "nav.metalFurniture",
    title: "Купить металлическую мебель в Ташкенте и Узбекистане | Innotek",
    description: "Купить металлическую мебель в Ташкенте и Узбекистане. Надёжная металлическая мебель для офисов, складов и бизнеса от компании Innotek.",
    h1: "Металлическая мебель",
    lead: "Шкафы, раздевалки и мебель для производства.",
    image: "/src/assets/images/17.jpg",
    products: [
      { path: "/catalog/metallicheskaya-mebel/shkafy-dlya-ofisa/", labelKey: "product.cabinets", image: "/src/assets/images/1-8.jpg", excerpt: "Для документов и ценных вещей. Офис, банк, отдел кадров, бухгалтерия, архив." },
      { path: "/catalog/metallicheskaya-mebel/mebel-dlya-razdevalok/", labelKey: "product.lockers", image: "/src/assets/images/2-11.jpg", excerpt: "Полки, перекладина, крючки и вентиляция. Фитнес, школа, бассейн, офис, производство." },
      { path: "/catalog/metallicheskaya-mebel/mebel-dlya-proizvodstva/", labelKey: "product.workshop", image: "/src/assets/images/34-1.jpg", excerpt: "Сварные тумбы, ящики и слесарные верстаки для цеха, гаража и мастерской." },
    ],
  },
  {
    slug: "konvejernye-linii",
    path: "/catalog/konvejernye-linii/",
    labelKey: "nav.conveyors",
    title: "Купить конвейерные линии в Ташкенте и Узбекистане | Innotek",
    description: "Купить конвейерные линии в Ташкенте и Узбекистане. Промышленные конвейерные системы для автоматизации производства от компании Innotek.",
    h1: "Конвейерные линии",
    lead: "Роликовые и ленточные конвейеры, сборочные линии.",
    image: "/src/assets/images/40-969x1024.jpg",
    products: [
      { path: "/catalog/konvejernye-linii/rolikovye-konvejery/", labelKey: "product.rollerConv", image: "/src/assets/images/1-4.png", excerpt: "Штучные грузы: ящики, поддоны, тара, прокат." },
      { path: "/catalog/konvejernye-linii/lentochnye-konvejery/", labelKey: "product.beltConv", image: "/src/assets/images/1-11.jpg", excerpt: "Сыпучие и штучные грузы на короткие, средние и дальние расстояния." },
      { path: "/catalog/konvejernye-linii/sborochnye-linii/", labelKey: "product.assembly", image: "/src/assets/images/1-12.jpg", excerpt: "Модули из промышленных столов и транспортёров. Опционально PLC." },
    ],
  },
  {
    slug: "oborudovanie",
    path: "/catalog/oborudovanie/",
    labelKey: "nav.equipment",
    title: "Купить оборудование и металлоконструкции в Ташкенте и Узбекистане | Innotek",
    description:
      "Купить оборудование и металлоконструкции в Ташкенте и Узбекистане. Производство и поставка промышленного оборудования и металлоконструкций от компании Innotek.",
    h1: "Оборудование и металлоконструкции",
    lead: "Изготовление металлоконструкций по чертежам или проектам объекта: каркасы, балки, перекрытия и узлы.",
    image: "/src/assets/images/1-13.jpg",
    body: [
      "Специалисты компании выполняют заказы на изготовление металлоконструкций по индивидуально разработанным чертежам или проектам с учётом особенностей конкретного объекта. Производим несущие элементы и узлы, которые используются в строительстве, включая каркасы, балки, перекрытия и другие детали.",
    ],
    specs: [
      { key: "Материал", value: "ST 37" },
      { key: "Спецификация", value: "Двутавр Б1 / Б2 / под заказ / сэндвич-панель" },
      { key: "Высота", value: "По высоте объекта, под заказ" },
      { key: "Применение", value: "Промышленный склад, распределительный центр" },
      { key: "Сертификат", value: CERT },
    ],
    features: [
      "Металлоконструкции позволяют обойтись без капитального строительства в ряде задач и соответствуют современным нормам эксплуатации и безопасности.",
      "Доступная стоимость и короткие сроки строительства ангаров. По затратам и скорости ввода с ними не конкурируют другие виды зданий при высоких показателях прочности и несущей нагрузки.",
    ],
    products: [],
  },
  {
    slug: "roliki",
    path: "/catalog/roliki/",
    labelKey: "nav.rollers",
    title: "Купить ролики в Ташкенте и Узбекистане | Innotek",
    description: "Купить ролики в Ташкенте и Узбекистане. Промышленные ролики для конвейеров и оборудования от компании Innotek.",
    h1: "Колёса и ролики",
    lead: "Промышленные ролики для конвейеров и оборудования.",
    image: "/src/assets/images/photo_2024-05-16_10-06-30.jpg",
    embedQuote: true,
    ctaCatalog: { path: "/catalog/konvejernye-linii/", label: "Конвейерные линии" },
    aiBody: [
      "Промышленные колёса и ролики ставят на тележки, стеллажи, рольганги и единицы оборудования, которые нужно передвигать или по которым движется тара. Это расходный и комплектующий элемент логистики, а не отдельный «складской стеллаж».",
      "При выборе смотрят на нагрузку на одну опору, тип покрытия пола, режим работы (постоянное движение или редкие перемещения) и среду: пыль, влага, перепад температур. Для конвейерных роликов важны диаметр, тип подшипника и то, будет ли ролик приводным или неприводным; для колёс тележек — поворотная или фиксированная вилка и наличие тормоза.",
      "Сферы применения — складская логистика, упаковка, сборка, внутрицеховая перевозка. Конкретную комплектацию под задачу уточните у менеджера — форма на этой странице.",
    ],
    products: [],
  },
];

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    slug: "palletnye-stellazhi",
    categorySlug: "stellazhi",
    path: "/catalog/stellazhi/palletnye-stellazhi/",
    parentPath: "/catalog/stellazhi/",
    parentLabelKey: "nav.racks",
    labelKey: "product.pallet",
    title: "Паллетные стеллажи в Ташкенте, Узбекистане — складские стеллажные системы Innotek",
    description: "Паллетные стеллажи в Ташкенте, Узбекистане от компании Innotek. Надёжные складские стеллажи для хранения паллет, расчёт, поставка и монтаж под ключ.",
    h1: "Паллетные стеллажи",
    lead: "Наиболее популярный вид стеллажей для крупных и небольших складов. Хранение товаров на паллетах с доступом к каждому месту.",
    images: [
      "/src/assets/images/2.jpg",
      "/src/assets/images/1.jpg",
      "/src/assets/images/3.jpg",
      "/src/assets/images/4.jpg",
      "/src/assets/images/8.jpg",
    ],
    specs: SPEC_RACK,
    features: [
      "Быстро собираются на зацепах и болтах",
      "Фронтальный доступ к грузу для человека и техники",
      "Гибкая конфигурация под геометрию склада",
      "Экономичный вариант за счёт собственного производства",
      "Антикоррозийная обработка и расчёт на долгий срок службы",
    ],
  },
  {
    slug: "palletno-polochnye-stellazhi",
    categorySlug: "stellazhi",
    path: "/catalog/stellazhi/palletno-polochnye-stellazhi/",
    parentPath: "/catalog/stellazhi/",
    parentLabelKey: "nav.racks",
    labelKey: "product.palletShelf",
    title: "Паллето-полочные стеллажи в Ташкенте, Узбекистане — складские решения Innotek",
    description: "Паллето-полочные стеллажи в Ташкенте, Узбекистане от Innotek. Универсальные складские системы для паллет и штучных товаров, проектирование и монтаж.",
    h1: "Паллето-полочные стеллажи",
    lead: "Сборно-разборные стеллажи для складирования вещей и документов. Конструкции под разную нагрузку и размер помещения. Дом, офис, склад, магазин, производство.",
    images: [
      "/src/assets/images/2-1.jpg",
      "/src/assets/images/3-1.jpg",
      "/src/assets/images/4-1.jpg",
      "/src/assets/images/6-1.jpg",
    ],
    specs: [
      ...SPEC_RACK.slice(0, 4),
      { key: "Полка", value: "1000×2000 мм / 585×2000 мм. Толщина 0,9 / 1,5 мм, под заказ." },
      ...SPEC_RACK.slice(4),
    ],
    features: [
      "Лёгкая установка и разборка",
      "Доступ ко всем грузам по отдельности",
      "Изменение расстояния между полками",
      "Удобный доступ к товару",
      "Демонтаж и перенос в другое помещение",
    ],
  },
  {
    slug: "nabivnye-stellazhi",
    categorySlug: "stellazhi",
    path: "/catalog/stellazhi/nabivnye-stellazhi/",
    parentPath: "/catalog/stellazhi/",
    parentLabelKey: "nav.racks",
    labelKey: "product.driveIn",
    title: "Въездные набивные стеллажи в Ташкенте, Узбекистане — складские системы Innotek",
    description: "Въездные набивные стеллажи в Ташкенте, Узбекистане от Innotek. Эффективные складские системы для плотного хранения паллет, проектирование и монтаж под ключ.",
    h1: "Набивные стеллажи",
    lead: "Проходы между секциями отсутствуют: техника заезжает внутрь системы. Рациональное использование объёма и площади, блочное складирование.",
    images: [
      "/src/assets/images/1-1.jpg",
      "/src/assets/images/2-2.jpg",
      "/src/assets/images/3-2.jpg",
      "/src/assets/images/8-2.jpg",
    ],
    specs: SPEC_RACK,
    features: [
      "Использование площади до 90% по практике",
      "Блочное складирование без межстеллажных проходов",
      "Поддоны различного типа",
      "Обслуживание системы с двух сторон",
      "Антикоррозийная обработка элементов",
    ],
  },
  {
    slug: "konsolnye-stellazhi",
    categorySlug: "stellazhi",
    path: "/catalog/stellazhi/konsolnye-stellazhi/",
    parentPath: "/catalog/stellazhi/",
    parentLabelKey: "nav.racks",
    labelKey: "product.cantilever",
    title: "Консольные стеллажи в Ташкенте, Узбекистане — складские системы Innotek",
    description: "Консольные стеллажи в Ташкенте, Узбекистане от Innotek. Надёжные решения для хранения длинномерных грузов, проектирование, поставка и монтаж.",
    h1: "Консольные стеллажи",
    lead: "Для длинномерных грузов — балок, труб, профилей, элементов конструкций. Каждая пара консолей выдерживает нагрузку до 1500 кг.",
    images: [
      "/src/assets/images/1-2.jpg",
      "/src/assets/images/2-3.jpg",
      "/src/assets/images/3-3.jpg",
      "/src/assets/images/5-2.jpg",
    ],
    specs: SPEC_RACK,
    features: ["Компактное хранение груза длиной от 1,5 метров"],
  },
  {
    slug: "mezoninnye-stellazhi",
    categorySlug: "stellazhi",
    path: "/catalog/stellazhi/mezoninnye-stellazhi/",
    parentPath: "/catalog/stellazhi/",
    parentLabelKey: "nav.racks",
    labelKey: "product.mezzanine",
    title: "Мезонинные стеллажи в Ташкенте, Узбекистане — многоуровневые системы Innotek",
    description: "Мезонинные стеллажи в Ташкенте, Узбекистане от Innotek. Эффективные многоуровневые складские системы, проектирование, поставка и монтаж под ключ.",
    h1: "Мезонинные стеллажи",
    lead: "Для складов с высокими потолками: дополнительные площадки и этажи для грузов, рабочих зон или персонала.",
    images: [
      "/src/assets/images/1-3.jpg",
      "/src/assets/images/2-4.jpg",
      "/src/assets/images/5-3.jpg",
      "/src/assets/images/8-4.jpg",
    ],
    specs: [
      ...SPEC_RACK.slice(0, 4),
      { key: "Полка", value: "1000×2000 мм / 585×2000 мм. Толщина 0,9 / 1,5 мм, под заказ." },
      ...SPEC_RACK.slice(4),
    ],
    features: [
      "Увеличение площади хранения в среднем в 2–4 раза",
      "Одновременное хранение на паллетах и на полках",
      "Конструкция под полезный объём помещения",
      "Прочность металлических конструкций для тяжёлых грузов",
    ],
  },
  {
    slug: "stellazhi-dlya-pressform",
    categorySlug: "stellazhi",
    path: "/catalog/stellazhi/stellazhi-dlya-pressform/",
    parentPath: "/catalog/stellazhi/",
    parentLabelKey: "nav.racks",
    labelKey: "product.mould",
    title: "Стеллажи для прессформ в Ташкенте, Узбекистане — промышленные решения Innotek",
    description: "Стеллажи для прессформ в Ташкенте, Узбекистане от Innotek. Надёжные промышленные системы хранения пресс-форм, проектирование, поставка и монтаж.",
    h1: "Стеллажи для прессформ",
    lead: "Для штампов, пресс-форм и станков. Выкатные платформы: загрузка краном и прямой доступ к грузу.",
    images: [
      "/src/assets/images/1-4.jpg",
      "/src/assets/images/2-5.jpg",
      "/src/assets/images/3-5.jpg",
      "/src/assets/images/4-5.jpg",
    ],
    specs: SPEC_RACK,
    features: [
      "Загрузка и выгрузка кран-балкой",
      "Экономия места на производстве и складе",
      "Дополнительные секции без потери нагрузки",
      "Выдвижные полки до двух тонн, блокировка, демпфер",
    ],
  },
  {
    slug: "stellazhi-dlya-bibliotek",
    categorySlug: "stellazhi",
    path: "/catalog/stellazhi/stellazhi-dlya-bibliotek/",
    parentPath: "/catalog/stellazhi/",
    parentLabelKey: "nav.racks",
    labelKey: "product.library",
    title: "Стеллажи для библиотеки купить | Innotek",
    description: "Полочные стеллажи для библиотек, архивов и документов. Производство Innotek, Ташкент.",
    h1: "Стеллажи для библиотек",
    lead: "Полочные системы для книг, газет и документов. Открытые и закрытые, с регулировкой высоты полок. Стационарные и мобильные.",
    images: [
      "/src/assets/images/биб-с-1.jpg",
      "/src/assets/images/дддддд-1-768x508.jpg",
    ],
    specs: [],
    features: [
      "Эффективное использование вертикального пространства",
      "Удобная организация хранения",
      "Лёгкий доступ к книгам и документам",
      "Адаптация под разные размеры предметов",
    ],
  },
  {
    slug: "kabelnye-stellazhi",
    categorySlug: "stellazhi",
    path: "/catalog/stellazhi/kabelnye-stellazhi/",
    parentPath: "/catalog/stellazhi/",
    parentLabelKey: "nav.racks",
    labelKey: "product.cable",
    title: "Кабельные стеллажи в Ташкенте, Узбекистане — системы хранения Innotek",
    description: "Кабельные стеллажи в Ташкенте, Узбекистане от Innotek. Надёжные решения для хранения кабелей и проводов, проектирование, поставка и монтаж под ключ.",
    h1: "Кабельные стеллажи",
    lead: "Для кабельной продукции на деревянных катушках. Конструкция на базе фронтальных стеллажей.",
    images: [
      "/src/assets/images/kabelniy-stellaj_1.jpg",
      "/src/assets/images/kabel_3.png",
    ],
    specs: [
      { key: "Материал", value: "ST 37" },
      { key: "Цвет", value: "Рама, полки и кронштейн RAL 9016. Под заказ — по коду RAL." },
      { key: "Стойка", value: "70/90 × 1.5 / 1.8 / 2.0 / 2.5 mm" },
      { key: "Балка", value: "40×60 / 40×80 / 50×100 / 40×120 / 50×140 / 50×190 × 1.5/2.0 mm" },
      { key: "Высота", value: "По высоте склада" },
      { key: "Сертификат", value: CERT },
    ],
    features: [
      "Пространственная металлическая конструкция вертикальной или наклонной ориентации для кабельной продукции",
      "Отдающие или подающие стойки для разматывания барабанов и бухт",
      "Прямой доступ на все уровни, отмотка без изъятия тяжёлых барабанов",
    ],
  },
  {
    slug: "samonesushchie-stellazhi",
    categorySlug: "stellazhi",
    path: "/catalog/stellazhi/samonesushchie-stellazhi/",
    parentPath: "/catalog/stellazhi/",
    parentLabelKey: "nav.racks",
    labelKey: "product.selfSupporting",
    title: "Самонесущие стеллажи в Ташкенте, Узбекистане — складские решения Innotek",
    description: "Самонесущие стеллажи в Ташкенте, Узбекистане от Innotek. Надёжные и долговечные складские системы для хранения товаров, проектирование, поставка и монтаж под ключ.",
    h1: "Самонесущие стеллажи",
    lead: "Сборно-разборная конструкция с элементами для кровли и стеновых панелей. Единый блок: монтаж, эксплуатация, наращивание или уменьшение объёма склада.",
    images: [
      "/src/assets/images/samonesushchie_konsolnye_stellazhi_07.jpg",
      "/src/assets/images/2024-01-8.jpg",
    ],
    specs: [
      { key: "Материал", value: "ST 37" },
      { key: "Цвет", value: "RAL 9016. Под заказ — по коду RAL." },
      { key: "Стойка", value: "70/90 × 1.5 / 1.8 / 2.0 / 2.5 mm / двутавр Б1, под заказ" },
      { key: "Высота", value: "По высоте склада" },
      { key: "Применение", value: "Промышленный склад" },
      { key: "Сертификат", value: CERT },
    ],
    features: [
      "Проектирование, поставка и монтаж, в том числе самонесущих стеллажей",
      "Единый блок: монтаж, эксплуатация, наращивание или уменьшение объёма склада",
      "Установка на подготовленное бетонное основание с учётом климата",
      "При площади склада до 1500 м² дополнительная строительная экспертиза проекта не требуется",
    ],
  },
  {
    slug: "smart-stellazhi",
    categorySlug: "stellazhi",
    path: "/catalog/stellazhi/smart-stellazhi/",
    parentPath: "/catalog/stellazhi/",
    parentLabelKey: "nav.racks",
    labelKey: "product.smart",
    title: "Smart-стеллажи в Ташкенте | Innotek",
    description: "Smart-стеллажи Innotek. Складские системы SMART, проектирование, поставка и монтаж.",
    h1: "Smart-стеллажи",
    // Текст исходника про приставные к острову — не спецификация SMART, на странице не выводим:
    // «Приставные стеллажи используются для оформления торцевой части островных стеллажей. Приставной стеллаж полностью закрывает торец островного стеллажа, и его высота соответствует высоте острова. Конструктивной особенностью приставного стеллажа является использование двухсторонних стоек и установка задних панелей, как с фронтальной части стеллажа, так и со стороны примыкания к острову. Приставные стеллажи не выстраиваются в линию, и расчет каждого стеллажа производится с замыкающей стойкой и опорой.»
    lead: "Складские системы SMART для промышленного склада и распределительного центра.",
    images: [
      "/src/assets/images/IMAGE-2023-10-31-123248.jpg",
      "/src/assets/images/IMAGE-2023-10-31-123255.jpg",
      "/src/assets/images/IMAGE-2023-10-31-123259.jpg",
    ],
    specs: [
      { key: "Материал", value: "ST 37" },
      { key: "Цвет", value: "Рама RAL 5005 · Балка RAL 2004. Под заказ — по коду RAL." },
      { key: "Стойка", value: "40/60 × 1.5 / 1.8 / 2.0 / 2.5 mm" },
      { key: "Балка", value: "40×60 / 40×80 / 50×100 / 40×120 / 50×140 / 50×190 × 1.5/2.0 mm" },
      { key: "Высота", value: "По высоте склада" },
      { key: "Применение", value: "Промышленный склад, распределительный центр" },
      { key: "Сертификат", value: CERT },
    ],
    features: [
      "Удобные в загрузке и извлечении товара",
      "Неприхотливые в сервисном уходе",
      "Эстетически привлекательные",
      "Оптимальной конструкции под тип товара и особенности зала",
    ],
  },
  {
    slug: "pristennye-stellazhi",
    categorySlug: "torgovye-stellazhi",
    path: "/catalog/torgovye-stellazhi/pristennye-stellazhi/",
    parentPath: "/catalog/torgovye-stellazhi/",
    parentLabelKey: "nav.retail",
    labelKey: "product.wall",
    title: "Купить пристенные стеллажи в Ташкенте и Узбекистане | Innotek",
    description: "Купить пристенные стеллажи в Ташкенте и Узбекистане. Металлические пристенные стеллажи для магазинов, складов и торговых залов от компании Innotek.",
    h1: "Пристенные стеллажи",
    lead: "Самый распространённый вид торговых стеллажей: вдоль стен, для зонирования зала и в составе островных линий — в том числе для обхода колонн.",
    images: [
      "/src/assets/images/2-6.jpg",
      "/src/assets/images/3-7.jpg",
      "/src/assets/images/4-7.jpg",
    ],
    specs: SPEC_RETAIL,
    features: [
      "Самый распространённый вид торговых стеллажей",
      "Вдоль стен, для зонирования зала и в составе островных линий",
      "В том числе для обхода колонн",
    ],
  },
  {
    slug: "ostrovnye-stellazhi",
    categorySlug: "torgovye-stellazhi",
    path: "/catalog/torgovye-stellazhi/ostrovnye-stellazhi/",
    parentPath: "/catalog/torgovye-stellazhi/",
    parentLabelKey: "nav.retail",
    labelKey: "product.island",
    title: "Купить островные стеллажи в Ташкенте и Узбекистане | Innotek",
    description: "Купить островные стеллажи в Ташкенте и Узбекистане. Металлические островные стеллажи для магазинов и торговых залов от компании Innotek.",
    h1: "Островные стеллажи",
    lead: "Двухсторонние стеллажи в центре торгового зала. Высота, как правило, не превышает 1850 мм, наиболее распространённая — 1650 мм.",
    images: [
      "/src/assets/images/1-3.png",
      "/src/assets/images/2-3.png",
      "/src/assets/images/IMAGE-2023-10-31-122736.jpg",
    ],
    specs: SPEC_RETAIL,
    features: [
      "Двухсторонние стеллажи в центре торгового зала",
      "Высота, как правило, не превышает 1850 мм",
      "Наиболее распространённая высота — 1650 мм",
    ],
  },
  {
    slug: "stoly",
    categorySlug: "ofisnaya-mebel",
    path: "/catalog/ofisnaya-mebel/stoly/",
    parentPath: "/catalog/ofisnaya-mebel/",
    parentLabelKey: "nav.office",
    labelKey: "product.desks",
    title: "Купить столы в Ташкенте и Узбекистане | Innotek",
    description: "Купить столы в Ташкенте и Узбекистане. Офисные и рабочие столы для компаний и бизнеса от компании Innotek.",
    h1: "Офисные столы",
    lead: "Модели из каталога и изготовление мебели под заказ, если типовая не подходит.",
    images: [
      "/src/assets/images/26.jpg",
      "/src/assets/images/25.jpg",
      "/src/assets/images/24.jpg",
      "/src/assets/images/8.png",
    ],
    specs: [
      { key: "Материал", value: "ST 37 / ДСП / МДФ" },
      { key: "Размер", value: "30×60 мм / 40×60 мм / 1500×700×750 (h) мм, под заказ" },
      { key: "Применение", value: "Офис, учебный центр, школа" },
      { key: "Сертификат", value: CERT },
    ],
    features: [
      "Рабочие столы",
      "Компьютерные столы",
      "Столы для переговоров",
      "Приставные столы",
      "Журнальные столики",
    ],
  },
  {
    slug: "stulya",
    categorySlug: "ofisnaya-mebel",
    path: "/catalog/ofisnaya-mebel/stulya/",
    parentPath: "/catalog/ofisnaya-mebel/",
    parentLabelKey: "nav.office",
    labelKey: "product.chairs",
    title: "Купить стулья в Ташкенте и Узбекистане | Innotek",
    description: "Купить стулья в Ташкенте и Узбекистане. Офисные и рабочие стулья для компаний, офисов и бизнеса от компании Innotek.",
    h1: "Офисные стулья",
    lead: "Модели из каталога и изготовление мебели под заказ, если типовая не подходит.",
    images: [
      "/src/assets/images/40.png",
      "/src/assets/images/37.jpg",
      "/src/assets/images/27.jpg",
    ],
    specs: [
      { key: "Материал", value: "ST 37" },
      { key: "Цвет", value: "Под заказ" },
      { key: "Размер", value: "600×500×1200 (h) мм / 700×600×1400 (h) мм, под заказ" },
      { key: "Применение", value: "Офис, учебный центр, школа" },
      { key: "Сертификат", value: CERT },
    ],
    features: [
      "Офисные кресла для персонала",
      "Офисные кресла для руководителя",
      "Кресла для посетителей",
      "Офисные стулья и многоместные секции для зон ожидания",
    ],
  },
  {
    slug: "shkafy-dlya-ofisa",
    categorySlug: "metallicheskaya-mebel",
    path: "/catalog/metallicheskaya-mebel/shkafy-dlya-ofisa/",
    parentPath: "/catalog/metallicheskaya-mebel/",
    parentLabelKey: "nav.metalFurniture",
    labelKey: "product.cabinets",
    title: "Купить шкафы для офиса в Ташкенте и Узбекистане | Innotek",
    description: "Купить шкафы для офиса в Ташкенте и Узбекистане. Офисные шкафы для документов и хранения от компании Innotek.",
    h1: "Шкафы для офиса",
    lead: "Универсальные офисные шкафы для документов и ценных вещей. Некоторые модели можно использовать вместо сейфа. Офис, банк, отдел кадров, бухгалтерия, архив.",
    images: [
      "/src/assets/images/1-8.jpg",
      "/src/assets/images/2-10.jpg",
      "/src/assets/images/4-12.jpg",
    ],
    specs: [{ key: "Материал", value: "ST 37" }, { key: "Сертификат", value: CERT }],
    features: [
      "Долговечность: материал рассчитан на длительное и интенсивное использование",
      "Простота в уходе: полимерное покрытие моется и не подвержено коррозии",
      "Сборка модельного ряда металлической мебели",
    ],
  },
  {
    slug: "mebel-dlya-razdevalok",
    categorySlug: "metallicheskaya-mebel",
    path: "/catalog/metallicheskaya-mebel/mebel-dlya-razdevalok/",
    parentPath: "/catalog/metallicheskaya-mebel/",
    parentLabelKey: "nav.metalFurniture",
    labelKey: "product.lockers",
    title: "Купить мебель для раздевалок в Ташкенте и Узбекистане | Innotek",
    description: "Купить мебель для раздевалок в Ташкенте и Узбекистане. Металлическая мебель для раздевалок, шкафчики и системы хранения от компании Innotek.",
    h1: "Мебель для раздевалок",
    lead: "Полки для головных уборов и обуви, перекладина, двухсторонние крючки, вентиляция. Фитнес, школа, бассейн, офис, производство.",
    images: [
      "/src/assets/images/2-11.jpg",
      "/src/assets/images/7-8.jpg",
      "/src/assets/images/8-10.jpg",
    ],
    specs: [
      { key: "Материал", value: "ST 37" },
      { key: "Цвет", value: "RAL 7035. Под заказ — по коду RAL." },
      { key: "Сертификат", value: CERT },
    ],
    features: [
      "Полки для головных уборов и обуви",
      "Перекладина для вешалки и двухсторонние крючки",
      "Вентиляция",
    ],
  },
  {
    slug: "mebel-dlya-proizvodstva",
    categorySlug: "metallicheskaya-mebel",
    path: "/catalog/metallicheskaya-mebel/mebel-dlya-proizvodstva/",
    parentPath: "/catalog/metallicheskaya-mebel/",
    parentLabelKey: "nav.metalFurniture",
    labelKey: "product.workshop",
    title: "Купить мебель для производства в Ташкенте и Узбекистане | Innotek",
    description: "Купить мебель для производства в Ташкенте и Узбекистане. Промышленная металлическая мебель для предприятий и производственных помещений от компании Innotek.",
    h1: "Мебель для производства",
    lead: "Сварные тумбы и ящики, жёсткая конструкция. Слесарные верстаки для производств, гаражей и мастерских.",
    images: [
      "/src/assets/images/34-1.jpg",
      "/src/assets/images/32-1.jpg",
      "/src/assets/images/31-1.jpg",
    ],
    specs: [{ key: "Материал", value: "ST 37" }, { key: "Сертификат", value: CERT }],
    features: [
      "Рамы верстаков на болтах с самоконтрящимися гайками",
      "Перфорированные экраны: аксессуары крепятся зацепами",
      "Ящики полного выдвижения на шариковых направляющих, нагрузка 100 кг",
    ],
  },
  {
    slug: "rolikovye-konvejery",
    categorySlug: "konvejernye-linii",
    path: "/catalog/konvejernye-linii/rolikovye-konvejery/",
    parentPath: "/catalog/konvejernye-linii/",
    parentLabelKey: "nav.conveyors",
    labelKey: "product.rollerConv",
    title: "Купить роликовые конвейеры в Ташкенте и Узбекистане | Innotek",
    description: "Купить роликовые конвейеры в Ташкенте и Узбекистане. Надёжные роликовые конвейерные системы для производства и складов от компании Innotek.",
    h1: "Роликовые конвейеры",
    lead: "Для штучных грузов: опоки, прокат, ящики, доски, поддоны, тара, коробки. Груз движется по вращающимся роликам или дискам.",
    images: [
      "/src/assets/images/3-14.jpg",
      "/src/assets/images/7-10.jpg",
      "/src/assets/images/20-5.jpg",
    ],
    specs: [
      { key: "Материал", value: "ST 37" },
      { key: "Цвет", value: "Под заказ по коду RAL." },
      { key: "Сертификат", value: CERT },
    ],
    features: [],
  },
  {
    slug: "lentochnye-konvejery",
    categorySlug: "konvejernye-linii",
    path: "/catalog/konvejernye-linii/lentochnye-konvejery/",
    parentPath: "/catalog/konvejernye-linii/",
    parentLabelKey: "nav.conveyors",
    labelKey: "product.beltConv",
    title: "Купить ленточные конвейеры в Ташкенте и Узбекистане | Innotek",
    description: "Купить ленточные конвейеры в Ташкенте и Узбекистане. Промышленные ленточные конвейерные системы для производства и складов от компании Innotek.",
    h1: "Ленточные конвейеры",
    lead: "Для сыпучих и штучных грузов на короткие, средние и дальние расстояния: промышленность, склады, порты, перегрузка.",
    images: [
      "/src/assets/images/1-11.jpg",
      "/src/assets/images/4-2.png",
      "/src/assets/images/16-5.jpg",
    ],
    specs: [
      { key: "Материал", value: "ST 37" },
      { key: "Цвет", value: "Под заказ по коду RAL." },
      { key: "Габариты", value: "500×10000×800(h) мм, под заказ" },
      { key: "Сертификат", value: CERT },
    ],
    features: [],
  },
  {
    slug: "sborochnye-linii",
    categorySlug: "konvejernye-linii",
    path: "/catalog/konvejernye-linii/sborochnye-linii/",
    parentPath: "/catalog/konvejernye-linii/",
    parentLabelKey: "nav.conveyors",
    labelKey: "product.assembly",
    title: "Купить производственные сборочные линии в Ташкенте и Узбекистане | Innotek",
    description: "Купить производственные сборочные линии в Ташкенте и Узбекистане. Сборочные линии для автоматизации и оптимизации производства от компании Innotek.",
    h1: "Сборочные линии",
    lead: "Разборные модули: промышленные столы и транспортёры. Линия может комплектоваться PLC для пошаговой сборки.",
    images: [
      "/src/assets/images/1-12.jpg",
      "/src/assets/images/6-12.jpg",
      "/src/assets/images/18-6.jpg",
    ],
    specs: [
      { key: "Материал", value: "ST 37" },
      { key: "Цвет", value: "Под заказ по коду RAL." },
      { key: "Сертификат", value: CERT },
    ],
    features: [],
  },
];

export function categoryBySlug(slug: string) {
  return CATALOG_CATEGORIES.find((c) => c.slug === slug);
}

export function productBySlugs(categorySlug: string, slug: string) {
  return CATALOG_PRODUCTS.find((p) => p.categorySlug === categorySlug && p.slug === slug);
}
