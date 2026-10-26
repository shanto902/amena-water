"use client";

import React, { createContext, useContext, useState } from "react";
import { Locale, TranslationSchema } from "@/types";
import { translations } from "@/data/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to Bangla ('bn') per requirement with safe client-side hydration check
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("amena_preferred_lang") as Locale;
        if (saved === "bn" || saved === "en") {
          return saved;
        }
      } catch {
        // ignore
      }
    }
    return "bn";
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("amena_preferred_lang", newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // ignore
    }
  };

  const toggleLocale = () => {
    const nextLocale = locale === "bn" ? "en" : "bn";
    setLocale(nextLocale);
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

