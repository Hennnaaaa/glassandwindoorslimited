"use client";

import dynamic from "next/dynamic";

const GlassHeroScene = dynamic(() => import("./GlassHeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero3D() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <GlassHeroScene />
    </div>
  );
}
