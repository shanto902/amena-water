"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Locale, TranslationSchema } from "@/types";
import { translations } from "@/data/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLocale = "bn",
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Derive locale directly from the active URL path, falling back to initialLocale
  const pathLocale: Locale = pathname?.startsWith("/en")
    ? "en"
    : pathname?.startsWith("/bn")
    ? "bn"
    : initialLocale;

  const [localeOverride, setLocaleOverride] = useState<Locale | null>(null);

  // If the path matches the override, reset override so URL is always single source of truth
  const locale: Locale =
    localeOverride && (pathname === `/${localeOverride}` || pathname === "/")
      ? localeOverride
      : pathLocale;

  // Synchronize the external HTML lang tag with the resolved locale
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleOverride(newLocale);
    try {
      localStorage.setItem("amena_preferred_lang", newLocale);
      if (typeof document !== "undefined") {
        document.documentElement.lang = newLocale;
      }
    } catch {
      // ignore
    }

    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`/${newLocale}${hash}`);
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
