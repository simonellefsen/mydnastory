import Image from "next/image";
import type { CSSProperties } from "react";
import { EvidenceDetails } from "@/components/versioned/EvidenceDetails";
import { VersionNav } from "@/components/versioned/VersionNav";
import { getEvidenceCopy } from "@/lib/evidence/copy";
import { formatNumericFact, formatTmrca, localeText } from "@/lib/evidence/format";
import { ancientOrigins, maternalLine, modernOrigins, paternalLine } from "@/lib/evidence/simon";
import type { Locale } from "@/lib/i18n/config";
import common from "@/components/versioned/versioned.module.css";
import styles from "./v2.module.css";

export function V2Story({ locale, slug }: { locale: Locale; slug: string }) {
  const { common: labels, v2 } = getEvidenceCopy(locale);
  const scandinavia = modernOrigins[0];
  const traces = modernOrigins.slice(1);

  return (
    <div className={styles.page}>
      <a className={common.skip} href="#story">{labels.skip}</a>
      <VersionNav locale={locale} slug={slug} current="v2" />

      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{v2.eyebrow}</p>
          <h1>{v2.title}</h1>
          <p className={styles.lede}>{v2.lede}</p>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/hero-fjord.jpg"
            alt={locale === "da" ? "Vinterfjord under nordlys" : "Winter fjord under an aurora"}
            fill
            priority
            sizes="(max-width: 820px) calc(100vw - 2rem), 45vw"
          />
          <div className={styles.seal}>{v2.callout}</div>
        </div>
      </header>

      <main id="story">
        <section className={styles.section} aria-labelledby="v2-snapshot">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>{v2.snapshot}</p>
            <h2 id="v2-snapshot">{v2.snapshotTitle}</h2>
          </div>
          <div className={styles.snapshotGrid}>
            <article className={styles.card}>
              <strong className={styles.cardNumber}>{formatNumericFact(scandinavia.estimate, locale)}</strong>
              <span className={styles.cardLabel}>{localeText(scandinavia.label, locale)}</span>
              <EvidenceDetails fact={scandinavia.estimate} locale={locale} />
            </article>
            <article className={styles.card}>
              <strong className={styles.cardNumber}>{maternalLine.base.value}</strong>
              <span className={styles.cardLabel}>{localeText(maternalLine.label, locale)}</span>
              <EvidenceDetails fact={maternalLine.terminal} locale={locale} />
            </article>
            <article className={styles.card}>
              <strong className={styles.cardNumber}>{paternalLine.terminal.value}</strong>
              <span className={styles.cardLabel}>{localeText(paternalLine.label, locale)}</span>
              <EvidenceDetails fact={paternalLine.terminal} locale={locale} />
            </article>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="v2-origins">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>{v2.origins}</p>
            <div>
              <h2 id="v2-origins">{v2.originsTitle}</h2>
              <p className={styles.sectionIntro}>{v2.originsBody}</p>
            </div>
          </div>
          <div className={styles.originGrid}>
            <article className={`${styles.card} ${styles.originMajor}`}>
              <strong className={styles.cardNumber}>{formatNumericFact(scandinavia.estimate, locale)}</strong>
              <span className={styles.cardLabel}>{localeText(scandinavia.label, locale)}</span>
              <EvidenceDetails fact={scandinavia.estimate} locale={locale} />
            </article>
            <div className={styles.traceStack}>
              {traces.map((origin) => (
                <article className={`${styles.card} ${styles.trace}`} key={origin.id}>
                  <div>
                    <strong className={styles.cardNumber}>{formatNumericFact(origin.estimate, locale)}</strong>
                    <span className={styles.cardLabel}>{localeText(origin.label, locale)}</span>
                  </div>
                  <EvidenceDetails fact={origin.estimate} locale={locale} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="v2-lines">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>{v2.lines}</p>
            <h2 id="v2-lines">{v2.linesTitle}</h2>
          </div>
          <div className={styles.lineGrid}>
            <article className={`${styles.card} ${styles.lineCard}`}>
              <p className={styles.lineKicker}>{localeText(maternalLine.label, locale)}</p>
              <h3 className={styles.lineId}>{maternalLine.terminal.value}</h3>
              <p className={styles.lineBody}>{v2.maternalBody}</p>
              <div className={styles.lineMeta}>
                <div><strong>{formatTmrca(maternalLine.tmrca, locale)}</strong><span>TMRCA</span></div>
                <div><strong>{maternalLine.testers.value.total}</strong><span>{locale === "da" ? "testere" : "testers"}</span></div>
              </div>
              <EvidenceDetails fact={maternalLine.tmrca} locale={locale} />
            </article>
            <article className={`${styles.card} ${styles.lineCard}`}>
              <p className={styles.lineKicker}>{localeText(paternalLine.label, locale)}</p>
              <h3 className={styles.lineId}>{paternalLine.terminal.value}</h3>
              <p className={styles.lineBody}>{v2.paternalBody}</p>
              <div className={styles.lineMeta}>
                <div><strong>{formatTmrca(paternalLine.tmrca, locale)}</strong><span>TMRCA</span></div>
                <div><strong>{paternalLine.testers.value.total}</strong><span>{locale === "da" ? "testere" : "testers"}</span></div>
              </div>
              <EvidenceDetails fact={paternalLine.tmrca} locale={locale} />
            </article>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="v2-ancient">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>{v2.ancient}</p>
            <div>
              <h2 id="v2-ancient">{v2.ancientTitle}</h2>
              <p className={styles.sectionIntro}>{v2.ancientBody}</p>
            </div>
          </div>
          <div className={styles.ancientGrid}>
            {ancientOrigins.map((origin) => (
              <article className={styles.card} key={origin.id} style={{ "--accent": origin.color } as CSSProperties}>
                <strong className={styles.cardNumber}>{formatNumericFact(origin.estimate, locale)}</strong>
                <span className={styles.cardLabel}>{localeText(origin.label, locale)}</span>
                <div className={styles.ancientBar} aria-hidden="true">
                  <span className={styles.ancientFill} style={{ width: `${origin.estimate.value}%` }} />
                </div>
                <EvidenceDetails fact={origin.estimate} locale={locale} />
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="v2-method">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>{v2.method}</p>
            <h2 id="v2-method">{v2.methodTitle}</h2>
          </div>
          <div className={styles.method}>
            <blockquote className={styles.quote}>{v2.calloutBody}</blockquote>
            <p className={styles.methodBody}>{v2.methodBody}</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>myDNAStory · Simon · {labels.asOf} 2026-09-02</footer>
    </div>
  );
}
