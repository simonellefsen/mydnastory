export type EvidencePrecision = "exact" | "range" | "lessThan";
export type EvidenceStatus = "verified-private" | "verified-public" | "derived" | "interpretation";

export type SourceKind =
  | "private-export"
  | "vendor-method"
  | "vendor-tree"
  | "reference"
  | "paper";

export type SourceRef = {
  id: string;
  title: string;
  publisher: string;
  url?: string;
  retrievedAt?: string;
  kind: SourceKind;
};

export type Fact<T> = {
  id: string;
  value: T;
  unit?: "percent" | "count" | "bases" | "year";
  precision: EvidencePrecision;
  status: EvidenceStatus;
  sourceIds: string[];
  asOf?: string;
  confidence?: "high" | "medium" | "low";
  methodNote?: string;
};

export type OriginEstimate = {
  id: string;
  label: { en: string; da: string };
  estimate: Fact<number>;
  color: string;
};

export type DatasetQc = {
  id: string;
  label: { en: string; da: string };
  value: Fact<number>;
};

export type LineageNode = {
  id: string;
  label: string;
  era?: { en: string; da: string };
  formed?: string;
  selected?: boolean;
};

export type Lineage = {
  label: { en: string; da: string };
  base: Fact<string>;
  terminal: Fact<string>;
  formed: Fact<string>;
  tmrca: Fact<{ mean: number; low: number; high: number }>;
  testers: Fact<{ total: number; countries: Record<string, number> }>;
  nodes: LineageNode[];
};

export type EvidenceConnection = {
  id: string;
  category: "peer-reviewed" | "vendor-illustrative";
  name: string;
  date: string;
  sharedNode: string;
  sourceIds: string[];
  note: { en: string; da: string };
};
