import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { V2Story } from "@/components/v2/V2Story";
import { getEvidenceCopy } from "@/lib/evidence/copy";
import { isLocale, languageAlternates, locales, ogLocale } from "@/lib/i18n/config";
import { publishedProfiles } from "@/lib/profiles";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return locales.flatMap((locale) => publishedProfiles.map((profile) => ({ locale, slug: profile.slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || slug !== "simon") return { title: "Not found" };
  const { v2 } = getEvidenceCopy(locale);
  const path = `/v2/${slug}`;

  return {
    title: `${v2.title} — Simon`,
    description: v2.lede,
    openGraph: {
      title: `${v2.title} — Simon`,
      description: v2.lede,
      images: ["/images/hero-fjord.jpg"],
      locale: ogLocale(locale),
    },
    alternates: {
      canonical: `/${locale}${path}`,
      languages: languageAlternates(path),
    },
  };
}

export default async function V2StoryPage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || slug !== "simon") notFound();
  return <V2Story locale={locale} slug={slug} />;
}
