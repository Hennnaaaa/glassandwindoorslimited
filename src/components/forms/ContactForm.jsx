"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { services } from "@/data/services";
import { company } from "@/data/company";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const emptyForm = { name: "", email: "", phone: "", service: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

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

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("not-configured");
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          service: formData.service || "Not specified",
          message: formData.message,
          to_email: company.email,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setFormData(emptyForm);
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
      <h2 className="text-2xl font-display font-bold mb-6">Send Us a Message</h2>

      {status && (
        <div
          className={`flex items-start gap-3 p-4 rounded-xl mb-6 text-sm ${
            status === "success"
              ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
              : "bg-amber-50 border border-amber-200 text-amber-800"
          }`}
        >
          {status === "success" ? (
            <HiCheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
          ) : (
            <HiExclamationCircle className="w-5 h-5 shrink-0 mt-0.5" />
          )}
          <p>
            {status === "success" &&
              "Thanks — your message is on its way. We'll get back to you within one working day."}
            {status === "error" &&
              `Sorry, something went wrong sending your message. Please call us on ${company.phone} instead.`}
            {status === "not-configured" &&
              "The contact form isn't fully set up yet — please email us directly instead."}
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
          disabled={isSubmitting}
          className={`w-full py-4 rounded-full font-semibold transition-colors ${
            isSubmitting ? "bg-slate-300 text-slate-500 cursor-not-allowed" : "bg-ink text-white hover:bg-glass-deep"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        <p className="text-xs text-ink/40 text-center">
          We'll only use your details to respond to your enquiry.
        </p>
      </form>
    </div>
  );
}
