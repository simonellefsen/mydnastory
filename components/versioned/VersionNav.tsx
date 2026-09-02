import Link from "next/link";
import { getEvidenceCopy } from "@/lib/evidence/copy";
import type { Locale } from "@/lib/i18n/config";
import { storyVersions, type SiteVersion, versionHref } from "@/lib/versions";
import styles from "./versioned.module.css";

export function VersionNav({ locale, slug, current }: { locale: Locale; slug: string; current: SiteVersion }) {
  const { common } = getEvidenceCopy(locale);
  const labels: Record<"v1" | "v2" | "v3" | "v4", string> = {
    v1: common.original,
    v2: common.story,
    v3: common.dossier,
    v4: common.journey,
  };
  const versions: SiteVersion[] = ["v1", ...storyVersions];

  return (
    <nav className={styles.nav} aria-label={locale === "da" ? "Versioner" : "Versions"}>
      <Link className={styles.brand} href={`/${locale}`}>
        <span className={styles.brandMark} aria-hidden="true">D</span>
        <span className={styles.brandLabel}>myDNAStory</span>
      </Link>
      <ul className={styles.links}>
        {versions.map((version) => (
          <li key={version}>
            <Link
              className={styles.link}
              href={versionHref(locale, version, slug)}
              aria-current={version === current ? "page" : undefined}
            >
              <span>{labels[version]}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link className={styles.link} href={versionHref(locale === "da" ? "en" : "da", current, slug)} hrefLang={locale === "da" ? "en" : "da"}>
            <span>{common.language}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
