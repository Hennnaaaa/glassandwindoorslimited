"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { completedProjects } from "@/data/completedProjects";
import { getAspectRatio } from "@/data/imageDimensions";

export default function CompletedProjectsGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showNext = () => setLightboxIndex((i) => (i + 1) % completedProjects.length);
  const showPrev = () => setLightboxIndex((i) => (i - 1 + completedProjects.length) % completedProjects.length);

  const active = lightboxIndex !== null ? completedProjects[lightboxIndex] : null;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {completedProjects.map((project, i) => (
          <button
            key={project.id}
            onClick={() => openLightbox(i)}
            className="relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow"
            style={{ aspectRatio: getAspectRatio(project.src) }}
          >
            <Image
              src={project.src}
              alt={`Completed installation ${project.id}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
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
              className="relative w-full max-w-3xl"
              style={{ aspectRatio: getAspectRatio(active.src) }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={active.src} alt={`Completed installation ${active.id}`} fill sizes="90vw" className="object-contain" />
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-3 sm:right-6 text-white/80 hover:text-white p-2"
              aria-label="Next image"
            >
              <HiChevronRight className="w-8 h-8" />
            </button>
            <span className="absolute bottom-6 text-white/70 text-sm">
              {lightboxIndex + 1} of {completedProjects.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
