# drumm.sh

This repo contains my personal website. I use it mainly to distribute
information about my lectures at the FH Aachen and for my personal blog.

The website is built with [Hugo](https://gohugo.io/). Most of the content is
managed as Markdown files under `content/`. The production build is plain
Hugo — no Node.js or package installation is required to build or deploy it.

## 🚀 Quick start

1. **Install Hugo**

   Install the extended version of Hugo (v0.166.0 or newer), e.g. via
   [Homebrew](https://brew.sh/):

   ```sh
   brew install hugo
   ```

2. **Start developing**

   ```sh
   hugo server
   ```

   The site is now running at `http://localhost:1313`.

3. **Production build**

   ```sh
   hugo --minify --cleanDestinationDir
   ```

   The generated site is written to `public/`.

## 🧪 Tests

The build is validated by a local link checker that fails on newly broken
internal links (known pre-existing breakages are listed in
`scripts/link-baseline.txt`). It only needs Node.js, no dependencies:

```sh
hugo --minify --cleanDestinationDir && node scripts/check-links.mjs
```

## 🔑 Environment variables

The **videos** page fetches the latest videos from the YouTube Data API. It
reads `YOUTUBE_API_KEY` and `YOUTUBE_CHANNEL_ID` from the environment. A local
`.env` file (git-ignored) holds them; load it into the shell before running
Hugo:

```sh
set -a; source .env; set +a
hugo server
```

On Netlify, set both variables under **Site configuration → Environment
variables**. Without them the videos page renders empty and logs a warning.
The **podcast** page fetches its RSS feed at build time and needs no
configuration.

## 🎨 Styles

The styles live in `assets/scss/` and are compiled to the committed file
`static/css/main.css`. Hugo does not compile Sass itself, so regenerating the
CSS requires a temporary local toolchain:

```sh
npm install --no-save sass bootstrap
npx sass --load-path=node_modules --no-source-map assets/scss/main.scss static/css/main.css
```

Commit the resulting `static/css/main.css`.

## 🖼 Icons

Navigation and footer icons are generated once from
[`react-icons`](https://react-icons.github.io/react-icons/) into standalone SVG
partials under `layouts/partials/icons/`. Those `.html` files are committed, so
Hugo can inline them without any Node.js dependency at build time.

To add or replace an icon:

1. Add the import and an entry to the `icons` map in
   `scripts/gen-icons.mjs`, e.g.:

   ```js
   import { FaGithub } from "react-icons/fa";
   // ...
   const icons = {
     github: FaGithub,
     // ...
   };
   ```

2. Regenerate the partials with `scripts/gen-icons.sh` (this rewrites
   `layouts/partials/icons/*.html`). It installs the generator's dependencies
   temporarily — they are not part of the repo — runs
   `scripts/gen-icons.mjs`, then removes the temporary install:

   ```sh
   ./scripts/gen-icons.sh
   ```

   Pass `--keep` to keep `node_modules` around, e.g. while iterating on the
   icon list.

3. Use the icon in a template via its map key:

   ```go-html-template
   {{ partial "icon.html" "github" }}
   ```

4. Commit the changed files under `layouts/partials/icons/`.

## 💬 Feedback

If you find something that could be improved, please [file an
issue](https://github.com/ceedee666/drumm.sh/issues/new) or submit a pull
request!
