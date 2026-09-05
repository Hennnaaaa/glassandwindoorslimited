"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiPhone } from "react-icons/hi";
import Hero3D from "@/components/three/Hero3D";
import { company } from "@/data/company";

// Landscape set for wider screens, portrait set for narrow ones — each cross-
// fades through its own photos on a timer rather than force-cropping a
// landscape photo into a tall mobile frame (or vice versa).
const LANDSCAPE_PHOTOS = [
  "/images/hero/hero-3.jpg",
  "/images/hero/hero-2.jpg",
];
const PORTRAIT_PHOTOS = ["/images/hero/hero-portrait-2.jpg"];

function HeroPhotoLayer({ photos }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % photos.length);
    }, 6000);
    return () => clearInterval(id);
  }, [photos.length]);

  return (
    <>
      {photos.map((src, i) => (
        // No `priority` here: this component renders both the landscape and
        // portrait sets at once (CSS hides whichever doesn't match the
        // breakpoint via display:none). `priority` forces an eager fetch
        // regardless of visibility, which was downloading the hidden set's
        // images on every load too. Plain lazy loading correctly skips
        // display:none images since they never intersect the viewport.
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === active ? 0.45 : 0 }}
        />
      ))}
    </>
  );
}

// Reads the --cp custom property (0 = fully shown, 1 = fully covered) that
// HeroScrollReveal writes directly to the DOM on scroll. Using calc() here
// means these styles update every frame without React re-rendering Hero (and
// its WebGL scene) at all.
export default function Hero() {
  return (
    <section className="sticky top-0 z-0 h-[100dvh] overflow-hidden bg-ink text-white flex items-center">
      {/* Real photos behind the 3D scene — the glass model reads as CGI
          floating in front of an actual home rather than a plain colour
          backdrop. The 3D canvas is alpha-transparent, so this shows through
          around it. Landscape set on sm+, portrait set below that. */}
      <div className="absolute inset-0 hidden sm:block">
        <HeroPhotoLayer photos={LANDSCAPE_PHOTOS} />
      </div>
      <div className="absolute inset-0 sm:hidden">
        <HeroPhotoLayer photos={PORTRAIT_PHOTOS} />
      </div>
      {/* Ambient glow backdrop */}
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-glass-deep/25 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-amber/10 blur-[120px]" />

      {/* 3D scene, right side on desktop */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[55%] opacity-90"
        style={{
          transform:
            "translateY(calc(var(--cp, 0) * -90px)) scale(calc(1 + var(--cp, 0) * 0.12))",
        }}
      >
        <Hero3D />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 lg:via-ink/40 to-transparent" />
      {/* Dims and darkens as the card below rises over it, selling the sense that it's receding behind the next section */}
      <div
        className="absolute inset-0 bg-ink pointer-events-none"
        style={{ opacity: "calc(var(--cp, 0) * 0.7)" }}
      />

      <div
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-20 w-full"
        style={{
          transform:
            "translateY(calc(var(--cp, 0) * -60px)) scale(calc(1 - var(--cp, 0) * 0.06))",
          opacity: "calc(1 - var(--cp, 0) * 0.7)",
        }}
      >
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-semibold tracking-wide uppercase text-glass-light mb-6">
            Windows · Doors · Glazing · UK-Wide
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.08] mb-6">
            Glass that shapes
            <span className="block text-gradient-glass">the way you live.</span>
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mb-9">
            {company.name} designs, manufactures and installs premium windows,
            doors and glazing — from bi-folds that open up a whole wall to
            precision-sealed units that quietly cut your heating bills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-ink font-semibold hover:bg-glass-light transition-colors"
            >
              Get a Free Quote
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass-panel font-semibold hover:bg-white/15 transition-colors"
            >
              <HiPhone className="w-4 h-4" />
              {company.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-white/50 text-xs">
        <span>Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
