"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Zap, BatteryCharging } from "lucide-react";

export function BatteryGuide() {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<"formula" | "parts" | "radiator">("formula");

  return (
    <section id="battery-guide" className="py-12 sm:py-16 border-b-2 border-stone-900 bg-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-block border-b-2 border-stone-900 pb-1 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              § {t.batteryGuide.tag} §
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-newspaper text-stone-900 tracking-tight leading-tight mb-3">
            {t.batteryGuide.title}
          </h2>
          <p className="text-base sm:text-lg font-newspaper italic text-stone-700">
            {t.batteryGuide.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-stone-900 mx-auto mt-4" />
        </div>

        {/* Retro Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex border-2 border-stone-900 bg-[#fdfbf7] p-1 shadow-[3px_3px_0px_#1c1917]">
            <button
              onClick={() => setActiveTab("formula")}
              className={`px-4 py-2 text-xs sm:text-sm font-mono font-bold transition-colors ${
                activeTab === "formula"
                  ? "bg-stone-900 text-[#f8f5ee]"
                  : "text-stone-800 hover:bg-stone-200"
              }`}
            >
              {locale === "bn" ? "রাসায়নিক সমীকরণ ও বিজ্ঞান" : "CHEMICAL SCIENCE"}
            </button>
            <button
              onClick={() => setActiveTab("parts")}
              className={`px-4 py-2 text-xs sm:text-sm font-mono font-bold transition-colors ${
                activeTab === "parts"
                  ? "bg-stone-900 text-[#f8f5ee]"
                  : "text-stone-800 hover:bg-stone-200"
              }`}
            >
              {locale === "bn" ? "ব্যাটারির ৩টি মূল অংশ" : "3 CORE COMPONENTS"}
            </button>
            <button
              onClick={() => setActiveTab("radiator")}
              className={`px-4 py-2 text-xs sm:text-sm font-mono font-bold transition-colors ${
                activeTab === "radiator"
                  ? "bg-stone-900 text-[#f8f5ee]"
                  : "text-stone-800 hover:bg-stone-200"
              }`}
            >
              {locale === "bn" ? "রেডিয়েটর ও ইঞ্জিন যত্ন" : "RADIATOR CARE"}
            </button>
          </div>
        </div>

        {/* Tab 1: Chemical Equation & Science */}
        {activeTab === "formula" && (
          <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn">
            {/* Chemical Formula Card */}
            <div className="newspaper-card p-6 sm:p-8 bg-[#fdfbf7] text-center">
              <span className="text-[10px] font-mono tracking-widest text-stone-600 uppercase block mb-2">
                {locale === "bn" ? "তড়িৎ-রাসায়নিক উভমুখী বিক্রিয়া" : "ELECTROCHEMICAL REVERSIBLE EQUATION"}
              </span>
              <div className="inline-block p-4 sm:p-6 border-2 border-stone-900 bg-[#f8f5ee] my-3 shadow-[2px_2px_0px_#1c1917]">
                <code className="text-xl sm:text-3xl font-mono font-black text-stone-900 tracking-wider">
                  {t.batteryGuide.chemicalFormula}
                </code>
              </div>
              <p className="text-xs sm:text-sm font-newspaper text-stone-800 leading-relaxed max-w-2xl mx-auto mt-4 text-justify">
                {t.batteryGuide.chemicalExplainer}
              </p>
            </div>

            {/* In-depth 2-Column Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="newspaper-card p-6 bg-[#fdfbf7]">
                <div className="flex items-center gap-2 mb-3 border-b border-stone-300 pb-2">
                  <Zap className="w-5 h-5 text-stone-900" />
                  <h3 className="text-base font-bold font-newspaper text-stone-900">
                    {locale === "bn" ? "ডিসচার্জিং পর্যায় (Discharge)" : "Discharge Phase"}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-newspaper text-stone-700 leading-relaxed text-justify">
                  {locale === "bn"
                    ? "ব্যাটারি যখন লোডে বিদ্যুৎ সরবরাহ করে, তখন সালফিউরিক এসিড এনোড এবং ক্যাথোডের সীসার সহিত বিক্রিয়ায় লেড-সালফেটে (PbSO₄) পরিণত হয়ে প্লেটের ওপর স্তর ফেলে।"
                    : "During discharge, sulfuric acid reacts with lead at the electrodes to form lead sulfate (PbSO₄), coating the plates."}
                </p>
              </div>

              <div className="newspaper-card p-6 bg-[#fdfbf7]">
                <div className="flex items-center gap-2 mb-3 border-b border-stone-300 pb-2">
                  <BatteryCharging className="w-5 h-5 text-stone-900" />
                  <h3 className="text-base font-bold font-newspaper text-stone-900">
                    {locale === "bn" ? "রিচার্জিং পর্যায় (Recharge)" : "Recharge Phase"}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-newspaper text-stone-700 leading-relaxed text-justify">
                  {locale === "bn"
                    ? "রিচার্জিং এ সালফেট ভেঙ্গে পুনরায় এসিডে রূপান্তরিত হয়। কিন্তু সাধারণ পানিতে ক্যালসিয়াম ও আয়রন মিশ্রিত থাকলে তা কখনই অপসারিত হয় না এবং ব্যাটারি স্থায়ীভাবে ধ্বংস করে।"
                    : "Recharging breaks sulfate back into acid. However, minerals from impure water never dissolve, permanently suffocating the lead plates."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: The 3 Core Parts */}
        {activeTab === "parts" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fadeIn">
            {/* Anode */}
            <div className="newspaper-card p-6 bg-[#fdfbf7] flex flex-col justify-between border-t-4 border-stone-900">
              <div>
                <span className="text-[10px] font-mono font-bold text-accent uppercase block mb-1">
                  {locale === "bn" ? "[ নেগেটিভ টার্মিনাল (অ্যানোড) ]" : "[ NEGATIVE TERMINAL ]"}
                </span>
                <h3 className="text-lg font-bold font-newspaper text-stone-900 mb-3">
                  {t.batteryGuide.anodeTitle}
                </h3>
                <p className="text-xs sm:text-sm font-newspaper text-stone-700 leading-relaxed text-justify">
                  {t.batteryGuide.anodeDesc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-300 text-xs font-mono text-stone-600">
                {locale === "bn" ? "উপাদান: স্পঞ্জি লেড (Pb)" : "ELEMENT: SPONGY LEAD (Pb)"}
              </div>
            </div>

            {/* Cathode */}
            <div className="newspaper-card p-6 bg-[#fdfbf7] flex flex-col justify-between border-t-4 border-stone-900">
              <div>
                <span className="text-[10px] font-mono font-bold text-accent uppercase block mb-1">
                  {locale === "bn" ? "[ পজিটিভ টার্মিনাল (ক্যাথোড) ]" : "[ POSITIVE TERMINAL ]"}
                </span>
                <h3 className="text-lg font-bold font-newspaper text-stone-900 mb-3">
                  {t.batteryGuide.cathodeTitle}
                </h3>
                <p className="text-xs sm:text-sm font-newspaper text-stone-700 leading-relaxed text-justify">
                  {t.batteryGuide.cathodeDesc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-300 text-xs font-mono text-stone-600">
                {locale === "bn" ? "উপাদান: লেড ডাই-অক্সাইড (PbO₂)" : "ELEMENT: LEAD DIOXIDE (PbO₂)"}
              </div>
            </div>

            {/* Electrolyte */}
            <div className="newspaper-card p-6 bg-[#fdfbf7] flex flex-col justify-between border-t-4 border-stone-900">
              <div>
                <span className="text-[10px] font-mono font-bold text-accent uppercase block mb-1">
                  {locale === "bn" ? "[ ৩:১ আনুপাতিক দ্রবণ ]" : "[ 3:1 SOLUTION ]"}
                </span>
                <h3 className="text-lg font-bold font-newspaper text-stone-900 mb-3">
                  {t.batteryGuide.electrolyteTitle}
                </h3>
                <p className="text-xs sm:text-sm font-newspaper text-stone-700 leading-relaxed text-justify">
                  {t.batteryGuide.electrolyteDesc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-300 text-xs font-mono text-stone-600">
                {locale === "bn" ? "সংকেত: 3H₂O + H₂SO₄" : "FORMULA: 3H₂O + H₂SO₄"}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Radiator & Engine Care */}
        {activeTab === "radiator" && (
          <div className="newspaper-card p-8 bg-[#fdfbf7] max-w-4xl mx-auto animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-block border border-stone-900 bg-[#f8f5ee] px-2.5 py-0.5 text-xs font-mono font-bold uppercase">
                  {locale === "bn" ? "ইঞ্জিন ও রেডিয়েটর পরিচর্যা নির্দেশিকা" : "THERMAL REGULATION DISPATCH"}
                </div>
                <h3 className="text-2xl font-bold font-newspaper text-stone-900">
                  {t.batteryGuide.radiatorTitle}
                </h3>
                <p className="text-sm font-newspaper text-stone-700 leading-relaxed text-justify">
                  {t.batteryGuide.radiatorDesc}
                </p>
                <div className="p-4 border-l-4 border-stone-900 bg-[#f8f5ee] text-xs font-newspaper text-stone-900">
                  💡 <strong>{locale === "bn" ? "প্রকৌশলী পরামর্শ:" : "Engineering Advice:"}</strong>{" "}
                  {locale === "bn"
                    ? "গাড়ির রেডিয়েটরে কখনোই সাধারণ পানি ব্যবহার করবেন না। আমেনা™ ডিমিনারেলাইজড পানি রেডিয়েটরের ভেতরে কোনো ময়লা ও খনিজের স্তর জমতে দেয় না, ফলে ইঞ্জিন ওভারহিটিং রোধ হয়।"
                    : "Never use tap or mineral water in vehicle radiators. amena™ DM water prevents scale, corrosion and sediment buildup, ensuring optimal engine cooling."}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 border-2 border-stone-900 bg-[#f8f5ee] text-center shadow-[3px_3px_0px_#1c1917]">
                <div className="text-5xl font-black font-newspaper text-stone-900 mb-1">
                  {locale === "bn" ? "০%" : "0%"}
                </div>
                <span className="text-xs font-mono uppercase font-bold text-accent block mb-1">
                  {locale === "bn" ? "স্কেল ও ব্লকেজ ঝুঁকি" : "SCALE & BLOCKAGE RISK"}
                </span>
                <p className="text-xs font-newspaper text-stone-600">
                  {locale === "bn"
                    ? "জিরো মিনারেল ও শতভাগ বাষ্পীভবন ভারসাম্য।"
                    : "Zero dissolved minerals and 100% thermal vaporization balance."}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
