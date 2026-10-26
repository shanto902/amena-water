"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Team() {
  const { t, locale } = useLanguage();

  return (
    <section id="team" className="py-12 sm:py-16 border-b-2 border-stone-900 bg-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-block border-b-2 border-stone-900 pb-1 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              § {t.team.tag} §
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-newspaper text-stone-900 tracking-tight leading-tight mb-3">
            {t.team.title}
          </h2>
          <p className="text-base sm:text-lg font-newspaper italic text-stone-700">
            {t.team.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-stone-900 mx-auto mt-4" />
        </div>

        {/* 3 Executive Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.team.members.map((member, idx) => (
            <div
              key={idx}
              className="newspaper-card p-6 bg-[#fdfbf7] flex flex-col justify-between text-center"
            >
              <div>
                {/* Archival Monogram Frame */}
                <div className="w-20 h-20 mx-auto mb-4 border-2 border-stone-900 bg-[#f8f5ee] flex items-center justify-center p-1 shadow-[2px_2px_0px_#1c1917]">
                  <div className="w-full h-full border border-stone-400 flex items-center justify-center font-newspaper font-black text-xl text-stone-900">
                    {member.avatarPlaceholder}
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold block mb-1">
                  {locale === "bn" ? "অফিসিয়াল নির্বাহী" : "OFFICIAL EXECUTIVE"}
                </span>

                <h3 className="text-xl font-bold font-newspaper text-stone-900 mb-1">
                  {member.name}
                </h3>

                <div className="inline-block px-2.5 py-0.5 border border-stone-800 bg-[#f8f5ee] text-xs font-mono font-bold text-stone-900 mb-2">
                  {member.role}
                </div>

                {/* Qualification */}
                <div className="text-xs font-newspaper italic text-stone-700 mb-4 px-2">
                  {member.qualification}
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm font-newspaper text-stone-800 leading-relaxed mb-6 text-justify">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-300 text-center">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-600 block">
                  {locale === "bn" ? "আমেনা™ পরিচালনা পর্ষদ" : "amena™ TRUSTEE BOARD"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
