import { haplogroup } from "@/lib/story";

export function Notes() {
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
            Trace amounts — like the British Isles slice — are the most fragile.
          </p>
          <p>
            Haplogroup {haplogroup.id} is from mtFull Sequence. Notable and
            ancient “connections” mean a shared maternal ancestor at the stated
            node, often many thousands of years ago. They are published by
            FamilyTreeDNA as curiosities. This site does not claim close kinship
            with kings, mummies, or archaeological strangers.
          </p>
          <p>
            Pernille is named only by her first name. Living genetic matches are
            not listed. The autosomal CSV and FamilyTreeDNA screenshots remain
            off this repository.
          </p>
          <p>
            Landscapes and still lifes were generated for this telling. The DNA
            helix overlay was modelled in Blender. Emblem stills were packed with
            TexturePacker. None of the pictures are portraits of Pernille.
          </p>
        </div>
        <div className="hairline mt-12" />
        <p className="mt-6 text-sm text-faint">
          myDNAStory · Pernille · data from FamilyTreeDNA, retold for the screen.
        </p>
      </div>
    </section>
  );
}
