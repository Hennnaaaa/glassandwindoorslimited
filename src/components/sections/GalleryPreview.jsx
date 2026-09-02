import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import Reveal from "@/components/ui/Reveal";

const items = [
  { src: "/images/services/bifold-doors/cover.jpg", alt: "Bi-folding doors opened onto a garden", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/services/composite-doors/cover.jpg", alt: "Modern composite front door" },
  { src: "/images/services/roof-lanterns/cover.jpg", alt: "Glass roof lantern extension" },
  { src: "/images/services/casement-windows/cover.jpg", alt: "uPVC casement windows" },
  { src: "/images/services/sliding-doors/cover.jpg", alt: "Sliding patio doors" },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-glass-deep">
              Recent Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
              A closer look at our installations.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-glass-deep transition-colors"
          >
            View full gallery
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[10rem]">
          {items.map((item) => (
            <div key={item.src} className={`relative rounded-2xl overflow-hidden group ${item.span || ""}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
