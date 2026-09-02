import LegalLayout from "@/components/legal/LegalLayout";
import { company } from "@/data/company";

export const metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="[Add date before publishing]">
      <p className="text-sm bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-4">
        Draft template — update the cookie table once analytics/marketing
        tools are actually installed, and add a cookie-consent banner if you
        use any non-essential cookies (required under UK PECR).
      </p>

      <p>
        This site, {company.domain}, uses a small number of cookies to make
        the site work and, where enabled, to understand how it's used.
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device that help
        websites function and remember information about your visit.
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Cookies we use</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-surface-soft text-left">
            <tr>
              <th className="p-3 font-semibold">Type</th>
              <th className="p-3 font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="p-3">Essential</td>
              <td className="p-3">Required for core site functionality (e.g. navigation, form submission).</td>
            </tr>
            <tr>
              <td className="p-3">Analytics [if used]</td>
              <td className="p-3">Helps us understand site usage — only set with your consent.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Managing cookies</h2>
      <p>
        You can control or delete cookies through your browser settings at
        any time. Blocking essential cookies may affect how parts of the
        site work.
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${company.email}`} className="text-glass-deep font-medium">{company.email}</a>.
      </p>
    </LegalLayout>
  );
}
