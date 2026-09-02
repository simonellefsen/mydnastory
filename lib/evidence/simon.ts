import type {
  DatasetQc,
  EvidenceConnection,
  Fact,
  Lineage,
  OriginEstimate,
  SourceRef,
} from "./types";

const privateResult = "ftdna-private-results";
const myOriginsMethod = "ftdna-myorigins-method";
const mtTree = "ftdna-mt-tree";
const yTree = "ftdna-y-tree";
const rcrs = "ncbi-rcrs";
const allentoft = "allentoft-2024";
const olalde = "olalde-2018";
const notableHelp = "ftdna-notable-help";

export const evidenceSources: Record<string, SourceRef> = {
  [privateResult]: {
    id: privateResult,
    title: "Private FamilyTreeDNA exports, aggregate verification only",
    publisher: "FamilyTreeDNA",
    kind: "private-export",
  },
  [myOriginsMethod]: {
    id: myOriginsMethod,
    title: "myOrigins Version 3 White Paper",
    publisher: "FamilyTreeDNA",
    url: "https://blog.familytreedna.com/wp-content/uploads/2021/08/myOrigins_3_WhitePaper.pdf",
    retrievedAt: "2026-09-02",
    kind: "vendor-method",
  },
  [mtTree]: {
    id: mtTree,
    title: "U5b1b1a+7385+16519 scientific tree",
    publisher: "FamilyTreeDNA Discover",
    url: "https://discover.familytreedna.com/mtdna/U5b1b1a%2B7385%2B16519/scientific?section=tmrca",
    retrievedAt: "2026-09-02",
    kind: "vendor-tree",
  },
  [yTree]: {
    id: yTree,
    title: "R-BY67151 scientific tree",
    publisher: "FamilyTreeDNA Discover",
    url: "https://discover.familytreedna.com/y-dna/R-BY67151/scientific?section=tmrca",
    retrievedAt: "2026-09-02",
    kind: "vendor-tree",
  },
  [rcrs]: {
    id: rcrs,
    title: "Revised Cambridge Reference Sequence, NC_012920.1",
    publisher: "NCBI",
    url: "https://www.ncbi.nlm.nih.gov/nuccore/NC_012920.1",
    kind: "reference",
  },
  [allentoft]: {
    id: allentoft,
    title: "100 ancient genomes show repeated population turnovers in Neolithic Denmark",
    publisher: "Nature",
    url: "https://www.nature.com/articles/s41586-023-06862-3",
    retrievedAt: "2026-09-02",
    kind: "paper",
  },
  [olalde]: {
    id: olalde,
    title: "The Beaker phenomenon and the genomic transformation of northwest Europe",
    publisher: "Nature",
    url: "https://www.nature.com/articles/nature25738",
    retrievedAt: "2026-09-02",
    kind: "paper",
  },
  [notableHelp]: {
    id: notableHelp,
    title: "Using the mtDNA Discover Notable Connections Report",
    publisher: "FamilyTreeDNA Help Center",
    url: "https://help.familytreedna.com/hc/en-us/articles/12740719271567-Using-the-mtDNA-Discover-Notable-Connections-Report",
    retrievedAt: "2026-09-02",
    kind: "vendor-method",
  },
};

function percentFact(
  id: string,
  value: number,
  precision: "exact" | "lessThan" = "exact",
  sourceIds: string[] = [privateResult, myOriginsMethod],
): Fact<number> {
  return {
    id,
    value,
    unit: "percent",
    precision,
    status: "verified-private",
    sourceIds,
    asOf: "2026-09-02",
    confidence: precision === "lessThan" ? "low" : "medium",
  };
}

export const modernOrigins: OriginEstimate[] = [
  {
    id: "scandinavia",
    label: { en: "Scandinavia", da: "Skandinavien" },
    estimate: percentFact("origin.scandinavia", 99),
    color: "#842f3e",
  },
  {
    id: "baltic",
    label: { en: "Baltic trace", da: "Baltisk spor" },
    estimate: percentFact("origin.baltic", 1, "lessThan"),
    color: "#557a83",
  },
  {
    id: "sephardic",
    label: { en: "Sephardic Jewish trace", da: "Sefardisk-jødisk spor" },
    estimate: percentFact("origin.sephardic", 1, "lessThan"),
    color: "#bb8d4e",
  },
];

export const ancientOrigins: OriginEstimate[] = [
  {
    id: "hunter",
    label: { en: "Hunter-Gatherer", da: "Jæger-samler" },
    estimate: percentFact("ancient.hunter", 49),
    color: "#842f3e",
  },
  {
    id: "farmer",
    label: { en: "Early Farmer", da: "Tidlig bonde" },
    estimate: percentFact("ancient.farmer", 39),
    color: "#8a7a52",
  },
  {
    id: "steppe",
    label: { en: "Metal Age / steppe-related", da: "Metalalder / stepperelateret" },
    estimate: percentFact("ancient.steppe", 12),
    color: "#557a83",
  },
];

export const autosomalQc: DatasetQc[] = [
  {
    id: "rows",
    label: { en: "CSV records", da: "CSV-poster" },
    value: { id: "qc.autosomal.rows", value: 725291, unit: "count", precision: "exact", status: "verified-private", sourceIds: [privateResult] },
  },
  {
    id: "mapped",
    label: { en: "Chromosomes 1–22 + X", da: "Kromosomer 1–22 + X" },
    value: { id: "qc.autosomal.mapped", value: 725276, unit: "count", precision: "exact", status: "verified-private", sourceIds: [privateResult] },
  },
  {
    id: "called",
    label: { en: "Called", da: "Kaldt" },
    value: { id: "qc.autosomal.called", value: 723043, unit: "count", precision: "exact", status: "verified-private", sourceIds: [privateResult] },
  },
  {
    id: "call-rate",
    label: { en: "Call rate", da: "Kalderate" },
    value: { id: "qc.autosomal.callRate", value: 99.69006, unit: "percent", precision: "exact", status: "derived", sourceIds: [privateResult], methodNote: "723,043 called records divided by 725,291 total records." },
  },
];

export const mitochondrialQc: DatasetQc[] = [
  {
    id: "length",
    label: { en: "Sequence characters", da: "Sekvenstegn" },
    value: { id: "qc.mt.length", value: 16570, unit: "count", precision: "exact", status: "verified-private", sourceIds: [privateResult, rcrs] },
  },
  {
    id: "substitutions",
    label: { en: "Substitutions", da: "Substitutioner" },
    value: { id: "qc.mt.substitutions", value: 29, unit: "count", precision: "exact", status: "derived", sourceIds: [privateResult, rcrs] },
  },
  {
    id: "insertion",
    label: { en: "Insertion", da: "Insertion" },
    value: { id: "qc.mt.insertion", value: 1, unit: "count", precision: "exact", status: "derived", sourceIds: [privateResult, rcrs] },
  },
  {
    id: "uncertain",
    label: { en: "Uncertain position", da: "Usikker position" },
    value: { id: "qc.mt.uncertain", value: 1, unit: "count", precision: "exact", status: "derived", sourceIds: [privateResult, rcrs] },
  },
];

export const bigYQc: DatasetQc[] = [
  {
    id: "callable",
    label: { en: "Callable bases", da: "Kaldelige baser" },
    value: { id: "qc.y.callableBases", value: 14879003, unit: "bases", precision: "exact", status: "verified-private", sourceIds: [privateResult] },
  },
  {
    id: "variants",
    label: { en: "Defining variants derived", da: "Definerende varianter afledt" },
    value: { id: "qc.y.derived", value: 32, unit: "count", precision: "exact", status: "verified-private", sourceIds: [privateResult, yTree] },
  },
  {
    id: "pass",
    label: { en: "PASS branch calls", da: "PASS-grenkald" },
    value: { id: "qc.y.pass", value: 30, unit: "count", precision: "exact", status: "verified-private", sourceIds: [privateResult, yTree] },
  },
  {
    id: "flagged",
    label: { en: "Quality-flagged branch calls", da: "Kvalitetsmarkerede grenkald" },
    value: { id: "qc.y.flagged", value: 2, unit: "count", precision: "exact", status: "verified-private", sourceIds: [privateResult, yTree] },
  },
];

export const maternalLine: Lineage = {
  label: { en: "Maternal line", da: "Morlinje" },
  base: { id: "mt.base", value: "U5b1b1a", precision: "exact", status: "verified-public", sourceIds: [mtTree] },
  terminal: { id: "mt.terminal", value: "U5b1b1a+7385+16519", precision: "exact", status: "verified-private", sourceIds: [privateResult, mtTree, rcrs], asOf: "2026-09-02" },
  formed: { id: "mt.formed", value: "branched from +7385 around 1200 BCE", precision: "range", status: "verified-public", sourceIds: [mtTree], asOf: "2026-09-02" },
  tmrca: { id: "mt.tmrca", value: { mean: 836, low: 505, high: 1127 }, unit: "year", precision: "range", status: "verified-public", sourceIds: [mtTree], asOf: "2026-09-02" },
  testers: { id: "mt.testers", value: { total: 15, countries: { Sweden: 8, Finland: 1 } }, precision: "exact", status: "verified-public", sourceIds: [mtTree], asOf: "2026-09-02", methodNote: "Countries are self-reported earliest-known origins among current testers." },
  nodes: [
    { id: "L", label: "L", era: { en: "African root", da: "Afrikansk rod" }, selected: true },
    { id: "L3", label: "L3", era: { en: "Out of Africa", da: "Ud af Afrika" }, selected: true },
    { id: "N", label: "N", era: { en: "Eurasian branch", da: "Eurasisk gren" } },
    { id: "N-8701", label: "N+8701", era: { en: "Eurasian branch", da: "Eurasisk gren" } },
    { id: "R", label: "R", era: { en: "West Eurasia", da: "Vesteurasien" } },
    { id: "U", label: "U", era: { en: "Palaeolithic Europe", da: "Palæolitisk Europa" }, selected: true },
    { id: "U5", label: "U5", era: { en: "European hunter-gatherers", da: "Europæiske jæger-samlere" }, selected: true },
    { id: "U5b", label: "U5b" },
    { id: "U5b1", label: "U5b1" },
    { id: "U5b1b", label: "U5b1b" },
    { id: "U5b1b1", label: "U5b1b1", selected: true },
    { id: "U5b1b1a", label: "U5b1b1a", formed: "c. 1415 BCE", selected: true },
    { id: "U5b1b1a-7385", label: "U5b1b1a+7385", formed: "c. 1205 BCE", selected: true },
    { id: "U5b1b1a-7385-16519", label: "U5b1b1a+7385+16519", formed: "TMRCA centre 836 CE", selected: true },
  ],
};

export const paternalLine: Lineage = {
  label: { en: "Paternal line", da: "Farlinje" },
  base: { id: "y.base", value: "R-L21", precision: "exact", status: "verified-public", sourceIds: [yTree] },
  terminal: { id: "y.terminal", value: "R-BY67151", precision: "exact", status: "verified-private", sourceIds: [privateResult, yTree], asOf: "2026-09-02" },
  formed: { id: "y.formed", value: "branched from R-S7293 around 1050 BCE", precision: "range", status: "verified-public", sourceIds: [yTree], asOf: "2026-09-02" },
  tmrca: { id: "y.tmrca", value: { mean: 1482, low: 1168, high: 1703 }, unit: "year", precision: "range", status: "verified-public", sourceIds: [yTree], asOf: "2026-09-02" },
  testers: { id: "y.testers", value: { total: 3, countries: { Norway: 2, England: 1 } }, precision: "exact", status: "verified-public", sourceIds: [yTree], asOf: "2026-09-02", methodNote: "Countries are self-reported earliest-known origins among current testers." },
  nodes: [
    { id: "R-M207", label: "R-M207", era: { en: "Upper Palaeolithic", da: "Sen palæolitikum" }, selected: true },
    { id: "R1", label: "R1" },
    { id: "R1b", label: "R1b", selected: true },
    { id: "R-L754", label: "R-L754" },
    { id: "R-L389", label: "R-L389" },
    { id: "R-P297", label: "R-P297" },
    { id: "R-M269", label: "R-M269", selected: true },
    { id: "R-L23", label: "R-L23" },
    { id: "R-L51", label: "R-L51" },
    { id: "R-P310", label: "R-P310" },
    { id: "R-L151", label: "R-L151" },
    { id: "R-P312", label: "R-P312", era: { en: "Bell Beaker expansion", da: "Klokkebægerudvidelse" }, selected: true },
    { id: "R-Z290", label: "R-Z290" },
    { id: "R-L21", label: "R-L21", selected: true },
    { id: "R-S552", label: "R-S552" },
    { id: "R-DF13", label: "R-DF13", selected: true },
    { id: "R-FTT9", label: "R-FTT9", selected: true },
    { id: "R-BY197676", label: "R-BY197676", selected: true },
    { id: "R-S7293", label: "R-S7293", formed: "c. 1050 BCE", selected: true },
    { id: "R-BY67151", label: "R-BY67151", formed: "TMRCA centre 1482 CE", selected: true },
  ],
};

export const connections: EvidenceConnection[] = [
  {
    id: "fannerup",
    category: "peer-reviewed",
    name: "Fannerup 855",
    date: "5th millennium BCE",
    sharedNode: "U5b1b1",
    sourceIds: [allentoft],
    note: {
      en: "A Mesolithic individual from Jutland on an older branch of the maternal line; a historical relative at a deep node, not a documented ancestor.",
      da: "Et mesolitisk individ fra Jylland på en ældre gren af morlinjen; en historisk slægtning ved en dyb knude, ikke en dokumenteret forfader.",
    },
  },
  {
    id: "beaker",
    category: "peer-reviewed",
    name: "Bell Beaker Britain",
    date: "3rd millennium BCE",
    sharedNode: "R-P312 / R-L21 context",
    sourceIds: [olalde],
    note: {
      en: "Population context for the western R1b expansion. It does not place the much younger terminal branch in a particular prehistoric person.",
      da: "Befolkningskontekst for den vestlige R1b-udvidelse. Den placerer ikke den langt yngre terminale gren i en bestemt forhistorisk person.",
    },
  },
  {
    id: "notable",
    category: "vendor-illustrative",
    name: "FamilyTreeDNA notable connections",
    date: "deep time",
    sharedNode: "older maternal or paternal nodes",
    sourceIds: [notableHelp],
    note: {
      en: "Illustrative shared-node connections supplied by the vendor; not close relatives and not evidence of direct descent.",
      da: "Illustrative forbindelser ved fælles knuder leveret af udbyderen; ikke nære slægtninge og ikke bevis for direkte afstamning.",
    },
  },
];

export const evidenceFactCount =
  modernOrigins.length +
  ancientOrigins.length +
  autosomalQc.length +
  mitochondrialQc.length +
  bigYQc.length +
  10;

export function getSources(sourceIds: string[]): SourceRef[] {
  return sourceIds.map((id) => evidenceSources[id]).filter((source): source is SourceRef => Boolean(source));
}
