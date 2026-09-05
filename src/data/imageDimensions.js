// Real pixel dimensions of every photo under public/images, keyed by its
// public URL path. Lets components size an image's container to its actual
// aspect ratio instead of guessing — so a photo never gets cropped down to a
// sliver, and never sits in a box so mismatched it leaves empty bars either.
export const imageDimensions = {
  "/images/completed-projects/project-1.jpg": { width: 1448, height: 1086 },
  "/images/completed-projects/project-2.jpg": { width: 1448, height: 1086 },
  "/images/completed-projects/project-3.jpg": { width: 1448, height: 1086 },
  "/images/completed-projects/project-4.jpg": { width: 1448, height: 1086 },
  "/images/completed-projects/project-5.jpg": { width: 1448, height: 1086 },
  "/images/completed-projects/project-6.jpg": { width: 1024, height: 768 },
  "/images/completed-projects/project-7.jpg": { width: 1024, height: 768 },
  "/images/completed-projects/project-8.jpg": { width: 1024, height: 756 },
  "/images/completed-projects/project-9.jpg": { width: 1024, height: 770 },
  "/images/completed-projects/project-10.jpg": { width: 1707, height: 1262 },
  "/images/completed-projects/project-11.jpg": { width: 1448, height: 1086 },
  "/images/completed-projects/project-12.jpg": { width: 1448, height: 1086 },
  "/images/about/about-1.jpg": { width: 1600, height: 1068 },
  "/images/about/about-2.jpg": { width: 1600, height: 1067 },
  "/images/hero/hero-2.jpg": { width: 1600, height: 1323 },
  "/images/hero/hero-3.jpg": { width: 1600, height: 1038 },
  "/images/hero/hero-portrait-2.jpg": { width: 1200, height: 1600 },
  "/images/services/bifold-doors/cover.jpg": { width: 1200, height: 1200 },
  "/images/services/bifold-doors/gallery-1.jpg": { width: 1200, height: 1200 },
  "/images/services/bifold-doors/gallery-2.jpg": { width: 1200, height: 1200 },
  "/images/services/casement-windows/cover.jpg": { width: 1200, height: 1200 },
  "/images/services/casement-windows/gallery-1.jpg": { width: 1200, height: 1200 },
  "/images/services/casement-windows/gallery-2.jpg": { width: 1200, height: 1200 },
  "/images/services/composite-doors/cover.jpg": { width: 1200, height: 1200 },
  "/images/services/composite-doors/gallery-1.jpg": { width: 1200, height: 1200 },
  "/images/services/composite-doors/gallery-2.jpg": { width: 1200, height: 1200 },
  "/images/services/french-doors/cover.jpg": { width: 1200, height: 800 },
  "/images/services/french-doors/gallery-1.jpg": { width: 1200, height: 2136 },
  "/images/services/french-doors/gallery-2.jpg": { width: 1200, height: 2133 },
  "/images/services/roof-lanterns/cover.jpg": { width: 1122, height: 1402 },
  "/images/services/roof-lanterns/gallery-1.jpg": { width: 1200, height: 1200 },
  "/images/services/roof-lanterns/gallery-2.jpg": { width: 1200, height: 1200 },
  "/images/services/sealed-units/cover.jpg": { width: 1200, height: 800 },
  "/images/services/sealed-units/gallery-1.jpg": { width: 1200, height: 1800 },
  "/images/services/sealed-units/gallery-2.jpg": { width: 1200, height: 1800 },
  "/images/services/sealed-units/triple-glazed-cover.jpg": { width: 1200, height: 801 },
  "/images/services/sealed-units/failed-unit-cover.jpg": { width: 1200, height: 800 },
  "/images/services/sealed-units/georgian-bar-real.jpg": { width: 1537, height: 1023 },
  "/images/services/sealed-units/acoustic-glass.jpg": { width: 700, height: 700 },
  "/images/services/sealed-units/double-glazed-decorative.jpg": { width: 600, height: 581 },
  "/images/services/sealed-units/double-glazed-decorative-2.jpg": { width: 1200, height: 1600 },
  "/images/services/sealed-units/double-glazed-decorative-3.jpg": { width: 433, height: 687 },
  "/images/services/sealed-units/spacer-bar-diagram.jpg": { width: 1920, height: 1290 },
  "/images/services/sealed-units/unit-cutaway-diagram.jpg": { width: 1920, height: 1290 },
  "/images/services/sealed-units/obscure-cover.jpg": { width: 1200, height: 1200 },
  "/images/services/sealed-units/obscure-gallery-1.jpg": { width: 1200, height: 1200 },
  "/images/services/sealed-units/obscure-gallery-2.jpg": { width: 1200, height: 1200 },
  "/images/services/sealed-units/solar-control-cover.jpg": { width: 1200, height: 1200 },
  "/images/services/sealed-units/solar-control-gallery-1.jpg": { width: 1200, height: 1200 },
  "/images/services/sealed-units/solar-control-gallery-2.jpg": { width: 1200, height: 1200 },
  "/images/services/sealed-units/acoustic-gallery-1.jpg": { width: 676, height: 753 },
  "/images/services/sealed-units/acoustic-gallery-2.jpg": { width: 1200, height: 1200 },
  "/images/services/sealed-units/georgian-bar-gallery-1.jpg": { width: 1200, height: 1200 },
  "/images/services/sealed-units/georgian-bar-gallery-2.jpg": { width: 1200, height: 1200 },
  "/images/services/sealed-units/failed-unit-gallery-1.jpg": { width: 1200, height: 1200 },
  "/images/services/sealed-units/failed-unit-gallery-2.jpg": { width: 1200, height: 1200 },
  "/images/services/sliding-doors/cover.jpg": { width: 1200, height: 1200 },
  "/images/services/sliding-doors/gallery-1.jpg": { width: 1200, height: 1200 },
  "/images/services/sliding-doors/gallery-2.jpg": { width: 1200, height: 1200 },
  "/images/services/tilt-turn-windows/cover.jpg": { width: 1200, height: 1200 },
  "/images/services/tilt-turn-windows/gallery-1.jpg": { width: 1200, height: 1200 },
  "/images/services/tilt-turn-windows/gallery-2.jpg": { width: 1200, height: 1200 },
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
