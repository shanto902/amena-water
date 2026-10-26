"use client";

import React from "react";
import { Locale } from "@/types";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Products } from "@/components/products/Products";
import { Parameters } from "@/components/parameters/Parameters";
import { BatteryGuide } from "@/components/battery-guide/BatteryGuide";
import { WaterPurityCalculator } from "@/components/calculator/WaterPurityCalculator";
import { Team } from "@/components/team/Team";
import { Gallery } from "@/components/gallery/Gallery";
import { Faq } from "@/components/faq/Faq";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export function HomeView({
  initialLocale,
  jsonLd,
}: {
  initialLocale: Locale;
  jsonLd: Record<string, unknown>;
}) {
  return (
    <LanguageProvider initialLocale={initialLocale}>
      {/* Search Engine Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Retro Newspaper Page Layout */}
      <div className="relative flex flex-col min-h-screen bg-[#f8f5ee] text-stone-900">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Products />
          <Parameters />
          <BatteryGuide />
          <WaterPurityCalculator />
          <Team />
          <Gallery />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

