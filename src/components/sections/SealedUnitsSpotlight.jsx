import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { getServiceBySlug, sealedUnitTypes } from "@/data/services";
import { getAspectRatio } from "@/data/imageDimensions";
import Reveal from "@/components/ui/Reveal";

const hub = getServiceBySlug("sealed-units");

// The homepage's main focus: sealed units get a full showcase section of
// their own, ahead of the general services grid, with every glass type
// visible rather than folded into a single "Sealed Units" card.
export default function SealedUnitsSpotlight() {
  return (
    <section className="py-24 bg-ink text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] rounded-full bg-glass-deep/20 blur-[130px]" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-glass-light">
            Our Specialty
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-4">
            {hub.tagline}
          </h2>
          <p className="text-white/70 leading-relaxed">{hub.summary}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sealedUnitTypes.map((type, i) => (
            <Reveal key={type.slug} delay={i * 0.05}>
              <Link
                href={`/services/sealed-units/${type.slug}`}
                className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-colors"
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: getAspectRatio(type.image) }}
                >
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-semibold mb-1.5">{type.name}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1">{type.tagline}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-glass-light">
                    View details
                    <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <Link
            href="/services/sealed-units"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-ink font-semibold hover:bg-glass-light transition-colors"
          >
            Explore All Sealed Unit Types
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
