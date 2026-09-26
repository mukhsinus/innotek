/** Public path plus a Netlify Image CDN URL sized for the slot, not the camera original. */

export function publicImagePath(path?: string): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http") || path.endsWith(".svg")) return path;
  let clean = path
    .replace("/src/assets/images/", "/images/")
    .replace("/imagesWebp/", "/images/");
  if (!clean.startsWith("/images/")) {
    clean = clean.startsWith("/") ? `/images${clean}` : `/images/${clean}`;
  }
  if (clean.endsWith(".webp")) {
    if (
      clean.includes("126081112") ||
      clean.includes("23-300x200") ||
      clean.includes("pris") ||
      clean.includes("prs3") ||
      clean.includes("photo_2023-09-27")
    ) {
      // keep the real webp
    } else if (
      clean.includes("rolik") ||
      clean.includes("33") ||
      clean.includes("kabel_3") ||
      clean.includes("16-2")
    ) {
      clean = clean.replace(/\.webp$/, ".png");
    } else {
      clean = clean.replace(/\.webp$/, ".jpg");
    }
  }
  return clean;
}

export function photoSrc(path?: string, width = 960): string | undefined {
  const clean = publicImagePath(path);
  if (!clean) return undefined;
  if (clean.startsWith("http") || clean.endsWith(".svg")) return clean;
  const w = Math.max(64, Math.min(2000, Math.round(width)));
  const params = new URLSearchParams({
    url: clean,
    w: String(w),
    q: "72",
    fit: "contain",
  });
  return `/.netlify/images?${params.toString()}`;
}
