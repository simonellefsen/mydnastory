import { localizeCatalog, localizeProfile } from "@/lib/i18n/localize";
import type { Locale } from "@/lib/i18n/config";
import type { CatalogEntry, Profile } from "@/lib/types";

export const publishedProfiles: Profile[] = [];

export const catalog: CatalogEntry[] = [
  {
    slug: "next",
    status: "coming",
    teaser: "The first kit lands here. Same first-name rule, same chapters.",
  },
];

export function getProfile(slug: string, locale: Locale = "en"): Profile | undefined {
  const base = publishedProfiles.find((p) => p.slug === slug);
  return base ? localizeProfile(base, locale) : undefined;
}

export function getCatalog(locale: Locale = "en"): CatalogEntry[] {
  return localizeCatalog(catalog, locale);
}


