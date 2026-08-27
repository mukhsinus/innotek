/**
 * Строители JSON-LD. Только факты из content/ (SITE): никаких выдуманных
 * рейтингов, цен, стоков и соцпрофилей.
 */
import { SITE } from "./site";

const origin = SITE.url.replace(/\/$/, "");

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.street.ru,
  addressLocality: SITE.address.locality.ru,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
} as const;

const sameAs = [SITE.socials.facebook, SITE.socials.instagram, SITE.socials.telegram];

export function organizationLd() {
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
    address: postalAddress,
    sameAs,
  };
}

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${origin}/#localbusiness`,
    name: SITE.name,
    url: `${origin}/contacts/`,
    email: SITE.email,
    telephone: SITE.phone.tel,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.mapsLat,
      longitude: SITE.mapsLng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs,
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
