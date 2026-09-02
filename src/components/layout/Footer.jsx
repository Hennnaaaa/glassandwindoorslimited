import Link from "next/link";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { services } from "@/data/services";
import { company } from "@/data/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold bg-white/10 text-white border border-white/20">
              GW
            </span>
            <span className="font-display font-semibold text-lg text-white">
              Glass &amp; Windoors
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Premium windows, doors and glazing — designed, manufactured and
            installed across the UK by {company.name}.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-glass-deep transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-glass-deep transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Services
          </h3>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Company
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">All Services</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Get In Touch
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <HiPhone className="w-4 h-4 mt-0.5 text-glass-light shrink-0" />
              <a href={company.phoneHref} className="hover:text-white transition-colors">{company.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <HiMail className="w-4 h-4 mt-0.5 text-glass-light shrink-0" />
              <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">{company.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <HiLocationMarker className="w-4 h-4 mt-0.5 text-glass-light shrink-0" />
              <span>
                {company.address.line1}
                <br />
                {company.address.city}, {company.address.postcode}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p>Registered in England &amp; Wales · {company.domain}</p>
        </div>
      </div>
    </footer>
  );
}
