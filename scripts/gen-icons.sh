#!/usr/bin/env bash
# Regenerate SVG icon partials from react-icons (layouts/partials/icons/*.html).
# Temporarily installs react/react-dom/react-icons, runs scripts/gen-icons.mjs,
# then removes the temporary install unless --keep is passed.
set -euo pipefail

cd "$(dirname "$0")/.."
KEEP=0

for arg in "$@"; do
  case "$arg" in
    --keep) KEEP=1 ;;
    -h|--help) echo "Usage: $0 [--keep]  (default removes the temp install)"; exit 0 ;;
    *) echo "Unknown option: $arg" >&2; exit 1 ;;
  esac
done

PREEXISTED=0
if [[ -d node_modules ]]; then PREEXISTED=1; fi

cleanup() {
  if [[ "$KEEP" -eq 1 ]]; then
    echo "Kept node_modules (--keep)."
  elif [[ "$PREEXISTED" -eq 1 ]]; then
    npm uninstall --no-save react react-dom react-icons >/dev/null 2>&1 \
      || echo "node_modules pre-existed; couldn't fully uninstall. Clean up manually." >&2
  else
    rm -rf node_modules
  fi
}
trap cleanup EXIT

npm install --no-save --no-package-lock react react-dom react-icons
node scripts/gen-icons.mjs