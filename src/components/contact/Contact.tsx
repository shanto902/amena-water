"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export function Contact() {
  const { t, locale } = useLanguage();
  const mapsUrl = "https://maps.app.goo.gl/2qYRAAqVxFguGeWE7";

  return (
    <section id="contact" className="py-12 sm:py-16 border-b-2 border-stone-900 bg-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-block border-b-2 border-stone-900 pb-1 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              § {t.contact.tag} §
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-newspaper text-stone-900 tracking-tight leading-tight mb-3">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg font-newspaper italic text-stone-700">
            {t.contact.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-stone-900 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Phone Order Dispatch Bureau */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Primary Action Card: Call Hotline */}
            <div className="newspaper-card p-6 bg-[#fdfbf7] border-2 border-stone-900 shadow-[4px_4px_0px_#1c1917]">
              <div className="flex items-center justify-between border-b-2 border-stone-900 pb-3 mb-4">
                <span className="text-xs font-mono font-bold uppercase text-stone-900 tracking-wider">
                  {locale === "bn" ? "অফিসিয়াল অর্ডার হটলাইন" : "OFFICIAL ORDER HOTLINE"}
                </span>
                <span className="retro-stamp text-[10px]">
                  {locale === "bn" ? "সরাসরি সংযোগ" : "DIRECT LINE"}
                </span>
              </div>

              {/* Big Call Box */}
              <div className="text-center py-5 px-4 bg-[#f8f5ee] border border-stone-400 mb-4 shadow-[2px_2px_0px_#1c1917]">
                <div className="w-12 h-12 mx-auto mb-3 border border-stone-900 bg-stone-900 text-[#f8f5ee] flex items-center justify-center shadow-[2px_2px_0px_#44403c]">
                  <Phone className="w-6 h-6 text-[#f8f5ee]" />
                </div>
                <span className="text-[11px] font-mono uppercase font-bold text-stone-600 block mb-1">
                  {t.contact.phoneLabel}
                </span>
                <a
                  href="tel:+8801756103508"
                  className="text-2xl sm:text-3xl font-mono font-black text-accent hover:underline block tracking-tight"
                >
                  {locale === "bn" ? "০১৭৫৬-১০৩৫০৮" : "+880 1756-103508"}
                </a>
                <span className="text-xs font-newspaper italic text-stone-600 block mt-1.5">
                  {locale === "bn"
                    ? "সরাসরি কারখানা ও সেলস ডেস্ক • তাৎক্ষণিক উত্তর"
                    : "Factory Sales & Dispatch Desk • Immediate Response"}
                </span>
              </div>

              {/* High Contrast Primary CTA Button */}
              <a
                href="tel:+8801756103508"
                className="w-full py-3.5 px-4 bg-stone-900 text-[#f8f5ee] hover:bg-accent font-mono font-bold text-sm uppercase flex items-center justify-center gap-2.5 shadow-[3px_3px_0px_#44403c] transition-colors active:translate-y-0.5 border border-stone-800"
              >
                <Phone className="w-4 h-4 text-[#f8f5ee]" />
                <span>
                  {locale === "bn" ? "এখনই ফোনে অর্ডার করুন" : "Call to Place Order Now"}
                </span>
              </a>

              {/* Call-Only Explanatory Notice */}
              <div className="mt-4 p-3.5 bg-[#f8f5ee] border-l-4 border-stone-900 text-xs font-newspaper text-stone-800 leading-relaxed text-justify">
                {locale === "bn"
                  ? "💡 জরুরি নির্দেশনা: অনলাইনে কোনো ফরম পূরণ করতে হবে না। খুচরা ও পাইকারি ডেলিভারি, রেট তালিকা বা ডিলারশিপের জন্য সরাসরি উপরোক্ত নম্বরে ফোন করুন।"
                  : "💡 Direct Call Policy: No web forms required. For immediate dispatch, pricing, or regional dealership inquiries, please call our direct plant hotline."}
              </div>
            </div>

            {/* Address Info Card */}
            <div className="newspaper-card p-5 bg-[#fdfbf7]">
              <div className="flex items-start gap-3">
                <div className="p-2 border border-stone-900 bg-[#f8f5ee] shrink-0">
                  <MapPin className="w-5 h-5 text-stone-900" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono uppercase text-stone-600 font-bold block mb-1">
                    {t.contact.addressLabel}
                  </span>
                  <p className="text-sm font-newspaper font-bold text-stone-900 leading-snug">
                    {t.contact.addressValue}
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-accent hover:underline mt-2"
                  >
                    <span>{locale === "bn" ? "গুগল ম্যাপে লোকেশন দেখুন" : "View Location on Google Maps"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours & Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="newspaper-card p-4 bg-[#fdfbf7]">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-stone-600 font-bold block">
                      {t.contact.hoursLabel}
                    </span>
                    <p className="text-xs font-mono font-bold text-stone-900 mt-0.5">
                      {t.contact.hoursValue}
                    </p>
                    <span className="text-[11px] font-newspaper italic text-stone-600 block mt-0.5">
                      {locale === "bn" ? "শুক্রবার কারখানা সাপ্তাহিক ছুটি" : "Friday plant weekly holiday"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="newspaper-card p-4 bg-[#fdfbf7]">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-stone-600 font-bold block">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href={`mailto:${t.contact.emailValue}`}
                      className="text-xs font-mono font-bold text-stone-900 hover:text-accent hover:underline block mt-0.5"
                    >
                      {t.contact.emailValue}
                    </a>
                    <span className="text-[11px] font-newspaper italic text-stone-600 block mt-0.5">
                      {locale === "bn" ? "অফিসিয়াল চিঠিপত্র" : "Official correspondence"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factory Location & Interactive Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="newspaper-card p-6 sm:p-7 bg-[#fdfbf7] border-2 border-stone-900 shadow-[4px_4px_0px_#1c1917] flex-1 flex flex-col justify-between">
              <div>
                {/* Header with Title and Pin Badge */}
                <div className="flex items-start justify-between border-b-2 border-stone-900 pb-3 mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-stone-600 tracking-wider block">
                      {locale === "bn" ? "ভৌগোলিক অবস্থান ও মানচিত্র" : "GEOGRAPHIC PLANT MAP & DISPATCH"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-newspaper text-stone-900">
                      {locale === "bn" ? "আমেনা™ কারখানা ও প্রধান কার্যালয়" : "amena™ Plant & Factory Headquarters"}
                    </h3>
                  </div>
                  <span className="retro-stamp text-[10px]">
                    {locale === "bn" ? "কিশোরগঞ্জ" : "KISHORGANJ, BD"}
                  </span>
                </div>

                {/* Google Maps Interactive Embed Frame */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] border-2 border-stone-900 bg-[#f8f5ee] overflow-hidden shadow-[2px_2px_0px_#1c1917] mb-4">
                  <iframe
                    src="https://maps.google.com/maps?q=Shorkari+Gorosthan+more%2C+ShikkhokPolli%2C+Kishorgonj%2C+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter contrast-[1.05]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="amena Factory Location Map"
                  />
                </div>
              </div>

              {/* Bottom Action & Address Bar */}
              <div className="pt-4 border-t-2 border-stone-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs font-newspaper text-stone-700">
                  <strong className="text-stone-900 font-bold block mb-0.5">
                    {locale === "bn" ? "কারখানার পূর্ণ ঠিকানা:" : "Complete Plant Address:"}
                  </strong>
                  <span>{t.contact.addressValue}</span>
                </div>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-900 text-[#f8f5ee] hover:bg-accent font-mono text-xs font-bold shadow-[2px_2px_0px_#44403c] transition-colors shrink-0 active:translate-y-0.5 border border-stone-800"
                >
                  <MapPin className="w-4 h-4 text-[#f8f5ee]" />
                  <span>
                    {locale === "bn" ? "গুগল ম্যাপে দেখুন ↗" : "Open in Google Maps ↗"}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
