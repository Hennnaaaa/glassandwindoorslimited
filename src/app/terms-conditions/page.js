import LegalLayout from "@/components/legal/LegalLayout";
import { company } from "@/data/company";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="[Add date before publishing]">
      <p className="text-sm bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-4">
        Draft template only — have a solicitor review these terms (including
        Consumer Rights Act 2015 and Consumer Contracts Regulations
        cancellation-period obligations) before publishing.
      </p>

      <p>
        These terms govern quotes, orders and installations carried out by{" "}
        {company.name} ("we", "us"). By accepting a quote from us, you agree
        to these terms.
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Quotes and orders</h2>
      <p>
        Quotes are valid for [30] days from the date issued. An order is
        confirmed once you accept a written quote and, where applicable, pay
        the agreed deposit. Prices are based on the survey information
        available at the time; significant changes discovered during
        installation (e.g. structural issues) may require a revised quote.
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Deposits and payment</h2>
      <p>
        A deposit of [X]% is required to confirm manufacturing, with the
        balance due on [completion / before installation — specify]. Accepted
        payment methods are listed on your quote.
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Your right to cancel</h2>
      <p>
        If you ordered as a consumer at your home, you have a 14-day
        cancellation period under the Consumer Contracts Regulations, subject
        to any made-to-measure exclusions which will be explained at the time
        of order.
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Guarantee</h2>
      <p>
        Installations are covered by our 10-year insurance-backed guarantee
        on materials and workmanship, in addition to any manufacturer
        warranty on glass units and hardware. This does not affect your
        statutory rights under the Consumer Rights Act 2015.
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Access and site conditions</h2>
      <p>
        You agree to provide reasonable access to the property and a safe
        working area for our installation team on the agreed date(s).
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${company.email}`} className="text-glass-deep font-medium">{company.email}</a>.
      </p>
    </LegalLayout>
  );
}
