"use client";

import { useState } from "react";
import type { EvidenceConnection } from "@/lib/evidence/types";
import type { Locale } from "@/lib/i18n/config";
import styles from "./v3.module.css";

type Filter = "all" | EvidenceConnection["category"];

export function ConnectionFilter({ connections, locale }: { connections: EvidenceConnection[]; locale: Locale }) {
  const [filter, setFilter] = useState<Filter>("all");
  const labels: Record<Filter, string> = locale === "da"
    ? { all: "Alle", "peer-reviewed": "Fagfællebedømt", "vendor-illustrative": "Leverandør" }
    : { all: "All", "peer-reviewed": "Peer-reviewed", "vendor-illustrative": "Vendor" };
  const visible = filter === "all" ? connections : connections.filter((connection) => connection.category === filter);

  return (
    <div>
      <div className={styles.filters} aria-label={locale === "da" ? "Filtrer forbindelser" : "Filter connections"}>
        {(Object.keys(labels) as Filter[]).map((value) => (
          <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>
            {labels[value]}
          </button>
        ))}
      </div>
      <div className={styles.connectionGrid} aria-live="polite">
        {visible.map((connection) => (
          <article className={styles.connection} key={connection.id}>
            <p className={styles.code}>{labels[connection.category]}</p>
            <h3>{connection.name}</h3>
            <dl>
              <div><dt>{locale === "da" ? "Datering" : "Date"}</dt><dd>{connection.date}</dd></div>
              <div><dt>{locale === "da" ? "Fælles knude" : "Shared node"}</dt><dd>{connection.sharedNode}</dd></div>
            </dl>
            <p>{connection.note[locale]}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
