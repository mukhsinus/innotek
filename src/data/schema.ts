/**
 * Строители JSON-LD. Только факты из content/ (SITE): никаких выдуманных
 * рейтингов, цен, стоков и соцпрофилей.
 */
import type { Lang } from "../i18n/ui";
import { SITE } from "./site";

const origin = SITE.url.replace(/\/$/, "");

const sameAs = [SITE.socials.facebook, SITE.socials.instagram, SITE.socials.telegram];

const geoCoordinates = {
  "@type": "GeoCoordinates",
  latitude: SITE.mapsLat,
  longitude: SITE.mapsLng,
} as const;

function postalAddress(lang: Lang) {
  return {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street[lang],
    addressLocality: SITE.address.locality[lang],
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  } as const;
}

function countryServed(lang: Lang) {
  return {
    "@type": "Country",
    name: lang === "uz" ? "O‘zbekiston" : "Узбекистан",
  } as const;
}

/** Организация Innotek для главной страницы (с локализованным адресом и страной). */
export function organizationLd(lang: Lang = "ru") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${origin}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${origin}/`,
    logo: `${origin}/images/logo.png`,
    email: SITE.email,
    telephone: SITE.phone.tel,
    address: postalAddress(lang),
    areaServed: countryServed(lang),
    sameAs,
  };
}

/** Локальный бизнес на странице контактов и как провайдер услуг. */
export function localBusinessLd(lang: Lang = "ru") {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${origin}/#localbusiness`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${origin}/contacts/`,
    email: SITE.email,
    telephone: SITE.phone.tel,
    address: postalAddress(lang),
    geo: geoCoordinates,
    areaServed: countryServed(lang),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs,
  };
}

/** Региональная услуга (производство, доставка и монтаж стеллажей для города/области). */
export function locationServiceLd(opts: {
  name: string;
  description: string;
  path: string;
  city: string;
  region: string;
  lang: Lang;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${origin}${opts.path}`,
    serviceType:
      opts.lang === "uz"
        ? "Ombor va savdo stelajlarini ishlab chiqarish, yetkazib berish va montaj qilish"
        : "Производство, доставка и монтаж складских и торговых стеллажей",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${origin}/#localbusiness`,
      name: SITE.name,
      legalName: SITE.legalName,
      url: `${origin}/`,
      email: SITE.email,
      telephone: SITE.phone.tel,
      address: postalAddress(opts.lang),
      geo: geoCoordinates,
    },
    areaServed: {
      "@type": "City",
      name: opts.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: opts.region,
        containedInPlace: countryServed(opts.lang),
      },
    },
  };
}

/** Разметка FAQPage для страниц со списком вопросов и ответов. */
export function faqPageLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/** Карточка товара. Цен на сайте нет — offers не добавляем. */
export function productLd(product: {
  h1: string;
  description: string;
  path: string;
  images: string[];
  categoryLabel: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.h1,
    description: product.description,
    url: `${origin}${product.path}`,
    ...(product.images.length > 0 && {
      image: product.images.map((img) => {
        let clean = img
          .replace("/src/assets/images/", "/images/")
          .replace("/imagesWebp/", "/images/");
        if (!clean.startsWith("/images/")) {
          clean = clean.startsWith("/") ? `/images${clean}` : `/images/${clean}`;
        }
        return `${origin}${clean}`;
      }),
    }),
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: { "@type": "Organization", name: SITE.name, url: `${origin}/` },
  };
}
