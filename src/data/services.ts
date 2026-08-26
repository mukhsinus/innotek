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
    image: "/images/demontazh.jpeg",
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
    image: "/images/126081112_w600_h600_126081112.webp",
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
    image: "/images/site_image_01.jpg",
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
    image: "/images/proektirovaniye.jpeg",
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
  {
    slug: "lazernaya-rezka-metalla",
    path: "/services/lazernaya-rezka-metalla/",
    labelKey: "service.laserCutting",
    title: "Лазерная резка металла в Ташкенте | Innotek",
    description: "Высокоточная лазерная резка листового металла и профильных труб на станках с ЧПУ. Innotek, Ташкент.",
    h1: "Лазерная резка металла",
    lead: "Раскрой листовой стали, нержавеющей стали и алюминия любой сложности с точностью до 0.05 мм.",
    image: "/images/srv_laser_cutting.jpg",
    tag: { ru: "Волоконный лазер ЧПУ // До 25 мм", uz: "Tolali lazer CNC // 25 mm gacha" },
    body: "Высокоскоростная оптоволоконная резка гарантирует идеальное качество кромки без грата и термических деформаций, исключая необходимость последующей механической обработки.",
    steps: [
      {
        num: "01",
        title: { ru: "Оцифровка чертежей", uz: "Chizmalarni raqamlashtirish" },
        desc: { ru: "Загрузка DXF/DWG файлов и автоматическая оптимизация раскроя листа.", uz: "DXF/DWG fayllarni yuklash va list bichishini optimallashtirish." },
      },
      {
        num: "02",
        title: { ru: "Лазерный раскрой", uz: "Lazerli kesish" },
        desc: { ru: "Автоматический рез с контролем фокуса и поддержкой азотом/кислородом.", uz: "Fokus nazorati va gaz bilan avtomatik yuqori aniqlikdagi kesish." },
      },
      {
        num: "03",
        title: { ru: "Контроль геометрии", uz: "Geometriya nazorati" },
        desc: { ru: "Проверка деталей калибрами и измерительным инструментом по ОТК.", uz: "Detallarni OTK andozalari bo'yicha aniq tekshirish." },
      },
    ],
  },
  {
    slug: "gibka-listovogo-metalla",
    path: "/services/gibka-listovogo-metalla/",
    labelKey: "service.sheetBending",
    title: "Гибка листового металла в Ташкенте | Innotek",
    description: "Высокоточная гибка листового металла на гидравлических листогибочных прессах с ЧПУ в Ташкенте. Innotek.",
    h1: "Гибка листового металла",
    lead: "Формирование сложных пространственных профилей и полок с идеальной повторяемостью углов.",
    image: "/images/srv_sheet_bending.jpg",
    tag: { ru: "Листогибочный пресс ЧПУ // Усилие 160 т", uz: "Gidravlik bukish pressi // 160 t quvvat" },
    body: "Современные прессы с числовым программным управлением позволяют выполнять гибку заготовок длиной до 3200 мм с компенсацией прогиба балки и стабильным углом по всей длине изделия.",
    steps: [
      {
        num: "01",
        title: { ru: "Подбор инструмента", uz: "Asboblarni tanlash" },
        desc: { ru: "Выбор пуансонов и V-образных матриц под толщину и радиус гиба.", uz: "Qalinlik va bukish radiusiga mos matritsa va puansonlarni tanlash." },
      },
      {
        num: "02",
        title: { ru: "Программирование ЧПУ", uz: "CNC dasturlash" },
        desc: { ru: "Расчет развертки с учетом коэффициента упругости металла K-factor.", uz: "Metalning egiluvchanlik koeffitsientini hisobga olgan holda dasturlash." },
      },
      {
        num: "03",
        title: { ru: "Гибка и контроль", uz: "Bukish va nazorat" },
        desc: { ru: "Пошаговая гибка с лазерным контролем угла и проверкой размеров.", uz: "Burchakni lazer bilan nazorat qilib bosqichma-bosqich bukish." },
      },
    ],
  },
  {
    slug: "shtampovka-metalla",
    path: "/services/shtampovka-metalla/",
    labelKey: "service.stamping",
    title: "Штамповка металла в Ташкенте | Innotek",
    description: "Холодная штамповка металлических деталей, серийное производство крепежа, зацепов и фурнитуры. Innotek.",
    h1: "Штамповка металла",
    lead: "Высокопроизводительная холодная листовая штамповка серийных деталей и конструктивных элементов.",
    image: "/images/press.jpeg",
    tag: { ru: "Кривошипные и гидравлические прессы", uz: "Krivoship va gidravlik presslar" },
    body: "Выполняем операции вырубки, пробивки, гибки и вытяжки на штамповочных комплексах. Серийное изготовление зацепов, кронштейнов, соединителей и крепежных элементов.",
    steps: [
      {
        num: "01",
        title: { ru: "Установка оснастки", uz: "Qolipni o'rnatish" },
        desc: { ru: "Монтаж и юстировка штампа на прессе с выставлением рабочих зазоров.", uz: "Pressga shtampni o'rnatish va oraliq tirqishlarni to'g'rilash." },
      },
      {
        num: "02",
        title: { ru: "Штамповочный цикл", uz: "Shtamplash tsikli" },
        desc: { ru: "Автоматическая подача штрипса или заготовок с непрерывной вырубкой.", uz: "Lenta yoki zagotovkalarni uzluksiz uzatish bilan shtamplash." },
      },
      {
        num: "03",
        title: { ru: "Сортировка и калибровка", uz: "Saralash va kalibrlash" },
        desc: { ru: "Проверка посадочных отверстий и зачистка облоя при необходимости.", uz: "Teshiklar o'lchamini tekshirish va qirralarni tozalash." },
      },
    ],
  },
  {
    slug: "profilirovanie-metalla",
    path: "/services/profilirovanie-metalla/",
    labelKey: "service.rollForming",
    title: "Профилирование металла в Ташкенте | Innotek",
    description: "Прокатка металлических стоек, балок и сложных профилей на автоматических профилегибочных линиях. Innotek.",
    h1: "Профилирование металла",
    lead: "Непрерывная роликовая прокатка тонколистовой рулонной стали в замкнутые и открытые конструкционные профили.",
    image: "/images/srv_roll_forming.jpg",
    tag: { ru: "Автоматические прокатные станы", uz: "Avtomatik prokat stanlari" },
    body: "Собственные автоматические линии холодного профилирования производят несущие вертикальные стойки стеллажей, продольные балки и сложные направляющие с высокой жесткостью.",
    steps: [
      {
        num: "01",
        title: { ru: "Установка рулона", uz: "Rulonni o'rnatish" },
        desc: { ru: "Размотка рулонной конструкционной стали ST 37 с контролем натяжения.", uz: "ST 37 konstruksion po'lat rulonini tortish nazorati bilan yozish." },
      },
      {
        num: "02",
        title: { ru: "Роликовая прокатка", uz: "Rolikli prokatlash" },
        desc: { ru: "Поэтапное формирование ребер жесткости через каскад профильных клетей.", uz: "Profil kataklari kaskadi orqali mustahkamlik qovurg'alarini shakllantirish." },
      },
      {
        num: "03",
        title: { ru: "Летучий рез", uz: "Uchar kesish" },
        desc: { ru: "Высокоскоростная резка профиля в заданный размер без остановки линии.", uz: "Liniyani to'xtatmasdan profilni belgilangan uzunlikda kesish." },
      },
    ],
  },
  {
    slug: "valcovka-metalla",
    path: "/services/valcovka-metalla/",
    labelKey: "service.sheetRolling",
    title: "Вальцовка металла в Ташкенте | Innotek",
    description: "Вальцовка листового металла, труб и профиля. Изготовление цилиндрических и конических обечаек. Innotek.",
    h1: "Вальцовка металла",
    lead: "Радиусная гибка листового и сортового проката на 3-х и 4-валковых гидравлических вальцах.",
    image: "/images/rollng.jpeg",
    tag: { ru: "4-валковые вальцы с ЧПУ", uz: "4-valikli CNC valsovka stanogi" },
    body: "Изготавливаем цилиндрические и конические обечайки, кожухи конвейеров, резервуары, полутрубы и радиусные элементы строительных металлоконструкций с минимальной зоной прямого края.",
    steps: [
      {
        num: "01",
        title: { ru: "Подгибка кромок", uz: "Chetlarini bukish" },
        desc: { ru: "Предварительная подгибка начального и конечного края листа для идеального круга.", uz: "Mukammal aylana hosil qilish uchun chetlarini oldindan bukish." },
      },
      {
        num: "02",
        title: { ru: "Вальцевание", uz: "Valsovkalash" },
        desc: { ru: "Прокатка заготовки по расчетному радиусу за несколько проходов.", uz: "Zagotovkani hisoblangan radius bo'yicha bir necha o'tishda prokatlash." },
      },
      {
        num: "03",
        title: { ru: "Сварка продольного шва", uz: "Bo'ylama chokni payvandlash" },
        desc: { ru: "Стыковка и автоматическая сварка обечайки с контролем соосности.", uz: "Ulash va o'qlar to'g'riligini nazorat qilib avtomatik payvandlash." },
      },
    ],
  },
  {
    slug: "svarochnye-raboty",
    path: "/services/svarochnye-raboty/",
    labelKey: "service.welding",
    title: "Сварочные работы в Ташкенте | Innotek",
    description: "Профессиональные сварочные работы MIG/MAG, TIG. Аттестованные сварщики, строгий контроль швов. Innotek.",
    h1: "Сварочные работы",
    lead: "Полуавтоматическая и аргонодуговая сварка стальных и нержавеющих конструкций любой сложности.",
    image: "/images/srv_welding.jpg",
    tag: { ru: "MIG/MAG · TIG // Аттестация НАКС", uz: "MIG/MAG · TIG // Sertifikatlangan payvandlash" },
    body: "Сварочный цех оснащен современными полуавтоматическими инверторными аппаратами в среде защитных газов (Ar+CO2). Высокая прочность соединений и эстетичный внешний вид шва.",
    steps: [
      {
        num: "01",
        title: { ru: "Сборка на прихватках", uz: "Qisqichlarda yig'ish" },
        desc: { ru: "Фиксация деталей в сварочных кондукторах со строгой проверкой углов.", uz: "Burchaklarni tekshirib detallarni payvandlash konduktorida mahkamlash." },
      },
      {
        num: "02",
        title: { ru: "Основная сварка", uz: "Asosiy payvandlash" },
        desc: { ru: "Провар швов с соблюдением температурного режима и защитной газовой среды.", uz: "Harorat rejimi va himoya gazi muhitida choklarni payvandlash." },
      },
      {
        num: "03",
        title: { ru: "Зачистка и дефектоскопия", uz: "Tozalash va tekshirish" },
        desc: { ru: "Удаление брызг, зачистка швов и ультразвуковой/визуальный контроль.", uz: "Sachragan qismlarni tozalash va choklar sifatini nazorat qilish." },
      },
    ],
  },
  {
    slug: "robotizirovannaya-svarka",
    path: "/services/robotizirovannaya-svarka/",
    labelKey: "service.roboticWelding",
    title: "Роботизированная сварка в Ташкенте | Innotek",
    description: "Автоматизированная роботизированная сварка серийных деталей и стеллажных узлов. Innotek.",
    h1: "Роботизированная сварка",
    lead: "Промышленные роботы-манипуляторы для серийной сварки с идеальной точностью и стабильностью провара.",
    image: "/images/srv_robotic_welding.jpg",
    tag: { ru: "6-осевой робот-манипулятор // 100% повторяемость", uz: "6 o'qli robot manipulyator // 100% bir xillik" },
    body: "Роботизированный сварочный комплекс исключает человеческий фактор при серийном изготовлении зацепов балок, фланцев, рамных узлов и платформенных модулей.",
    steps: [
      {
        num: "01",
        title: { ru: "3D-программирование траектории", uz: "3D traektoriyani dasturlash" },
        desc: { ru: "Точная привязка координат горелки и расчет оптимального угла наклона.", uz: "Gorelka koordinatalarini aniq belgilash va qiyalik burchagini hisoblash." },
      },
      {
        num: "02",
        title: { ru: "Автоматическая сварка", uz: "Avtomatik payvandlash" },
        desc: { ru: "Сварка на двухосевом позиционере с непрерывным импульсным контролем дуги.", uz: "Ikki o'qli pozitsionerda yoyni uzluksiz impuls nazorati bilan payvandlash." },
      },
      {
        num: "03",
        title: { ru: "Контроль партии", uz: "Partiyani nazorat qilish" },
        desc: { ru: "Выборочные макрошлифы и проверка геометрии сваренного узла.", uz: "Payvandlangan tugun geometriyasi va mustahkamligini tekshirish." },
      },
    ],
  },
  {
    slug: "tokarnaya-obrabotka",
    path: "/services/tokarnaya-obrabotka/",
    labelKey: "service.turning",
    title: "Токарная обработка металла в Ташкенте | Innotek",
    description: "Токарные работы по металлу любой сложности на станках с ЧПУ и универсальных станках. Innotek.",
    h1: "Токарная обработка",
    lead: "Изготовление тел вращения: валов, втулок, роликов, осей, фланцев и резьбовых соединений.",
    image: "/images/cutting.jpeg",
    tag: { ru: "Токарные центры ЧПУ // Точность до IT7", uz: "CNC tokarlik markazlari // IT7 aniqlik" },
    body: "Токарный участок обрабатывает конструкционные, легированные и нержавеющие стали, цветные металлы и полимеры. Изготовление деталей по чертежам и образцам заказчика.",
    steps: [
      {
        num: "01",
        title: { ru: "Установка заготовки", uz: "Zagotovkani o'rnatish" },
        desc: { ru: "Закрепление в патроне с контролем радиального и торцевого биения.", uz: "Radial va chetki tebranishlarni tekshirib patronga mahkamlash." },
      },
      {
        num: "02",
        title: { ru: "Чистовое точение", uz: "Toza yo'nish" },
        desc: { ru: "Обработка твердосплавным инструментом на оптимальных режимах резания.", uz: "Optimal kesish rejimlarida qattiq qotishmali asbob bilan yo'nish." },
      },
      {
        num: "03",
        title: { ru: "Метрологический контроль", uz: "Metrologik nazorat" },
        desc: { ru: "Замер посадочных шеек микрометрами и нутромерами.", uz: "Mikrometrlar yordamida o'lchamlarni aniq tekshirish." },
      },
    ],
  },
  {
    slug: "frezernaya-obrabotka",
    path: "/services/frezernaya-obrabotka/",
    labelKey: "service.milling",
    title: "Фрезерная обработка в Ташкенте | Innotek",
    description: "Высокоточная 3D фрезерная обработка металлов на обрабатывающих центрах с ЧПУ. Innotek.",
    h1: "Фрезерная обработка",
    lead: "Обработка плоскостей, пазов, уступов, корпусных деталей и сложных 3D поверхностей.",
    image: "/images/6-12.jpg",
    tag: { ru: "3D/4-осевые фрезерные центры", uz: "3D/4 o'qli CNC frezalash markazlari" },
    body: "Фрезерование плит, пресс-форм, штампов, технологической оснастки и корпусных элементов оборудования с жесткими допусками и высокой чистотой поверхности.",
    steps: [
      {
        num: "01",
        title: { ru: "CAM-моделирование", uz: "CAM modellashtirish" },
        desc: { ru: "Создание управляющей программы с оптимизацией траекторий фрезы.", uz: "Freza traektoriyalarini optimallashtirib dastur yaratish." },
      },
      {
        num: "02",
        title: { ru: "Черновое и чистовое фрезерование", uz: "Qora va toza frezalash" },
        desc: { ru: "Снятие основного припуска и финишная доводка контуров с СОЖ.", uz: "Asosiy qatlamni olish va sovutish suyuqligi bilan toza pardozlash." },
      },
      {
        num: "03",
        title: { ru: "Координатный контроль", uz: "Koordinata nazorati" },
        desc: { ru: "Проверка плоскостности, параллельности и взаимного расположения поверхностей.", uz: "Yuzalar tekisligi va parallelligini tekshirish." },
      },
    ],
  },
  {
    slug: "shlifovka-metalla",
    path: "/services/shlifovka-metalla/",
    labelKey: "service.grinding",
    title: "Шлифовка металла в Ташкенте | Innotek",
    description: "Плоское и круглое шлифование металла с микронной точностью и высокой чистотой поверхности. Innotek.",
    h1: "Шлифовка металла",
    lead: "Финишная механическая обработка деталей для достижения эталонной шероховатости Ra 0.4.",
    image: "/images/site_image_01.jpg",
    tag: { ru: "Плоско- и круглошлифовальные станки", uz: "Yassi va doiraviy silliqlash stanoklari" },
    body: "Шлифование закаленных направляющих, валов, ножей гильотин, плит штампов и ответственных сопрягаемых поверхностей механизмов.",
    steps: [
      {
        num: "01",
        title: { ru: "Магнитное базирование", uz: "Magnitli mahkamlash" },
        desc: { ru: "Фиксация заготовки на электромагнитной плите с проверкой плоскости.", uz: "Zagotovkani elektromagnit plitaga tekislikni tekshirib o'rnatish." },
      },
      {
        num: "02",
        title: { ru: "Абразивное шлифование", uz: "Abraziv silliqlash" },
        desc: { ru: "Прецизионная обработка корундовыми и алмазными кругами с подачей СОЖ.", uz: "Almos va korund doiralar bilan sovutish orqali aniq silliqlash." },
      },
      {
        num: "03",
        title: { ru: "Контроль шероховатости", uz: "G'adir-budurlikni nazorat qilish" },
        desc: { ru: "Проверка чистоты поверхности профилометром и микронными индикаторами.", uz: "Profilometr bilan sirt tozaligi va o'lchamlarini tekshirish." },
      },
    ],
  },
  {
    slug: "izgotovlenie-metallokonstrukcij",
    path: "/services/izgotovlenie-metallokonstrukcij/",
    labelKey: "service.metalStructures",
    title: "Изготовление металлоконструкций в Ташкенте | Innotek",
    description: "Проектирование и производство строительных и промышленных металлоконструкций под ключ в Ташкенте. Innotek.",
    h1: "Изготовление металлоконструкций",
    lead: "Производство колонн, ферм, балок, эстакад и несущих каркасов зданий и складов.",
    image: "/images/cat_metal_structures.jpg",
    tag: { ru: "Заводское изготовление // ГОСТ 23118", uz: "Zavod ishlab chiqarishi // GOST 23118" },
    body: "Полный технологический цикл: заготовка, плазменная резка, сборка на стапелях, автоматическая сварка, дробеструйная очистка и антикоррозийная защита.",
    steps: [
      {
        num: "01",
        title: { ru: "Разработка КМД", uz: "KMD loyihalash" },
        desc: { ru: "Деталировочное проектирование узлов и подготовка монтажных схем.", uz: "Tugunlarni batafsil loyihalash va montaj chizmalarini tayyorlash." },
      },
      {
        num: "02",
        title: { ru: "Заводская сборка", uz: "Zavodda yig'ish" },
        desc: { ru: "Сборка отправочных марок на кондукторах с контролем линейных размеров.", uz: "Chiziqli o'lchamlarni nazorat qilib konduktorlarda markalarni yig'ish." },
      },
      {
        num: "03",
        title: { ru: "Антикоррозийная защита", uz: "Korroziyaga qarshi himoya" },
        desc: { ru: "Грунтование и покраска промышленными эмалями по спецификации проекта.", uz: "Loyiha talablariga binoan gruntlash va sanoat bo'yoqlari bilan qoplash." },
      },
    ],
  },
  {
    slug: "proektirovanie-i-raschet",
    path: "/services/proektirovanie-i-raschet/",
    labelKey: "service.designAndCalc",
    title: "Проектирование и технический расчет | Innotek",
    description: "Инженерный расчет нагрузок, сейсмостойкости и проектирование металлоконструкций и стеллажей. Innotek.",
    h1: "Проектирование и расчет",
    lead: "Комплексные прочностные расчеты, 3D BIM-моделирование и разработка рабочей документации.",
    image: "/images/office.jpeg",
    tag: { ru: "SCAD / LIRA / BIM // Расчет сейсмики 9 баллов", uz: "SCAD / LIRA / BIM // 9 ball seysmik hisob" },
    body: "Инженерный отдел выполняет прочностные расчеты конструкций в расчетных комплексах с учетом снеговых, ветровых и сейсмических нагрузок Узбекистана по действующим КМК и ШНК.",
    steps: [
      {
        num: "01",
        title: { ru: "Сбор нагрузок", uz: "Yuklamalarni yig'ish" },
        desc: { ru: "Анализ эксплуатационных, климатических и технологических факторов.", uz: "Foydalanish, iqlim va texnologik omillarni tahlil qilish." },
      },
      {
        num: "02",
        title: { ru: "Компьютерное моделирование", uz: "Kompyuterda modellashtirish" },
        desc: { ru: "Построение конечно-элементной модели (FEM) и расчет напряжений в узлах.", uz: "Chekli elementlar modelini qurish va kuchlanishlarni hisoblash." },
      },
      {
        num: "03",
        title: { ru: "Выдача комплекта чертежей", uz: "Chizmalar to'plamini berish" },
        desc: { ru: "Оформление разделов КМ/КМД со спецификациями металлопроката и метизов.", uz: "Metall prokati va detallar spetsifikatsiyasi bilan KM/KMD berish." },
      },
    ],
  },
  {
    slug: "perforaciya-metalla",
    path: "/services/perforaciya-metalla/",
    labelKey: "service.perforation",
    title: "Перфорация металла в Ташкенте | Innotek",
    description: "Координатно-пробивная перфорация листового металла, стоек стеллажей и торговых панелей. Innotek.",
    h1: "Перфорация металла",
    lead: "Высокоскоростная пробивка отверстий круглой, квадратной, щелевой и фигурной формы.",
    image: "/images/holes.jpeg",
    tag: { ru: "Координатно-пробивной пресс ЧПУ", uz: "CNC koordinata-teshish pressi" },
    body: "Производство перфорированных металлических листов, сит, фасадных панелей, полок и несущих стоек стеллажей с шагом перфорации 50 мм под зацепные замки.",
    steps: [
      {
        num: "01",
        title: { ru: "Выбор шага и формы", uz: "Qadam va shaklni tanlash" },
        desc: { ru: "Подбор геометрии пуансонов: круглые, овальные, шестигранные или фигурные.", uz: "Puansonlar geometriyasini tanlash: doiraviy, oval yoki shaklli." },
      },
      {
        num: "02",
        title: { ru: "Автоматическая пробивка", uz: "Avtomatik teshish" },
        desc: { ru: "Высокоскоростная перфорация листа с шагом по программе ЧПУ.", uz: "CNC dasturi bo'yicha yuqori tezlikda avtomatik teshish." },
      },
      {
        num: "03",
        title: { ru: "Правка листа", uz: "Listni to'g'rilash" },
        desc: { ru: "Калибровка на валковой правильной машине для снятия остаточных напряжений.", uz: "Qoldiq kuchlanishlarni yo'qotish uchun to'g'rilash stanogida kalibrlash." },
      },
    ],
  },
  {
    slug: "izgotovlenie-po-chertezham",
    path: "/services/izgotovlenie-po-chertezham/",
    labelKey: "service.customFabrication",
    title: "Изготовление изделий по чертежам заказчика | Innotek",
    description: "Индивидуальное производство металлоизделий и нестандартного складского оборудования в Ташкенте. Innotek.",
    h1: "Изделия по чертежам",
    lead: "Контрактное производство нестандартных металлоконструкций, емкостей, рам и оборудования под ключ.",
    image: "/images/18-6.jpg",
    tag: { ru: "Индивидуальный инжиниринг // Под ключ", uz: "Individual muhandislik // Noldan kalitgacha" },
    body: "Реализуем проекты любой степени сложности по предоставленным чертежам, эскизам или техническому заданию. Отрабатываем технологию, изготавливаем опытный образец и запускаем серию.",
    steps: [
      {
        num: "01",
        title: { ru: "Аудит документации", uz: "Hujjatlarni audit qilish" },
        desc: { ru: "Технологический анализ чертежей, подбор марок сталей и оптимизация раскроя.", uz: "Chizmalarni tahlil qilish, po'lat markasini tanlash va optimallashtirish." },
      },
      {
        num: "02",
        title: { ru: "Опытный образец", uz: "Tajriba namunasi" },
        desc: { ru: "Изготовление прототипа, согласование с заказчиком и тестовые испытания.", uz: "Prototip tayyorlash, buyurtmachi bilan kelishish va sinovlar." },
      },
      {
        num: "03",
        title: { ru: "Серийный выпуск", uz: "Seriyali ishlab chiqarish" },
        desc: { ru: "Запуск в производство, порошковая покраска, маркировка и упаковка.", uz: "Ishlab chiqarishga topshirish, polimer bo'yash, markalash va qadoqlash." },
      },
    ],
  },
];

export function serviceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
