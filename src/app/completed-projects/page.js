import Reveal from "@/components/ui/Reveal";
import CompletedProjectsGrid from "@/components/gallery/CompletedProjectsGrid";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata = {
  title: "Completed Projects",
  description:
    "A look at real window, door and glazing installations we've completed across residential and commercial properties.",
};

export default function CompletedProjectsPage() {
  return (
    <>
      <section className="bg-ink text-white pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <Reveal>
            <span className="text-sm font-semibold tracking-widest uppercase text-glass-light">
              Completed Projects
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mt-3 max-w-2xl mx-auto">
              Real installations, start to finish.
            </h1>
            <p className="text-white/70 mt-5 max-w-xl mx-auto leading-relaxed">
              A look at the homes and businesses we've fitted windows, doors
              and glazing for — every photo here is a completed job, not a
              stock shot.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <CompletedProjectsGrid />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
