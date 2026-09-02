import LegalLayout from "@/components/legal/LegalLayout";
import { company } from "@/data/company";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="[Add date before publishing]">
      <p className="text-sm bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-4">
        Draft template — replace the bracketed placeholders and have this
        reviewed against current UK GDPR / Data Protection Act 2018
        requirements before the site goes live.
      </p>

      <p>
        {company.name} ("we", "us", "our") is committed to protecting your
        privacy. This policy explains what personal data we collect when you
        use {company.domain}, how we use it, and your rights over it.
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Information we collect</h2>
      <p>
        When you submit an enquiry or quote request, we collect the
        information you provide directly — typically your name, email
        address, phone number, property address and details of your project.
        We also collect standard technical data (browser type, pages visited)
        via [analytics tool, e.g. Google Analytics — add if used].
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">How we use your information</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>To respond to enquiries and provide quotes</li>
        <li>To arrange surveys and installations</li>
        <li>To send service-related updates about your order</li>
        <li>With your consent, to send occasional marketing communications</li>
      </ul>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Sharing your information</h2>
      <p>
        We do not sell your personal data. We may share it with trusted
        third parties who help us deliver our service — for example
        installation subcontractors, payment processors, or our contact-form
        provider — under appropriate confidentiality terms.
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Your rights</h2>
      <p>
        Under UK GDPR you have the right to access, correct, or request
        deletion of your personal data, and to withdraw marketing consent at
        any time. To exercise these rights, contact us at{" "}
        <a href={`mailto:${company.email}`} className="text-glass-deep font-medium">{company.email}</a>.
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Data retention</h2>
      <p>
        We retain enquiry and customer data for as long as necessary to
        fulfil the purposes above and to meet our legal and accounting
        obligations [specify retention period].
      </p>

      <h2 className="text-xl font-display font-semibold text-ink pt-2">Contact us</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${company.email}`} className="text-glass-deep font-medium">{company.email}</a>{" "}
        or {company.address.line1}, {company.address.city}, {company.address.postcode}.
      </p>
    </LegalLayout>
  );
}
