import { getEvidenceCopy } from "@/lib/evidence/copy";
import { getSources } from "@/lib/evidence/simon";
import type { Fact } from "@/lib/evidence/types";
import type { Locale } from "@/lib/i18n/config";
import styles from "./versioned.module.css";

export function EvidenceDetails<T>({ fact, locale }: { fact: Fact<T>; locale: Locale }) {
  const { common } = getEvidenceCopy(locale);
  const sources = getSources(fact.sourceIds);

  return (
    <details className={styles.evidence}>
      <summary>{common.evidence}</summary>
      <div className={styles.evidenceBody}>
        <p>
          {fact.status}
          {fact.asOf ? ` · ${common.asOf} ${fact.asOf}` : ""}
          {fact.confidence ? ` · ${fact.confidence}` : ""}
        </p>
        {fact.methodNote ? <p>{fact.methodNote}</p> : null}
        <ul>
          {sources.map((source) => (
            <li key={source.id}>
              {source.url ? (
                <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
              ) : (
                <span>{common.privateAggregate}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
