"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { services } from "@/data/services";

const allImages = services.flatMap((service) => [
  { src: service.image, category: service.name, categorySlug: service.slug },
  ...service.gallery.map((src) => ({ src, category: service.name, categorySlug: service.slug })),
]);

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? allImages
        : allImages.filter((img) => img.categorySlug === activeCategory),
    [activeCategory]
  );

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showNext = () => setLightboxIndex((i) => (i + 1) % filtered.length);
  const showPrev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  const active = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === "all" ? "bg-ink text-white" : "bg-surface-soft text-ink/70 hover:bg-slate-200"
          }`}
        >
          All
        </button>
        {services.map((service) => (
          <button
            key={service.slug}
            onClick={() => setActiveCategory(service.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === service.slug ? "bg-ink text-white" : "bg-surface-soft text-ink/70 hover:bg-slate-200"
            }`}
          >
            {service.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            onClick={() => openLightbox(i)}
            className="relative aspect-square rounded-xl overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.category}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
              aria-label="Close"
            >
              <HiX className="w-7 h-7" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-3 sm:left-6 text-white/80 hover:text-white p-2"
              aria-label="Previous image"
            >
              <HiChevronLeft className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative w-full max-w-3xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={active.src} alt={active.category} fill sizes="90vw" className="object-contain" />
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-3 sm:right-6 text-white/80 hover:text-white p-2"
              aria-label="Next image"
            >
              <HiChevronRight className="w-8 h-8" />
            </button>
            <span className="absolute bottom-6 text-white/70 text-sm">{active.category}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
