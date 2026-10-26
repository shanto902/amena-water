import type { Metadata } from "next";
import { getSeoMetadata, getJsonLd, BASE_URL } from "@/lib/seo";
import { HomeView } from "@/components/home/HomeView";

export const metadata: Metadata = getSeoMetadata("bn", "");

export default function RootPage() {
  const jsonLd = getJsonLd("bn", BASE_URL);
  return <HomeView initialLocale="bn" jsonLd={jsonLd} />;
}
