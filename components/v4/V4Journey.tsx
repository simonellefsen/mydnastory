import type { CSSProperties, ReactNode } from "react";
import { VersionNav } from "@/components/versioned/VersionNav";
import { getEvidenceCopy } from "@/lib/evidence/copy";
import { formatNumericFact, localeText } from "@/lib/evidence/format";
import { ancientOrigins, evidenceSources, maternalLine, modernOrigins, paternalLine } from "@/lib/evidence/simon";
import type { Locale } from "@/lib/i18n/config";
import common from "@/components/versioned/versioned.module.css";
import styles from "./v4.module.css";

function Scene({ number, title, body, visual, id }: { number: string; title: string; body: string; visual: ReactNode; id: string }) {
  return (
    <section className={styles.scene} id={id} aria-labelledby={`${id}-title`}>
      <div className={styles.sceneCopy}>
        <p className={styles.sceneNumber}>{number}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        <p>{body}</p>
      </div>
      <div className={styles.visual}>{visual}</div>
    </section>
  );
}

export function V4Journey({ locale, slug }: { locale: Locale; slug: string }) {
  const { common: labels, v4 } = getEvidenceCopy(locale);
  const sources = Object.values(evidenceSources);

  return (
    <div className={styles.page}>
      <a className={common.skip} href="#journey">{labels.skip}</a>
      <VersionNav locale={locale} slug={slug} current="v4" />

      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{v4.eyebrow}</p>
          <h1>{v4.title}</h1>
          <p className={styles.heroLede}>{v4.lede}</p>
          <a className={styles.begin} href="#tests">{v4.begin} ↓</a>
        </div>
      </header>

      <main id="journey">
        <Scene
          id="tests"
          number={v4.scene1}
          title={v4.scene1Title}
          body={v4.scene1Body}
          visual={
            <div className={styles.orbits}>
              <div className={styles.orbit} style={{ "--inset": "2%", "--color": "var(--ice)", "--rotate": "8deg" } as CSSProperties}><span>Family Finder</span></div>
              <div className={styles.orbit} style={{ "--inset": "18%", "--color": "var(--violet)", "--rotate": "-34deg" } as CSSProperties}><span>mtFull</span></div>
              <div className={styles.orbit} style={{ "--inset": "32%", "--color": "var(--aurora)", "--rotate": "62deg" } as CSSProperties}><span>Big Y</span></div>
              <div className={styles.orbitCore}>S</div>
            </div>
          }
        />

        <Scene
          id="population"
          number={v4.scene2}
          title={v4.scene2Title}
          body={v4.scene2Body}
          visual={
            <div className={styles.northDial}>
              <div><strong>{formatNumericFact(modernOrigins[0].estimate, locale)}</strong><span>{localeText(modernOrigins[0].label, locale)}</span></div>
              <div className={styles.traces}>
                {modernOrigins.slice(1).map((origin) => <span key={origin.id}>{formatNumericFact(origin.estimate, locale)} {localeText(origin.label, locale)}</span>)}
              </div>
            </div>
          }
        />

        <Scene
          id="ancient-streams"
          number={v4.scene3}
          title={v4.scene3Title}
          body={v4.scene3Body}
          visual={
            <div className={styles.streams}>
              {ancientOrigins.map((origin) => (
                <div className={styles.stream} key={origin.id} style={{ "--color": origin.color } as CSSProperties}>
                  <span className={styles.streamLabel}>{localeText(origin.label, locale)}</span>
                  <span className={styles.streamTrack}><span className={styles.streamFill} style={{ "--width": `${origin.estimate.value}%` } as CSSProperties} /></span>
                  <span className={styles.streamValue}>{formatNumericFact(origin.estimate, locale)}</span>
                </div>
              ))}
            </div>
          }
        />

        <Scene
          id="maternal-thread"
          number={v4.scene4}
          title={v4.scene4Title}
          body={v4.scene4Body}
          visual={
            <div className={styles.thread}>
              {maternalLine.nodes.filter((node) => node.selected).map((node) => <span className={styles.threadNode} key={node.id}>{node.label}</span>)}
            </div>
          }
        />

        <Scene
          id="paternal-tree"
          number={v4.scene5}
          title={v4.scene5Title}
          body={v4.scene5Body}
          visual={
            <div className={styles.tree}>
              <div className={styles.variantRing}><div><strong>32</strong><span>{locale === "da" ? "afledte grenvarianter" : "derived branch variants"}</span></div></div>
              <div className={styles.trunk} />
              <div className={styles.treeLevels}>
                <div className={styles.treeLevel}><span>R-P312</span><span>R-L21</span><span>R-DF13</span></div>
                <div className={styles.treeLevel}><span>R-FTT9</span><span>R-BY197676</span></div>
                <div className={styles.treeLevel}><span>R-S7293</span><span>{paternalLine.terminal.value}</span></div>
              </div>
            </div>
          }
        />

        <Scene
          id="boundary"
          number={v4.scene6}
          title={v4.scene6Title}
          body={v4.scene6Body}
          visual={
            <div className={styles.boundary}>
              <div><strong>&lt;1%</strong><span>{locale === "da" ? "Et spor, ikke en præcis skive" : "A trace, not an exact slice"}</span></div>
              <div><strong>505–1127</strong><span>{locale === "da" ? "Et interval, ikke et bestemt år" : "A range, not a single year"}</span></div>
              <div><strong>3 / 15</strong><span>{locale === "da" ? "Nutidige testere, ikke et gammelt landkort" : "Current testers, not an ancient map"}</span></div>
              <div><strong>{locale === "da" ? "Privat" : "Private"}</strong><span>{locale === "da" ? "Rå DNA-filer forlader ikke den lokale maskine" : "Raw DNA files never leave the local machine"}</span></div>
            </div>
          }
        />

        <section className={styles.closing}><p>{v4.closing}</p></section>
      </main>

      <details className={styles.evidenceTray}>
        <summary>{v4.evidenceTray}</summary>
        <div className={styles.trayBody}>
          <ul>
            {sources.map((source) => (
              <li key={source.id}>
                {source.url ? <a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a> : <span>{labels.privateAggregate}</span>}
              </li>
            ))}
          </ul>
        </div>
      </details>

      <footer className={styles.footer}>myDNAStory · Simon · v4 · {labels.asOf} 2026-09-02</footer>
    </div>
  );
}
