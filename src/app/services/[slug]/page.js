import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiCheckCircle, HiArrowRight } from "react-icons/hi";
import { services, getServiceBySlug } from "@/data/services";
import { getAspectRatio } from "@/data/imageDimensions";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  // "sealed-units" has its own static route (a category hub with
  // sub-pages under it), so it's excluded here to avoid clashing with it.
  return services
    .filter((service) => service.slug !== "sealed-units")
    .map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="bg-ink text-white pt-32 pb-14 lg:pt-24 lg:pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="text-center lg:text-left">
            <span className="text-sm font-semibold tracking-widest uppercase text-glass-light">
              {service.tagline}
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mt-3">{service.name}</h1>
          </Reveal>
          <Reveal
            delay={0.1}
            className="relative rounded-3xl overflow-hidden max-w-md mx-auto lg:max-w-none w-full"
            style={{ aspectRatio: getAspectRatio(service.image) }}
          >
            <Image
              src={service.image}
              alt={service.name}
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
            {service.description.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-ink/70 leading-relaxed mb-5 text-[15px]">
                {paragraph}
              </p>
            ))}

            {service.gallery?.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mt-8">
                {service.gallery.map((src) => (
                  <div
                    key={src}
                    className="relative rounded-xl overflow-hidden"
                    style={{ aspectRatio: getAspectRatio(src) }}
                  >
                    <Image src={src} alt={service.name} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-surface-soft p-7 sticky top-28">
              <h2 className="font-display font-semibold text-lg mb-5">What's included</h2>
              <ul className="space-y-3.5 mb-7">
                {service.features.map((feature) => (
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
          <Reveal className="mb-10">
            <h2 className="text-2xl font-display font-bold">You might also need</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative" style={{ aspectRatio: getAspectRatio(s.image) }}>
                  <Image src={s.image} alt={s.name} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold">{s.name}</h3>
                  <p className="text-sm text-ink/60 mt-1">{s.tagline}</p>
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
