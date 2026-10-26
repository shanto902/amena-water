"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, BookOpen } from "lucide-react";

export function Hero() {
  const { t, locale } = useLanguage();

  return (
    <section className="relative py-8 sm:py-12 border-b-2 border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Front Page Kicker Banner */}
        <div className="flex items-center justify-between border-b border-stone-400 pb-2 mb-6 text-xs font-mono tracking-widest uppercase text-stone-600">
          <span>★ SPECIAL DISPATCH • FRONT PAGE ★</span>
          <span>CERTIFIED LABORATORY REPORT</span>
          <span className="hidden sm:inline">ISSUE 2026-BD</span>
        </div>

        {/* Lead Headline in Classic Newspaper Type */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-newspaper text-stone-900 leading-[1.1] tracking-tight mb-4">
            {t.hero.titleLine1}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-newspaper italic text-stone-800 font-semibold max-w-3xl mx-auto">
            &ldquo;{t.hero.titleLine2}&rdquo;
          </p>
        </div>

        {/* Two-Column Newspaper Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-b border-stone-400 py-8 mb-8">
          {/* Main Story Column with Drop Cap */}
          <div className="lg:col-span-7 pr-0 lg:pr-8 lg:border-r border-stone-400">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono font-bold bg-stone-900 text-[#f8f5ee] px-2 py-0.5 uppercase">
                {locale === "bn" ? "বিশেষ প্রতিবেদন" : "LEAD STORY"}
              </span>
              <span className="text-xs font-mono text-stone-600">
                {locale === "bn" ? "ডিমিনারেলাইজড ওয়াটার ডেস্ক" : "By Our Engineering Correspondent"}
              </span>
            </div>

            <p className="drop-cap font-newspaper text-base sm:text-lg text-stone-900 leading-relaxed text-justify mb-6">
              {t.hero.description}
            </p>

            <div className="p-4 bg-[#fdfbf7] border-l-4 border-stone-900 border-t border-r border-b border-stone-300 mb-6">
              <p className="text-xs sm:text-sm font-newspaper italic text-stone-800">
                {locale === "bn"
                  ? "“সাধারণ বাজারী পানিতে মিশে থাকা ক্যালসিয়াম, ম্যাগনেসিয়াম ও আয়রন লেড-এসিড ব্যাটারির প্লেটে স্থায়ী সালফেটের স্তর তৈরি করে ব্যাটারি অকালে ধ্বংস করে।”"
                  : "“Dissolved calcium, iron, and minerals in ordinary market water cause permanent sulfation crusts on lead plates, destroying batteries prematurely.”"}
              </p>
            </div>

            {/* Vintage CTA Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-[#f8f5ee] text-xs sm:text-sm font-mono font-bold hover:bg-accent transition-colors shadow-[3px_3px_0px_#44403c]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#battery-guide"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#fdfbf7] text-stone-900 border border-stone-800 text-xs sm:text-sm font-mono font-bold hover:bg-stone-200 transition-colors shadow-[3px_3px_0px_#1c1917]"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Archival Chemical Ledger Card */}
          <div className="lg:col-span-5">
            <div className="newspaper-card p-6 bg-[#fdfbf7]">
              {/* Card Header with Stamp */}
              <div className="flex items-start justify-between border-b-2 border-stone-900 pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-stone-600 uppercase block">
                    BULLETIN NO. 7-NM
                  </span>
                  <h2 className="text-xl font-bold font-newspaper text-stone-900">
                    {locale === "bn" ? "রাসায়নিক বিশুদ্ধতা সূচক" : "Chemical Purity Index"}
                  </h2>
                </div>
                <div className="retro-stamp text-[10px]">
                  BUET PASS
                </div>
              </div>

              {/* Big Lead Metric */}
              <div className="text-center py-4 border-b border-stone-300">
                <span className="text-xs font-mono uppercase text-stone-600 block">
                  {locale === "bn" ? "মোট দ্রবীভূত লবণ (TDS)" : "Total Dissolved Solids"}
                </span>
                <div className="text-5xl font-black font-newspaper text-stone-900 my-1">
                  &lt; 1.0 <span className="text-xl font-normal font-mono text-stone-700">ppm</span>
                </div>
                <span className="text-xs font-newspaper italic text-stone-600">
                  {locale === "bn" ? "বুয়েট রাসায়নিক ল্যাবরেটরিতে প্রমাণিত" : "Verified by BUET Chemical Labs"}
                </span>
              </div>

              {/* Ledger Table */}
              <div className="divide-y divide-stone-300 text-xs font-mono py-2">
                <div className="py-2 flex justify-between">
                  <span className="text-stone-600">CONDUCTIVITY:</span>
                  <span className="font-bold text-stone-900">&lt; 1.0 μS/cm</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-stone-600">PH LEVEL:</span>
                  <span className="font-bold text-stone-900">6.8 - 7.0 (NEUTRAL)</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-stone-600">PURIFICATION:</span>
                  <span className="font-bold text-stone-900">7-STAGE NUCLEAR MEDIA</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-stone-600">STERILIZATION:</span>
                  <span className="font-bold text-stone-900">100% ULTRA-VIOLET (UV)</span>
                </div>
              </div>

              {/* Engineers Notice */}
              <div className="mt-4 pt-3 border-t-2 border-stone-900 text-[11px] font-newspaper text-stone-700 text-center">
                {locale === "bn"
                  ? "২ জন অভিজ্ঞ স্নাতক প্রকৌশলীর সার্বক্ষণিক তত্ত্বাবধানে প্রস্তুতকৃত।"
                  : "Manufactured under direct supervision of two graduate engineers."}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Columns / Gazette Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-400 border border-stone-900 bg-[#fdfbf7] p-4 text-center">
          <div className="p-3">
            <div className="text-3xl font-black font-newspaper text-stone-900 mb-1">
              {t.hero.stats.stat1Value}
            </div>
            <div className="text-xs font-mono uppercase text-stone-600 font-semibold">
              {t.hero.stats.stat1Label}
            </div>
          </div>
          <div className="p-3">
            <div className="text-3xl font-black font-newspaper text-stone-900 mb-1">
              {t.hero.stats.stat2Value}
            </div>
            <div className="text-xs font-mono uppercase text-stone-600 font-semibold">
              {t.hero.stats.stat2Label}
            </div>
          </div>
          <div className="p-3">
            <div className="text-3xl font-black font-newspaper text-stone-900 mb-1">
              {t.hero.stats.stat3Value}
            </div>
            <div className="text-xs font-mono uppercase text-stone-600 font-semibold">
              {t.hero.stats.stat3Label}
            </div>
          </div>
          <div className="p-3">
            <div className="text-3xl font-black font-newspaper text-stone-900 mb-1">
              {t.hero.stats.stat4Value}
            </div>
            <div className="text-xs font-mono uppercase text-stone-600 font-semibold">
              {t.hero.stats.stat4Label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
