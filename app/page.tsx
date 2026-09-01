import Image from "next/image";
import Link from "next/link";
import { getCatalog } from "@/lib/profiles";

export default function HomePage() {
  const entries = getCatalog();

  return (
    <main>
      <section className="relative isolate min-h-[70svh] overflow-hidden">
        <Image
          src="/images/archive-threads.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-black/40" />
        <div className="relative z-10 mx-auto flex min-h-[70svh] w-full min-w-0 max-w-6xl flex-col justify-end px-5 pb-16 pt-20 md:justify-center md:px-8">
          <p className="kicker">A growing archive</p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.5rem] leading-[0.95] sm:text-6xl md:text-7xl">
            myDNAStory
            <span className="block italic text-amber/90">
              First names. <br className="sm:hidden" />
              Whole genomes.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Each kit becomes its own cinematic walk — autosomal origins, ancient
            Europe, a maternal haplogroup, and a chromosome skyline. People are
            listed by first name only. Raw files never leave the private folder.
          </p>
        </div>
      </section>

      <section className="chapter">
        <div className="mx-auto max-w-6xl">
          <p className="kicker">Stories</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Open a genome.</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {entries.map((entry) => {
              if (entry.status === "coming") {
                return (
                  <li
                    key={entry.slug}
                    className="flex min-h-72 flex-col justify-between rounded-3xl border border-dashed border-white/15 bg-white/3 p-7"
                  >
                    <div>
                      <p className="kicker">Coming</p>
                      <h3 className="mt-3 font-display text-3xl text-muted">Next kit</h3>
                      <p className="mt-3 leading-relaxed text-muted">{entry.teaser}</p>
                    </div>
                    <p className="text-sm tracking-[0.2em] text-faint uppercase">Waiting for ftdna/</p>
                  </li>
                );
              }

              const lead = entry.origins[0];
              return (
                <li key={entry.slug}>
                  <Link
                    href={`/${entry.slug}`}
                    className="group relative flex min-h-72 overflow-hidden rounded-3xl border border-white/10"
                  >
                    <Image
                      src={entry.heroImage}
                      alt=""
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                    <div className="relative z-10 mt-auto p-7">
                      <p className="kicker">{entry.haplogroup.id}</p>
                      <h3 className="mt-2 font-display text-4xl">{entry.firstName}</h3>
                      <p className="mt-2 text-sm text-muted">{entry.tagline}</p>
                      <p className="mt-4 text-sm text-ink/80">
                        {lead.label} {lead.display ?? `${lead.percent}%`}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
