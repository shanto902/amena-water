"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Globe, Menu, X, ChevronRight } from "lucide-react";

export function Navbar() {
  const { locale, toggleLocale, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#products", label: t.nav.products },
    { href: "#parameters", label: t.nav.parameters },
    { href: "#battery-guide", label: t.nav.batteryGuide },
    { href: "#calculator", label: t.nav.calculator },
    { href: "#team", label: t.nav.team },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="w-full bg-[#f8f5ee] text-stone-900 pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Dateline / Vintage Header Bar */}
        <div className="flex items-center justify-between border-b border-stone-400 pb-2 text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-stone-700 gap-2">
          <div className="flex items-center gap-1.5 truncate">
            <span className="shrink-0">📍</span>
            <span className="hidden sm:inline truncate">
              {locale === "bn" ? "কিশোরগঞ্জ, বাংলাদেশ • KISHORGANJ, BD" : "KISHORGANJ, BANGLADESH"}
            </span>
            <span className="sm:hidden truncate font-semibold">
              {locale === "bn" ? "কিশোরগঞ্জ, বাংলাদেশ" : "KISHORGANJ, BD"}
            </span>
          </div>

          <div className="hidden lg:block font-bold text-stone-900 truncate px-2 text-center flex-1">
            {locale === "bn"
              ? "জাতীয় শিল্প ও ব্যাটারি প্রযুক্তি সমাচার • বিশেষ সংস্করণ"
              : "THE NATIONAL INDUSTRIAL & BATTERY WATER GAZETTE"}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="hidden sm:inline">VOL. XXVI NO. 102</span>
            <span className="hidden sm:inline">•</span>
            <a
              href={locale === "bn" ? "/en" : "/bn"}
              onClick={(e) => {
                e.preventDefault();
                toggleLocale();
              }}
              className="px-2 py-0.5 border border-stone-800 bg-[#fdfbf7] text-stone-900 font-bold hover:bg-stone-900 hover:text-[#f8f5ee] transition-colors flex items-center gap-1 shadow-[1px_1px_0px_#1c1917] text-[10px] sm:text-xs"
              title={locale === "bn" ? "Switch to English (/en)" : "বাংলায় দেখুন (/bn)"}
            >
              <Globe className="w-3 h-3 shrink-0" />
              <span>{t.nav.switchLang}</span>
            </a>
          </div>
        </div>

        {/* Main Newspaper Masthead (===> amena™ <=== Full Margin Banner) */}
        <div className="py-3 sm:py-6 md:py-8 text-center border-b border-stone-400">
          <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full">
            {/* Left Chevron Band ===> (Expands to Left Margin) */}
            <div
              className="h-3.5 sm:h-5 md:h-7 lg:h-9 flex-1 bg-accent amena-banner-left self-center"
              aria-hidden="true"
            />

            {/* Brand Title */}
            <a href={locale === "en" ? "/en" : "/"} className="inline-flex items-center group shrink-0">
              <div className="inline-flex items-center leading-none">
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight font-newspaper text-stone-900 leading-none">
                  amena
                </span>
                <span className="text-accent text-[9px] sm:text-xs md:text-sm lg:text-base font-bold font-sans self-start ml-0.5 -mt-0.5 sm:-mt-1 tracking-normal">
                  ™
                </span>
              </div>
            </a>

            {/* Right Chevron Band <=== (Expands to Right Margin) */}
            <div
              className="h-3.5 sm:h-5 md:h-7 lg:h-9 flex-1 bg-accent amena-banner-right self-center"
              aria-hidden="true"
            />
          </div>

          <p className="mt-2 sm:mt-3 text-[11px] sm:text-xs md:text-sm font-newspaper italic text-stone-700 max-w-xl mx-auto px-2 sm:px-4 leading-normal">
            {locale === "bn"
              ? "আমরা উন্নত মানের ডি এম ওয়াটার প্রস্তুত করি"
              : "We Produce Premium-Quality Demineralized Water"}
          </p>
        </div>

        {/* Double Rule Navigation Bar */}
        <div className="border-t-2 border-b-2 border-stone-900 py-2 sm:py-2.5 my-2">
          <div className="flex items-center justify-between gap-2 xl:gap-3">
            {/* Desktop Navigation Links (Strictly One-Liner with whitespace-nowrap) */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-1.5 xl:gap-3 2xl:gap-4 text-xs xl:text-sm font-bold font-newspaper text-stone-800 whitespace-nowrap">
              <a href={locale === "en" ? "/en" : "/"} className="hover:text-accent hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
                {t.nav.home}
              </a>
              {navLinks.map((link) => (
                <React.Fragment key={link.href}>
                  <span className="text-stone-400 select-none shrink-0">•</span>
                  <a
                    href={link.href}
                    className="hover:text-accent hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
                  >
                    {link.label}
                  </a>
                </React.Fragment>
              ))}
            </nav>

            {/* Quick Call Button */}
            <div className="hidden lg:flex items-center pl-2 xl:pl-3 border-l border-stone-300 shrink-0">
              <a
                href="tel:+8801756103508"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 text-[#f8f5ee] hover:bg-accent border border-stone-800 text-xs font-mono font-bold whitespace-nowrap shrink-0 shadow-[2px_2px_0px_#44403c] transition-colors active:translate-y-0.5"
                title={locale === "bn" ? "ফোন: ০১৭৫৬-১০৩৫০৮" : "Call: +8801756103508"}
              >
                <Phone className="w-3.5 h-3.5 text-[#f8f5ee] shrink-0" />
                <span>
                  {t.nav.callNow}: {locale === "bn" ? "০১৭৫৬-১০৩৫০৮" : "01756-103508"}
                </span>
              </a>
            </div>

            {/* Mobile Nav Trigger */}
            <div className="flex lg:hidden items-center justify-between w-full">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-800">
                {locale === "bn" ? "সূচিপত্র" : "EDITION SECTIONS"}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="tel:+8801756103508"
                  className="px-2.5 py-1 bg-stone-900 text-[#f8f5ee] border border-stone-800 text-xs font-mono font-bold uppercase hover:bg-accent transition-colors shadow-[1.5px_1.5px_0px_#44403c] flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-[#f8f5ee]" />
                  <span>{t.nav.callNow}</span>
                </a>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-1.5 border border-stone-900 bg-[#fdfbf7] text-stone-900"
                  aria-label="Toggle navigation"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b-2 border-stone-900 bg-[#fdfbf7] p-4 my-2 animate-fadeIn">
            <nav className="flex flex-col divide-y divide-stone-200">
              <a
                href={locale === "en" ? "/en" : "/"}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-sm font-bold font-newspaper text-stone-900 flex justify-between items-center"
              >
                <span>{t.nav.home}</span>
                <ChevronRight className="w-4 h-4 text-stone-500" />
              </a>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-sm font-bold font-newspaper text-stone-800 flex justify-between items-center hover:text-accent"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-stone-500" />
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-stone-400">
              <a
                href="tel:+8801756103508"
                className="w-full py-2.5 border border-stone-800 bg-stone-900 text-[#f8f5ee] flex items-center justify-center gap-2 text-xs font-mono font-bold hover:bg-accent transition-colors shadow-[2px_2px_0px_#44403c]"
              >
                <Phone className="w-4 h-4 text-[#f8f5ee]" />
                <span>
                  {t.nav.callNow}: {locale === "bn" ? "০১৭৫৬-১০৩৫০৮" : "01756-103508"}
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
