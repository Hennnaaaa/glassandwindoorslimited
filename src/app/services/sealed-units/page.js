import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiChevronRight } from "react-icons/hi";
import { getServiceBySlug, sealedUnitTypes } from "@/data/services";
import { getAspectRatio } from "@/data/imageDimensions";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/sections/CtaBanner";

const hub = getServiceBySlug("sealed-units");

export const metadata = {
  title: "Sealed Unit Products",
  description: hub.summary,
};

export default function SealedUnitsPage() {
  return (
    <>
      <section className="bg-ink text-white pt-32 pb-14 lg:pt-24 lg:pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs text-white/50 mb-4">
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <HiChevronRight className="w-3 h-3" />
              <span>Sealed Units</span>
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-glass-light">
              {hub.tagline}
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mt-3">Sealed Unit Products</h1>
            <p className="text-white/70 mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {hub.summary}
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="relative rounded-3xl overflow-hidden max-w-md mx-auto lg:max-w-none w-full"
            style={{ aspectRatio: getAspectRatio(hub.image) }}
          >
            <Image
              src={hub.image}
              alt="Sealed unit manufacturing"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Every glass type we manufacture, built to spec.
            </h2>
            <p className="text-ink/60 leading-relaxed">
              From the standard argon-filled double glazed unit that goes into
              every new frame, to acoustic, solar control and Georgian bar
              options — each type below is manufactured to your exact
              measurement and backed by our 10-year guarantee.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sealedUnitTypes.map((type, i) => (
              <Reveal key={type.slug} delay={i * 0.05}>
                <Link
                  href={`/services/sealed-units/${type.slug}`}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: getAspectRatio(type.image) }}
                  >
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-lg mb-1.5">{type.name}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed mb-4 flex-1">{type.tagline}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-glass-deep">
                      View details
                      <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
