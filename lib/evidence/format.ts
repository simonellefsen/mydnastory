import type { Locale } from "@/lib/i18n/config";
import type { Fact } from "./types";

export function localeText<T>(value: { en: T; da: T }, locale: Locale): T {
  return value[locale];
}

export function formatNumber(value: number, locale: Locale, maximumFractionDigits = 0): string {
  return new Intl.NumberFormat(locale === "da" ? "da-DK" : "en-GB", {
    maximumFractionDigits,
  }).format(value);
}

export function formatNumericFact(fact: Fact<number>, locale: Locale): string {
  const digits = fact.id === "qc.autosomal.callRate" ? 2 : 0;
  const value = formatNumber(fact.value, locale, digits);
  const prefix = fact.precision === "lessThan" ? "<" : "";
  if (fact.unit === "percent") return `${prefix}${value}%`;
  return `${prefix}${value}`;
}

export function formatTmrca(fact: Fact<{ mean: number; low: number; high: number }>, locale: Locale): string {
  const suffix = locale === "da" ? "e.Kr." : "CE";
  return `${formatNumber(fact.value.mean, locale)} ${suffix} (${formatNumber(fact.value.low, locale)}–${formatNumber(fact.value.high, locale)})`;
}
