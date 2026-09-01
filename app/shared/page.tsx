import Image from "next/image";
import Link from "next/link";
import { AncientCompare } from "@/components/AncientCompare";
import { ChromosomeShare } from "@/components/ChromosomeShare";
import { MotherlineFork } from "@/components/MotherlineFork";
import { OriginCompare } from "@/components/OriginCompare";
import { Reveal } from "@/components/Reveal";
import sharing from "@/lib/data/sharing.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pernille & Helle — shared ancestry",
  description:
    "Helle is Pernille’s father’s mother. They share autosomal DNA, a nearly identical ancient European recipe, and haplogroup H — not the same recent motherline.",
  openGraph: {
    title: "Pernille & Helle — shared ancestry",
    images: ["/images/kinship-shore.jpg"],
  },
};

export default function SharedPage() {
  const pctIdentical = (sharing.identical * 100).toFixed(1);
  const pctOpposite = (sharing.opposite * 100).toFixed(1);
  const compared = sharing.compared.toLocaleString("en-GB");

  return (
    <main>
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <Image
          src="/images/kinship-shore.jpg"
          alt="Two generations walking a winter Danish shore, seen from behind"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-black/30" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full min-w-0 max-w-6xl flex-col justify-end px-5 pb-16 pt-24 md:justify-center md:px-8">
          <p className="kicker">A family in two kits</p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] leading-[0.95] sm:text-6xl md:text-7xl">
            Helle &amp; Pernille
            <span className="block italic text-amber/90">Father’s mother. Granddaughter.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-lg">
            About a quarter of Pernille’s autosomal DNA is expected to come from
            Helle. The X chromosome almost proves the path: the X Pernille got
            from her father is the X Helle gave to her son.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link
              href="/helle"
              className="rounded-full border border-white/15 px-4 py-2 tracking-[0.16em] uppercase hover:border-white/40"
            >
              Helle
            </Link>
            <Link
              href="/pernille"
              className="rounded-full border border-white/15 px-4 py-2 tracking-[0.16em] uppercase hover:border-white/40"
            >
              Pernille
            </Link>
            <Link href="/" className="rounded-full px-4 py-2 tracking-[0.16em] text-amber uppercase">
              All stories
            </Link>
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">The relationship</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">
              One generation on the paternal side.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-white/10 p-6">
              <p className="kicker">Helle</p>
              <p className="mt-3 font-display text-2xl">Father’s mother</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Her son received half her autosomes and her X. He passed half of
                that — and the same X — to his daughter.
              </p>
            </article>
            <article className="rounded-3xl border border-amber/30 bg-white/5 p-6">
              <p className="kicker">Expected sharing</p>
              <p className="mt-3 font-display text-2xl">~25% autosomal</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Grandmother and granddaughter share one of four grandparental
                chromosome sets, on average. Not a measured FamilyTreeDNA match
                file — a pedigree expectation.
              </p>
            </article>
            <article className="rounded-3xl border border-white/10 p-6">
              <p className="kicker">Pernille</p>
              <p className="mt-3 font-display text-2xl">Granddaughter</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The other three grandparents, including her mother’s whole
                motherline, come from elsewhere. That is why the mitochondria
                diverge.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">Ancestral origins</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">
              The same house.
              <span className="italic text-amber"> Different rooms.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Both kits are 100% European. Both are built from Scandinavia and
              Central Europe. Helle adds Ireland; Pernille is more northern.
            </p>
          </Reveal>
          <div className="mt-10">
            <p className="mb-3 hidden text-xs tracking-[0.2em] text-faint uppercase md:block">
              Each row: Pernille left · Helle right
            </p>
            <OriginCompare />
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">Deep time</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">
              Almost the same ancient recipe.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Hunter, farmer, steppe — the proportions sit within a couple of
              points. The grandmother’s deep Europe is still visible in the
              granddaughter.
            </p>
          </Reveal>
          <div className="mt-10">
            <AncientCompare />
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">Mitochondria</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">
              Two motherlines.
              <span className="italic text-rose"> One ancient H.</span>
            </h2>
          </Reveal>
          <div className="mt-10">
            <MotherlineFork />
          </div>
          <figure className="relative mt-8 h-56 overflow-hidden rounded-3xl md:h-72">
            <Image
              src="/images/kinship-threads.jpg"
              alt="Two silk threads twisting together then forking apart"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </figure>
        </div>
      </section>

      <section className="chapter">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">The autosomes</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">
              {compared} markers, compared.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Where both kits called a SNP, {pctIdentical}% have the same
              genotype and only {pctOpposite}% are opposite homozygotes. Opposite
              sites cannot sit inside a shared segment. Chromosome X is the tell:
              two opposite sites in {sharing.chromosomes.find((c) => c.id === "X")?.compared.toLocaleString("en-GB")}{" "}
              — the paternal X.
            </p>
          </Reveal>
          <div className="mt-10">
            <ChromosomeShare />
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-faint">
            This is identity-by-state on an unphased microarray, not a published
            IBD match list. It is a window onto sharing, not a court exhibit.
            Raw genotypes stay in the private folder.
          </p>
        </div>
      </section>

      <section className="chapter pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="kicker">Read together</p>
          <h2 className="mt-3 font-display text-4xl">Open each genome.</h2>
          <p className="mt-5 leading-relaxed text-muted">
            Helle’s Irish third and Pernille’s stronger Scandinavia are both
            true. The shared story is the overlap: Europe, the forager-farmer
            mix, haplogroup H, and a father’s X.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/helle"
              className="rounded-full bg-ink px-5 py-2 text-sm tracking-[0.16em] text-bg uppercase"
            >
              Helle’s story
            </Link>
            <Link
              href="/pernille"
              className="rounded-full border border-white/15 px-5 py-2 text-sm tracking-[0.16em] uppercase"
            >
              Pernille’s story
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
