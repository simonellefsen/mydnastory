import type { CatalogEntry, Profile } from "@/lib/types";
import type { Locale } from "./config";
import { daComingTeaser, daProfiles } from "./da-profiles";
import { getMessages } from "./messages";

function translateLabel(locale: Locale, label: string): string {
  if (locale === "en") return label;
  const t = getMessages(locale);
  return t.originLabels[label] ?? t.ancientLabels[label] ?? t.era[label] ?? t.place[label] ?? label;
}

function daYear(label: string): string {
  if (/^see\b/i.test(label)) return label;
  return label.replace(/,/g, ".").replace(/\bBCE\b/g, "f.Kr.").replace(/\bCE\b/g, "e.Kr.");
}

export function localizeProfile(profile: Profile, locale: Locale): Profile {
  const t = getMessages(locale);
  const overlay = locale === "da" ? daProfiles[profile.slug] : undefined;

  const origins = profile.origins.map((o) => ({
    ...o,
    label: t.originLabels[o.id] ?? o.label,
    kicker: overlay?.origins?.[o.id]?.kicker ?? o.kicker,
    summary: overlay?.origins?.[o.id]?.summary ?? o.summary,
    detail: overlay?.origins?.[o.id]?.detail ?? o.detail,
  }));

  const ancientOrigins = profile.ancientOrigins.map((o) => ({
    ...o,
    label: t.ancientLabels[o.id] ?? o.label,
    era: overlay?.ancientOrigins?.[o.id]?.era ?? t.era[o.era] ?? o.era,
    when: overlay?.ancientOrigins?.[o.id]?.when ?? o.when,
    summary: overlay?.ancientOrigins?.[o.id]?.summary ?? o.summary,
    detail: overlay?.ancientOrigins?.[o.id]?.detail ?? o.detail,
  }));

  const haploPath = profile.haploPath.map((step) => ({
    ...step,
    yearLabel: overlay?.haploPath?.[step.haplogroup]?.yearLabel ?? (locale === "da" ? daYear(step.yearLabel) : step.yearLabel),
    era: t.era[step.era] ?? step.era,
    place: t.place[step.place] ?? step.place,
    copy: overlay?.haploPath?.[step.haplogroup]?.copy ?? step.copy,
  }));

  const connections = profile.connections.map((c) => ({
    ...c,
    dates: locale === "da" ? daYear(c.dates) : c.dates,
    sharedYear: locale === "da" ? daYear(c.sharedYear) : c.sharedYear,
    place: t.place[c.place] ?? c.place,
    blurb: overlay?.connections?.[c.id]?.blurb ?? c.blurb,
  }));

  const heroStats = profile.heroStats.map((stat) => {
    const key =
      stat.label === "Scandinavia"
        ? t.stats.scandinavia
        : stat.label === "Central Europe"
          ? t.stats.centralEurope
          : stat.label === "Ireland"
            ? t.stats.ireland
            : stat.label === "Motherline"
              ? t.stats.motherline
              : stat.label === "Fatherline"
                ? t.stats.fatherline
                : stat.label === "Markers"
                  ? t.stats.markers
                  : stat.label;
    return { ...stat, label: key };
  });

  const kinship = profile.kinship
    ? {
        ...profile.kinship,
        role: t.kinshipRoles[profile.kinship.role as keyof typeof t.kinshipRoles] ?? profile.kinship.role,
        href: `/${locale}/shared`,
      }
    : undefined;

  return {
    ...profile,
    tagline: overlay?.tagline ?? profile.tagline,
    lede: overlay?.lede ?? profile.lede,
    heroAlt: overlay?.heroAlt ?? profile.heroAlt,
    tested: overlay?.tested ?? profile.tested,
    heroStats,
    originsHeadline: overlay?.originsHeadline ?? profile.originsHeadline,
    originsLede: overlay?.originsLede ?? profile.originsLede,
    origins,
    ancientHeadline: overlay?.ancientHeadline ?? profile.ancientHeadline,
    ancientLede: overlay?.ancientLede ?? profile.ancientLede,
    ancientOrigins,
    haplogroup: {
      ...profile.haplogroup,
      formed: overlay?.haplogroup?.formed ?? profile.haplogroup.formed,
      headline: overlay?.haplogroup?.headline ?? profile.haplogroup.headline,
      tmrca: {
        meanLabel:
          overlay?.haplogroup?.tmrca ??
          (locale === "da" ? daYear(profile.haplogroup.tmrca.meanLabel) : profile.haplogroup.tmrca.meanLabel),
        ci95:
          overlay?.haplogroup?.ci95 ??
          (locale === "da" ? daYear(profile.haplogroup.tmrca.ci95) : profile.haplogroup.tmrca.ci95),
      },
      testers: {
        ...profile.haplogroup.testers,
        known: overlay?.haplogroup?.known ?? profile.haplogroup.testers.known,
      },
      rarityNote: overlay?.haplogroup?.rarityNote ?? profile.haplogroup.rarityNote,
    },
    haploPath,
    yHaplogroup: profile.yHaplogroup
      ? {
          ...profile.yHaplogroup,
          formed: overlay?.yHaplogroup?.formed ?? profile.yHaplogroup.formed,
          headline: overlay?.yHaplogroup?.headline ?? profile.yHaplogroup.headline,
          tmrca: {
            meanLabel:
              overlay?.yHaplogroup?.tmrca ??
              (locale === "da" ? daYear(profile.yHaplogroup.tmrca.meanLabel) : profile.yHaplogroup.tmrca.meanLabel),
            ci95:
              overlay?.yHaplogroup?.ci95 ??
              (locale === "da" ? daYear(profile.yHaplogroup.tmrca.ci95) : profile.yHaplogroup.tmrca.ci95),
          },
          testers: {
            ...profile.yHaplogroup.testers,
            known: overlay?.yHaplogroup?.known ?? profile.yHaplogroup.testers.known,
          },
          rarityNote: overlay?.yHaplogroup?.rarityNote ?? profile.yHaplogroup.rarityNote,
        }
      : undefined,
    yHaploPath: profile.yHaploPath?.map((step) => ({
      ...step,
      yearLabel: overlay?.yHaploPath?.[step.haplogroup]?.yearLabel ?? (locale === "da" ? daYear(step.yearLabel) : step.yearLabel),
      era: t.era[step.era] ?? step.era,
      place: t.place[step.place] ?? step.place,
      copy: overlay?.yHaploPath?.[step.haplogroup]?.copy ?? step.copy,
    })),
    fatherlineMapCaption: overlay?.fatherlineMapCaption ?? profile.fatherlineMapCaption,
    fatherlineSpotlights: overlay?.fatherlineSpotlights
      ? (profile.fatherlineSpotlights ?? []).map((card, i) => ({
          ...card,
          title: overlay.fatherlineSpotlights![i]?.title ?? card.title,
          copy: overlay.fatherlineSpotlights![i]?.copy ?? card.copy,
        }))
      : profile.fatherlineSpotlights,
    motherlineMapCaption: overlay?.motherlineMapCaption ?? profile.motherlineMapCaption,
    motherlineSpotlights: overlay?.motherlineSpotlights
      ? profile.motherlineSpotlights.map((card, i) => ({
          ...card,
          title: overlay.motherlineSpotlights![i]?.title ?? card.title,
          copy: overlay.motherlineSpotlights![i]?.copy ?? card.copy,
        }))
      : profile.motherlineSpotlights,
    connectionsLede: overlay?.connectionsLede ?? profile.connectionsLede,
    connections,
    genome: {
      ...profile.genome,
      painting: overlay?.genomePainting ?? profile.genome.painting,
    },
    kinship,
  };
}

export function localizeCatalog(entries: CatalogEntry[], locale: Locale): CatalogEntry[] {
  return entries.map((entry) => {
    if (entry.status === "coming") {
      return {
        ...entry,
        teaser: locale === "da" ? daComingTeaser : entry.teaser,
      };
    }
    return localizeProfile(entry, locale);
  });
}

void translateLabel;
