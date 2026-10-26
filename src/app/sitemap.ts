import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amena.com.bd";
  const currentDate = new Date().toISOString();

  const alternates = {
    languages: {
      "bn-BD": `${baseUrl}/bn`,
      "en-US": `${baseUrl}/en`,
      "x-default": baseUrl,
    },
  };

  const sections = [
    { id: "about", priority: 0.8, changeFrequency: "monthly" as const },
    { id: "products", priority: 0.9, changeFrequency: "weekly" as const },
    { id: "parameters", priority: 0.8, changeFrequency: "monthly" as const },
    { id: "battery-guide", priority: 0.8, changeFrequency: "monthly" as const },
    { id: "calculator", priority: 0.7, changeFrequency: "monthly" as const },
    { id: "team", priority: 0.6, changeFrequency: "yearly" as const },
    { id: "gallery", priority: 0.7, changeFrequency: "monthly" as const },
    { id: "faq", priority: 0.7, changeFrequency: "monthly" as const },
    { id: "contact", priority: 0.9, changeFrequency: "weekly" as const },
  ];

  return [
    // Primary Root
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates,
    },
    // Bangla Edition
    {
      url: `${baseUrl}/bn`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates,
    },
    // English Edition
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates,
    },
    // Section deep links for Bangla
    ...sections.map((sec) => ({
      url: `${baseUrl}/bn#${sec.id}`,
      lastModified: currentDate,
      changeFrequency: sec.changeFrequency,
      priority: sec.priority,
    })),
    // Section deep links for English
    ...sections.map((sec) => ({
      url: `${baseUrl}/en#${sec.id}`,
      lastModified: currentDate,
      changeFrequency: sec.changeFrequency,
      priority: sec.priority,
    })),
  ];
}
