import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";
import Reveal from "@/components/ui/Reveal";
import { getAspectRatio } from "@/data/imageDimensions";

const points = [
  "Made-to-measure manufacturing — every frame is built for your exact opening",
  "In-house installation teams, not third-party subcontractors",
  "A-rated, argon-filled glazing as standard across our window range",
  "Multi-point locking and toughened safety glass on every product",
  "10-year insurance-backed guarantee on materials and workmanship",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-ink text-white relative overflow-hidden">
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-glass-deep/20 blur-[110px]" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
        <Reveal className="relative">
          <div
            className="relative rounded-3xl overflow-hidden max-w-md mx-auto lg:mx-0"
            style={{ aspectRatio: getAspectRatio("/images/about/about-1.jpg") }}
          >
            <Image
              src="/images/about/about-1.jpg"
              alt="Installer fitting a modern window"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div
            className="hidden sm:block absolute -bottom-8 -right-4 lg:right-8 w-44 rounded-2xl overflow-hidden border-4 border-ink shadow-2xl"
            style={{ aspectRatio: getAspectRatio("/images/about/about-2.jpg") }}
          >
            <Image
              src="/images/about/about-2.jpg"
              alt="Close-up of window frame profile"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-sm font-semibold tracking-widest uppercase text-glass-light">
            Why Glass &amp; Windoors
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-6 leading-tight">
            Built to spec. Fitted right. Backed for years to come.
          </h2>
          <ul className="space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <HiCheckCircle className="w-5 h-5 text-glass-light shrink-0 mt-0.5" />
                <span className="text-white/75 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
