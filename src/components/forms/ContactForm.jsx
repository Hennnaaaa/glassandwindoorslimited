"use client";

import { useState } from "react";
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { services } from "@/data/services";
import { company } from "@/data/company";

const emptyForm = { name: "", email: "", phone: "", service: "", message: "" };

// Submits to our own /api/contact route, which sends the email server-side
// via Gmail SMTP (nodemailer) — no third-party form service, no client-side
// API keys. Requires GMAIL_USER / GMAIL_APP_PASSWORD in .env.local.
export default function ContactForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Please enter your name";
    if (!formData.email.trim()) next.email = "Please enter your email";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) next.email = "Enter a valid email address";
    if (!formData.message.trim()) next.message = "Please add a short message";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setFormData(emptyForm);
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
      <h2 className="text-2xl font-display font-bold mb-6">Send Us a Message</h2>

      {status === "sent" && (
        <div className="flex items-start gap-3 p-4 rounded-xl mb-6 text-sm bg-emerald-50 border border-emerald-200 text-emerald-800">
          <HiCheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>
            Thanks — your message has been sent. We'll get back to you shortly.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-xl mb-6 text-sm bg-red-50 border border-red-200 text-red-800">
          <HiExclamationCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>
            Something went wrong sending your message. Please email us directly at{" "}
            <a href={`mailto:${company.email}`} className="font-semibold underline">
              {company.email}
            </a>{" "}
            or call {company.phone}.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-ink/80 mb-1.5">Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-glass-deep transition-colors ${
                errors.name ? "border-red-400" : "border-slate-300"
              }`}
              placeholder="Jane Smith"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-ink/80 mb-1.5">Email Address *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-glass-deep transition-colors ${
                errors.email ? "border-red-400" : "border-slate-300"
              }`}
              placeholder="jane@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-ink/80 mb-1.5">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-glass-deep transition-colors"
              placeholder="07000 000000"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-ink/80 mb-1.5">I'm interested in</label>
            <select
              value={formData.service}
              onChange={(e) => handleChange("service", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-glass-deep transition-colors bg-white"
            >
              <option value="">Select a service (optional)</option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-ink/80 mb-1.5">Message *</label>
          <textarea
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-glass-deep transition-colors resize-none ${
              errors.message ? "border-red-400" : "border-slate-300"
            }`}
            placeholder="Tell us a bit about your project..."
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 rounded-full font-semibold bg-ink text-white hover:bg-glass-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>

        <p className="text-xs text-ink/40 text-center">
          We'll only use your details to respond to your enquiry.
        </p>
      </form>
    </div>
  );
}
