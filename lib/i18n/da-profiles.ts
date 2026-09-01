type TextBits = {
  tagline?: string;
  lede?: string;
  heroAlt?: string;
  tested?: string;
  originsHeadline?: { lead: string; accent: string };
  originsLede?: string;
  origins?: Record<string, { kicker?: string; summary?: string; detail?: string }>;
  ancientHeadline?: { lead: string; mid: string; end: string };
  ancientLede?: string;
  ancientOrigins?: Record<string, { era?: string; when?: string; summary?: string; detail?: string }>;
  haplogroup?: {
    formed?: string;
    headline?: string;
    known?: string;
    rarityNote?: string;
    painting?: string;
  };
  haploPath?: Record<string, { copy?: string }>;
  motherlineMapCaption?: string;
  motherlineSpotlights?: { title: string; copy: string }[];
  connectionsLede?: string;
  connections?: Record<string, { blurb?: string }>;
  genomePainting?: string;
  comingTeaser?: string;
};

export const daProfiles: Record<string, TextBits> = {};

export const daComingTeaser = "Det første kit lander her. Samme fornavnsregel, samme kapitler.";
