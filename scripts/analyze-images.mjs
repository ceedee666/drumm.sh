import { readFileSync, existsSync, statSync } from "node:fs";
import { readdir } from "node:fs/promises";
import path from "node:path";

const CONTENT = path.resolve("content");

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(full);
  }
  return out;
}

const mdImg = /!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
const htmlImg = /<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi;

function isLocal(dest) {
  return !/^(https?:)?\/\//.test(dest) && !dest.startsWith("/") && !dest.startsWith("data:");
}

const files = await walk(CONTENT);
const report = [];
const refCount = new Map();

for (const file of files) {
  const dir = path.dirname(file);
  const text = readFileSync(file, "utf8");
  const refs = [];
  for (const re of [mdImg, htmlImg]) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text))) {
      const dest = m[1];
      if (!isLocal(dest)) continue;
      const resolved = path.resolve(dir, dest);
      const exists = existsSync(resolved);
      refs.push({ dest, resolved: path.relative(CONTENT, resolved), exists });
      refCount.set(resolved, (refCount.get(resolved) ?? 0) + 1);
    }
  }
  if (refs.length) report.push({ file: path.relative(CONTENT, file), refs });
}

let missing = 0;
const shared = [];
for (const [resolved, count] of refCount) if (count > 1) shared.push({ img: path.relative(CONTENT, resolved), count });

for (const { file, refs } of report) {
  console.log(`\n${file}`);
  for (const r of refs) {
    if (!r.exists) missing++;
    console.log(`  ${r.exists ? "ok " : "MISS"} ${r.dest} -> ${r.resolved}`);
  }
}

console.log(`\n--- summary ---`);
console.log(`files with local refs: ${report.length}`);
console.log(`missing: ${missing}`);
console.log(`shared images: ${shared.length}`);
for (const s of shared) console.log(`  ${s.count}x ${s.img}`);
