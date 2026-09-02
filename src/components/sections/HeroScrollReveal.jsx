"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/sections/Hero";

// Wraps the sticky Hero and tracks how far the page has scrolled through its
// pinned range (0 = hero fully shown, 1 = the card below has fully risen to
// cover it). That progress drives a real perspective/rotate transform on the
// incoming card — a physical "lid closing over" motion rather than a flat
// slide — plus a matching dim + parallax on the hero itself.
//
// Progress is written straight to the DOM (a CSS custom property + the
// card's own transform) on every animation frame, deliberately bypassing
// React state — a setState here would re-render the whole tree, including
// the WebGL hero scene, 60 times a second and stutter the scroll.
export default function HeroScrollReveal({ children }) {
  const wrapperRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const wrapper = wrapperRef.current;
      const card = cardRef.current;
      if (!wrapper || !card) return;

      const pinRange = wrapper.offsetHeight - window.innerHeight;
      const scrolled = -wrapper.getBoundingClientRect().top;
      const p = pinRange > 0 ? Math.min(1, Math.max(0, scrolled / pinRange)) : 0;

      document.documentElement.style.setProperty("--cp", p.toFixed(4));

      const tilt = (1 - p) * 24;
      const lift = (1 - p) * 220;
      const scale = 0.86 + p * 0.14;
      card.style.transform = `perspective(1000px) rotateX(${tilt}deg) translateY(${lift}px) scale(${scale})`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {/* A long pin range (70vh of extra scroll room) so the card below
          climbs the whole way up the hero — past the headline and the CTA
          buttons — while still tilted in 3D, instead of covering just a
          sliver near the bottom. */}
      <div ref={wrapperRef} className="relative h-[calc(100dvh+70vh)]">
        <Hero />
      </div>
      <div
        ref={cardRef}
        style={{ transformOrigin: "bottom center" }}
        className="relative z-10 -mt-[70vh] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.35)] overflow-hidden bg-surface-soft"
      >
        {children}
      </div>
    </>
  );
}
