// Real pixel dimensions of every photo under public/images, keyed by its
// public URL path. Lets components size an image's container to its actual
// aspect ratio instead of guessing — so a photo never gets cropped down to a
// sliver, and never sits in a box so mismatched it leaves empty bars either.
export const imageDimensions = {
  "/images/about/about-1.jpg": { width: 1600, height: 1068 },
  "/images/about/about-2.jpg": { width: 1600, height: 1067 },
  "/images/hero/hero-2.jpg": { width: 1600, height: 1323 },
  "/images/hero/hero-3.jpg": { width: 1600, height: 1038 },
  "/images/hero/hero-portrait-2.jpg": { width: 1200, height: 1600 },
  "/images/services/bifold-doors/cover.jpg": { width: 1200, height: 801 },
  "/images/services/bifold-doors/gallery-1.jpg": { width: 1200, height: 1785 },
  "/images/services/bifold-doors/gallery-2.jpg": { width: 1200, height: 1600 },
  "/images/services/casement-windows/cover.jpg": { width: 1200, height: 801 },
  "/images/services/casement-windows/gallery-1.jpg": { width: 1200, height: 1800 },
  "/images/services/casement-windows/gallery-2.jpg": { width: 1200, height: 1800 },
  "/images/services/composite-doors/cover.jpg": { width: 1200, height: 800 },
  "/images/services/composite-doors/gallery-1.jpg": { width: 1200, height: 800 },
  "/images/services/composite-doors/gallery-2.jpg": { width: 1200, height: 1764 },
  "/images/services/french-doors/cover.jpg": { width: 1200, height: 800 },
  "/images/services/french-doors/gallery-1.jpg": { width: 1200, height: 2136 },
  "/images/services/french-doors/gallery-2.jpg": { width: 1200, height: 2133 },
  "/images/services/roof-lanterns/cover.jpg": { width: 1200, height: 800 },
  "/images/services/roof-lanterns/gallery-1.jpg": { width: 1200, height: 1600 },
  "/images/services/roof-lanterns/gallery-2.jpg": { width: 1200, height: 1600 },
  "/images/services/sealed-units/cover.jpg": { width: 1200, height: 800 },
  "/images/services/sealed-units/gallery-1.jpg": { width: 1200, height: 1800 },
  "/images/services/sealed-units/gallery-2.jpg": { width: 1200, height: 1800 },
  "/images/services/sealed-units/triple-glazed-cover.jpg": { width: 1200, height: 801 },
  "/images/services/sealed-units/failed-unit-cover.jpg": { width: 1200, height: 800 },
  "/images/services/sliding-doors/cover.jpg": { width: 1200, height: 801 },
  "/images/services/sliding-doors/gallery-1.jpg": { width: 1200, height: 812 },
  "/images/services/sliding-doors/gallery-2.jpg": { width: 1200, height: 800 },
  "/images/services/tilt-turn-windows/cover.jpg": { width: 1200, height: 800 },
  "/images/services/tilt-turn-windows/gallery-1.jpg": { width: 1200, height: 1600 },
  "/images/services/tilt-turn-windows/gallery-2.jpg": { width: 1200, height: 1600 },
};

// Ratio > 1 = wider than tall (landscape). Falls back to a sane 4:3 default
// for any path not in the table above (e.g. a future photo dropped in
// without updating this file).
export function getAspectRatio(src) {
  const dims = imageDimensions[src];
  if (!dims) return 4 / 3;
  return dims.width / dims.height;
}

export function isPortrait(src) {
  return getAspectRatio(src) < 1;
}
