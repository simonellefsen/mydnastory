import Image from "next/image";
import { genome, haplogroup, origins, person } from "@/lib/story";

export function Hero() {
  return (
    <section id="open" className="relative isolate min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero-coast.jpg"
        alt="A winter Danish coastline under a faint aurora"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-black/30" />
      <Image
        src="/images/helix.png"
        alt=""
        width={920}
        height={520}
        className="pointer-events-none absolute -right-10 top-1/2 hidden w-[58vw] max-w-3xl -translate-y-1/2 opacity-70 mix-blend-screen md:block"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full min-w-0 max-w-6xl flex-col justify-end px-5 pb-16 pt-24 md:justify-center md:px-8 md:pt-28 md:pb-24 md:pr-28">
        <p className="kicker max-w-full text-[0.62rem] tracking-[0.18em] md:text-[0.72rem] md:tracking-[0.28em]">
          {person.tested}
        </p>
        <h1 className="mt-4 max-w-3xl text-[2.7rem] leading-[0.95] text-ink sm:text-7xl md:text-8xl">
          {person.firstName}
          <span className="block italic text-amber/90">’s DNA story</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:text-xl">
          A genome from the North Sea. Ice in the blood, wheat in the bones, and a
          rare maternal line that still points home to Denmark.
        </p>

        <dl className="mt-8 grid w-full min-w-0 max-w-2xl grid-cols-3 gap-2 border-t border-white/10 pt-5 sm:gap-4 sm:pt-6">
          <div className="min-w-0">
            <dt className="text-[10px] tracking-[0.14em] text-faint uppercase sm:text-[11px] sm:tracking-[0.2em]">
              Scandinavia
            </dt>
            <dd className="mt-1 font-display text-2xl text-aurora sm:text-3xl md:text-4xl">{origins[0].percent}%</dd>
          </div>
          <div className="min-w-0">
            <dt className="text-[10px] tracking-[0.14em] text-faint uppercase sm:text-[11px] sm:tracking-[0.2em]">
              Motherline
            </dt>
            <dd className="mt-1 font-display text-2xl text-amber sm:text-3xl md:text-4xl">{haplogroup.id}</dd>
          </div>
          <div className="min-w-0">
            <dt className="text-[10px] tracking-[0.14em] text-faint uppercase sm:text-[11px] sm:tracking-[0.2em]">
              Markers
            </dt>
            <dd className="mt-1 font-display text-2xl text-ink sm:text-3xl md:text-4xl">
              <span className="md:hidden">{Math.round(genome.snps / 1000)}k</span>
              <span className="hidden md:inline">{genome.snps.toLocaleString("en-GB")}</span>
            </dd>
          </div>
        </dl>

        <a
          href="#origins"
          className="mt-12 inline-flex w-fit items-center gap-3 text-sm tracking-[0.22em] text-ink/80 uppercase"
        >
          Begin
          <span className="block h-8 w-px bg-amber/80" />
        </a>
      </div>
    </section>
  );
}
