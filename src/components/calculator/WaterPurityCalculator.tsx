"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

type ApplicationType = "rickshaw" | "ips" | "car" | "solar";

export function WaterPurityCalculator() {
  const { t, locale } = useLanguage();

  const [waterType, setWaterType] = useState<"amena" | "market" | "tap" | "boiled">("amena");
  const [appType, setAppType] = useState<ApplicationType>("rickshaw");

  const waterData = {
    amena: {
      tds: "< ১ ppm",
      tdsEn: "< 1 ppm",
      lifeFactor: "১০০% (পূর্ণ আয়ু)",
      lifeFactorEn: "100% (Maximum Full Life)",
      risk: "ঝুঁকিমুক্ত (Zero Risk)",
      riskEn: "Zero Risk (Safe)",
      stamp: "APPROVED & SAFE",
      stampBn: "অনুমোদিত ও নিরাপদ",
      stampClass: "border-stone-900 text-stone-900 bg-white",
      icon: CheckCircle2,
      recommendation:
        "নিউক্লিয়ার মিডিয়া পরিশোধিত আমেনা ডিএম ওয়াটার ব্যবহারের কারণে ব্যাটারির সেল প্লেট সম্পূর্ণ অক্ষত থাকবে এবং সর্বোচ্চ ব্যাকআপ সময় পাওয়া যাবে।",
      recommendationEn:
        "Using amena™ DM water keeps lead plates completely clean of mineral encrustation, maximizing backup runtime and cycle longevity.",
    },
    market: {
      tds: "৪০ - ৮০ ppm",
      tdsEn: "40 - 80 ppm",
      lifeFactor: "৫৫% - ৭০%",
      lifeFactorEn: "55% - 70%",
      risk: "মাঝারি ঝুঁকি (Moderate Risk)",
      riskEn: "Moderate Risk (Degradation)",
      stamp: "CAUTION ADVISED",
      stampBn: "সতর্কতা আবশ্যক",
      stampClass: "border-amber-800 text-amber-800 bg-amber-50",
      icon: AlertTriangle,
      recommendation:
        "বাজারের অপরিশোধিত পানি ধীরে ধীরে প্লেটের উপর স্কেল ফেলে ব্যাটারির সেল দুর্বল করে দেয়। অবিলম্বে সার্টিফাইড ডিএম ওয়াটার ব্যবহার শুরু করুন।",
      recommendationEn:
        "Unregulated local market water deposits residual salts, steadily degrading plate efficiency. Switch immediately to certified DM water.",
    },
    tap: {
      tds: "৩৫০+ ppm",
      tdsEn: "350+ ppm",
      lifeFactor: "২০% - ৩৫%",
      lifeFactorEn: "20% - 35%",
      risk: "চরম ক্ষতিকর (Critical Damage)",
      riskEn: "Critical Damage (Rapid Failure)",
      stamp: "HAZARDOUS",
      stampBn: "চরম ঝুঁকিপূর্ণ",
      stampClass: "border-accent text-accent bg-accent-light",
      icon: XCircle,
      recommendation:
        "নলকূপ বা ট্যাপের পানিতে থাকা ক্যালসিয়াম, ম্যাগনেসিয়াম ও আয়রন ব্যাটারি প্লেট স্থায়ীভাবে জ্যাম করে দেয়। এতে ৬ মাসের মধ্যে ব্যাটারি নষ্ট হতে পারে!",
      recommendationEn:
        "Ground and tap minerals immediately poison the lead plates with irreversible sulfation crusts, triggering premature battery death within months!",
    },
    boiled: {
      tds: "২৫০+ ppm",
      tdsEn: "250+ ppm",
      lifeFactor: "২৫% - ৪০%",
      lifeFactorEn: "25% - 40%",
      risk: "উচ্চ ঝুঁকি (High Risk)",
      riskEn: "High Risk (Plate Crust)",
      stamp: "NOT SAFE",
      stampBn: "নিরাপদ নয়",
      stampClass: "border-accent text-accent bg-accent-light",
      icon: XCircle,
      recommendation:
        "পানি ফুটালে শুধু জীবাণু মরে কিন্তু ক্ষতিকর খনিজ বা লবণ দূর হয় না! তাই ফুটানো পানি ব্যাটারির জন্য মোটেই নিরাপদ নয়।",
      recommendationEn:
        "Boiling water only kills bacteria but actually concentrates the dissolved minerals! Boiled water must NEVER be put in battery cells.",
    },
  };

  const current = waterData[waterType];

  const waterSources = [
    {
      id: "amena" as const,
      labelBn: "✓ আমেনা ডি এম ওয়াটার (TDS < ১ ppm)",
      labelEn: "✓ amena™ DM Water (TDS < 1 ppm)",
      hasBuetPass: true,
    },
    {
      id: "market" as const,
      labelBn: "⚠ বাজারের সাধারণ 'ব্যাটারি পানি' (~ ৫০ ppm)",
      labelEn: "⚠ Local Market 'Battery Water' (~ 50 ppm)",
      hasBuetPass: false,
    },
    {
      id: "tap" as const,
      labelBn: "✗ টিউবওয়েল বা সাধারণ সাপ্লাই পানি (৩৫০+ ppm)",
      labelEn: "✗ Tap / Ground Tube-well Water (350+ ppm)",
      hasBuetPass: false,
    },
    {
      id: "boiled" as const,
      labelBn: "♨ ফুটানো সাধারণ পানি (২৫০+ ppm)",
      labelEn: "♨ Boiled Domestic Water (250+ ppm)",
      hasBuetPass: false,
    },
  ];

  const appOptions: { id: ApplicationType; labelBn: string; labelEn: string }[] = [
    { id: "rickshaw", labelBn: "ইজিবাইক / অটোরিকশা", labelEn: "Easybike / Auto-Rickshaw" },
    { id: "ips", labelBn: "বাসার আইপিএস / ইউপিএস", labelEn: "Home IPS / UPS" },
    { id: "car", labelBn: "কার / বাস / ট্রাক", labelEn: "Car / Bus / Heavy Truck" },
    { id: "solar", labelBn: "সৌর-বিদ্যুৎ সিস্টেম", labelEn: "Solar Battery System" },
  ];

  return (
    <section id="calculator" className="py-12 sm:py-16 border-b-2 border-stone-900 bg-[#f8f5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-block border-b-2 border-stone-900 pb-1 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              § {t.calculator.tag} §
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-newspaper text-stone-900 tracking-tight leading-tight mb-3">
            {t.calculator.title}
          </h2>
          <p className="text-base sm:text-lg font-newspaper italic text-stone-700">
            {t.calculator.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-stone-900 mx-auto mt-4" />
        </div>

        {/* Calculator Ledger Box */}
        <div className="newspaper-card p-6 sm:p-8 bg-[#fdfbf7] max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Inputs Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <label className="text-xs font-mono font-bold uppercase text-stone-900 block mb-2.5">
                  [{locale === "bn" ? "১" : "1"}] {t.calculator.selectLabel}
                </label>
                <div className="space-y-2">
                  {waterSources.map((source) => (
                    <button
                      key={source.id}
                      type="button"
                      onClick={() => setWaterType(source.id)}
                      className={`w-full p-3 border text-left text-xs font-mono font-bold transition-all flex items-center justify-between ${
                        waterType === source.id
                          ? "bg-stone-900 text-[#f8f5ee] border-stone-900 shadow-[2px_2px_0px_#44403c]"
                          : "bg-[#f8f5ee] border-stone-300 text-stone-800 hover:border-stone-500"
                      }`}
                    >
                      <span>{locale === "bn" ? source.labelBn : source.labelEn}</span>
                      {source.hasBuetPass && (
                        <span className="text-[10px] bg-accent text-white px-1.5 py-0.5 font-bold">
                          {locale === "bn" ? "বুয়েট পাস" : "BUET PASS"}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold uppercase text-stone-900 block mb-2.5">
                  [{locale === "bn" ? "২" : "2"}] {t.calculator.batteryTypeLabel}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {appOptions.map((app) => (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => setAppType(app.id)}
                      className={`p-2 text-xs font-mono font-bold border transition-all text-center ${
                        appType === app.id
                          ? "bg-stone-900 text-white border-stone-900"
                          : "bg-[#f8f5ee] border-stone-300 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {locale === "bn" ? app.labelBn : app.labelEn}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Diagnostic Result Column */}
            <div className="lg:col-span-6 border-2 border-stone-900 bg-[#f8f5ee] p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b-2 border-stone-900 pb-3 mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-stone-900">
                    {locale === "bn" ? "ডায়াগনস্টিক রিপোর্ট" : "DIAGNOSTIC DISPATCH"}
                  </span>
                  <div className={`px-2 py-0.5 border-2 text-[10px] font-mono font-bold ${current.stampClass}`}>
                    {locale === "bn" ? current.stampBn : current.stamp}
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-1.5 border-b border-stone-300">
                    <span className="text-stone-600">{t.calculator.tdsLabel}</span>
                    <span className="font-bold text-stone-900">
                      {locale === "bn" ? current.tds : current.tdsEn}
                    </span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-stone-300">
                    <span className="text-stone-600">{t.calculator.estimatedLifeLabel}</span>
                    <span className="font-bold text-stone-900">
                      {locale === "bn" ? current.lifeFactor : current.lifeFactorEn}
                    </span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-stone-300">
                    <span className="text-stone-600">{t.calculator.riskLevelLabel}</span>
                    <span className="font-bold text-stone-900">
                      {locale === "bn" ? current.risk : current.riskEn}
                    </span>
                  </div>
                </div>

                {/* Recommendation Notice Box */}
                <div className="mt-4 p-3.5 border border-stone-400 bg-[#fdfbf7] text-xs font-newspaper text-stone-800 leading-relaxed text-justify">
                  <span className="font-bold text-stone-900 block mb-1">
                    {t.calculator.recommendationLabel}
                  </span>
                  <p>{locale === "bn" ? current.recommendation : current.recommendationEn}</p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-400 text-center">
                <a
                  href="#contact"
                  className="inline-block text-xs font-mono font-bold text-accent hover:text-stone-900 underline underline-offset-4"
                >
                  {locale === "bn"
                    ? "আমেনা™ খাঁটি ডিএম ওয়াটার অর্ডার করুন →"
                    : "Order Certified amena™ DM Water →"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
