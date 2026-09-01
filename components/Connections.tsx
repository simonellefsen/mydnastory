"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { connections, type Connection } from "@/lib/story";
import { Reveal } from "./Reveal";

const filters = [
  { id: "all", label: "All" },
  { id: "notable", label: "Historical" },
  { id: "ancient", label: "Ancient DNA" },
  { id: "deep", label: "Deep time" },
] as const;

export function Connections() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [open, setOpen] = useState<Connection | null>(connections[0]);

  const list = useMemo(
    () => connections.filter((c) => (filter === "all" ? true : c.kind === filter)),
    [filter],
  );

  return (
    <section id="kin" className="chapter">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="kicker">Shared maternal ancestors</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
            Kin across centuries —
            <span className="italic text-amber"> and millennia.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            FamilyTreeDNA lists notable and archaeological people who share a
            maternal ancestor with Pernille. These are not cousins in any family
            sense. They are fun facts about a thread that is thousands of years
            long. Living match names are not shown here.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFilter(f.id);
                const next = connections.find((c) => (f.id === "all" ? true : c.kind === f.id));
                if (next) setOpen(next);
              }}
              className={`rounded-full px-4 py-1.5 text-sm ${
                filter === f.id ? "bg-ink text-bg" : "border border-white/10 text-muted hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ul className="grid max-h-[34rem] gap-2 overflow-y-auto pr-1">
            {list.map((c) => {
              const on = open?.id === c.id;
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => setOpen(c)}
                    className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left ${
                      on ? "border-amber/50 bg-white/8" : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <span>
                      <span className="block font-medium">{c.name}</span>
                      <span className="text-sm text-muted">
                        {c.dates} · {c.place}
                      </span>
                    </span>
                    <span className="text-xs tracking-wide text-amber uppercase">{c.shared}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {open ? (
            <article className="overflow-hidden rounded-3xl border border-white/10">
              <div className="relative h-56">
                <Image src={open.image} alt="" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <p className="kicker">
                    {open.rarity === "rare" ? "Rare connection" : "Shared by everyone"}
                  </p>
                  <h3 className="font-display text-3xl">{open.name}</h3>
                </div>
              </div>
              <div className="space-y-3 p-6 md:p-8">
                <p className="text-sm text-muted">
                  {open.dates} · shared ancestor {open.shared} ({open.sharedYear})
                </p>
                <p className="leading-relaxed text-ink/90">{open.blurb}</p>
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
