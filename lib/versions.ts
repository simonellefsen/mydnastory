import type { Locale } from "@/lib/i18n/config";

export const storyVersions = ["v2", "v3"] as const;
export type StoryVersion = (typeof storyVersions)[number];
export type SiteVersion = "v1" | StoryVersion;

export function isStoryVersion(value: string): value is StoryVersion {
  return storyVersions.includes(value as StoryVersion);
}

export function versionHref(locale: Locale, version: SiteVersion, slug: string): string {
  return version === "v1" ? `/${locale}/${slug}` : `/${locale}/${version}/${slug}`;
}
