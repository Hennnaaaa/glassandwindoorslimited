import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Enquire",
    description: "Tell us about your project online or by phone — send photos or measurements if you have them.",
  },
  {
    number: "02",
    title: "Survey & Quote",
    description: "We visit to take precise measurements and talk through options, then send a fixed, no-obligation quote.",
  },
  {
    number: "03",
    title: "Manufacture",
    description: "Once approved, your windows or doors are manufactured to spec in the colour and glazing you chose.",
  },
  {
    number: "04",
    title: "Install",
    description: "Our own installation team fits everything, tests it, and leaves the site clean and tidy.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-surface-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-glass-deep">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            From enquiry to installation, in four steps.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} className="relative">
              <div className="bg-white rounded-2xl border border-slate-200 p-7 h-full shadow-sm">
                <span className="text-4xl font-display font-bold text-glass-light/80">
                  {step.number}
                </span>
                <h3 className="text-lg font-display font-semibold mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-slate-300" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
