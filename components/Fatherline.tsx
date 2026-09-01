"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import type { Profile } from "@/lib/types";
import { MotherlineDeep } from "./MotherlineDeep";
import { Reveal } from "./Reveal";

const fallbackPoints = [
  { x: 48, y: 76, label: "Adam" },
  { x: 52, y: 62, label: "F" },
  { x: 58, y: 48, label: "R" },
  { x: 62, y: 34, label: "L21" },
  { x: 56, y: 22, label: "Y" },
];

export function Fatherline({ profile }: { profile: Profile }) {
  const { t } = useI18n();
  const haplogroup = profile.yHaplogroup;
  const haploPath = profile.yHaploPath ?? [];
  const [index, setIndex] = useState(0);
  const mapPoints = profile.yHaploMapPoints ?? fallbackPoints;
  const pathD = useMemo(
    () => mapPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" "),
    [mapPoints],
  );
  if (!haplogroup || !haploPath.length) return null;
  const step = haploPath[index] ?? haploPath[0];
  const max = haploPath.length - 1;

  return (
    <section id="fatherline" className="chapter">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="kicker">{t.fatherline.kicker}</p>
          <h2 className="mt-3 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl">
            {haplogroup.id}
            <span className="block italic text-ice">{haplogroup.headline}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {t.fatherline.intro
              .replace("{name}", profile.firstName)
              .replace("{id}", haplogroup.id)
              .replace("{formed}", haplogroup.formed)
              .replace("{tmrca}", haplogroup.tmrca.meanLabel)
              .replace(
                "{interval}",
                haplogroup.tmrca.ci95.startsWith("see") ? "" : t.fatherline.interval(haplogroup.tmrca.ci95),
              )
              .replace("{testers}", String(haplogroup.testers.total))
              .replace("{known}", haplogroup.testers.known)}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-black/30 p-5 md:p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-muted">{t.fatherline.scrub}</p>
                <p className="font-display text-xl text-ice">{step.haplogroup}</p>
              </div>
              <input
                type="range"
                min={0}
                max={max}
                value={index}
                onChange={(e) => setIndex(Number(e.target.value))}
                className="mt-4 w-full accent-ice"
                aria-label={t.fatherline.timeline}
              />
              <ol className="mt-4 flex flex-wrap gap-2">
                {haploPath.map((h, i) => (
                  <li key={h.haplogroup}>
                    <button
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`rounded-full px-2.5 py-1 text-xs tracking-wide ${
                        i === index ? "bg-ice text-black" : "bg-white/5 text-muted hover:text-ink"
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
                  <dt className="text-faint">{t.fatherline.tmrca}</dt>
                  <dd>{haplogroup.tmrca.meanLabel}</dd>
                </div>
                <div>
                  <dt className="text-faint">{t.fatherline.testers}</dt>
                  <dd>{haplogroup.testers.total}</dd>
                </div>
                <div>
                  <dt className="text-faint">{t.fatherline.knownOrigins}</dt>
                  <dd>{haplogroup.testers.known}</dd>
                </div>
                <div>
                  <dt className="text-faint">{t.fatherline.path}</dt>
                  <dd className="truncate">{haplogroup.pathLabel}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <figure className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/rift-eve.jpg"
                alt={t.fatherline.mapAlt}
                fill
                className="object-cover opacity-80"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
              <svg viewBox="0 0 100 90" className="relative z-10 h-[28rem] w-full">
                <path d={pathD} fill="none" stroke="#8ea4c8" strokeWidth="0.6" opacity="0.85" />
                {mapPoints.map((p, i) => (
                  <g key={p.label}>
                    <circle cx={p.x} cy={p.y} r={i === 0 || i === mapPoints.length - 1 ? 1.6 : 1.1} fill="#f3eee4" />
                    <text x={p.x + 2.4} y={p.y + 0.8} fill="#f3eee4" fontSize="3.1">
                      {p.label}
                    </text>
                  </g>
                ))}
              </svg>
              <figcaption className="absolute bottom-4 left-5 right-5 text-sm text-muted">
                {profile.fatherlineMapCaption}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {(profile.fatherlineSpotlights ?? []).map((card) => (
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
        <MotherlineDeep profile={profile} haplogroupId={haplogroup.id} />
      </div>
    </section>
  );
}
