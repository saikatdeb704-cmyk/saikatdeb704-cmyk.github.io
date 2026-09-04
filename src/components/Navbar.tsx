"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="font-mono text-xl lg:text-2xl font-bold text-white tracking-tight hover:text-gray-300 transition-colors"
            >
              {/* SD. removed */}
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-sm border border-white/20 text-white px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300 tracking-wide"
              >
                LET&apos;S CONNECT ↗
              </a>
            </div>

            <button
              className="lg:hidden relative w-8 h-8 flex items-center justify-center z-50"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${
                    isMobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                    isMobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${
                    isMobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`text-2xl text-white tracking-widest uppercase transition-all duration-500 hover:text-gray-400 ${
                isMobileOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className={`mt-4 text-sm border border-white/20 text-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-500 tracking-wide ${
              isMobileOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            LET&apos;S CONNECT ↗
          </a>
        </div>
      </div>
    </>
  );
}
