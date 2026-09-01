import Link from "next/link";
import type { Profile } from "@/lib/types";

export function KinshipBanner({ profile }: { profile: Profile }) {
  if (!profile.kinship) return null;
  const k = profile.kinship;
  const sentence =
    k.role === "paternal grandmother"
      ? `${k.otherName} is ${profile.firstName}’s father’s mother.`
      : `${profile.firstName} is ${k.otherName}’s father’s mother.`;

  return (
    <div className="border-y border-white/10 bg-white/4">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8 md:pr-28">
        <p className="text-sm text-muted">
          <span className="text-ink">{sentence}</span> They share autosomal DNA and a
          deep haplogroup H — not the same recent motherline.
        </p>
        <Link
          href={k.href}
          className="shrink-0 text-sm tracking-[0.18em] text-amber uppercase hover:text-ink"
        >
          What they share
        </Link>
      </div>
    </div>
  );
}
