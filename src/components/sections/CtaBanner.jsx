import Link from "next/link";
import { HiArrowRight, HiPhone } from "react-icons/hi";
import Reveal from "@/components/ui/Reveal";
import { company } from "@/data/company";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink text-white px-8 py-14 sm:px-16 sm:py-16 text-center">
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-glass-deep/30 blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-amber/20 blur-[100px]" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Ready to start your project?
              </h2>
              <p className="text-white/70 mb-9 leading-relaxed">
                Get a free, no-obligation quote for your windows, doors or
                glazing project — we'll get back to you within one working day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-ink font-semibold hover:bg-glass-light transition-colors"
                >
                  Get a Free Quote
                  <HiArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass-panel font-semibold hover:bg-white/15 transition-colors"
                >
                  <HiPhone className="w-4 h-4" />
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
