import React from "react";
import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Products } from "@/components/products/Products";
import { Parameters } from "@/components/parameters/Parameters";
import { BatteryGuide } from "@/components/battery-guide/BatteryGuide";
import { WaterPurityCalculator } from "@/components/calculator/WaterPurityCalculator";
import { Team } from "@/components/team/Team";
import { Faq } from "@/components/faq/Faq";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "amena™ | The Demineralized Water Gazette & Battery Care Bulletin",
  description:
    "আমেনা™ - বুয়েট পরীক্ষিত ৭-স্তরের নিউক্লিয়ার মিডিয়া পরিশোধিত ডিমিনারেলাইজড পানি (DM Water), ব্যাটারি পানি, ইঞ্জিন কুলিং ওয়াটার ও ইলেক্ট্রোলাইট। টিডিএস < ১ ppm। বাংলাদেশে ব্যাটারির আয়ু বাড়াতে একমাত্র বিজ্ঞানসম্মত সমাধান।",
  keywords: [
    "amena",
    "amena water",
    "amena.com.bd",
    "demineralized water bangladesh",
    "battery water bangladesh",
    "easy bike battery water",
    "ব্যাটারি পানি",
    "ডি এম ওয়াটার",
    "ডিমিনারেলাইজড পানি",
    "ইজিবাইক ব্যাটারি পানি",
    "ইলেকট্রোলাইট",
    "BUET tested battery water",
    "engine coolant water",
    "pure rose water bangladesh",
    "Kishoreganj amena water",
    "TDS less than 1 ppm",
  ],
  authors: [{ name: "amena™ Enterprise" }, { name: "Ashik Ali Shanto" }],
  creator: "amena™",
  publisher: "amena™",
  metadataBase: new URL("https://amena.com.bd"),
  alternates: {
    canonical: "https://amena.com.bd",
    languages: {
      "bn-BD": "https://amena.com.bd",
      "en-US": "https://amena.com.bd?lang=en",
    },
  },
  openGraph: {
    title: "amena™ | The Demineralized Water Gazette & Battery Care Bulletin",
    description:
      "বুয়েট পরীক্ষিত ৭-স্তরের নিউক্লিয়ার মিডিয়া পরিশোধিত ডিমিনারেলাইজড পানি। টিডিএস < ১ ppm। ইজিবাইক, গাড়ি, সোলার ও আইপিএস ব্যাটারির জন্য সর্বোচ্চ সুরক্ষা।",
    url: "https://amena.com.bd",
    siteName: "amena™ Demineralized Water",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "amena™ | World-Class Demineralized Water Solutions",
    description:
      "BUET-certified 7-stage nuclear-grade pure DM water (TDS < 1 ppm). Extended battery lifespan across Bangladesh.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://amena.com.bd/#organization",
        name: "amena™",
        alternateName: ["amena Enterprise", "আমেনা"],
        url: "https://amena.com.bd",
        logo: "https://amena.com.bd/assets/img/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+8801756103508",
          contactType: "customer service",
          areaServed: "BD",
          availableLanguage: ["Bengali", "English"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "669/5 Shorkari Gorosthan more, ShikkhokPolli",
          addressLocality: "Kishorgonj",
          addressRegion: "Dhaka",
          postalCode: "2300",
          addressCountry: "BD",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://amena.com.bd/#localbusiness",
        name: "amena™ Demineralized Water Plant",
        image: "https://amena.com.bd/assets/img/logo.png",
        telephone: "+8801756103508",
        email: "amenakhg@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "669/5 Shorkari Gorosthan more, ShikkhokPolli",
          addressLocality: "Kishorgonj",
          addressRegion: "Dhaka",
          postalCode: "2300",
          addressCountry: "BD",
        },
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "20:00",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://amena.com.bd/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "ডি এম (DM) অথবা ডি আই (DI) ওয়াটার কি?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "DM মানে Demineralized এবং DI মানে Deionized। এর অর্থ এমন এক বিশুদ্ধ পানি যাতে কোনো ধরণের খনিজ পদার্থ বা ক্ষতিকর আয়ন নেই। এটি শতভাগ H₂O অণু সমৃদ্ধ।",
            },
          },
          {
            "@type": "Question",
            name: "আমেনা™ ডি এম ওয়াটারের টিডিএস (TDS) কত?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "আমেনা ডি এম ওয়াটারের টিডিএস মান আন্তর্জাতিক ল্যাবরেটরি গ্রেড অনুযায়ী ১ ppm (mg/L) এর নিচে নিশ্চিত করা হয়। যা বুয়েট ল্যাবরেটরি পরীক্ষায় উত্তীর্ণ।",
            },
          },
          {
            "@type": "Question",
            name: "ব্যাটারিতে সাধারণ পানি দিলে কী ক্ষতি হয়?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "সাধারণ পানিতে ক্যালসিয়াম, ম্যাগনেসিয়াম ও আয়রন থাকে। ব্যাটারির ভেতর এগুলো সীসার প্লেটের ওপর স্থায়ী সাদা স্তরে জমাট বাঁধে (Sulfation), যার ফলে ব্যাটারি অকালে নষ্ট হয়ে যায়।",
            },
          },
        ],
      },
    ],
  };

  return (
    <LanguageProvider>
      {/* Search Engine Structured JSON-LD Script */}
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
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
