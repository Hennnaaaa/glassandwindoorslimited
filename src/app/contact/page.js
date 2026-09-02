import { HiPhone, HiMail, HiLocationMarker, HiClock } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";
import { company } from "@/data/company";

export const metadata = {
  title: "Contact Us",
  description: `Get in touch with ${company.name} for a free, no-obligation quote on windows, doors and glazing.`,
};

const contactCards = [
  { icon: HiPhone, label: "Call Us", value: company.phone, href: company.phoneHref },
  { icon: FaWhatsapp, label: "WhatsApp", value: "Message us anytime", href: company.whatsapp },
  { icon: HiMail, label: "Email Us", value: company.email, href: `mailto:${company.email}` },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-ink text-white pt-36 pb-24 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-glass-deep/25 blur-[110px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <Reveal>
            <span className="text-sm font-semibold tracking-widest uppercase text-glass-light">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mt-3 mb-5">
              Let's talk about your project.
            </h1>
            <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
              Send us a message and we'll get back to you within one working
              day with next steps and, where possible, a rough guide price.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface-soft -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Reveal className="lg:col-span-1 space-y-4">
            {contactCards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                  <c.icon className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs text-ink/50 font-medium">{c.label}</div>
                  <div className="text-ink font-semibold">{c.value}</div>
                </div>
              </a>
            ))}

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                  <HiLocationMarker className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs text-ink/50 font-medium mb-1">Our Address</div>
                  <div className="text-ink text-sm leading-relaxed">
                    {company.address.line1}<br />
                    {company.address.city}, {company.address.postcode}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                  <HiClock className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs text-ink/50 font-medium mb-1">Business Hours</div>
                  <div className="text-ink text-sm space-y-0.5">
                    {company.hours.map((h) => (
                      <p key={h.days}>{h.days}: {h.time}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
