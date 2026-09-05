import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { services } from "@/data/services";
import { getAspectRatio } from "@/data/imageDimensions";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-glass-deep">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-4">
            Windows, doors and glass — made to fit your home.
          </h2>
          <p className="text-ink/60 leading-relaxed">
            Every product is manufactured to your exact opening and finished
            to your specification, then fitted by our own installation teams.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <TiltCard className="group h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: getAspectRatio(service.image) }}
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-lg mb-1.5">{service.name}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed mb-4">{service.tagline}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-glass-deep">
                      Learn more
                      <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
