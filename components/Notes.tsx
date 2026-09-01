import Link from "next/link";
import type { Profile } from "@/lib/types";

export function Notes({ profile }: { profile: Profile }) {
  return (
    <section id="notes" className="chapter pb-24">
      <div className="mx-auto max-w-3xl">
        <p className="kicker">How to read this</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">A story, not a verdict.</h2>
        <div className="mt-8 space-y-5 text-muted leading-relaxed">
          <p>
            Ethnicity percentages and ancient components come from FamilyTreeDNA
            myOrigins version 3. They compare stretches of autosomal DNA with
            reference populations. They will shift as those references grow.
            Smaller slices are the most fragile.
          </p>
          <p>
            Haplogroup {profile.haplogroup.id} is from mtFull Sequence. Notable and
            ancient “connections” mean a shared maternal ancestor at the stated
            node, often many thousands of years ago. This site does not claim close
            kinship with kings, mummies, or archaeological strangers.
          </p>
          <p>
            {profile.firstName} is named only by first name. Living genetic matches
            are not listed. The autosomal CSV and FamilyTreeDNA screenshots remain
            off this repository, in a local <code className="text-ink">ftdna/</code>{" "}
            folder used to build each profile.
          </p>
          <p>
            Landscapes and still lifes were generated for this telling. The DNA
            helix overlay was modelled in Blender. None of the pictures are
            portraits of {profile.firstName}.
          </p>
        </div>
        <div className="hairline mt-12" />
        <p className="mt-6 text-sm text-faint">
          <Link href="/" className="text-amber hover:text-ink">
            myDNAStory
          </Link>
          {" · "}
          {profile.firstName}
          {" · data from FamilyTreeDNA, retold for the screen."}
        </p>
      </div>
    </section>
  );
}
