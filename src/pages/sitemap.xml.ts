import type { APIRoute } from "astro";
import { CATALOG_CATEGORIES, CATALOG_PRODUCTS } from "../data/catalog";
import { SEO_LANDINGS } from "../data/landings";
import { SERVICES } from "../data/services";
import { SITE, UZ_PATHS } from "../data/site";

const RU_STATIC = ["/", "/about/", "/catalog/", "/services/", "/contacts/", "/contacts/thanks/", "/video/"];

function collect(): string[] {
  const ru = [
    ...RU_STATIC,
    ...CATALOG_CATEGORIES.map((c) => c.path),
    ...CATALOG_PRODUCTS.map((p) => p.path),
    ...SEO_LANDINGS.map((l) => l.path),
    ...SERVICES.map((s) => s.path),
  ];
  const uz = [...UZ_PATHS].map((p) => (p === "/" ? "/uz/" : `/uz${p}`));
  return [...new Set([...ru, ...uz])].sort();
}

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = collect()
    .map((path) => `  <url>\n    <loc>${SITE.url}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
