"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldAlert, CheckCircle2 } from "lucide-react";

export function Parameters() {
  const { t, locale } = useLanguage();

  return (
    <section id="parameters" className="py-12 sm:py-16 border-b-2 border-stone-900 bg-[#f8f5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-block border-b-2 border-stone-900 pb-1 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              § {t.parameters.tag} §
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-newspaper text-stone-900 tracking-tight leading-tight mb-3">
            {t.parameters.title}
          </h2>
          <p className="text-base sm:text-lg font-newspaper italic text-stone-700">
            {t.parameters.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-stone-900 mx-auto mt-4" />
        </div>

        {/* 5 Laboratory Parameters Ledger Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {t.parameters.items.map((param) => (
            <div
              key={param.id}
              className="newspaper-card p-5 bg-[#fdfbf7] flex flex-col justify-between text-center"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block mb-1">
                  PARAM CODE: {param.id.toUpperCase()}
                </span>
                <h3 className="text-base font-bold font-newspaper text-stone-900 mb-2">
                  {param.name}
                </h3>
                <div className="text-4xl font-black font-newspaper text-stone-900 my-2">
                  {param.value}
                </div>
                <div className="text-xs font-mono font-bold text-accent uppercase tracking-wider mb-3">
                  {param.unit}
                </div>
                <p className="text-xs font-newspaper text-stone-700 leading-relaxed mb-4 text-justify">
                  {param.description}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-300">
                <span className="text-[10px] font-mono text-stone-800 bg-[#f8f5ee] px-2 py-0.5 border border-stone-400 block">
                  {param.standard}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Scientific Comparison Ledger Table */}
        <div className="newspaper-card p-6 sm:p-8 bg-[#fdfbf7] max-w-4xl mx-auto">
          <div className="text-center border-b-2 border-stone-900 pb-4 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-600 block">
              OFFICIAL COMPARATIVE DISPATCH
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-newspaper text-stone-900">
              {t.parameters.comparison.title}
            </h3>
            <p className="text-xs font-newspaper italic text-stone-700 mt-1">
              {t.parameters.purityDesc}
            </p>
          </div>

          <div className="space-y-6">
            {/* Tap Water */}
            <div className="p-4 border border-stone-300 bg-[#f8f5ee]">
              <div className="flex justify-between items-center text-xs sm:text-sm font-newspaper font-bold mb-2">
                <span className="text-stone-900 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-accent" />
                  {t.parameters.comparison.tapWater}
                </span>
                <span className="font-mono text-accent">~ 350+ ppm (EXTREME RISK)</span>
              </div>
              <div className="w-full h-3 bg-stone-200 border border-stone-400 p-0.5">
                <div className="h-full bg-accent w-[85%]" />
              </div>
              <span className="text-[11px] font-newspaper italic text-stone-700 mt-1 block">
                {locale === "bn"
                  ? "⚠️ ক্ষতিকর দ্রবীভূত ক্যালসিয়াম, ম্যাগনেসিয়াম ও আয়রন থাকে যা ব্যাটারির সেল স্থায়ীভাবে নষ্ট করে।"
                  : "⚠️ Contains heavy concentrations of calcium, magnesium, and iron that permanently destroy battery cells."}
              </span>
            </div>

            {/* Ordinary Market Water */}
            <div className="p-4 border border-stone-300 bg-[#f8f5ee]">
              <div className="flex justify-between items-center text-xs sm:text-sm font-newspaper font-bold mb-2">
                <span className="text-stone-900 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-800" />
                  {t.parameters.comparison.marketWater}
                </span>
                <span className="font-mono text-amber-800">~ 35 - 80 ppm (UNRELIABLE)</span>
              </div>
              <div className="w-full h-3 bg-stone-200 border border-stone-400 p-0.5">
                <div className="h-full bg-amber-800 w-[45%]" />
              </div>
              <span className="text-[11px] font-newspaper italic text-stone-700 mt-1 block">
                {locale === "bn"
                  ? "⚠️ বাজারের সাধারণ বোতলজাত পানিতে ক্ষতিকর অবশিষ্টাংশ লবণ থাকে যা প্লেটে সালফেটের স্থায়ী স্তর তৈরি করে।"
                  : "⚠️ Ordinary uncertified commercial water leaves residual mineral salt crusts on battery plates."}
              </span>
            </div>

            {/* amena DM Water */}
            <div className="p-4 border-2 border-stone-900 bg-[#fdfbf7]">
              <div className="flex justify-between items-center text-xs sm:text-sm font-newspaper font-black mb-2">
                <span className="text-stone-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-stone-900" />
                  {t.parameters.comparison.amenaWater}
                </span>
                <span className="font-mono text-stone-900 font-black">&lt; 1 ppm (100% PURIFIED)</span>
              </div>
              <div className="w-full h-4 bg-stone-200 border-2 border-stone-900 p-0.5">
                <div className="h-full bg-stone-900 w-[2%] min-w-[10px]" />
              </div>
              <span className="text-[11px] font-newspaper font-bold text-stone-900 mt-1 block">
                {locale === "bn"
                  ? "✅ বুয়েট কেমিক্যাল ল্যাবরেটরি টেস্টেড • শূন্য মিনারেল • ব্যাটারির সর্বোচ্চ দ্বিগুণ আয়ু নিশ্চিত।"
                  : "✅ BUET Chemical Laboratory Certified • Zero Residual Minerals • Ensures 2x Extended Battery Life."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
