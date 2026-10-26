import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { getSeoMetadata, getJsonLd, BASE_URL } from "@/lib/seo";
import { HomeView } from "@/components/home/HomeView";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "bn" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") {
    return {};
  }
  return getSeoMetadata(locale as Locale, `/${locale}`);
}

async function LocaleContent({ params }: Props) {
  const { locale } = await params;
  if (locale !== "bn" && locale !== "en") {
    notFound();
  }

  const validLocale = locale as Locale;
  const currentUrl = `${BASE_URL}/${validLocale}`;
  const jsonLd = getJsonLd(validLocale, currentUrl);

  return <HomeView initialLocale={validLocale} jsonLd={jsonLd} />;
}

export default function LocalePage({ params }: Props) {
  return (
    <Suspense fallback={<HomeView initialLocale="bn" jsonLd={getJsonLd("bn", `${BASE_URL}/bn`)} />}>
      <LocaleContent params={params} />
    </Suspense>
  );
}

