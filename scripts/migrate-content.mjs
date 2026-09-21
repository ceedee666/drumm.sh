import { readFileSync, writeFileSync, existsSync, renameSync, mkdirSync } from "node:fs";
import { readdir } from "node:fs/promises";
import path from "node:path";

const CONTENT = path.resolve("content");

async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(full);
  }
  return out;
}

const stats = { renames: 0, refFixes: 0, htmlImgs: 0, numberLines: 0 };

// 1. Section landing pages: main.md -> _index.md
const renames = [
  ["teaching/main.md", "teaching/_index.md"],
  ["projects/main.md", "projects/_index.md"],
  ["celoq/main.md", "celoq/_index.md"],
  ["wall-of-fame/main.md", "wall-of-fame/_index.md"],
  ["teaching/python-mooc.md", "teaching/python-mooc/_index.md"],
  ["teaching/thesis.md", "teaching/thesis/_index.md"],
];
for (const [from, to] of renames) {
  const src = path.join(CONTENT, from);
  const dst = path.join(CONTENT, to);
  if (existsSync(src) && !existsSync(dst)) {
    mkdirSync(path.dirname(dst), { recursive: true });
    renameSync(src, dst);
    stats.renames++;
  }
}

// 2. Known broken links in the source content (typos / moved assets). These
// 404'd under Gatsby too; corrected here so the link checker has a clean base.
const linkFixes = [
  ["teaching/thesis/_index.md", "/teaching/thesis/2025/website_monitoring", "/teaching/thesis/2025/website-monitoring"],
  ["teaching/thesis/_index.md", "/teaching/thesis/2024/pro-anforderungen", "/teaching/thesis/2024/pmo-anforderungen"],
  ["blog/2021/03/08/first-steps-rpi-cluster.md", "/blog/building-rpi-cluster", "/blog/2021/03/05/building-rpi-cluster/"],
  ["blog/2021/03/03/adding-comment-to-my-blog.md", "/blog/why-i-created-my-own-webpage", "/blog/2021/02/26/why-i-created-my-own-webpage/"],
  ["teaching/python-mooc/week6_unit1_libraries.md", "](Week_6_Unit_1_libraries_notebook.ipynb)", "](files/Week_6_Unit_1_libraries_notebook.ipynb)"],
  ["teaching/python-mooc/week6_unit4_standard_libraries.md", "](files/Week_6_Unit_4.zip)", "](files/Week_6_Unit_4_otherstandard_notebook.ipynb)"],
  ["teaching/python-mooc/week6_assignment_exercise_solution.md", "files/week6_assignment_notebook_solution.ipynb", "files/week_6_assignment_notebook_solution.ipynb"],
  ["wall-of-fame/_index.md", "/teaching/lectures/2024/winter-term/business_information_systems", "/teaching/lectures/2024/winter-term/business-information-systems"],
  ["wall-of-fame/_index.md", "/teaching/lectures/2025/winter-term/business_information_systems", "/teaching/lectures/2025/winter-term/business-information-systems"],
  ["wall-of-fame/_index.md", "/teaching/lectures/2024/winter-term/systems_integration", "/teaching/lectures/2024/winter-term/systems-integration"],
  ["wall-of-fame/_index.md", "/teaching/lectures/2025/winter-term/systems_integration", "/teaching/lectures/2025/winter-term/systems-integration"],
  ["wall-of-fame/_index.md", "/teaching/lectures/2023/winter_term/business-information-systems", "/teaching/lectures/2023/winter_term/business_information_systems"],
];
for (const [rel, from, to] of linkFixes) {
  const file = path.join(CONTENT, rel);
  if (!existsSync(file)) continue;
  const text = readFileSync(file, "utf8");
  if (!text.includes(from)) continue;
  writeFileSync(file, text.replaceAll(from, to));
  stats.refFixes++;
}

// 3. Content-level fixes
const files = await walk(CONTENT);
for (const file of files) {
  let text = readFileSync(file, "utf8");
  const original = text;
  const relDir = path.relative(CONTENT, path.dirname(file)).split(path.sep).join("/");

  // 2a. Gatsby ignored the {numberLines} fence attribute; drop it.
  const beforeNumberLines = text;
  text = text.replace(/ \{numberLines\}/g, "");
  if (text !== beforeNumberLines) stats.numberLines++;

  // 2b. python-mooc landing page moved into its own directory: drop doubled prefix.
  if (text.includes("./python-mooc/imgs/")) {
    text = text.replaceAll("./python-mooc/imgs/", "imgs/");
    stats.refFixes++;
  }

  // 2c. Referenced file that never existed; the real asset is process.png.
  if (text.includes("./compare_excel/example_process.png")) {
    text = text.replaceAll("./compare_excel/example_process.png", "./compare_excel/process.png");
    stats.refFixes++;
  }

  // 2d. Raw HTML <img> tags are not processed by Goldmark render hooks, so
  // rewrite local src values to the absolute output path.
  text = text.replace(/<img\b([^>]*?)\bsrc=(["'])(?!https?:|\/\/|\/|data:)([^"']+)\2([^>]*)>/gi, (m, pre, q, src, post) => {
    const abs = "/" + path.posix.normalize(path.posix.join(relDir, src));
    stats.htmlImgs++;
    return `<img${pre}src=${q}${abs}${q}${post}>`;
  });

  if (text !== original) writeFileSync(file, text);
}

console.log(stats);
