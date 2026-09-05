import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiCheckCircle, HiArrowRight, HiChevronRight } from "react-icons/hi";
import { sealedUnitTypes, getSealedUnitTypeBySlug } from "@/data/services";
import { getAspectRatio } from "@/data/imageDimensions";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return sealedUnitTypes.map((type) => ({ type: type.slug }));
}

export async function generateMetadata({ params }) {
  const { type: typeSlug } = await params;
  const type = getSealedUnitTypeBySlug(typeSlug);
  if (!type) return {};
  return {
    title: type.name,
    description: type.summary,
  };
}

export default async function SealedUnitTypePage({ params }) {
  const { type: typeSlug } = await params;
  const type = getSealedUnitTypeBySlug(typeSlug);
  if (!type) notFound();

  const otherTypes = sealedUnitTypes.filter((t) => t.slug !== typeSlug).slice(0, 3);

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
              <Link href="/services/sealed-units" className="hover:text-white transition-colors">
                Sealed Units
              </Link>
              <HiChevronRight className="w-3 h-3" />
              <span>{type.name}</span>
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-glass-light">
              {type.tagline}
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mt-3">{type.name}</h1>
          </Reveal>
          <Reveal
            delay={0.1}
            className="relative rounded-3xl overflow-hidden max-w-md mx-auto lg:max-w-none w-full"
            style={{ aspectRatio: getAspectRatio(type.image) }}
          >
            <Image
              src={type.image}
              alt={type.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Reveal className="lg:col-span-2">
            {type.description.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-ink/70 leading-relaxed mb-5 text-[15px]">
                {paragraph}
              </p>
            ))}

            {type.gallery?.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mt-8">
                {type.gallery.map((src) => (
                  <div
                    key={src}
                    className="relative rounded-xl overflow-hidden"
                    style={{ aspectRatio: getAspectRatio(src) }}
                  >
                    <Image src={src} alt={type.name} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-surface-soft p-7 sticky top-28">
              <h2 className="font-display font-semibold text-lg mb-5">What's included</h2>
              <ul className="space-y-3.5 mb-7">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <HiCheckCircle className="w-4.5 h-4.5 text-glass-deep shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full bg-ink text-white font-semibold hover:bg-glass-deep transition-colors"
              >
                Get a Free Quote
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface-soft border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal className="mb-10 flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-2xl font-display font-bold">Other sealed unit types</h2>
            <Link
              href="/services/sealed-units"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-glass-deep"
            >
              View all sealed units
              <HiArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherTypes.map((t) => (
              <Link
                key={t.slug}
                href={`/services/sealed-units/${t.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative" style={{ aspectRatio: getAspectRatio(t.image) }}>
                  <Image src={t.image} alt={t.name} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold">{t.name}</h3>
                  <p className="text-sm text-ink/60 mt-1">{t.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
