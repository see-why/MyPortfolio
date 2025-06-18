#!/bin/bash

# Create favicon directory if it doesn't exist
mkdir -p favicon

# Convert SVG to different sizes
convert -background none -size 16x16 favicon.svg favicon/favicon-16x16.png
convert -background none -size 32x32 favicon.svg favicon/favicon-32x32.png
convert -background none -size 180x180 favicon.svg favicon/apple-touch-icon.png
convert -background none -size 192x192 favicon.svg favicon/android-chrome-192x192.png
convert -background none -size 512x512 favicon.svg favicon/android-chrome-512x512.png

# Create ICO file (contains both 16x16 and 32x32)
convert favicon/favicon-16x16.png favicon/favicon-32x32.png favicon/favicon.ico

echo "Favicon conversion complete! Files are in the favicon directory." 