"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  const { t, locale } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#f8f5ee] text-stone-900 pt-12 pb-8 border-t-4 border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Double Rule Header */}
        <div className="border-b-2 border-stone-900 pb-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
            {/* Masthead & Mission */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-3xl sm:text-4xl font-black font-newspaper text-stone-900 tracking-tight block">
                amena<span className="text-accent text-xl align-super">™</span>
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600 block">
                {locale === "bn"
                  ? "ডিমিনারেলাইজড ওয়াটার সলিউশন"
                  : "Demineralized Water Solutions"}
              </span>

              <p className="text-xs sm:text-sm font-newspaper text-stone-700 leading-relaxed text-justify max-w-sm">
                {t.footer.about}
              </p>

              <div className="inline-flex items-center gap-2 p-2 border border-stone-900 bg-[#fdfbf7] text-xs font-mono font-bold shadow-[2px_2px_0px_#1c1917]">
                <ShieldCheck className="w-4 h-4 text-stone-900 shrink-0" />
                <span>বুয়েট (BUET) ল্যাবরেটরি টেস্টেড</span>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-900 border-b border-stone-400 pb-1">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-1.5 text-xs font-newspaper text-stone-700">
                <li>
                  <a
                    href="#about"
                    className="hover:text-accent hover:underline"
                  >
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-accent hover:underline"
                  >
                    {t.nav.products}
                  </a>
                </li>
                <li>
                  <a
                    href="#parameters"
                    className="hover:text-accent hover:underline"
                  >
                    {t.nav.parameters}
                  </a>
                </li>
                <li>
                  <a
                    href="#battery-guide"
                    className="hover:text-accent hover:underline"
                  >
                    {t.nav.batteryGuide}
                  </a>
                </li>
                <li>
                  <a
                    href="#calculator"
                    className="hover:text-accent hover:underline"
                  >
                    {t.nav.calculator}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-accent hover:underline">
                    {t.nav.faq}
                  </a>
                </li>
              </ul>
            </div>

            {/* Products Column */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-900 border-b border-stone-400 pb-1">
                {t.footer.products}
              </h4>
              <ul className="space-y-1.5 text-xs font-newspaper text-stone-700">
                {t.products.items.map((prod) => (
                  <li key={prod.id}>
                    <a
                      href="#products"
                      className="hover:text-accent hover:underline"
                    >
                      {prod.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bureau Office Column */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-900 border-b border-stone-400 pb-1">
                {t.footer.contactInfo}
              </h4>
              <div className="space-y-2 text-xs font-newspaper text-stone-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                  <span>{t.contact.addressValue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-stone-900 shrink-0" />
                  <a
                    href="tel:+8801756103508"
                    className="hover:text-accent font-mono font-bold"
                  >
                    {t.contact.phoneValue}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-stone-900 shrink-0" />
                  <a
                    href="mailto:amenakhg@gmail.com"
                    className="hover:text-accent font-mono"
                  >
                    amenakhg@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-600">
          <div>{t.footer.copyright}</div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-stone-500">
              {locale === "bn"
                ? "আমেনা ডিমিনারেলাইজড ওয়াটার • বিশেষ দৈনিক সংস্করণ"
                : "RETRO NEWSPAPER EDITION FOR AMENA.COM.BD"}
            </span>
            <button
              onClick={scrollToTop}
              className="px-2.5 py-1 border border-stone-900 bg-[#fdfbf7] text-stone-900 font-bold hover:bg-stone-900 hover:text-white transition-colors flex items-center gap-1 shadow-[2px_2px_0px_#1c1917]"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3 h-3" />
              <span>{locale === "bn" ? "উপরে" : "TOP"}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
