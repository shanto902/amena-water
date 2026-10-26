"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

export function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 border-b-2 border-stone-900 bg-[#f8f5ee]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-block border-b-2 border-stone-900 pb-1 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              § {t.faq.tag} §
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-newspaper text-stone-900 tracking-tight leading-tight mb-3">
            {t.faq.title}
          </h2>
          <p className="text-base sm:text-lg font-newspaper italic text-stone-700">
            {t.faq.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-stone-900 mx-auto mt-4" />
        </div>

        {/* Newspaper Q&A Columns */}
        <div className="space-y-3">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="newspaper-card p-5 bg-[#fdfbf7] cursor-pointer transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-newspaper text-stone-900 hover:text-accent transition-colors">
                    <span className="text-accent font-mono text-sm mr-2">Q{idx + 1}.</span>
                    {item.question}
                  </span>
                  <div
                    className={`w-6 h-6 border border-stone-900 bg-[#f8f5ee] flex items-center justify-center text-stone-900 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-stone-900 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-stone-300 text-xs sm:text-sm font-newspaper text-stone-800 leading-relaxed text-justify animate-fadeIn">
                    <p className="border-l-2 border-accent pl-3">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
