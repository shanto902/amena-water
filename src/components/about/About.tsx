"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck } from "lucide-react";

export function About() {
  const { t, locale } = useLanguage();

  const stages = [
    {
      numBn: "০১",
      numEn: "01",
      tag: "Sediment",
      nameBn: "সেডিমেন্ট ফিল্ট্রেশন",
      nameEn: "Sediment Filtration",
      descBn: "বালি ও ভারী কণা অপসারণ",
      descEn: "Removes sand, rust & heavy particles",
    },
    {
      numBn: "০২",
      numEn: "02",
      tag: "Carbon",
      nameBn: "অ্যাক্টিভেটেড কার্বন",
      nameEn: "Activated Carbon",
      descBn: "ক্লোরিন ও দুর্গন্ধ শোষণ",
      descEn: "Adsorbs chlorine & unpleasant odors",
    },
    {
      numBn: "০৩",
      numEn: "03",
      tag: "RO System",
      nameBn: "রিভার্স অসমোসিস",
      nameEn: "Reverse Osmosis",
      descBn: "৯৯% দ্রবীভূত লবণ দূরীকরণ",
      descEn: "Eliminates 99% of dissolved minerals",
    },
    {
      numBn: "০৪",
      numEn: "04",
      tag: "Cation Resin",
      nameBn: "ক্যাটায়ন আয়ন রেজিন",
      nameEn: "Cation Resin",
      descBn: "ক্যালসিয়াম ও ম্যাগনেসিয়াম নিষ্কাশন",
      descEn: "Extracts calcium & magnesium ions",
    },
    {
      numBn: "০৫",
      numEn: "05",
      tag: "Anion Resin",
      nameBn: "অ্যানায়ন আয়ন রেজিন",
      nameEn: "Anion Resin",
      descBn: "ক্ষতিকর অ্যানায়ন মুক্তকরণ",
      descEn: "Neutralizes harmful acid anions",
    },
    {
      numBn: "০৬",
      numEn: "06",
      tag: "Nuclear Media",
      nameBn: "নিউক্লিয়ার মিক্সড বেড",
      nameEn: "Nuclear Mixed Bed",
      descBn: "০-১ পিপিএম চরম বিশুদ্ধকরণ",
      descEn: "Polishes water to 0–1 ppm purity",
    },
    {
      numBn: "০৭",
      numEn: "07",
      tag: "UV Treatment",
      nameBn: "ইউ ভি স্টেরিলাইজার",
      nameEn: "UV Sterilizer",
      descBn: "১০০% ব্যাকটেরিয়া ধ্বংস",
      descEn: "Destroys 100% of biological bacteria",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 border-b-2 border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-block border-b-2 border-stone-900 pb-1 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              § {t.about.tag} §
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-newspaper text-stone-900 tracking-tight leading-tight mb-3">
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg font-newspaper italic text-stone-700">
            {t.about.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-stone-900 mx-auto mt-4" />
        </div>

        {/* Newspaper Multi-Column Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Main Editorial Article */}
          <div className="lg:col-span-7 bg-[#fdfbf7] p-6 sm:p-8 newspaper-card">
            <div className="border-b border-stone-300 pb-3 mb-4 flex items-center justify-between text-xs font-mono text-stone-600">
              <span>{locale === "bn" ? "বিশেষ প্রতিবেদন" : "SPECIAL INVESTIGATION"}</span>
              <span>{locale === "bn" ? "পড়ার সময়: ৩ মিনিট" : "READING TIME: 3 MIN"}</span>
            </div>

            <p className="font-newspaper text-lg font-bold text-stone-900 leading-snug mb-4 border-l-4 border-accent pl-4 py-1">
              {t.about.leadParagraph}
            </p>

            <div className="space-y-4 font-newspaper text-sm sm:text-base text-stone-800 leading-relaxed text-justify">
              <p>{t.about.story1}</p>
              <p>{t.about.story2}</p>
            </div>

            {/* BUET Certification Seal Box */}
            <div className="mt-6 p-4 border-2 border-stone-900 bg-[#f8f5ee] flex items-start gap-4">
              <div className="p-2 border border-stone-900 bg-white shrink-0">
                <ShieldCheck className="w-8 h-8 text-stone-900" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold font-newspaper text-stone-900">
                    {t.about.buetBadge}
                  </h3>
                  <span className="text-[10px] font-mono font-bold bg-stone-900 text-white px-2 py-0.5">
                    {locale === "bn" ? "যাচাইকৃত" : "VERIFIED"}
                  </span>
                </div>
                <p className="text-xs font-newspaper text-stone-700 mt-1">
                  {t.about.buetText}
                </p>
              </div>
            </div>
          </div>

          {/* 4 Editorial Guarantees Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border-b-2 border-stone-900 pb-2 mb-2">
              <h3 className="text-base font-bold font-newspaper uppercase text-stone-900">
                {locale === "bn" ? "চারটি প্রধান অঙ্গীকার" : "FOUR CORE PILLARS"}
              </h3>
            </div>

            {t.about.features.map((feat, idx) => (
              <div key={idx} className="newspaper-card-flat p-4 bg-[#fdfbf7]">
                <div className="flex items-start gap-3">
                  <span className="font-mono font-bold text-xs bg-stone-900 text-[#f8f5ee] px-2 py-0.5 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold font-newspaper text-stone-900">
                      {feat.title}
                    </h4>
                    <p className="text-xs font-newspaper text-stone-700 mt-1 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seven Stages of Purification Ledger */}
        <div className="border-t-2 border-stone-900 pt-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h3 className="text-2xl font-bold font-newspaper text-stone-900">
              {t.about.stagesTitle}
            </h3>
            <p className="text-xs font-newspaper italic text-stone-700 mt-1">
              {t.about.stagesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {stages.map((stg, idx) => (
              <div
                key={idx}
                className="newspaper-card-flat p-3 bg-[#fdfbf7] flex flex-col justify-between text-center"
              >
                <div className="border-b border-stone-300 pb-1 mb-2 flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-accent">{locale === "bn" ? stg.numBn : stg.numEn}</span>
                  <span className="text-[10px] text-stone-500 uppercase">{stg.tag}</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold font-newspaper text-stone-900 mb-1 leading-tight">
                    {locale === "bn" ? stg.nameBn : stg.nameEn}
                  </h4>
                  <p className="text-[11px] font-newspaper text-stone-600">
                    {locale === "bn" ? stg.descBn : stg.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
