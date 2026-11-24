/**
 * Региональные SEO-посадки (RU и UZ) для ключевых городов и регионов Узбекистана.
 * Факты о производстве, адресе и характеристиках — только из SITE, HOME и catalog.ts:
 * без выдуманных филиалов, цен и рейтингов.
 */
import type { Lang } from "../i18n/ui";
import type { FaqItem } from "./catalog";
import type { SeoLanding, SeoRelated, SeoTypeLink } from "./landings";
import { SITE } from "./site";

type LocalizedCopy = {
  title: string;
  description: string;
  kicker: string;
  h1: string;
  lead: string;
  city: string;
  region: string;
  intro: string[];
  points: string[];
  seoHeading: string;
  seoParagraphs: string[];
  faqs: FaqItem[];
  ctaCatalogLabel: string;
};

type LocationConfig = {
  slug: string;
  image: string;
  isHeadquarters?: boolean;
  ru: LocalizedCopy;
  uz: LocalizedCopy;
};

const RACK_TYPES: Record<Lang, SeoTypeLink[]> = {
  ru: [
    {
      path: "/catalog/stellazhi/palletnye-stellazhi/",
      title: "Паллетные стеллажи",
      text: "Фронтальное хранение европоддонов (EUR) и финских паллет (FIN) с прямым доступом к каждому месту.",
    },
    {
      path: "/catalog/stellazhi/palletno-polochnye-stellazhi/",
      title: "Паллето-полочные стеллажи",
      text: "Универсальные сборно-разборные конструкции для коробок, архивов, магазина и производства.",
    },
    {
      path: "/catalog/stellazhi/nabivnye-stellazhi/",
      title: "Набивные стеллажи (Drive-in)",
      text: "Глубинное блочное хранение без межрядных проходов для однотипного товара на поддонах.",
    },
    {
      path: "/catalog/stellazhi/mezoninnye-stellazhi/",
      title: "Мезонинные стеллажи",
      text: "Многоярусные платформы на колоннах и балках для кратного увеличения площади при высоких потолках.",
    },
  ],
  uz: [
    {
      path: "/catalog/stellazhi/palletnye-stellazhi/",
      title: "Pallet stelajlari",
      text: "Yevropalletlar (EUR) va finpalletlarni (FIN) har bir joyga to‘g‘ridan-to‘g‘ri kirish bilan saqlash.",
    },
    {
      path: "/catalog/stellazhi/palletno-polochnye-stellazhi/",
      title: "Pallet-polokali stelajlar",
      text: "Qutilar, arxiv, do‘kon va ishlab chiqarish uchun universal yig‘ma-ajratiluvchi tizimlar.",
    },
    {
      path: "/catalog/stellazhi/nabivnye-stellazhi/",
      title: "Nabiv (Drive-in) stelajlar",
      text: "Yo‘laksiz zich blokli saqlash: yuklash texnikasi tizim ichiga kirib ishlaydi.",
    },
    {
      path: "/catalog/stellazhi/mezoninnye-stellazhi/",
      title: "Mezonin stelajlar",
      text: "Baland shiftli omborlarda foydali saqlash maydonini bir necha qavatga kengaytirish.",
    },
  ],
};

const LOCATIONS: LocationConfig[] = [
  {
    slug: "stellazhi-tashkent",
    image: "/images/site_image_01.jpg",
    isHeadquarters: true,
    ru: {
      title: "Стеллажи в Ташкенте и Ташкентской области — завод Innotek",
      description:
        "Производство и продажа металлических стеллажей в Ташкенте и области. Собственный завод на массиве Жангох 2аБ, CAD-проектирование, доставка и монтаж.",
      kicker: "Ташкент и область · Завод Innotek",
      h1: "Стеллажи в Ташкенте и области",
      lead: "Собственное производство в Ташкенте (массив Жангох 2аБ): расчёт нагрузок, выпуск на 5 автоматических линиях, оперативная отгрузка и выездной монтаж.",
      city: "Ташкент",
      region: "Ташкент и Ташкентская область",
      intro: [
        "Завод и конструкторский отдел Innotek расположены непосредственно в Ташкенте. Мы выпускаем складские, торговые, консольные и мезонинные стеллажи из стали ST 37 под параметры конкретного помещения и складской техники.",
        "Для объектов в Ташкенте и Ташкентской области — распределительных центров, производственных цехов, торговых сетей и архивов — организуем выезд инженера на замер, разработку 3D CAD-схемы расстановки, доставку со склада и монтаж по требованиям ГОСТ и СНиП.",
      ],
      points: [
        `Завод и офис в Ташкенте: ${SITE.address.street.ru}`,
        "Выезд инженера на замер в черте города и по области",
        "Сталь ST 37, шаг перфорации стоек 50 мм, контроль ISO 9001:2015",
        "Проектирование и анкеровка с учётом сейсмики до 9 баллов",
        "Порошковая окраска в стандартные цвета RAL 5005 / 2004 или под заказ",
      ],
      seoHeading: "Купить стеллажи напрямую с завода в Ташкенте",
      seoParagraphs: [
        "Заказ напрямую у производителя в Ташкенте исключает посреднические наценки и сокращает сроки комплектации объекта. В наличии и под заказ поддерживаются стойки, балки, настилы и комплектующие для паллетных, полочных, набивных и торговых систем.",
        "Оказываем полный цикл работ для компаний Ташкента и промышленных зон Ташкентской области: от подбора сечения профиля под нагрузку до лазерной нивелировки и сдачи стеллажных рядов в эксплуатацию.",
      ],
      faqs: [
        {
          q: "Где находится производство стеллажей Innotek в Ташкенте?",
          a: `Головной офис и производственная площадка находятся по адресу: ${SITE.address.ru}. График работы: ${SITE.hours.days}, ${SITE.hours.weekdays}.`,
        },
        {
          q: "Выезжает ли инженер на замер по Ташкенту и Ташкентской области?",
          a: "Да, специалисты выезжают на объекты в Ташкенте и районах Ташкентской области для замера помещения, проверки ровности полов и подготовки CAD-расстановки.",
        },
        {
          q: "Какие стеллажи доступны для заказа в Ташкенте?",
          a: "Выпускаем паллетные, паллето-полочные, набивные (Drive-in), консольные, мезонинные, кабельные, самонесущие, архивные и торговые стеллажи, а также металлические платформы и шкафы.",
        },
        {
          q: "Как заказать расчёт и доставку по Ташкенту?",
          a: `Оставьте заявку на сайте или позвоните по номеру ${SITE.phone.display} — подготовим спецификацию и коммерческое предложение.`,
        },
      ],
      ctaCatalogLabel: "Каталог стеллажей",
    },
    uz: {
      title: "Toshkent va Toshkent viloyatida stelajlar — Innotek zavodi",
      description:
        "Toshkent shahri va viloyatida ishlab chiqaruvchidan metall stelajlar. Jangoh 2aB massividagi zavod, 3D CAD loyihalash, yetkazib berish va montaj.",
      kicker: "Toshkent va viloyat · Innotek zavodi",
      h1: "Toshkent va viloyatda stelajlar",
      lead: "Toshkentdagi o‘z zavodimiz (Jangoh 2aB massivi): yuklama hisob-kitobi, 5 ta avtomatik liniyada ishlab chiqarish, tezkor yetkazib berish va montaj.",
      city: "Toshkent",
      region: "Toshkent shahri va Toshkent viloyati",
      intro: [
        "Innotek zavodi va konstruktorlik bo‘limi bevosita Toshkentda joylashgan. Biz ST 37 po‘latidan ombor, savdo, konsol va mezonin stelajlarini obyekt o‘lchamlari va yuklash texnikasiga mos holda ishlab chiqaramiz.",
        "Toshkent shahri va Toshkent viloyatidagi logistika markazlari, ishlab chiqarish sexlari, do‘konlar va arxivlar uchun muhandisning obyektga chiqishi, 3D CAD joylashtirish chizmasini tuzish hamda GOST va SNiP talablariga muvofiq montaj xizmatlarini bajaramiz.",
      ],
      points: [
        `Toshkentdagi zavod va ofis: ${SITE.address.street.uz}`,
        "Shahar va viloyat bo‘ylab muhandisning o‘lchovga chiqishi",
        "ST 37 po‘lati, 50 mm perforatsiya qadami, ISO 9001:2015 nazorati",
        "9 ballgacha seysmik barqarorlikni hisobga olgan holda loyihalash",
        "RAL 5005 / 2004 yoki buyurtmachi rangi bo‘yicha kukunli bo‘yash",
      ],
      seoHeading: "Toshkentdagi zavoddan to‘g‘ridan-to‘g‘ri stelaj xarid qilish",
      seoParagraphs: [
        "Toshkentdagi ishlab chiqaruvchidan to‘g‘ridan-to‘g‘ri buyurtma berish vositachilarsiz narx va aniq texnik nazoratni ta’minlaydi. Pallet, polokali, nabiv va savdo tizimlari uchun ustunlar, balkalar va butlovchi qismlar tayyorlanadi.",
        "Toshkent va Toshkent viloyati sanoat zonalaridagi korxonalarga yuklama hisobidan tortib lazerli tekislash va foydalanishga topshirishgacha bo‘lgan to‘liq xizmatlar majmuasini taqdim etamiz.",
      ],
      faqs: [
        {
          q: "Innotek stelaj zavodi Toshkentning qayerida joylashgan?",
          a: `Bosh ofis va ishlab chiqarish maydoni manzili: ${SITE.address.uz}. Ish vaqti: Du–Ju, ${SITE.hours.weekdays}.`,
        },
        {
          q: "Muhandis Toshkent va Toshkent viloyatiga o‘lchovga chiqadimi?",
          a: "Ha, mutaxassislarimiz Toshkent shahri va Toshkent viloyati tumanlaridagi obyektlarga chiqib, o‘lchov oladi va CAD loyiha tayyorlaydi.",
        },
        {
          q: "Toshkentda qanday turdagi stelajlarga buyurtma berish mumkin?",
          a: "Pallet, pallet-polokali, nabiv (Drive-in), konsol, mezonin, kabel, o‘zini ko‘taruvchi, arxiv va savdo stelajlari hamda metall platformalar ishlab chiqaramiz.",
        },
        {
          q: "Narx hisobi va yetkazib berishni qanday buyurtma qilish mumkin?",
          a: `Sayt orqali ariza qoldiring yoki ${SITE.phone.display} raqamiga qo‘ng‘iroq qiling — texnik spetsifikatsiya va tijorat taklifini tayyorlab beramiz.`,
        },
      ],
      ctaCatalogLabel: "Stelajlar katalogi",
    },
  },
  {
    slug: "stellazhi-samarkand",
    image: "/images/sklad.jpg",
    ru: {
      title: "Стеллажи в Самарканде — купить от производителя с доставкой | Innotek",
      description:
        "Складские, паллетные, полочные и торговые стеллажи в Самарканде. Заводское производство Innotek (Ташкент), расчёт проекта, доставка и монтаж по Самаркандской области.",
      kicker: "Регионы · Самарканд",
      h1: "Стеллажи в Самарканде",
      lead: "Проектирование, заводское изготовление в Ташкенте, доставка и выездной монтаж стеллажных систем для складов, производств и магазинов Самарканда и области.",
      city: "Самарканд",
      region: "Самаркандская область",
      intro: [
        "Поставляем металлические стеллажи в Самарканд и районы Самаркандской области для логистических терминалов, пищевых и промышленных предприятий, дистрибьюторских складов и розничной торговли.",
        "Подбираем конфигурацию по плану помещения и габаритам паллет: от фронтальных и набивных систем высокой плотности до полочных и пристенных торговых стеллажей. Отгрузка идёт напрямую с завода Innotek с организацией перевозки и шеф-монтажа.",
      ],
      points: [
        "Удалённый CAD-расчёт по чертежу или размерам помещения в Самарканде",
        "Прямая заводская поставка без региональных наценок",
        "Организованная доставка в Самарканд и по Самаркандской области",
        "Выезд аттестованной монтажной бригады с нивелировкой и анкеровкой",
      ],
      seoHeading: "Поставка и монтаж стеллажей в Самарканде и области",
      seoParagraphs: [
        "При оснащении склада или торгового зала в Самарканде важно заранее учесть высоту потолков, ширину проходов под погрузчик или ричтрак и допустимую нагрузку на пол. Инженеры Innotek формируют точную спецификацию стоек, балок и защитных элементов.",
        "Все конструкции изготавливаются из стали ST 37 с полимерным порошковым покрытием и проходят контроль качества по O'z DSt ISO 9001:2015 перед отправкой в Самарканд.",
      ],
      faqs: [
        {
          q: "Как заказать стеллажи в Самарканд?",
          a: `Отправьте размеры склада или ТЗ через форму на сайте или по телефону ${SITE.phone.display}. Подготовим схему расстановки, расчёт стоимости и график поставки в Самарканд.`,
        },
        {
          q: "Выполняете ли вы монтаж стеллажей в Самаркандской области?",
          a: "Да, при необходимости отправляем собственную монтажную бригаду для сборки, анкерного крепления к полу и проверки геометрии конструкций на объекте.",
        },
        {
          q: "Какие системы чаще всего заказывают в Самарканде?",
          a: "Наиболее востребованы паллетные и паллето-полочные стеллажи для распределительных складов, набивные системы для холодильных камер и торговые стеллажи для супермаркетов.",
        },
      ],
      ctaCatalogLabel: "Смотреть каталог стеллажей",
    },
    uz: {
      title: "Samarqandda stelajlar — ishlab chiqaruvchidan yetkazib berish | Innotek",
      description:
        "Samarqand va Samarqand viloyati uchun ombor, pallet, polokali va savdo stelajlari. Innotek zavodidan (Toshkent) to‘g‘ridan-to‘g‘ri yetkazib berish va montaj.",
      kicker: "Hududlar · Samarqand",
      h1: "Samarqandda stelajlar",
      lead: "Samarqand shahri va viloyatidagi omborlar, ishlab chiqarish va savdo obyektlari uchun loyihalash, zavodda ishlab chiqarish, yetkazib berish va montaj.",
      city: "Samarqand",
      region: "Samarqand viloyati",
      intro: [
        "Samarqand shahri va Samarqand viloyati tumanlaridagi logistika terminallari, oziq-ovqat va sanoat korxonalari, distribyutorlik omborlari hamda savdo tarmoqlari uchun metall stelajlarni yetkazib beramiz.",
        "Xona rejasi va pallet o‘lchamlari asosida eng maqbul konfiguratsiyani tanlaymiz: frontal va zich nabiv tizimlardan tortib polokali va savdo stelajlarigacha. Buyurtmalar Toshkentdagi Innotek zavodidan to‘g‘ridan-to‘g‘ri jo‘natiladi.",
      ],
      points: [
        "Samarqanddagi obyekt chizmasi asosida masofadan 3D CAD hisob-kitob",
        "Vositachilarsiz to‘g‘ridan-to‘g‘ri zavod narxida yetkazib berish",
        "Samarqand va viloyat tumanlariga transport tashkil etish",
        "Attestatsiyadan o‘tgan brigada tomonidan o‘rnatish va ankerlash",
      ],
      seoHeading: "Samarqandda ombor va savdo stelajlarini yetkazib berish",
      seoParagraphs: [
        "Samarqandda ombor yoki do‘kon jihozlashda shift balandligi, yuklagich texnikasi uchun yo‘lak kengligi va polga tushadigan yuklama aniq hisoblanadi. Innotek muhandislari ustun va balkalarning aniq spetsifikatsiyasini tuzib beradi.",
        "Barcha konstruksiyalar ST 37 po‘latidan kukunli polimer bo‘yoq bilan tayyorlanadi va Samarqandga jo‘natishdan oldin O'z DSt ISO 9001:2015 sifat nazoratidan o‘tadi.",
      ],
      faqs: [
        {
          q: "Samarqandga stelajlarni qanday buyurtma qilish mumkin?",
          a: `Saytdagi ariza orqali ombor o‘lchamlarini yuboring yoki ${SITE.phone.display} raqamiga qo‘ng‘iroq qiling — joylashtirish sxemasi va yetkazib berish muddatini hisoblab beramiz.`,
        },
        {
          q: "Samarqand viloyatida montaj xizmati bormi?",
          a: "Ha, zaruratga ko‘ra o‘z montaj brigadamiz obyektga chiqib, stelajlarni yig‘adi, polga ankerlaydi va tekisligini tekshiradi.",
        },
        {
          q: "Samarqandda qaysi turdagi stelajlar ko‘proq buyurtma qilinadi?",
          a: "Distribyutorlik omborlari uchun pallet va pallet-polokali tizimlar, sovutish kameralari uchun nabiv stelajlar hamda do‘konlar uchun savdo stelajlari eng ommabop.",
        },
      ],
      ctaCatalogLabel: "Stelajlar katalogini ko‘rish",
    },
  },
  {
    slug: "stellazhi-bukhara",
    image: "/images/8-16.jpg",
    ru: {
      title: "Стеллажи в Бухаре — складские и торговые системы с доставкой | Innotek",
      description:
        "Купить металлические стеллажи в Бухаре и Бухарской области от завода Innotek. Паллетные, полочные, консольные и архивные стеллажи с доставкой и монтажом.",
      kicker: "Регионы · Бухара",
      h1: "Стеллажи в Бухаре",
      lead: "Производство складских и торговых стеллажей под параметры объекта в Бухаре и Бухарской области. Проектирование, доставка из Ташкента и монтаж под ключ.",
      city: "Бухара",
      region: "Бухарская область",
      intro: [
        "Обеспечиваем предприятия, строительные базы, текстильные склады и магазины Бухары и Бухарской области надёжными металлическими стеллажами заводского изготовления.",
        "В зависимости от номенклатуры грузов подбираем паллетные, паллето-полочные, консольные системы для длинномеров или торговые пристенные и островные конструкции, включая порошковую окраску с антикоррозийной защитой.",
      ],
      points: [
        "Устойчивое полимерное покрытие для защиты металла от коррозии",
        "Расчёт нагрузок и расстановки под габариты склада в Бухаре",
        "Доставка в Бухару, Каган, Гиждуван и другие районы области",
        "Сборка и сдача систем квалифицированной бригадой Innotek",
      ],
      seoHeading: "Металлические стеллажи в Бухаре от производителя",
      seoParagraphs: [
        "Заводское профилирование стали ST 37 и 8-зацепные замки балок обеспечивают жёсткость и безопасность многоярусного хранения. Все элементы упаковываются для сохранной междугородней перевозки в Бухару.",
        "Помимо стеллажей комплектуем объекты в Бухарской области металлическими платформами, складскими тележками, подъёмными столами и погрузочными рампами.",
      ],
      faqs: [
        {
          q: "Осуществляете ли вы доставку стеллажей в Бухару и Бухарскую область?",
          a: "Да, организуем регулярную отгрузку и доставку стеллажей с завода в Ташкенте в Бухару и населённые пункты Бухарской области.",
        },
        {
          q: "Можно ли заказать стеллажи для длинномерных и нестандартных грузов?",
          a: "Да, для труб, металлопроката, профиля и пиломатериалов изготавливаем консольные стеллажи и усиленные промышленные платформы под ТЗ.",
        },
        {
          q: "Как рассчитывается стоимость проекта для Бухары?",
          a: "Стоимость зависит от количества секций, ярусов, нагрузки на уровень и объёма монтажных работ. Оставьте заявку для точного расчёта.",
        },
      ],
      ctaCatalogLabel: "Каталог стеллажей",
    },
    uz: {
      title: "Buxoroda stelajlar — ombor va savdo tizimlari yetkazib berish | Innotek",
      description:
        "Buxoro va Buxoro viloyati uchun Innotek zavodidan metall stelajlar. Pallet, polokali, konsol va arxiv stelajlarini yetkazib berish va o‘rnatish.",
      kicker: "Hududlar · Buxoro",
      h1: "Buxoroda stelajlar",
      lead: "Buxoro shahri va Buxoro viloyatidagi obyektlar uchun ombor hamda savdo stelajlarini ishlab chiqarish, Toshkentdan yetkazib berish va kalit topshirish montaji.",
      city: "Buxoro",
      region: "Buxoro viloyati",
      intro: [
        "Buxoro va Buxoro viloyatidagi ishlab chiqarish korxonalari, qurilish bazalari, to‘qimachilik omborlari hamda do‘konlarni zavodda ishlab chiqarilgan mustahkam metall stelajlar bilan ta’minlaymiz.",
        "Yuk turiga qarab pallet, pallet-polokali, uzun yuklar uchun konsol tizimlari yoki devorbo‘yi va orolcha savdo stelajlarini tanlab beramiz.",
      ],
      points: [
        "Metallni korroziyadan himoya qiluvchi chidamli polimer qoplama",
        "Buxorodagi ombor o‘lchamlari bo‘yicha yuklama va joylashtirish hisobi",
        "Buxoro, Kogon, G‘ijduvon va viloyat tumanlariga yetkazib berish",
        "Malakali Innotek brigadasi tomonidan montaj va topshirish",
      ],
      seoHeading: "Buxoroda ishlab chiqaruvchidan metall stelajlar",
      seoParagraphs: [
        "ST 37 po‘latidan zavod usulida profillash va 8 ilgakli balka qulflari ko‘p qavatli saqlashning ishonchliligini ta’minlaydi. Barcha elementlar Buxoroga xavfsiz tashish uchun qadoqlanadi.",
        "Stelajlardan tashqari Buxoro viloyati obyektlarini metall platformalar, ombor aravachalari va yuklash rampalari bilan ham butlaymiz.",
      ],
      faqs: [
        {
          q: "Buxoro va Buxoro viloyatiga stelajlarni yetkazib berasizlarmi?",
          a: "Ha, Toshkentdagi zavodimizdan Buxoro shahri va Buxoro viloyati tumanlariga yetkazib berishni tashkil qilamiz.",
        },
        {
          q: "Uzun o‘lchamli yoki og‘ir yuklar uchun stelaj buyurtma qilsa bo‘ladimi?",
          a: "Ha, quvurlar, metall profil va taxtalar uchun konsol stelajlar hamda kuchaytirilgan sanoat platformalarini tayyorlab beramiz.",
        },
        {
          q: "Buxoro uchun loyiha narxi qanday hisoblanadi?",
          a: "Narx seksiyalar soni, qavatlar miqdori, yuklama va montaj hajmiga bog‘liq. Aniq hisob uchun ariza qoldiring.",
        },
      ],
      ctaCatalogLabel: "Stelajlar katalogi",
    },
  },
  {
    slug: "stellazhi-fergana",
    image: "/images/2.jpg",
    ru: {
      title: "Стеллажи в Фергане — купить складские стеллажи с доставкой | Innotek",
      description:
        "Производство и поставка металлических стеллажей в Фергану и по Ферганской долине. Паллетные, полочные, архивные и торговые системы Innotek, монтаж под ключ.",
      kicker: "Регионы · Фергана",
      h1: "Стеллажи в Фергане",
      lead: "Заводские стеллажные системы для складов, логистики, производства и торговли в Фергане и городах Ферганской области. Расчёт, доставка и монтаж.",
      city: "Фергана",
      region: "Ферганская область",
      intro: [
        "Поставляем складские и торговые стеллажи в Фергану, Коканд, Маргилан и районы Ферганской области. Решения подходят для промышленных цехов, текстильных и фармацевтических складов, дистрибуции и розничных магазинов.",
        "Перед отгрузкой выполняем инженерный расчёт нагрузки на ярус, подбираем тип стоек и балок, формируем полную комплектацию анкерами и защитой стоек.",
      ],
      points: [
        "Комплексные поставки в Фергану, Маргилан, Коканд и область",
        "Конструкционная сталь ST 37, сертификат O'z DSt ISO 9001:2015",
        "Паллетные, полочные, набивные, мезонинные и торговые системы",
        "Шеф-монтаж и выездная установка стеллажей по стандартам ГОСТ",
      ],
      seoHeading: "Заказать стеллажи для склада и магазина в Фергане",
      seoParagraphs: [
        "Правильно подобранная стеллажная система позволяет в 2–3 раза увеличить вместимость склада в Фергане без аренды дополнительных площадей. Для штучных и коробочных грузов оптимальны паллето-полочные серии, а для крупного грузооборота — паллетные и гравитационные конструкции.",
        "Работаем по договору с юридическими и частными лицами, обеспечивая прозрачные сроки изготовления и доставки в Ферганскую область.",
      ],
      faqs: [
        {
          q: "Доставляете ли вы стеллажи в Фергану, Коканд и Маргилан?",
          a: "Да, организуем поставку со склада и завода в Ташкенте в Фергану, Коканд, Маргилан и другие города Ферганской области.",
        },
        {
          q: "Есть ли гарантия и сертификация на стеллажи?",
          a: "Производство сертифицировано по стандарту O'z DSt ISO 9001:2015, конструкции рассчитываются с учётом ГОСТ и СНиП.",
        },
        {
          q: "Можно ли заказать вместе со стеллажами складскую технику?",
          a: "Да, помимо стеллажей поставляем рохли, штабелеры, ричтраки, грузовые лифты и доклевеллеры.",
        },
      ],
      ctaCatalogLabel: "Перейти в каталог",
    },
    uz: {
      title: "Farg‘onada stelajlar — ombor va savdo stelajlarini yetkazib berish | Innotek",
      description:
        "Farg‘ona, Qo‘qon, Marg‘ilon va Farg‘ona viloyati uchun metall stelajlar. Innotek zavodidan pallet, polokali, arxiv va savdo tizimlari, yetkazib berish va montaj.",
      kicker: "Hududlar · Farg‘ona",
      h1: "Farg‘onada stelajlar",
      lead: "Farg‘ona shahri va viloyat hududidagi omborlar, ishlab chiqarish va do‘konlar uchun zavod stelaj tizimlari. Muhandislik hisobi, yetkazib berish va montaj.",
      city: "Farg‘ona",
      region: "Farg‘ona viloyati",
      intro: [
        "Farg‘ona, Qo‘qon, Marg‘ilon va Farg‘ona viloyatining barcha tumanlariga ombor va savdo stelajlarini yetkazib beramiz. Tizimlar sanoat sexlari, to‘qimachilik va farmatsevtika omborlari hamda savdo zallari uchun mos.",
        "Jo‘natishdan oldin yarus yuklamasini hisoblaymiz, ustun va balkalarning mos kesimini tanlaymiz hamda anker va himoya elementlari bilan to‘liq jamlaymiz.",
      ],
      points: [
        "Farg‘ona, Marg‘ilon, Qo‘qon va viloyat bo‘ylab majmuaviy yetkazib berish",
        "ST 37 konstruksion po‘lati, O'z DSt ISO 9001:2015 sertifikati",
        "Pallet, polokali, nabiv, mezonin va savdo stelaj tizimlari",
        "GOST standartlari asosida montaj brigadasi xizmati",
      ],
      seoHeading: "Farg‘onada ombor va do‘kon uchun stelaj buyurtma qilish",
      seoParagraphs: [
        "To‘g‘ri loyihalangan stelaj tizimi Farg‘onadagi ombor sig‘imini qo‘shimcha maydon ijarasisiz bir necha barobar oshiradi. Qutili tovarlar uchun pallet-polokali, yirik aylanma uchun esa pallet tizimlari eng qulay yechimdir.",
        "Yuridik va jismoniy shaxslar bilan shartnoma asosida ishlaymiz, ishlab chiqarish va yetkazib berish muddatlarini aniq kafolatlaymiz.",
      ],
      faqs: [
        {
          q: "Farg‘ona, Qo‘qon va Marg‘ilonga yetkazib berasizlarmi?",
          a: "Ha, Toshkentdagi zavodimizdan Farg‘ona, Qo‘qon, Marg‘ilon va viloyatning boshqa shaharlariga yetkazib berishni tashkil qilamiz.",
        },
        {
          q: "Stelajlar sertifikatlanganmi?",
          a: "Ishlab chiqarish O'z DSt ISO 9001:2015 standarti bo‘yicha sertifikatlangan, barcha hisob-kitoblar GOST va SNiP talablariga asoslanadi.",
        },
        {
          q: "Stelajlar bilan birga ombor texnikasi ham buyurtma qilsa bo‘ladimi?",
          a: "Ha, roxli, shtabeler, richtrak, yuk liftlari va doklevellerlarni ham komplekt tarzda yetkazib beramiz.",
        },
      ],
      ctaCatalogLabel: "Katalogga o‘tish",
    },
  },
  {
    slug: "stellazhi-andijan",
    image: "/images/site_image_04.jpg",
    ru: {
      title: "Стеллажи в Андижане — складские и промышленные системы | Innotek",
      description:
        "Купить металлические стеллажи в Андижане от производителя Innotek. Паллетные, полочные, консольные, гравитационные стеллажи с доставкой и монтажом по Андижанской области.",
      kicker: "Регионы · Андижан",
      h1: "Стеллажи в Андижане",
      lead: "Промышленные, складские и торговые стеллажи для предприятий Андижана и Андижанской области. Заводской расчёт, поставка и профессиональный монтаж.",
      city: "Андижан",
      region: "Андижанская область",
      intro: [
        "Проектируем и поставляем стеллажные системы для машиностроительных, автосборочных, текстильных и логистических предприятий Андижана и Андижанской области.",
        "В линейке — тяжёлые паллетные и гравитационные стеллажи, стеллажи для пресс-форм и штампов с выкатными платформами, а также полочные решения для запчастей и комплектующих.",
      ],
      points: [
        "Решения для производственных складов, автокомпонентов и логистики",
        "Изготовление тяжёлых систем и выкатных стеллажей для пресс-форм",
        "Доставка в Андижан, Асаку, Шахрихан и районы области",
        "Монтаж и техническая сдача объекта бригадой Innotek",
      ],
      seoHeading: "Промышленные и складские стеллажи в Андижане",
      seoParagraphs: [
        "Производственным предприятиям Андижана требуется высокая повторяемость геометрии и запас прочности при интенсивной работе погрузчиков. Мы профилируем стойки толщиной до 2,5 мм и подбираем балки под расчётную массу паллет и оснастки.",
        "Возможна комплексная поставка: стеллажи, промышленные платформы, инструментальные тележки, конвейерные линии и доковое оборудование.",
      ],
      faqs: [
        {
          q: "Поставляете ли вы стеллажи в Андижан и Асаку?",
          a: "Да, доставляем и монтируем стеллажи в Андижане, Асаке и по всей Андижанской области.",
        },
        {
          q: "Есть ли решения для тяжёлых пресс-форм и запчастей?",
          a: "Да, выпускаем специальные стеллажи для пресс-форм с выкатными платформами и тяжелогрузовые полочные системы.",
        },
        {
          q: "Можно ли получить 3D-план расстановки до оплаты?",
          a: "Да, при получении размеров склада или чертежа наши инженеры подготовят схему расстановки и спецификацию под ваш проект.",
        },
      ],
      ctaCatalogLabel: "Выбрать систему в каталоге",
    },
    uz: {
      title: "Andijonda stelajlar — ombor va sanoat tizimlari | Innotek",
      description:
        "Andijon va Andijon viloyatida ishlab chiqaruvchidan metall stelajlar. Pallet, polokali, konsol va press-forma stelajlari, yetkazib berish va montaj.",
      kicker: "Hududlar · Andijon",
      h1: "Andijonda stelajlar",
      lead: "Andijon shahri va viloyatidagi sanoat korxonalari, omborlar hamda savdo obyektlari uchun zavod stelajlari. Muhandislik hisobi, yetkazib berish va montaj.",
      city: "Andijon",
      region: "Andijon viloyati",
      intro: [
        "Andijon va Andijon viloyatidagi mashinasozlik, avtosanoat, to‘qimachilik va logistika korxonalari uchun stelaj tizimlarini loyihalaymiz va yetkazib beramiz.",
        "Assortimentda og‘ir yuk pallet va gravitatsion stelajlari, press-forma hamda shtamplar uchun suriluvchi platformali stelajlar va ehtiyot qismlar uchun polokali tizimlar mavjud.",
      ],
      points: [
        "Ishlab chiqarish omborlari, ehtiyot qismlar va logistika uchun yechimlar",
        "Og‘ir yuk tizimlari va press-formalar uchun maxsus stelajlar",
        "Andijon, Asaka, Shahrixon va viloyat tumanlariga yetkazib berish",
        "Innotek brigadasi tomonidan montaj va sinovdan o‘tkazish",
      ],
      seoHeading: "Andijonda sanoat va ombor stelajlari",
      seoParagraphs: [
        "Andijondagi ishlab chiqarish omborlari uchun yuklagichlar faol ishlaganda ham geometriya aniqligi va mustahkamlik zaxirasi muhim. Biz 2,5 mm gacha qalinlikdagi ustunlarni profillaymiz va balkalarni aniq yuklama ostida tanlaymiz.",
        "Obyektlarni majmuaviy butlash ham mumkin: stelajlar, sanoat platformalari, aravachalar va konveyer liniyalari.",
      ],
      faqs: [
        {
          q: "Andijon va Asakaga stelaj yetkazib berasizlarmi?",
          a: "Ha, Andijon shahri, Asaka va butun Andijon viloyati bo‘ylab yetkazib berish va montaj xizmatini ko‘rsatamiz.",
        },
        {
          q: "Og‘ir press-formalar va ehtiyot qismlar uchun stelaj bormi?",
          a: "Ha, suriluvchi platformali press-forma stelajlari va og‘ir yuk polokali tizimlarni ishlab chiqaramiz.",
        },
        {
          q: "Buyurtmadan oldin joylashtirish sxemasini olsa bo‘ladimi?",
          a: "Ha, ombor o‘lchamlari asosida muhandislarimiz CAD joylashtirish sxemasi va spetsifikatsiyani tayyorlab beradi.",
        },
      ],
      ctaCatalogLabel: "Katalogdan tizim tanlash",
    },
  },
  {
    slug: "stellazhi-namangan",
    image: "/images/site_image_05.jpg",
    ru: {
      title: "Стеллажи в Намангане — для склада, производства и магазина | Innotek",
      description:
        "Купить металлические стеллажи в Намангане и Наманганской области. Завод Innotek: складские, полочные, торговые стеллажи, проектирование, доставка и монтаж.",
      kicker: "Регионы · Наманган",
      h1: "Стеллажи в Намангане",
      lead: "Металлические стеллажные системы с завода Innotek для текстильных, производственных и торговых складов Намангана и Наманганской области.",
      city: "Наманган",
      region: "Наманганская область",
      intro: [
        "Поставляем складские и торговые стеллажи в Наманган и районы Наманганской области. Оборудуем склады готовой продукции, текстильные и швейные фабрики, распределительные базы и магазины.",
        "Предлагаем паллетные, паллето-полочные и мезонинные конструкции с оптимальным шагом полок под короба, рулоны ткани и паллеты.",
      ],
      points: [
        "Индивидуальная настройка шага полок и глубины секций",
        "Паллетные, полочные, мезонинные и торговые системы",
        "Организованная доставка по Намангану и Наманганской области",
        "Полный комплекс работ: проект, производство, сборка",
      ],
      seoHeading: "Стеллажное оборудование в Намангане от производителя",
      seoParagraphs: [
        "Для предприятий Намангана важна гибкость хранения при смене ассортимента и сезонности отгрузок. Сборно-разборная конструкция на зацепах позволяет легко переставлять уровни и масштабировать ряды без сварки.",
        "При необходимости укомплектуем склад в Намангане тележками, металлической мебелью для раздевалок и цеха, а также складской техникой.",
      ],
      faqs: [
        {
          q: "Как осуществляется доставка стеллажей в Наманган?",
          a: "Готовые комплекты отгружаются с завода в Ташкенте и доставляются в Наманган и города области согласованным транспортом.",
        },
        {
          q: "Подходят ли ваши стеллажи для текстильных складов?",
          a: "Да, паллето-полочные и мезонинные стеллажи широко применяются для хранения рулонов, коробов и готовой текстильной продукции.",
        },
        {
          q: "Можно ли заказать окраску в фирменный цвет?",
          a: "Да, помимо стандартных RAL 5005 и RAL 2004 выполняем порошковую окраску по коду RAL заказчика.",
        },
      ],
      ctaCatalogLabel: "Открыть каталог стеллажей",
    },
    uz: {
      title: "Namanganda stelajlar — ombor, ishlab chiqarish va do‘konlar uchun | Innotek",
      description:
        "Namangan va Namangan viloyatida metall stelajlarni sotib olish. Innotek zavodi: ombor, polokali va savdo stelajlari, loyihalash, yetkazib berish va montaj.",
      kicker: "Hududlar · Namangan",
      h1: "Namanganda stelajlar",
      lead: "Namangan shahri va viloyatidagi to‘qimachilik, ishlab chiqarish hamda savdo omborlari uchun Innotek zavodidan metall stelaj tizimlari.",
      city: "Namangan",
      region: "Namangan viloyati",
      intro: [
        "Namangan va Namangan viloyati tumanlariga ombor hamda savdo stelajlarini yetkazib beramiz. Tayyor mahsulot omborlari, to‘qimachilik va tikuvchilik fabrikalari, ulgurji bazalar va do‘konlarni jihozlaymiz.",
        "Qutilar, gazlama rulonlari va palletlar uchun qulay qadamga ega pallet, pallet-polokali hamda mezonin konstruksiyalarini taklif etamiz.",
      ],
      points: [
        "Polkalar oralig‘i va seksiya chuqurligini individual moslash",
        "Pallet, polokali, mezonin va savdo tizimlari",
        "Namangan va viloyat bo‘ylab tashkillashtirilgan yetkazib berish",
        "To‘liq sikl: loyiha, ishlab chiqarish va yig‘ish",
      ],
      seoHeading: "Namanganda ishlab chiqaruvchidan stelaj uskunalari",
      seoParagraphs: [
        "Namangandagi korxonalar uchun mavsumiy yuk o‘zgarganda saqlash tizimini tez moslashtirish muhim. Ilgakli yig‘ma-ajratiluvchi konstruksiya payvandsiz darajalarni o‘zgartirish va qatorlarni kengaytirish imkonini beradi.",
        "Zarur bo‘lsa, Namangandagi omborni aravachalar, kiyinish xonasi uchun metall mebel va ombor texnikasi bilan ham jihozlaymiz.",
      ],
      faqs: [
        {
          q: "Namanganga stelajlar qanday yetkazib beriladi?",
          a: "Tayyor komplektlar Toshkentdagi zavodimizdan Namangan shahri va viloyat tumanlariga kelishilgan transport orqali jo‘natiladi.",
        },
        {
          q: "Stelajlar to‘qimachilik omborlari uchun mosmi?",
          a: "Ha, pallet-polokali va mezonin stelajlar rulonlar, qutilar va tayyor to‘qimachilik mahsulotlarini saqlashda keng qo‘llaniladi.",
        },
        {
          q: "Korporativ rangda bo‘yashga buyurtma berish mumkinmi?",
          a: "Ha, standart RAL 5005 va RAL 2004 dan tashqari buyurtmachi RAL kodi bo‘yicha kukunli bo‘yashni bajaramiz.",
        },
      ],
      ctaCatalogLabel: "Stelajlar katalogini ochish",
    },
  },
  {
    slug: "stellazhi-navoi",
    image: "/images/1-1.jpg",
    ru: {
      title: "Стеллажи в Навои — промышленные и складские решения | Innotek",
      description:
        "Купить металлические стеллажи в Навои и Навоийской области от производителя Innotek. Тяжёлые паллетные, консольные и полочные системы с доставкой и монтажом.",
      kicker: "Регионы · Навои",
      h1: "Стеллажи в Навои",
      lead: "Усиленные складские, консольные и промышленные стеллажи для предприятий Навои и свободной экономической зоны «Навои». Расчёт, доставка и монтаж.",
      city: "Навои",
      region: "Навоийская область",
      intro: [
        "Поставляем промышленные и складские стеллажные системы для предприятий Навои, СЭЗ «Навои», Зарафшана и районов Навоийской области.",
        "Проектируем решения под высокие нагрузки: паллетные и тяжелогрузовые стеллажи, консольные конструкции для труб и проката, металлические платформы, кабельные стеллажи и шкафы для производственных подразделений.",
      ],
      points: [
        "Высокие нагрузки на ярус — конструкции для СЭЗ «Навои» и промпредприятий",
        "Консольные, кабельные, паллетные и мезонинные системы",
        "Расчёт по ГОСТ, СНиП и стандарту качества O'z DSt ISO 9001:2015",
        "Доставка в Навоийскую область и выездной монтаж под ключ",
      ],
      seoHeading: "Промышленные стеллажи в Навои от завода Innotek",
      seoParagraphs: [
        "Для горнодобывающих, металлургических, химических и логистических объектов Навоийской области критична надёжность металлоконструкций. Мы применяем конструкционную сталь ST 37, автоматическое профилирование и порошковую полимеризацию.",
        "Берём на себя полный цикл подготовки: разработку проектной спецификации, поставку в Навои и монтаж с проверкой анкерного крепления.",
      ],
      faqs: [
        {
          q: "Работаете ли вы с предприятиями СЭЗ «Навои» и Навоийской области?",
          a: "Да, проектируем и поставляем стеллажи, металлические платформы и складское оборудование для промышленных и логистических компаний в Навои и области.",
        },
        {
          q: "Какие стеллажи подходят для кабельных барабанов и металлопроката?",
          a: "Для катушек и бухт выпускаем кабельные стеллажи, а для длинномерного проката, балок и труб — консольные системы с расчётной нагрузкой до 1500 кг на пару консолей.",
        },
        {
          q: "Как оформить заявку на расчёт для объекта в Навои?",
          a: `Свяжитесь с нами по телефону ${SITE.phone.display} или отправьте параметры склада через форму расчёта.`,
        },
      ],
      ctaCatalogLabel: "Каталог решений",
    },
    uz: {
      title: "Navoiyda stelajlar — sanoat va ombor yechimlari | Innotek",
      description:
        "Navoiy va Navoiy viloyati uchun Innotek ishlab chiqaruvchisidan metall stelajlar. Og‘ir pallet, konsol va polokali tizimlarni yetkazib berish va montaj.",
      kicker: "Hududlar · Navoiy",
      h1: "Navoiyda stelajlar",
      lead: "Navoiy shahri va «Navoiy» EIZ korxonalari uchun kuchaytirilgan ombor, konsol va sanoat stelajlari. Muhandislik hisobi, yetkazib berish va montaj.",
      city: "Navoiy",
      region: "Navoiy viloyati",
      intro: [
        "Navoiy shahri, «Navoiy» erkin iqtisodiy zonasi, Zarafshon va Navoiy viloyatidagi sanoat korxonalari uchun ombor hamda ishlab chiqarish stelajlarini yetkazib beramiz.",
        "Katta yuklamalarga mo‘ljallangan yechimlarni loyihalaymiz: og‘ir pallet stelajlari, quvur va prokat uchun konsol tizimlari, metall platformalar, kabel stelajlari va sex mebellari.",
      ],
      points: [
        "«Navoiy» EIZ va sanoat korxonalari uchun yuqori yuklama ko‘rsatkichlari",
        "Konsol, kabel, pallet va mezonin tizimlari",
        "GOST, SNiP va O'z DSt ISO 9001:2015 sifat standarti asosida hisob",
        "Navoiy viloyatiga yetkazib berish va kalit topshirish montaji",
      ],
      seoHeading: "Innotek zavodidan Navoiyda sanoat stelajlari",
      seoParagraphs: [
        "Navoiy viloyatidagi kon-metallurgiya, kimyo va logistika obyektlari uchun metall konstruksiyalarning ishonchliligi birinchi o‘rinda turadi. Biz ST 37 po‘lati, avtomatik profillash va kukunli polimer bo‘yashdan foydalanamiz.",
        "Loyiha spetsifikatsiyasini tuzish, Navoiyga yetkazib berish va ankerli mahkamlash bilan montaj qilishgacha bo‘lgan barcha bosqichlarni bajaramiz.",
      ],
      faqs: [
        {
          q: "«Navoiy» EIZ va Navoiy viloyati korxonalari bilan ishlaysizlarmi?",
          a: "Ha, Navoiy shahri va viloyatdagi sanoat hamda logistika kompaniyalari uchun stelajlar, metall platformalar va ombor uskunalarini yetkazib beramiz.",
        },
        {
          q: "Kabel g‘altaklari va metall prokat uchun qanday stelajlar bor?",
          a: "Kabel g‘altaklari uchun maxsus kabel stelajlari, uzun quvur va balkalar uchun esa bir juft konsoliga 1500 kg gacha yuk ko‘taradigan konsol tizimlarini ishlab chiqaramiz.",
        },
        {
          q: "Navoiydagi obyekt uchun hisob-kitobga qanday ariza beriladi?",
          a: `${SITE.phone.display} raqamiga qo‘ng‘iroq qiling yoki saytdagi forma orqali ombor parametrlarini yuboring.`,
        },
      ],
      ctaCatalogLabel: "Yechimlar katalogi",
    },
  },
];

export const LOCATION_LINKS: { path: string; label: Record<Lang, string> }[] = LOCATIONS.map((loc) => ({
  path: `/${loc.slug}/`,
  label: { ru: loc.ru.city, uz: loc.uz.city },
}));

function buildRelated(currentSlug: string, lang: Lang): SeoRelated[] {
  const otherCities: SeoRelated[] = LOCATIONS.filter((loc) => loc.slug !== currentSlug).map((loc) => ({
    path: `/${loc.slug}/`,
    label: lang === "uz" ? `${loc.uz.city}da stelajlar` : `Стеллажи: ${loc.ru.city}`,
  }));

  const coreLinks: SeoRelated[] =
    lang === "uz"
      ? [
          { path: "/catalog/stellazhi/", label: "Metall stelajlar katalogi" },
          { path: "/services/pokraska-metalla/", label: "Metallni polimer bo‘yash" },
        ]
      : [
          { path: "/catalog/stellazhi/", label: "Каталог металлических стеллажей" },
          { path: "/services/montazh-demontazh/", label: "Монтаж и демонтаж стеллажей" },
        ];

  return [...coreLinks, ...otherCities];
}

function toSeoLanding(config: LocationConfig, lang: Lang): SeoLanding {
  const copy = config[lang];
  return {
    slug: config.slug,
    path: `/${config.slug}/`,
    title: copy.title,
    description: copy.description,
    kicker: copy.kicker,
    h1: copy.h1,
    lead: copy.lead,
    image: config.image,
    intro: copy.intro,
    types: RACK_TYPES[lang],
    points: copy.points,
    related: buildRelated(config.slug, lang),
    embedQuote: true,
    ctaCatalog: {
      path: "/catalog/stellazhi/",
      label: copy.ctaCatalogLabel,
    },
    breadcrumbParent: {
      path: "/catalog/stellazhi/",
      label: lang === "uz" ? "Stelajlar" : "Стеллажи",
    },
    location: {
      city: copy.city,
      region: copy.region,
      isHeadquarters: config.isHeadquarters,
    },
    seo: {
      heading: copy.seoHeading,
      paragraphs: copy.seoParagraphs,
      faqs: copy.faqs,
    },
  };
}

/** Возвращает все региональные SEO-посадки для указанного языка. */
export function locationLandingsForLang(lang: Lang): SeoLanding[] {
  return LOCATIONS.map((loc) => toSeoLanding(loc, lang));
}

/** Находит региональную SEO-посадку по slug и языку. */
export function locationLandingBySlug(slug: string, lang: Lang): SeoLanding | undefined {
  const found = LOCATIONS.find((loc) => loc.slug === slug);
  return found ? toSeoLanding(found, lang) : undefined;
}
