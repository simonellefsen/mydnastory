import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { V3Dossier } from "@/components/v3/V3Dossier";
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
  const { v3 } = getEvidenceCopy(locale);
  const path = `/v3/${slug}`;
  return {
    title: `${v3.title} — Simon`,
    description: v3.lede,
    openGraph: { title: `${v3.title} — Simon`, description: v3.lede, images: ["/images/dna-abstract.jpg"], locale: ogLocale(locale) },
    alternates: { canonical: `/${locale}${path}`, languages: languageAlternates(path) },
  };
}

export default async function V3DossierPage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || slug !== "simon") notFound();
  return <V3Dossier locale={locale} slug={slug} />;
}
