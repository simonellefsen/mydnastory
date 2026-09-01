import type { Locale } from "./config";

export type TwigCopy = {
  kicker: string;
  title: string;
  accent: string;
  lede: string;
  image: string;
  imageAlt: string;
  cards: { title: string; copy: string }[];
  papers: { cite: string; point: string }[];
};

export type ScienceCopy = {
  twigs: Record<string, TwigCopy>;
};

const science: Record<Locale, ScienceCopy> = {
  en: { twigs: {} },
  da: { twigs: {} },
};

export function getScience(locale: Locale): ScienceCopy {
  return science[locale] ?? science.en;
}
