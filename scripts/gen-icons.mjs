// One-time migration helper: renders the react-icons used by the site to
// standalone SVG files so Hugo can inline them without React.
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { BiCalendar, BiTime } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaRss, FaSpotify } from "react-icons/fa";
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
  calendar: BiCalendar,
  time: BiTime,
  rss: FaRss,
  linkedin: FaLinkedin,
  github: FaGithub,
  spotify: FaSpotify,
  "apple-podcasts": SiApplepodcasts,
  mastodon: SiMastodon,
  sap: SiSap,
  youtube: SiYoutube,
  codeberg: SiCodeberg,
  teapot: GiTeapotLeaves,
  user: SlUser,
};

for (const [name, Icon] of Object.entries(icons)) {
  const markup = renderToStaticMarkup(createElement(Icon));
  writeFileSync(resolve(outDir, `${name}.html`), markup + "\n");
  console.log(`${name}: ${markup.slice(0, 60)}...`);
}
