import Reveal from "@/components/ui/Reveal";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata = {
  title: "Gallery",
  description: "Browse our gallery of windows, doors and glazing installations by category.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-ink text-white pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal>
            <span className="text-sm font-semibold tracking-widest uppercase text-glass-light">
              Gallery
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mt-3 max-w-2xl">
              See the finish for yourself.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <GalleryGrid />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
