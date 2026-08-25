import { readFileSync } from "node:fs";

const file = process.argv[2];
const html = readFileSync(file, "utf8");
const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
for (const [, raw] of blocks) console.log(JSON.stringify(JSON.parse(raw), null, 2));
