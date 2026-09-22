// One-time migration helper: renders the react-icons used by the site to
// standalone SVG files so Hugo can inline them without React.
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { BiCalendar, BiTime, BiSolidFactory } from "react-icons/bi";
import {
  FaGithub,
  FaLinkedin,
  FaPython,
  FaRss,
  FaSpotify,
  FaUserGraduate,
} from "react-icons/fa";
import { FaSection } from "react-icons/fa6";
import {
  SiApplepodcasts,
  SiCodeberg,
  SiMastodon,
  SiSap,
  SiYoutube,
} from "react-icons/si";
import { GiTeapotLeaves } from "react-icons/gi";
import { SlUser } from "react-icons/sl";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../layouts/partials/icons");
mkdirSync(outDir, { recursive: true });

const icons = {
  "apple-podcasts": SiApplepodcasts,
  calendar: BiCalendar,
  codeberg: SiCodeberg,
  factory: BiSolidFactory,
  github: FaGithub,
  graduate: FaUserGraduate,
  linkedin: FaLinkedin,
  mastodon: SiMastodon,
  python: FaPython,
  rss: FaRss,
  sap: SiSap,
  section: FaSection,
  spotify: FaSpotify,
  teapot: GiTeapotLeaves,
  time: BiTime,
  user: SlUser,
  youtube: SiYoutube,
};

// All icons are decorative; their accessible name lives on the surrounding
// link or text. Hide them from assistive tech so the accessibility tree stays
// well-formed for screen readers and agents.
for (const [name, Icon] of Object.entries(icons)) {
  const markup = renderToStaticMarkup(createElement(Icon))
    .replace(/^<svg /, '<svg aria-hidden="true" focusable="false" ')
    .replace(/ role="img"/, "");
  writeFileSync(resolve(outDir, `${name}.html`), markup + "\n");
  console.log(`${name}: ${markup.slice(0, 60)}...`);
}
