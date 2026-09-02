import { HiShieldCheck, HiCurrencyPound, HiTruck, HiSparkles } from "react-icons/hi";

const points = [
  { icon: HiCurrencyPound, label: "Free, No-Obligation Quotes" },
  { icon: HiShieldCheck, label: "10-Year Insurance-Backed Guarantee" },
  { icon: HiSparkles, label: "A-Rated Energy Efficient Glazing" },
  { icon: HiTruck, label: "UK-Wide Supply & Installation" },
];

export default function TrustBar() {
  return (
    <section className="bg-surface-soft border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-glass-light">
              <Icon className="w-5 h-5" />
            </span>
            <span className="text-sm font-medium text-ink/80 leading-snug">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
