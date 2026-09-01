import { helle } from "./helle";
import { pernille } from "./pernille";
import type { CatalogEntry, Profile } from "@/lib/types";

export const publishedProfiles: Profile[] = [pernille, helle];

export const catalog: CatalogEntry[] = [
  pernille,
  helle,
  {
    slug: "next",
    status: "coming",
    teaser: "The next kit lands here. Same first-name rule, same private ftdna/ folder, same chapters.",
  },
];

export function getProfile(slug: string): Profile | undefined {
  return publishedProfiles.find((p) => p.slug === slug);
}

export function getCatalog(): CatalogEntry[] {
  return catalog;
}

export { pernille, helle };
