import type { UiKey } from "../i18n/ui";

export type ServicePage = {
  slug: string;
  path: string;
  labelKey: UiKey;
  title: string;
  description: string;
  h1: string;
  lead: string;
  image?: string;
  tag?: { ru: string; uz: string };
  body: string;
  steps?: {
    num: string;
    title: { ru: string; uz: string };
    desc: { ru: string; uz: string };
  }[];
};

export const SERVICES: ServicePage[] = [
  {
    slug: "montazh-demontazh",
    path: "/services/montazh-demontazh/",
    labelKey: "service.install",
    title: "Монтаж и демонтаж стеллажей | Innotek",
    description: "Монтаж и демонтаж складских стеллажей, переезд склада и ремонт. Команда Innotek, Ташкент.",
    h1: "Монтаж и демонтаж",
    lead: "Комплексный подход к монтажу и демонтажу складских стеллажей. Переезд склада. Ремонт стеллажей.",
    image: "/images/site_image_01.jpg",
    tag: { ru: "ГОСТ & СНиП // Опытная бригада", uz: "GOST & SNiP // Tajribali brigada" },
    body: "Команда квалифицированных специалистов с действующими удостоверениями проведёт монтаж или демонтаж стеллажей любой конструкции или переезд склада, строго соблюдая требования ГОСТ, в короткие сроки даже на действующем предприятии.",
    steps: [
      {
        num: "01",
        title: { ru: "Аудит и замеры", uz: "Audit va o'lchovlar" },
        desc: { ru: "Выезд на объект, проверка ровности полов и несущей способности основания.", uz: "Obyektga chiqish, pol tekisligi va poydevor yuk ko'tarish qobiliyatini tekshirish." },
      },
      {
        num: "02",
        title: { ru: "Сборка конструкций", uz: "Konstruktsiyalarni yig'ish" },
        desc: { ru: "Монтаж рам, балок, связей жесткости и анкерное крепление к полу.", uz: "Romlar, balkalar, mustahkamlik bog'lamlarini o'rnatish va polga ankerlash." },
      },
      {
        num: "03",
        title: { ru: "Юстировка и сдача", uz: "Tekislash va topshirish" },
        desc: { ru: "Лазерная нивелировка, протяжка болтовых соединений и подписание акта испытаний.", uz: "Lazerli tekislash, boltlarni tortish va sinov dalolatnomasini imzolash." },
      },
    ],
  },
  {
    slug: "pokraska-metalla",
    path: "/services/pokraska-metalla/",
    labelKey: "service.paint",
    title: "Покраска металла | Компания Innotek",
    description: "Порошковая покраска металла в Ташкенте. Защита от коррозии и внешний вид изделий Innotek. Звоните +998 71 200 50 51.",
    h1: "Покраска металла",
    lead: "Придаём изделиям внешний вид и защиту от коррозии. Готовим поверхность и наносим покрытие, рассчитанное на долгий срок.",
    image: "/images/poroshkovye-kraski-p.jpg",
    tag: { ru: "Полимерное покрытие // RAL палитра", uz: "Polimer qoplama // RAL palitrasi" },
    body: "Мы используем качественные краски и тщательно подготавливаем поверхность металла, чтобы покрытие было равномерным и долговечным. Опыт и внимание к деталям нужны для того, чтобы металлическое изделие выглядело цельно и служило годами.",
    steps: [
      {
        num: "01",
        title: { ru: "Обезжиривание и фосфатирование", uz: "Yog'sizlantirish va fosfatlash" },
        desc: { ru: "Химическая подготовка поверхности для максимальной адгезии полимера.", uz: "Polimerning maksimal yopishishi uchun sirtni kimyoviy tayyorlash." },
      },
      {
        num: "02",
        title: { ru: "Электростатическое напыление", uz: "Elektrostatik purkash" },
        desc: { ru: "Равномерное нанесение порошкового состава в камере напыления.", uz: "Purkash kamerasida kukun tarkibini bir tekis surtish." },
      },
      {
        num: "03",
        title: { ru: "Полимеризация при 200°C", uz: "200°C da polimerizatsiya" },
        desc: { ru: "Запекание в конвекционной печи для образования ударопрочного монолитного слоя.", uz: "Zarbga chidamli yaxlit qatlam hosil qilish uchun pechda pishirish." },
      },
    ],
  },
  {
    slug: "chistka-metalla",
    path: "/services/chistka-metalla/",
    labelKey: "service.clean",
    title: "Чистка металла | Компания Innotek",
    description: "Чистка металла в Ташкенте: удаление загрязнений, окислов и ржавчины. Innotek.",
    h1: "Чистка металла",
    lead: "Удаление загрязнений, окислов и ржавчины с поверхности металлических изделий.",
    image: "/images/photo_2023-09-27-17.40.52-qdf3jxbj2kjzrzfih0u7ko22pzwolqikwi6rzodjf8.webp",
    tag: { ru: "Абразивоструйная обработка Sa 2.5", uz: "Abraziv tozalash Sa 2.5" },
    body: "С применением специализированных методов и оборудования мы восстанавливаем первоначальный блеск и качество металла, улучшая его долговечность и вид. Независимо от типа металла и степени загрязнения.",
    steps: [
      {
        num: "01",
        title: { ru: "Оценка степени окисления", uz: "Oksidlanish darajasini baholash" },
        desc: { ru: "Определение плотности окалины, ржавчины и подбор фракции абразива.", uz: "Zang qalinligini aniqlash va abraziv fraktsiyasini tanlash." },
      },
      {
        num: "02",
        title: { ru: "Струйная зачистка", uz: "Oqimli tozalash" },
        desc: { ru: "Глубокая обработка под давлением с раскрытием микрорельефа металла.", uz: "Metall mikrorelyefini ochish bilan bosim ostida chuqur tozalash." },
      },
      {
        num: "03",
        title: { ru: "Консервация и обеспыливание", uz: "Konservatsiya va changsizlantirish" },
        desc: { ru: "Удаление остаточной пыли и нанесение пассивирующего состава.", uz: "Qoldiq changni tozalash va passivlashtiruvchi qatlam berish." },
      },
    ],
  },
  {
    slug: "proektirovanie",
    path: "/services/proektirovanie/",
    labelKey: "service.design",
    title: "Проектирование складского оборудования | Innotek",
    description: "Проектирование современного складского оборудования. Команда Innotek, Ташкент.",
    h1: "Проектирование",
    lead: "После качества продукта следующим приоритетом идёт проектирование складского оборудования.",
    image: "/images/site_image_04.jpg",
    tag: { ru: "CAD 3D // FEM расчёт нагрузок", uz: "CAD 3D // FEM yuklama hisobi" },
    body: "Мы готовы предоставить команду с необходимым опытом и способностью спроектировать современное складское оборудование, поддержку которой также оказывают итальянские специалисты.",
    steps: [
      {
        num: "01",
        title: { ru: "Логистический анализ", uz: "Logistika tahlili" },
        desc: { ru: "Расчет грузооборота, типов паллет, габаритов техники и ширины проездов.", uz: "Yuk aylanmasi, pallet turlari va texnika o'lchamlarini hisoblash." },
      },
      {
        num: "02",
        title: { ru: "3D Моделирование в CAD", uz: "CAD tizimida 3D modellashtirish" },
        desc: { ru: "Создание точной трехмерной схемы расстановки с оптимизацией емкости склада.", uz: "Ombor sig'imini optimallashtirish bilan aniq 3D joylashtirish chizmasi." },
      },
      {
        num: "03",
        title: { ru: "Инженерные спецификации", uz: "Muhandislik spetsifikatsiyalari" },
        desc: { ru: "Подготовка расчетных ведомостей, нагрузочных паспортов и документации.", uz: "Hisob-kitob vedomostlari, yuk pasportlari va hujjatlarni tayyorlash." },
      },
    ],
  },
];

export function serviceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
