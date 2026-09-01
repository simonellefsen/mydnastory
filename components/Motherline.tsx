"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { haploPath, haplogroup } from "@/lib/story";
import { Reveal } from "./Reveal";

const points = [
  { x: 52, y: 72, label: "Eve" },
  { x: 54, y: 58, label: "L3" },
  { x: 57, y: 48, label: "N" },
  { x: 60, y: 42, label: "R0" },
  { x: 58, y: 34, label: "H" },
  { x: 53, y: 22, label: "H10a1u" },
];

export function Motherline() {
  const [index, setIndex] = useState(0);
  const step = haploPath[index];
  const max = haploPath.length - 1;
  const pathD = useMemo(
    () =>
      points
        .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
        .join(" "),
    [],
  );

  return (
    <section id="motherline" className="chapter">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="kicker">Mitochondrial haplogroup</p>
          <h2 className="mt-3 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl">
            {haplogroup.id}
            <span className="block italic text-rose">A Danish motherline from the Middle Ages.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Mitochondria pass from mother to child, almost unchanged. Pernille’s
            full sequence is {haplogroup.id}, which {haplogroup.formed}. The most
            recent woman of this exact branch likely lived around{" "}
            {haplogroup.tmrca.meanLabel} (95% interval {haplogroup.tmrca.ci95}).
            Only {haplogroup.testers.total} testers currently sit on the twig —
            {haplogroup.testers.denmark} of them naming Denmark.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-black/30 p-5 md:p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-muted">Scrub the motherline</p>
                <p className="font-display text-xl text-amber">{step.haplogroup}</p>
              </div>
              <input
                type="range"
                min={0}
                max={max}
                value={index}
                onChange={(e) => setIndex(Number(e.target.value))}
                className="mt-4 w-full accent-amber"
                aria-label="Haplogroup timeline"
              />
              <ol className="mt-4 flex flex-wrap gap-2">
                {haploPath.map((h, i) => (
                  <li key={h.haplogroup}>
                    <button
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`rounded-full px-2.5 py-1 text-xs tracking-wide ${
                        i === index ? "bg-amber text-black" : "bg-white/5 text-muted hover:text-ink"
                      }`}
                    >
                      {h.haplogroup}
                    </button>
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <p className="kicker">
                  {step.yearLabel} · {step.era} · {step.place}
                </p>
                <p className="mt-3 text-lg leading-relaxed text-ink/90">{step.copy}</p>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 text-sm md:grid-cols-4">
                <div>
                  <dt className="text-faint">TMRCA mean</dt>
                  <dd>{haplogroup.tmrca.meanLabel}</dd>
                </div>
                <div>
                  <dt className="text-faint">95% interval</dt>
                  <dd>{haplogroup.tmrca.ci95}</dd>
                </div>
                <div>
                  <dt className="text-faint">Known origins</dt>
                  <dd>Denmark</dd>
                </div>
                <div>
                  <dt className="text-faint">Path</dt>
                  <dd className="truncate">{haplogroup.pathLabel}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <figure className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/rift-eve.jpg"
                alt="East African rift at dawn, standing in for mitochondrial Eve’s landscape"
                fill
                className="object-cover opacity-80"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
              <svg viewBox="0 0 100 90" className="relative z-10 h-[28rem] w-full">
                <path d={pathD} fill="none" stroke="#d4a054" strokeWidth="0.6" opacity="0.85" />
                {points.map((p, i) => (
                  <g key={p.label}>
                    <circle cx={p.x} cy={p.y} r={i === 0 || i === points.length - 1 ? 1.6 : 1.1} fill="#f3eee4" />
                    <text x={p.x + 2.4} y={p.y + 0.8} fill="#f3eee4" fontSize="3.1">
                      {p.label}
                    </text>
                  </g>
                ))}
              </svg>
              <figcaption className="absolute bottom-4 left-5 right-5 text-sm text-muted">
                A schematic walk: East Africa → Near East → haplogroup H → Denmark.
                Not a GPS track — a mitochondrial route of daughters.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              img: "/images/emblem-maternal.jpg",
              title: "A rare twig",
              copy: haplogroup.rarityNote,
            },
            {
              img: "/images/caucasus.jpg",
              title: "H before the ice",
              copy: "Haplogroup H formed outside Europe, in the northern Near East and southern Caucasus, then spread west. Today it is about 40% of European maternal lines.",
            },
            {
              img: "/images/viking-langeland.jpg",
              title: "Home water",
              copy: "The living geography of H10a1u is Danish. Ancient H10a1 kin turn up from Langeland to the Carpathian Basin — a Bronze Age family that later found the islands.",
            },
          ].map((card) => (
            <article key={card.title} className="overflow-hidden rounded-2xl border border-white/10">
              <div className="relative h-40">
                <Image src={card.img} alt="" fill className="object-cover" sizes="33vw" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
