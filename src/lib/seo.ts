import type { Metadata } from "next";
import { Locale } from "@/types";
import { translations } from "@/data/translations";

export const BASE_URL = "https://amena.com.bd";

export function getSeoMetadata(locale: Locale, path = ""): Metadata {
  const isBn = locale === "bn";
  const canonicalUrl = `${BASE_URL}${path}`;

  const title = isBn
    ? "আমেনা™ | বিজ্ঞানসম্মত ডিমিনারেলাইজড ব্যাটারি পানি ও শিল্প সমাচার"
    : "amena™ | The Demineralized Water Gazette & Battery Care Bulletin";

  const description = isBn
    ? "আমেনা™ - বুয়েট পরীক্ষিত ৭-স্তরের নিউক্লিয়ার মিডিয়া পরিশোধিত ডিমিনারেলাইজড পানি (DM Water), ব্যাটারি পানি ও কুলিং ওয়াটার। টিডিএস < ১ ppm। দেশের যানবাহন ও ব্যাটারির স্থায়িত্বে একমাত্র বিজ্ঞানসম্মত সমাধান।"
    : "amena™ - BUET-certified 7-stage nuclear-grade pure demineralized water (TDS < 1 ppm), battery water, and industrial coolant. The scientific solution for battery longevity in Bangladesh.";

  const keywords = isBn
    ? [
        "আমেনা",
        "আমেনা পানি",
        "amena",
        "amena.com.bd",
        "ডিমিনারেলাইজড পানি",
        "ডি এম ওয়াটার",
        "ব্যাটারি পানি",
        "ইজিবাইক ব্যাটারি পানি",
        "অটোরিকশা ব্যাটারি পানি",
        "আইপিএস ব্যাটারি পানি",
        "বুয়েট পরীক্ষিত পানি",
        "কিশোরগঞ্জ ব্যাটারি পানি",
        "টিডিএস ১ পিপিএম",
        "রেডিয়েটর কুল্যান্ট পানি",
        "ব্যাটারি ইলেক্ট্রোলাইট",
      ]
    : [
        "amena",
        "amena water",
        "amena.com.bd",
        "demineralized water bangladesh",
        "battery water bangladesh",
        "DM water",
        "DI water",
        "easy bike battery water",
        "auto rickshaw battery care",
        "IPS battery water",
        "BUET tested battery water",
        "nuclear grade water",
        "Kishoreganj amena plant",
        "TDS less than 1 ppm",
        "industrial battery coolant",
      ];

  return {
    title,
    description,
    keywords,
    authors: [{ name: "amena™ Enterprise" }, { name: "Ashik Ali Shanto" }],
    creator: "amena™",
    publisher: "amena™",
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "bn-BD": `${BASE_URL}/bn`,
        "en-US": `${BASE_URL}/en`,
        "x-default": BASE_URL,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: isBn ? "আমেনা™ ডিমিনারেলাইজড ওয়াটার" : "amena™ Demineralized Water",
      locale: isBn ? "bn_BD" : "en_US",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/icon.png`,
          width: 512,
          height: 512,
          alt: "amena™ Logo & Brand Monogram",
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [`${BASE_URL}/icon.png`],
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
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export function getJsonLd(locale: Locale, currentUrl: string) {
  const isBn = locale === "bn";
  const t = translations[locale];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "amena™",
        alternateName: isBn ? "আমেনা™" : "amena Demineralized Water",
        inLanguage: isBn ? "bn-BD" : "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "amena™",
        alternateName: ["amena Enterprise", "আমেনা", "আমেনা এন্টারপ্রাইজ"],
        url: BASE_URL,
        logo: `${BASE_URL}/icon.png`,
        sameAs: ["https://maps.app.goo.gl/2qYRAAqVxFguGeWE7"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+8801756103508",
          contactType: "sales & customer support",
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
        "@id": `${BASE_URL}/#localbusiness`,
        name: isBn ? "আমেনা™ ডিমিনারেলাইজড ওয়াটার কারখানা" : "amena™ Demineralized Water Plant",
        image: `${BASE_URL}/icon.png`,
        telephone: "+8801756103508",
        email: "amenakhg@gmail.com",
        hasMap: "https://maps.app.goo.gl/2qYRAAqVxFguGeWE7",
        address: {
          "@type": "PostalAddress",
          streetAddress: "669/5 Shorkari Gorosthan more, ShikkhokPolli",
          addressLocality: "Kishorgonj",
          addressRegion: "Dhaka",
          postalCode: "2300",
          addressCountry: "BD",
        },
        priceRange: "৳৳",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "20:00",
        },
      },
      {
        "@type": "ItemList",
        "@id": `${currentUrl}#products`,
        name: t.products.title,
        itemListElement: t.products.items.map((prod, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: prod.name,
            description: prod.description,
            brand: {
              "@type": "Brand",
              name: "amena™",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "BDT",
              seller: {
                "@type": "Organization",
                name: "amena™",
              },
            },
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${currentUrl}#faq`,
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${currentUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isBn ? "বাংলা সংস্করণ (Bangla)" : "English Edition",
            item: currentUrl,
          },
        ],
      },
    ],
  };
}

