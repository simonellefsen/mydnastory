import { ConnectionFilter } from "@/components/v3/ConnectionFilter";
import { VersionNav } from "@/components/versioned/VersionNav";
import { getEvidenceCopy } from "@/lib/evidence/copy";
import { formatNumber, formatNumericFact, formatTmrca, localeText } from "@/lib/evidence/format";
import {
  ancientOrigins,
  autosomalQc,
  bigYQc,
  connections,
  evidenceFactCount,
  evidenceSources,
  maternalLine,
  mitochondrialQc,
  modernOrigins,
  paternalLine,
} from "@/lib/evidence/simon";
import type { DatasetQc, Lineage, OriginEstimate } from "@/lib/evidence/types";
import type { Locale } from "@/lib/i18n/config";
import common from "@/components/versioned/versioned.module.css";
import styles from "./v3.module.css";

function OriginTable({ items, locale }: { items: OriginEstimate[]; locale: Locale }) {
  const { v3 } = getEvidenceCopy(locale);
  return (
    <div
      className={styles.tableWrap}
      tabIndex={0}
      aria-label={locale === "da" ? "Vandret rulbar datatabel" : "Horizontally scrollable data table"}
    >
      <table className={styles.table}>
        <thead><tr><th>{v3.measure}</th><th>{v3.result}</th><th>{v3.precision}</th><th>{v3.evidenceState}</th></tr></thead>
        <tbody>
          {items.map((origin) => (
            <tr key={origin.id}>
              <td>{localeText(origin.label, locale)}</td>
              <td className={styles.value}>{formatNumericFact(origin.estimate, locale)}</td>
              <td>{origin.estimate.precision}</td>
              <td>{origin.estimate.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function QcRows({ label, items, locale }: { label: string; items: DatasetQc[]; locale: Locale }) {
  return items.map((item, index) => (
    <tr key={item.id}>
      {index === 0 ? <td rowSpan={items.length}>{label}</td> : null}
      <td>{localeText(item.label, locale)}</td>
      <td className={styles.value}>{formatNumericFact(item.value, locale)}</td>
      <td>{item.value.status}</td>
    </tr>
  ));
}

function LineagePanel({ lineage, locale, code }: { lineage: Lineage; locale: Locale; code: string }) {
  const { v3 } = getEvidenceCopy(locale);
  const countries = Object.entries(lineage.testers.value.countries)
    .map(([country, count]) => `${country} ${count}`)
    .join(" · ");

  return (
    <article className={styles.lineage}>
      <header className={styles.lineageHead}>
        <p className={styles.code}>{code} · {localeText(lineage.label, locale)}</p>
        <h3>{lineage.terminal.value}</h3>
        <p className={styles.muted}>{lineage.base.value} → {lineage.terminal.value}</p>
      </header>
      <dl className={styles.lineageStats}>
        <div><dt>{v3.formation}</dt><dd>{lineage.formed.value}</dd></div>
        <div><dt>{v3.tmrca}</dt><dd>{formatTmrca(lineage.tmrca, locale)}</dd></div>
        <div><dt>{v3.testers}</dt><dd>{lineage.testers.value.total}</dd></div>
        <div><dt>{locale === "da" ? "Oplyste lande" : "Reported countries"}</dt><dd>{countries}</dd></div>
      </dl>
      <p className={styles.code} style={{ padding: "1.5rem 1.5rem 0" }}>{v3.completePath}</p>
      <ol className={styles.path} aria-label={`${localeText(lineage.label, locale)} ${v3.completePath}`}>
        {lineage.nodes.map((node) => <li data-selected={node.selected} key={node.id}>{node.label}</li>)}
      </ol>
    </article>
  );
}

export function V3Dossier({ locale, slug }: { locale: Locale; slug: string }) {
  const { common: labels, v3 } = getEvidenceCopy(locale);
  const sources = Object.values(evidenceSources);

  return (
    <div className={styles.page}>
      <a className={common.skip} href="#dossier">{labels.skip}</a>
      <VersionNav locale={locale} slug={slug} current="v3" />

      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>{v3.eyebrow}</p>
          <h1>{v3.title}</h1>
          <p className={styles.lede}>{v3.lede}</p>
        </div>
        <div className={styles.heroIndex} aria-label={`${evidenceFactCount} ${locale === "da" ? "strukturerede evidenspunkter" : "structured evidence points"}`}>
          <div><strong>{evidenceFactCount}</strong><span>{locale === "da" ? "strukturerede evidenspunkter" : "structured evidence points"}</span></div>
        </div>
      </header>

      <main id="dossier">
        <section className={styles.section} aria-labelledby="dossier-overview">
          <div className={styles.sectionHead}><p className={styles.sectionId}>01 / 07</p><h2 id="dossier-overview">{v3.overview}</h2></div>
          <div className={styles.panelGrid}>
            <article className={styles.panel}><p className={styles.code}>AUTO / MODERN</p><h3>{v3.modern}</h3><OriginTable items={modernOrigins} locale={locale} /></article>
            <article className={styles.panel}><p className={styles.code}>AUTO / ANCIENT</p><h3>{v3.ancient}</h3><OriginTable items={ancientOrigins} locale={locale} /></article>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="dossier-qc">
          <div className={styles.sectionHead}><p className={styles.sectionId}>02 / 07</p><h2 id="dossier-qc">{v3.qc}</h2></div>
          <div
            className={styles.tableWrap}
            tabIndex={0}
            aria-label={locale === "da" ? "Vandret rulbar kvalitetskontroltabel" : "Horizontally scrollable quality-control table"}
          >
            <table className={styles.table}>
              <thead><tr><th>{v3.test}</th><th>{v3.measure}</th><th>{v3.result}</th><th>{v3.evidenceState}</th></tr></thead>
              <tbody>
                <QcRows label="Family Finder" items={autosomalQc} locale={locale} />
                <QcRows label="mtFull Sequence" items={mitochondrialQc} locale={locale} />
                <QcRows label="Big Y" items={bigYQc} locale={locale} />
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="dossier-lineages">
          <div className={styles.sectionHead}><p className={styles.sectionId}>03–04 / 07</p><h2 id="dossier-lineages">{v3.maternal} / {v3.paternal}</h2></div>
          <div className={styles.lineageGrid}>
            <LineagePanel lineage={maternalLine} locale={locale} code="MT" />
            <LineagePanel lineage={paternalLine} locale={locale} code="Y" />
          </div>
        </section>

        <section className={styles.section} aria-labelledby="dossier-variants">
          <div className={styles.sectionHead}><p className={styles.sectionId}>05 / 07</p><h2 id="dossier-variants">{locale === "da" ? "Grenbevis" : "Branch evidence"}</h2></div>
          <div className={styles.panelGrid}>
            <article className={styles.panel}>
              <p className={styles.code}>MT / rCRS</p><h3>U5b1b1a+7385+16519</h3>
              <p className={styles.muted}>T16144C · A7385G · T16519C</p>
              <p>{locale === "da" ? "Alle tre godkendte markører findes i den private FASTA sammenlignet med rCRS." : "All three approved markers are present in the private FASTA against rCRS."}</p>
            </article>
            <article className={styles.panel}>
              <p className={styles.code}>Y / GRCh38</p><h3>R-BY67151</h3>
              <p className={`${styles.value} ${styles.variantSummary}`}>32 / 32 derived · 30 PASS · 2 flagged</p>
              <p>{locale === "da" ? "Kvalitetsflagene skjules ikke: afledt tilstand og filterstatus er to forskellige observationer." : "The quality flags are not hidden: derived state and filter status are separate observations."}</p>
            </article>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="dossier-connections">
          <div className={styles.sectionHead}><p className={styles.sectionId}>06 / 07</p><h2 id="dossier-connections">{v3.connections}</h2></div>
          <ConnectionFilter connections={connections} locale={locale} />
        </section>

        <section className={styles.section} aria-labelledby="dossier-sources">
          <div className={styles.sectionHead}><p className={styles.sectionId}>07 / 07</p><h2 id="dossier-sources">{v3.sourceRegister}</h2></div>
          <div className={styles.sourceGrid}>
            {sources.map((source) => (
              <article className={styles.source} key={source.id}>
                <span className={styles.sourceKind}>{source.kind}</span>
                <h3>{source.title}</h3>
                <p>{source.publisher}{source.retrievedAt ? ` · ${labels.asOf} ${source.retrievedAt}` : ""}</p>
                {source.url ? <a href={source.url} target="_blank" rel="noreferrer">{labels.source} ↗</a> : <p>{labels.privateAggregate}</p>}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>MYDNASTORY / SIMON / V3</span>
        <span>{formatNumber(evidenceFactCount, locale)} FACTS · {sources.length} SOURCES · {labels.asOf.toUpperCase()} 2026-09-02</span>
      </footer>
    </div>
  );
}
