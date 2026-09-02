import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-ink text-white text-center px-5">
      <div>
        <span className="text-sm font-semibold tracking-widest uppercase text-glass-light">
          404
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-5">
          This page has been fitted elsewhere.
        </h1>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Try heading back to the
          homepage or browsing our services.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink font-semibold hover:bg-glass-light transition-colors"
        >
          Back to Home
          <HiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
