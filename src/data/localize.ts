import type { Lang } from "../i18n/ui";
import type { CatalogCategory, CatalogProduct, SpecRow } from "./catalog";
import type { ServicePage } from "./services";

const SPEC_RACK_UZ: SpecRow[] = [
  { key: "Material", value: "ST 37" },
  { key: "Rang", value: "Rama RAL 5005 · Balka RAL 2004. Buyurtma asosida — RAL kodi bo‘yicha." },
  { key: "Stoyka", value: "70/90 × 1.5 / 1.8 / 2.0 / 2.5 mm" },
  { key: "Balka", value: "40×60 / 40×80 / 50×100 / 40×120 / 50×140 / 50×190 × 1.5/2.0 mm" },
  { key: "Balandligi", value: "Ombor balandligiga mos" },
  { key: "Qo‘llanilishi", value: "Sanoat ombori, taqsimlash markazi" },
  { key: "Sertifikat", value: "O'z DSt ISO 9001:2015" },
];

const UZ_EXCERPTS: Record<string, string> = {
  "/catalog/stellazhi/palletnye-stellazhi/":
    "Katta va kichik omborlar uchun klassika: tovarlarni palletlarda saqlash, har bir joyga kirish.",
  "/catalog/stellazhi/palletno-polochnye-stellazhi/":
    "Yig‘ma-sochma tokchali tizim: pallet va dona mahsulot, hujjatlar.",
  "/catalog/stellazhi/nabivnye-stellazhi/":
    "Yo‘laksiz zich saqlash: texnika tizim ichiga kiradi.",
  "/catalog/stellazhi/konsolnye-stellazhi/":
    "Uzun o‘lchamli va nostandart yuk: to‘sin, quvur, profil, list, taxta.",
  "/catalog/stellazhi/mezoninnye-stellazhi/":
    "Baland shiftli binolarda ko‘p qavatli ombor tizimlari.",
  "/catalog/stellazhi/stellazhi-dlya-pressform/":
    "Og‘ir press-formalar, shtamplar va ishlab chiqarish anjomlari.",
  "/catalog/stellazhi/kabelnye-stellazhi/":
    "Kabel, katushka va buxtalar: qulay yoyish va saqlash.",
  "/catalog/stellazhi/samonesushchie-stellazhi/":
    "Stelaj konstruksiyasi bino karkasi vazifasini bajaradi.",
};

const UZ_RACKS_SEO = {
  heading: "Toshkentda metall stellajlar ishlab chiqaruvchisi",
  paragraphs: [
    "Innotek metall stellajlari mustahkam konstruksiyasi, uzoq muddat xizmat qilishi va yuk ko‘tarish qobiliyatining yuqoriligi bilan ajralib turadi. Sifatli materiallar va puxta o‘ylangan konstruksiya tufayli stellajlar mahsulotlarni saqlashni samarali tashkil etish va xona maydonidan foydalanish imkonini beradi.",
    "Kompaniya mutaxassislari vazifalar, xona o‘lchamlari va kerakli yuklamani hisobga olgan holda stellajlarning maqbul turini tanlashda yordam berishadi. Maslahat, loyihalash, yetkazib berish va o‘rnatish — bir majmua.",
  ],
  faqs: [
    {
      q: "Toshkentda metall stellajlarni qayerdan sotib olish mumkin?",
      a: "Toshkentda metall stellajlarni Innotek kompaniyasidan sotib olish mumkin. Biz omborlar, do‘konlar, arxivlar va ishlab chiqarish binolari uchun stellaj tizimlarini yetkazib berish va o‘rnatish xizmatlari bilan birga taklif etamiz.",
    },
    {
      q: "Toshkentda metall stellajlar qancha turadi?",
      a: "Narx konstruksiya o‘lchamlari, tokchalar soni, ruxsat etilgan yuklama va metall turiga bog‘liq. Aniq narxni bilish uchun mutaxassislarga murojaat qiling.",
    },
    {
      q: "Metall stellajlarni individual o‘lchamlarda buyurtma qilish mumkinmi?",
      a: "Ha, metall stellajlarni individual parametrlarga asosan tayyorlash mumkin. Bu ombor yoki xona maydonidan samarali foydalanish imkonini beradi.",
    },
    {
      q: "Metall stelajlarni O‘zbekiston bo‘ylab yetkazib berasizlarmi?",
      a: "Ha, Innotek kompaniyasi metall stelajlarni Toshkent va O‘zbekistonning boshqa shaharlariga yetkazib beradi.",
    },
  ],
};

const PRODUCT_UZ: Record<string, Partial<CatalogProduct>> = {
  "palletnye-stellazhi": {
    title: "Toshkentda pallet stelajlarini sotib olish | Innotek",
    description:
      "Innotek kompaniyasidan Toshkentda pallet stelajlarini sotib oling. Palletlarni saqlash uchun ishonchli ombor tizimlari, yetkazib berish va montaj.",
    h1: "Pallet stelajlari",
    lead: "Yirik va kichik omborlar uchun eng mashhur stelaj turlaridan biri — klassika. Mahsulotlarni palletlarda saqlash va har bir joyga kirish.",
    specs: SPEC_RACK_UZ,
    features: [
      "Ilgaklar va boltlar yordamida tez yig‘iladi",
      "Odamlar va texnika uchun yuklarga frontal kirish",
      "Moslashuvchan konfiguratsiya ombor geometriyasiga",
      "O‘z ishlab chiqarish tufayli iqtisodiy yechim",
      "Korroziyaga qarshi ishlov va uzoq xizmat muddati",
    ],
  },
  "palletno-polochnye-stellazhi": {
    title: "Toshkent va O‘zbekistonda pallet-polokali stelajlar | Innotek",
    description:
      "Innotek kompaniyasidan Toshkent va O‘zbekistonda pallet-polokali stelajlar. Pallet va dona mahsulotlar uchun universal ombor tizimlari.",
    h1: "Pallet-polokali stelajlar",
    lead: "Yig‘iladigan va ajratiladigan polkali stelajlar mahsulotlar va hujjatlarni saqlash uchun. Uy, ofis, ombor, do‘kon va ishlab chiqarish.",
    specs: [
      ...SPEC_RACK_UZ.slice(0, 4),
      { key: "Polka", value: "1000×2000 mm / 585×2000 mm. Qalinligi 0,9 / 1,5 mm, buyurtma asosida." },
      ...SPEC_RACK_UZ.slice(4),
    ],
    features: [
      "Oson o‘rnatish va ajratish",
      "Har bir yukka alohida kirish",
      "Polkalar orasidagi masofani o‘zgartirish",
      "Mahsulotga qulay kirish",
      "Demontaj va boshqa xonaga ko‘chirish",
      "Pol qoplamasini himoya qilish uchun oyoq tagliklari",
    ],
  },
  "nabivnye-stellazhi": {
    title: "Toshkent va O‘zbekistonda drive-in (nabiv) stelajlar | Innotek",
    description:
      "Innotek kompaniyasidan Toshkent va O‘zbekistonda drive-in (nabiv) stelajlar. Palletlarni zich saqlash uchun ombor tizimlari.",
    h1: "Nabiv (Drive-in) stelajlar",
    lead: "Seksiyalar orasida yo‘lak yo‘q: yuklash texnikasi tizim ichiga kiradi. Hajm va maydondan samarali foydalanish, blokli saqlash.",
    specs: SPEC_RACK_UZ,
    features: [
      "Maydondan foydalanish amaliyotda 90% gacha",
      "Yo‘laksiz blokli saqlash",
      "Turli xil tagliklar",
      "Tizimni ikki tomondan xizmat qilish",
      "Elementlarga korroziyaga qarshi ishlov",
    ],
  },
};

export function localizeCategory(cat: CatalogCategory, lang: Lang): CatalogCategory {
  if (lang !== "uz" || cat.slug !== "stellazhi") return cat;
  return {
    ...cat,
    title: "Toshkentda metall stelajlar sotib olish | Innotek",
    description:
      "Toshkentda ombor va do‘konlar uchun metall stelajlarni sotib oling. Mustahkam stelaj tizimlari qulay narxlarda va O‘zbekiston bo‘ylab yetkazib berish xizmati bilan.",
    h1: "Toshkentda metall stelajlar",
    lead: "Ombor, do‘kon va ishlab chiqarish uchun. O‘z zavodimiz Toshkentda.",
    seo: UZ_RACKS_SEO,
    products: cat.products.map((item) => ({
      ...item,
      excerpt: UZ_EXCERPTS[item.path],
    })),
  };
}

export function localizeProduct(product: CatalogProduct, lang: Lang): CatalogProduct {
  if (lang !== "uz") return product;
  const extra = PRODUCT_UZ[product.slug];
  return extra ? { ...product, ...extra } : product;
}

export function localizeService(service: ServicePage, lang: Lang): ServicePage {
  if (lang !== "uz" || service.slug !== "pokraska-metalla") return service;
  return {
    ...service,
    title: "Metallni bo‘yash | Innotek kompaniyasi",
    description:
      "Toshkentda metallni bo‘yash xizmatlari. Innotek kompaniyasi sifatli va uzoq muddatli qoplama. Buyurtma — yetkazib berish va xizmat mavjud.",
    h1: "Metallni bo‘yash",
    lead: "Mahsulotlarga tashqi ko‘rinish va korroziyadan himoya. Sirtni tayyorlaymiz va uzoq muddatga mo‘ljallangan qoplama surtamiz.",
    body: "Bizning metallni bo‘yash bo‘yicha professional xizmatlarimiz mahsulotlaringizga nafaqat jozibali tashqi ko‘rinish beradi, balki ularni korroziya va tashqi muhit ta’siridan ham himoya qiladi. Biz yuqori sifatli bo‘yoqlardan foydalanamiz va metall yuzasini puxta tayyorlaymiz, shunda qoplama bir tekis va uzoq muddat xizmat qiladi. Tajriba va har bir detalga e’tibor — metall mahsulot a’lo darajada ko‘rinadi va uzoq yillar xizmat qiladi.",
  };
}
