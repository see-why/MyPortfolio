#!/bin/bash
# Regenerates the favicon set from favicon.svg (requires ImageMagick 7: `magick`).
# Render at high density, then resize, so the whole SVG fits each icon.
set -euo pipefail

mkdir -p favicon

render() { # size output
  magick -background none -density 768 favicon.svg -resize "${1}x${1}" "$2"
}

render 16 favicon/favicon-16x16.png
render 32 favicon/favicon-32x32.png
render 180 favicon/apple-touch-icon.png
render 192 favicon/android-chrome-192x192.png
render 512 favicon/android-chrome-512x512.png

# ICO containing 16x16, 32x32 and 48x48
render 48 /tmp/favicon-48x48.png
magick favicon/favicon-16x16.png favicon/favicon-32x32.png /tmp/favicon-48x48.png favicon/favicon.ico

echo "Favicon conversion complete! Files are in the favicon directory."
