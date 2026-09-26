import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

/**
 * Local stand-in for Netlify Image CDN (`/.netlify/images`).
 * Production uses the real CDN; this only runs inside `astro dev`.
 */
export function netlifyImagesDev(publicDir) {
  const root = path.resolve(publicDir);
  const cacheDir = path.join(process.cwd(), "node_modules/.cache/netlify-images");

  return {
    name: "netlify-images-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const raw = req.url || "";
        if (!raw.startsWith("/.netlify/images")) return next();
        try {
          const { default: sharp } = await import("sharp");
          const query = new URL(raw, "http://localhost");
          const src = query.searchParams.get("url") || "";
          const width = clamp(Number(query.searchParams.get("w") || 960), 64, 2000);
          const quality = clamp(Number(query.searchParams.get("q") || 72), 40, 90);
          if (!src.startsWith("/images/") || src.includes("..")) {
            res.statusCode = 400;
            res.end("bad image path");
            return;
          }
          const file = path.resolve(root, `.${src}`);
          if (!file.startsWith(root + path.sep) || !fs.existsSync(file)) {
            res.statusCode = 404;
            res.end("not found");
            return;
          }
          fs.mkdirSync(cacheDir, { recursive: true });
          const stamp = fs.statSync(file).mtimeMs;
          const key = createHash("sha1")
            .update(`${file}|${stamp}|${width}|${quality}`)
            .digest("hex");
          const cacheFile = path.join(cacheDir, `${key}.webp`);
          const buf = fs.existsSync(cacheFile)
            ? fs.readFileSync(cacheFile)
            : await sharp(file, { failOn: "none", limitInputPixels: false })
                .rotate()
                .resize({ width, withoutEnlargement: true })
                .webp({ quality, effort: 4 })
                .toBuffer();
          if (!fs.existsSync(cacheFile)) fs.writeFileSync(cacheFile, buf);
          res.setHeader("Content-Type", "image/webp");
          res.setHeader("Cache-Control", "public, max-age=86400");
          res.end(buf);
        } catch (err) {
          console.error("[netlify-images-dev]", err);
          next();
        }
      });
    },
  };
}

function clamp(n, min, max) {
  if (!Number.isFinite(n)) return min;
  return Math.max(min, Math.min(max, Math.round(n)));
}
