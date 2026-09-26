/** Public path plus Netlify Image CDN URL with WebP conversion and format fallback support. */

export function publicImagePath(path?: string): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http") || path.endsWith(".svg")) return path;
  let clean = path
    .replace("/src/assets/images/", "/images/")
    .replace("/imagesWebp/", "/images/");
  if (!clean.startsWith("/images/")) {
    clean = clean.startsWith("/") ? `/images${clean}` : `/images/${clean}`;
  }
  return clean;
}

/** Returns the WebP version path for an image. */
export function webpPath(path?: string): string | undefined {
  const clean = publicImagePath(path);
  if (!clean) return undefined;
  if (clean.startsWith("http") || clean.endsWith(".svg") || clean.endsWith(".webp")) {
    return clean;
  }
  return clean.replace(/\.(jpg|jpeg|png)$/i, ".webp");
}

/** Returns the original format path for an image (fallback). */
export function fallbackPath(path?: string): string | undefined {
  const clean = publicImagePath(path);
  if (!clean) return undefined;
  if (clean.startsWith("http") || clean.endsWith(".svg")) return clean;
  return clean;
}

/** Netlify Image CDN URL for WebP. */
export function photoSrcWebp(path?: string, width = 960): string | undefined {
  const p = webpPath(path);
  if (!p) return undefined;
  if (p.startsWith("http") || p.endsWith(".svg")) return p;
  const w = Math.max(64, Math.min(2000, Math.round(width)));
  const params = new URLSearchParams({
    url: p,
    w: String(w),
    q: "80",
    fit: "contain",
  });
  return `/.netlify/images?${params.toString()}`;
}

/** Netlify Image CDN URL for the original fallback format. */
export function photoSrcFallback(path?: string, width = 960): string | undefined {
  const p = fallbackPath(path);
  if (!p) return undefined;
  if (p.startsWith("http") || p.endsWith(".svg")) return p;
  const w = Math.max(64, Math.min(2000, Math.round(width)));
  const params = new URLSearchParams({
    url: p,
    w: String(w),
    q: "80",
    fit: "contain",
  });
  return `/.netlify/images?${params.toString()}`;
}

/** Default photoSrc returns WebP for fastest loading. */
export function photoSrc(path?: string, width = 960): string | undefined {
  return photoSrcWebp(path, width);
}
