import { notFound, permanentRedirect } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { versionHref } from "@/lib/versions";

export default async function V3IndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  permanentRedirect(versionHref(locale, "v3", "simon"));
}
