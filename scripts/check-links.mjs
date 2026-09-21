import { readFileSync, existsSync, statSync } from "node:fs";
import { readdir } from "node:fs/promises";
import path from "node:path";

const PUBLIC = path.resolve("public");
const BASELINE = path.resolve("scripts/link-baseline.txt");
const baseline = existsSync(BASELINE)
  ? new Set(readFileSync(BASELINE, "utf8").split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#")))
  : new Set();
const attrRe = /(?:href|src)=("([^"]*)"|'([^']*)'|([^\s>]+))/gi;

async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else if (entry.isFile() && entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

function targetExists(urlPath) {
  let p = decodeURIComponent(urlPath);
  const file = path.join(PUBLIC, p);
  if (existsSync(file) && statSync(file).isFile()) return true;
  if (existsSync(path.join(file, "index.html"))) return true;
  if (existsSync(file + ".html")) return true;
  return false;
}

const pages = await walk(PUBLIC);
const broken = new Map();
let checked = 0;

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  attrRe.lastIndex = 0;
  let m;
  while ((m = attrRe.exec(html))) {
    let url = m[2] ?? m[3] ?? m[4];
    if (/^(https?:)?\/\//.test(url) || /^(mailto|tel|data|javascript):/.test(url) || url.startsWith("#")) continue;
    if (!url.startsWith("/")) continue;
    url = url.split("#")[0].split("?")[0];
    if (!url) continue;
    checked++;
    if (!targetExists(url)) {
      const key = url;
      if (!broken.has(key)) broken.set(key, []);
      broken.get(key).push(path.relative(PUBLIC, page));
    }
  }
}

const known = [...broken.keys()].filter((u) => baseline.has(u));
const fresh = [...broken.entries()].filter(([u]) => !baseline.has(u));

console.log(`pages: ${pages.length}`);
console.log(`local links checked: ${checked}`);
console.log(`broken: ${broken.size} (known: ${known.length}, new: ${fresh.length})`);
for (const [url, sources] of fresh.sort()) {
  console.log(`  NEW  ${url}  <- ${sources.slice(0, 3).join(", ")}${sources.length > 3 ? ` (+${sources.length - 3})` : ""}`);
}
for (const url of known) console.log(`  known ${url}`);
if (fresh.length) process.exitCode = 1;
