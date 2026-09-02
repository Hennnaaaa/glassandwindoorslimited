"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiPhone, HiChevronDown } from "react-icons/hi";
import { navigation } from "@/data/navigation";
import { company } from "@/data/company";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isDark = !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(15,23,42,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-18 sm:h-20">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${
                isDark
                  ? "bg-white/15 text-white border border-white/30"
                  : "bg-ink text-white"
              }`}
            >
              GW
            </span>
            <span className={`font-display font-semibold text-lg leading-tight ${isDark ? "text-white" : "text-ink"}`}>
              Glass&nbsp;&amp;&nbsp;Windoors
              <span className="block text-[10px] font-sans font-medium tracking-[0.25em] uppercase text-glass-deep">
                Limited
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((link) =>
              link.items?.length ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      isDark ? "text-white/90 hover:text-white" : "text-ink/80 hover:text-ink"
                    }`}
                  >
                    {link.label}
                    <HiChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  {openMenu === link.label && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 ${
                        link.items.length > 4 ? "w-[36rem]" : "w-72"
                      }`}
                    >
                      <div className="glass-panel-light rounded-2xl shadow-xl p-3">
                        {link.featured && (
                          <Link
                            href={link.featured.href}
                            className="flex flex-col gap-0.5 px-4 py-3 rounded-xl mb-2 bg-ink text-white hover:bg-glass-deep transition-colors"
                          >
                            <span className="text-sm font-semibold">{link.featured.label}</span>
                            <span className="text-xs text-white/70">{link.featured.description}</span>
                          </Link>
                        )}
                        <div className={link.items.length > 4 ? "grid grid-cols-2 gap-0.5" : "grid grid-cols-1 gap-0.5"}>
                          {link.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex flex-col gap-0.5 px-4 py-2.5 rounded-xl hover:bg-white transition-colors"
                            >
                              <span className="text-sm text-ink font-medium">{item.label}</span>
                              {item.description && (
                                <span className="text-xs text-ink/50">{item.description}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isDark ? "text-white/90 hover:text-white" : "text-ink/80 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={company.phoneHref}
              className={`flex items-center gap-2 text-sm font-semibold ${isDark ? "text-white" : "text-ink"}`}
            >
              <HiPhone className="w-4 h-4 text-glass-deep" />
              {company.phone}
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-ink text-white hover:bg-glass-deep transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg ${isDark ? "text-white" : "text-ink"}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navigation.map((link) =>
              link.items?.length ? (
                <div key={link.label} className="border-b border-slate-100 last:border-0">
                  <button
                    onClick={() =>
                      setOpenMobileGroup((v) => (v === link.label ? null : link.label))
                    }
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-ink font-medium hover:bg-surface-soft"
                  >
                    {link.label}
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openMobileGroup === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileGroup === link.label && (
                    <div className="pl-3 pb-2 flex flex-col gap-0.5">
                      {link.featured && (
                        <Link
                          href={link.featured.href}
                          className="px-3 py-2 rounded-lg text-sm font-semibold text-glass-deep hover:bg-surface-soft"
                        >
                          {link.featured.label}
                        </Link>
                      )}
                      {link.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="px-3 py-2 rounded-lg text-sm text-ink/70 hover:bg-surface-soft"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 rounded-lg text-ink font-medium hover:bg-surface-soft"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-2 pt-3 border-t border-slate-200 flex flex-col gap-2">
              <a href={company.phoneHref} className="px-3 py-2 text-ink font-semibold">
                {company.phone}
              </a>
              <Link
                href="/contact"
                className="px-4 py-3 rounded-full text-center text-sm font-semibold bg-ink text-white"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
