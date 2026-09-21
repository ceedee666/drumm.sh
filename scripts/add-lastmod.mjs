import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";

// Paths renamed during the Hugo migration: resolve git history via the old path.
const RENAME_MAP = {
  "content/celoq/_index.md": "content/celoq/main.md",
  "content/projects/_index.md": "content/projects/main.md",
  "content/teaching/_index.md": "content/teaching/main.md",
  "content/teaching/python-mooc/_index.md": "content/teaching/python-mooc.md",
  "content/teaching/thesis/_index.md": "content/teaching/thesis.md",
  "content/wall-of-fame/_index.md": "content/wall-of-fame/main.md",
};

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function gitDate(file) {
  for (const candidate of [file, RENAME_MAP[file]]) {
    if (!candidate) continue;
    try {
      const out = execFileSync(
        "git",
        ["log", "-1", "--format=%cs", "--", candidate],
        { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
      ).trim();
      if (out) return out;
    } catch {
      // no history for this path
    }
  }
  return null;
}

const files = walk("content").filter((file) => file.endsWith(".md"));
let added = 0;
let skipped = 0;
const undated = [];

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const frontMatter = source.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontMatter) {
    undated.push(file);
    continue;
  }
  if (/^date\s*:/m.test(frontMatter[1]) || /^lastmod\s*:/m.test(frontMatter[1])) {
    skipped++;
    continue;
  }
  const date = gitDate(file);
  if (!date) {
    undated.push(file);
    continue;
  }
  const eol = source.match(/^\uFEFF?---\r\n/) ? "\r\n" : "\n";
  writeFileSync(
    file,
    source.replace(/^(\uFEFF?)---\r?\n/, `$1---${eol}lastmod: ${date}${eol}`),
  );
  added++;
}

console.log(`added lastmod: ${added}`);
console.log(`skipped (already dated): ${skipped}`);
console.log(`no git date (${undated.length}):`);
for (const file of undated) console.log(`  ${file}`);
