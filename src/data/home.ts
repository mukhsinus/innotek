/**
 * Тексты главной — только из content/index.md, about.md, uz.md, video.md.
 * Цифры «1 год / 1 клиент / 30% Steeler» из темы не используем.
 */
import type { Lang, UiKey } from "../i18n/ui";

export type HomeCategory = {
  path: string;
  labelKey: UiKey;
  lead: string;
  image: string;
  /** Крупная ячейка bento */
  featured?: boolean;
};

export type HomeService = {
  path: string;
  labelKey: UiKey;
  lead: string;
};

export type HomeCopy = {
  title: string;
  description: string;
  h1: string;
  heroLead: string;
  heroImage: string;
  catalogIntro: string;
  categories: HomeCategory[];
  productionTitle: string;
  productionLead: string;
  thickness: string;
  aboutLead: string;
  aboutDesign: string;
  aboutInstall: string;
  services: HomeService[];
  videoLead: string;
  ctaTitle: string;
  ctaLead: string;
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
    h1: "Стеллажи в Ташкенте и Узбекистане: надёжные решения для хранения",
    heroLead: "Мы находим оптимальное решение. Надёжные стеллажи для всех типов грузов.",
    heroImage: IMG.racks,
    catalogIntro:
      "Каждый тип стеллажей бывает различной ширины и высоты и часто может быть адаптирован в соответствии с вашими потребностями.",
    categories: [
      {
        path: "/catalog/stellazhi/",
        labelKey: "nav.racks",
        lead: "Надёжные стеллажи для всех типов грузов",
        image: IMG.racks,
        featured: true,
      },
      {
        path: "/catalog/torgovye-stellazhi/",
        labelKey: "nav.retail",
        lead: "Современные торговые стеллажи — прочные и эстетичные",
        image: IMG.retail,
      },
      {
        path: "/catalog/ofisnaya-mebel/",
        labelKey: "nav.office",
        lead: "Комфортная офисная мебель в Ташкенте",
        image: IMG.office,
      },
      {
        path: "/catalog/metallicheskaya-mebel/",
        labelKey: "nav.metalFurniture",
        lead: "Для удобного хранения документации",
        image: IMG.metal,
      },
      {
        path: "/catalog/konvejernye-linii/",
        labelKey: "nav.conveyors",
        lead: "Современные конвейерные линии в Ташкенте",
        image: IMG.conveyors,
      },
      {
        path: "/catalog/oborudovanie/",
        labelKey: "nav.equipment",
        lead: "Оборудование и металлоконструкции",
        image: IMG.equipment,
      },
      {
        path: "/catalog/roliki/",
        labelKey: "nav.rollers",
        lead: "Колёса и ролики",
        image: IMG.rollers,
      },
    ],
    productionTitle: "Наше производство",
    productionLead:
      "Производство включает 5 автоматических профилегибочных и штамповочных линий, в том числе линию профилей из рулонного материала с лазерной сваркой. Продукция из чёрной, оцинкованной, полимерной, нержавеющей стали и алюминия толщиной от 0,2 до 6 мм. Завод — сбалансированно оборудованное производство складских стеллажей в Узбекистане.",
    thickness: "0,2–6 мм",
    aboutLead:
      "Успех компании — настоящий, длительный — невозможен без правильно заложенной философии и ценностей. Они определяют историю развития завода, принципы работы и отношения внутри команды.",
    aboutDesign:
      "После качества продукта следующим приоритетом идёт проектирование. Команда проектирует современное складское оборудование, поддержку оказывают итальянские специалисты.",
    aboutInstall:
      "Комплексный подход к монтажу-демонтажу складских стеллажей. Переезд склада. Ремонт стеллажей. Специалисты с действующими удостоверениями работают по ГОСТ, в том числе на действующем предприятии.",
    services: [
      {
        path: "/services/proektirovanie/",
        labelKey: "service.design",
        lead: "После качества продукта следующим приоритетом идёт проектирование. Команда проектирует современное складское оборудование, поддержку оказывают итальянские специалисты.",
      },
      {
        path: "/services/montazh-demontazh/",
        labelKey: "service.install",
        lead: "Монтаж и демонтаж стеллажей любой конструкции, переезд склада и ремонт. Специалисты с действующими удостоверениями, требования ГОСТ, в том числе на действующем предприятии.",
      },
      {
        path: "/services/pokraska-metalla/",
        labelKey: "service.paint",
        lead: "Покраска металла придаёт изделиям внешний вид и защиту от коррозии и воздействия окружающей среды.",
      },
      {
        path: "/services/chistka-metalla/",
        labelKey: "service.clean",
        lead: "Чистка металла: удаление загрязнений, окислов и ржавчины с поверхности металлических изделий.",
      },
    ],
    videoLead:
      "Реальные кейсы Innotek: смотрите, как производятся и устанавливаются стеллажные системы и конвейерные решения.",
    ctaTitle: "Заказать и купить стеллажи в Ташкенте — просто",
    ctaLead:
      "Оставьте заявку на сайте, и наши менеджеры свяжутся с вами в кратчайшие сроки. Поможем выбрать оптимальный вариант, оформим заказ, организуем доставку и при необходимости — сборку.",
  },
  uz: {
    title: "Toshkentda stelajlar sotib olish | Innotek",
    description:
      "Toshkentda Innotek ishlab chiqaruvchisidan stelajlar. Ombor, do‘kon va biznes uchun metall stelajlarni qulay narxda sotib oling. Yetkazib berish va o‘rnatish xizmati mavjud.",
    h1: "Toshkent va O‘zbekistonda stelajlar: ishonchli saqlash yechimlari",
    heroLead: "Biz eng optimal yechimni topamiz. Barcha turdagi yuklar uchun ishonchli stelajlar.",
    heroImage: IMG.racks,
    catalogIntro:
      "Har bir turdagi stelajlar turli kenglik va balandlikda bo‘ladi hamda ko‘pincha ehtiyojlaringizga moslashtirilishi mumkin.",
    categories: [
      {
        path: "/catalog/stellazhi/",
        labelKey: "nav.racks",
        lead: "Barcha turdagi yuklar uchun ishonchli stelajlar",
        image: IMG.racks,
        featured: true,
      },
      {
        path: "/catalog/torgovye-stellazhi/",
        labelKey: "nav.retail",
        lead: "Zamonaviy savdo stelajlari — mustahkam va estetik",
        image: IMG.retail,
      },
      {
        path: "/catalog/ofisnaya-mebel/",
        labelKey: "nav.office",
        lead: "Toshkentda qulay ofis mebellari",
        image: IMG.office,
      },
      {
        path: "/catalog/metallicheskaya-mebel/",
        labelKey: "nav.metalFurniture",
        lead: "Hujjatlarni qulay saqlash uchun",
        image: IMG.metal,
      },
      {
        path: "/catalog/konvejernye-linii/",
        labelKey: "nav.conveyors",
        lead: "Toshkentda zamonaviy konveyer liniyalari",
        image: IMG.conveyors,
      },
      {
        path: "/catalog/oborudovanie/",
        labelKey: "nav.equipment",
        lead: "Uskunalar",
        image: IMG.equipment,
      },
      {
        path: "/catalog/roliki/",
        labelKey: "nav.rollers",
        lead: "Roliklar",
        image: IMG.rollers,
      },
    ],
    productionTitle: "Ishlab chiqarish",
    // В uz.md блок производства опубликован по-русски — не переводим.
    productionLead:
      "Производство включает 5 автоматических профилегибочных и штамповочных линий, в том числе линию профилей из рулонного материала с лазерной сваркой. Продукция из чёрной, оцинкованной, полимерной, нержавеющей стали и алюминия толщиной от 0,2 до 6 мм.",
    thickness: "0,2–6 mm",
    aboutLead:
      "Kompaniyaning haqiqiy va uzoq muddatli muvaffaqiyati to‘g‘ri shakllangan falsafa va qadriyatlarsiz mumkin emas. Ular zavodning rivojlanish tarixini, ish prinsiplari va jamoa ichidagi munosabatlarni belgilaydi.",
    aboutDesign:
      "Mahsulot sifatini ta’minlashdan so‘ng keyingi muhim bosqich — loyihalash. Jamoa zamonaviy ombor uskunalarini loyihalashtiradi, jarayon italiyalik mutaxassislar tomonidan qo‘llab-quvvatlanadi.",
    aboutInstall:
      "Ombor stelajlarini montaj va demontaj qilish, omborni ko‘chirish, stelajlarni ta’mirlash. Mutaxassislar GOST talablariga rioya qilgan holda ishlaydi.",
    services: [
      {
        path: "/services/proektirovanie/",
        labelKey: "service.design",
        lead: "Mahsulot sifatini ta’minlashdan so‘ng keyingi muhim bosqich — loyihalash. Jamoa zamonaviy ombor uskunalarini loyihalashtiradi, jarayon italiyalik mutaxassislar tomonidan qo‘llab-quvvatlanadi.",
      },
      {
        path: "/services/montazh-demontazh/",
        labelKey: "service.install",
        lead: "Ombor stelajlarini montaj va demontaj qilish, omborni ko‘chirish, stelajlarni ta’mirlash. Mutaxassislar GOST talablariga rioya qilgan holda ishlaydi.",
      },
      {
        path: "/services/pokraska-metalla/",
        labelKey: "service.paint",
        lead: "Metallni bo‘yash mahsulotlarga jozibali ko‘rinish beradi va ularni korroziya hamda tashqi muhit ta’siridan himoya qiladi.",
      },
      // Чистка металла: в uz-контенте перевода нет — карточку не публикуем.
    ],
    videoLead:
      "Реальные кейсы Innotek: смотрите, как производятся и устанавливаются наши стеллажные системы и конвейерные решения.",
    ctaTitle: "Toshkentda stelajlarni buyurtma qilish va sotib olish — juda oson",
    ctaLead:
      "Saytda buyurtma qoldiring — optimal variantni tanlashda yordam beramiz, buyurtmani rasmiylashtiramiz, yetkazib berishni tashkil qilamiz va kerak bo‘lsa o‘rnatib beramiz.",
  },
};

/** Счётчики только из content/: 8 лет / 8 yillik, 5 линий. */
export const HOME_STATS = {
  years: 8,
  lines: 5,
} as const;
