import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

function getFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      getFiles(full, acc);
    } else {
      acc.push(full);
    }
  }
  return acc;
}

async function convertAll() {
  const publicDir = path.resolve("public");
  const allFiles = getFiles(publicDir);
  const targetExts = new Set([".jpg", ".jpeg", ".png"]);

  const files = allFiles.filter((f) => targetExts.has(path.extname(f).toLowerCase()));
  console.log(`Found ${files.length} images to process in ${publicDir}`);

  let converted = 0;
  let skipped = 0;
  let failed = 0;
  let origBytesTotal = 0;
  let webpBytesTotal = 0;

  // Process in parallel chunks of 16 for optimal CPU throughput
  const CONCURRENCY = 16;
  for (let i = 0; i < files.length; i += CONCURRENCY) {
    const chunk = files.slice(i, i + CONCURRENCY);
    await Promise.all(
      chunk.map(async (file) => {
        try {
          const parsed = path.parse(file);
          const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);

          const statOrig = fs.statSync(file);
          origBytesTotal += statOrig.size;

          // Check if already up-to-date
          if (fs.existsSync(webpPath)) {
            const statWebp = fs.statSync(webpPath);
            if (statWebp.mtimeMs >= statOrig.mtimeMs && statWebp.size > 0) {
              webpBytesTotal += statWebp.size;
              skipped++;
              return;
            }
          }

          const isPng = parsed.ext.toLowerCase() === ".png";
          const img = sharp(file, { failOn: "none", limitInputPixels: false }).rotate();

          await img
            .webp({
              quality: isPng ? 86 : 82,
              effort: 4,
              nearLossless: isPng,
            })
            .toFile(webpPath);

          const statWebp = fs.statSync(webpPath);
          webpBytesTotal += statWebp.size;
          converted++;
        } catch (err) {
          failed++;
          console.error(`Failed to convert ${file}:`, err.message);
        }
      })
    );

    if ((i + CONCURRENCY) % 64 === 0 || i + CONCURRENCY >= files.length) {
      const pct = Math.min(100, Math.round(((i + CONCURRENCY) / files.length) * 100));
      console.log(`Progress: ${pct}% (${converted} converted, ${skipped} up-to-date, ${failed} failed)`);
    }
  }

  const origMB = (origBytesTotal / (1024 * 1024)).toFixed(1);
  const webpMB = (webpBytesTotal / (1024 * 1024)).toFixed(1);
  const savedMB = ((origBytesTotal - webpBytesTotal) / (1024 * 1024)).toFixed(1);
  const savingsPct = origBytesTotal > 0 ? (((origBytesTotal - webpBytesTotal) / origBytesTotal) * 100).toFixed(1) : 0;

  console.log("\n=================================");
  console.log("WebP Conversion Complete!");
  console.log(`Converted: ${converted} files`);
  console.log(`Up-to-date: ${skipped} files`);
  console.log(`Failed: ${failed} files`);
  console.log(`Original total size: ${origMB} MB`);
  console.log(`WebP total size:     ${webpMB} MB`);
  console.log(`Saved:               ${savedMB} MB (${savingsPct}% reduction)`);
  console.log("Original formats preserved as fallback on disk.");
  console.log("=================================");
}

convertAll();
