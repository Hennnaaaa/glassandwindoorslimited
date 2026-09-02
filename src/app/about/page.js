import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/sections/CtaBanner";
import { company } from "@/data/company";
import { getAspectRatio } from "@/data/imageDimensions";

export const metadata = {
  title: "About Us",
  description: `Learn about ${company.name} — our approach to manufacturing and installing windows, doors and glazing across the UK.`,
};

const values = [
  {
    title: "Made to measure",
    body: "Every window and door is manufactured for the exact opening it's going into — no cutting corners with stock sizes.",
  },
  {
    title: "Our own installers",
    body: "Installation is carried out by our own trained teams, not subcontracted out, so quality stays consistent from quote to fit.",
  },
  {
    title: "Honest quoting",
    body: "One fixed, itemised quote after a proper survey — no inflated 'was' prices or pressure to sign on the day.",
  },
  {
    title: "Backed for years",
    body: "A 10-year insurance-backed guarantee covers materials and workmanship on every installation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-white pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <Reveal>
            <span className="text-sm font-semibold tracking-widest uppercase text-glass-light">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mt-3 mb-6">
              A glazing company built around the fit, not just the frame.
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              {company.name} was founded to do one thing well: supply and fit
              windows, doors and glass that are measured properly, made
              properly, and installed properly — by people who take the work
              seriously.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal
            className="relative rounded-3xl overflow-hidden"
            style={{ aspectRatio: getAspectRatio("/images/about/about-2.jpg") }}
          >
            <Image
              src="/images/about/about-2.jpg"
              alt="Close-up of window frame and hardware"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-sm font-semibold tracking-widest uppercase text-glass-deep">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-5">
              Straightforward, well-fitted glazing.
            </h2>
            <p className="text-ink/70 leading-relaxed mb-4">
              We keep the process simple: a proper survey, a clear quote, and
              an installation team that turns up when it says it will. Our
              installers bring years of hands-on glazing experience to every
              job, whether it's a single replacement window or a full-height
              bi-fold opening.
            </p>
            <p className="text-ink/70 leading-relaxed">
              We work with trusted UK manufacturers for our profiles, glass
              and hardware, so every product we fit is backed by both our own
              guarantee and the manufacturer's warranty.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-surface-soft">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal className="max-w-xl mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-glass-deep">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
              The details we don't compromise on.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <Reveal key={v.title}>
                <div className="bg-white rounded-2xl border border-slate-200 p-7 h-full">
                  <HiCheckCircle className="w-7 h-7 text-glass-deep mb-4" />
                  <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
