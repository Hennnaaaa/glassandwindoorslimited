export default function LegalLayout({ title, updated, children }) {
  return (
    <>
      <section className="bg-ink text-white pt-36 pb-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
          <h1 className="text-3xl sm:text-4xl font-display font-bold">{title}</h1>
          {updated && <p className="text-white/50 text-sm mt-3">Last updated: {updated}</p>}
        </div>
      </section>
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 space-y-6 text-[15px] leading-relaxed text-ink/75">
          {children}
        </div>
      </section>
    </>
  );
}
