import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { services, sealedUnitTypes, getServiceBySlug } from "@/data/services";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata = {
  title: "Windows, Doors & Glazing Services",
  description:
    "Explore our full range of windows, doors and glass products — casement and tilt-turn windows, bi-fold and sliding doors, composite doors, sealed units and roof lanterns.",
};

const sealedUnitsHub = getServiceBySlug("sealed-units");

const categories = [
  {
    label: "Windows",
    intro: "Made-to-measure window ranges in uPVC and aluminium.",
    items: services.filter((s) => s.category === "windows"),
  },
  {
    label: "Doors",
    intro: "Entrance, patio and garden doors fitted by our own teams.",
    items: services.filter((s) => s.category === "doors"),
  },
];

function ServiceCard({ item, href, delay, priority }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={href}
        className="group flex flex-col sm:flex-row gap-5 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-shadow p-3 h-full"
      >
        <div className="relative w-full sm:w-44 h-40 sm:h-auto shrink-0 rounded-xl overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            priority={priority}
            sizes="176px"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="py-2 pr-2">
          <h3 className="text-xl font-display font-semibold mb-1.5">{item.name}</h3>
          <p className="text-sm text-ink/60 leading-relaxed mb-3">{item.summary}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-glass-deep">
            View details
            <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-white pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal>
            <span className="text-sm font-semibold tracking-widest uppercase text-glass-light">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mt-3 max-w-2xl">
              Windows, doors and glass — built to spec.
            </h1>
            <p className="text-white/70 mt-5 max-w-xl leading-relaxed">
              Every product below is manufactured to your exact opening and
              fitted by our own installation teams, backed by a 10-year
              insurance-backed guarantee.
            </p>
          </Reveal>
        </div>
      </section>

      {categories.map((category, categoryIndex) => (
        <section key={category.label} className="py-16 bg-surface border-b border-slate-200 last:border-0">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <Reveal className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">{category.label}</h2>
              <p className="text-ink/60">{category.intro}</p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {category.items.map((item, i) => (
                <ServiceCard
                  key={item.slug}
                  item={item}
                  href={`/services/${item.slug}`}
                  delay={i * 0.04}
                  priority={categoryIndex === 0 && i === 0}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">Sealed Units</h2>
              <p className="text-ink/60 max-w-xl">{sealedUnitsHub.summary}</p>
            </div>
            <Link
              href="/services/sealed-units"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-glass-deep shrink-0"
            >
              Sealed unit manufacturing overview
              <HiArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sealedUnitTypes.map((type, i) => (
              <Reveal key={type.slug} delay={i * 0.04}>
                <Link
                  href={`/services/sealed-units/${type.slug}`}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-semibold mb-1.5">{type.name}</h3>
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
