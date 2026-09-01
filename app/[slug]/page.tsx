import { notFound } from "next/navigation";
import { StoryView } from "@/components/StoryView";
import { getProfile, publishedProfiles } from "@/lib/profiles";

type Params = { slug: string };

export function generateStaticParams() {
  return publishedProfiles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const profile = getProfile(slug);
  if (!profile) return { title: "Not found" };
  return {
    title: `${profile.firstName} — a DNA story`,
    description: profile.lede,
    openGraph: {
      title: `${profile.firstName} — a DNA story`,
      description: profile.lede,
      images: [profile.heroImage],
    },
  };
}

export default async function ProfilePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const profile = getProfile(slug);
  if (!profile) notFound();
  return <StoryView profile={profile} />;
}
