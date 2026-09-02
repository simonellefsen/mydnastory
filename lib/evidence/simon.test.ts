import { describe, expect, it } from "vitest";
import { getEvidenceCopy } from "./copy";
import {
  ancientOrigins,
  autosomalQc,
  bigYQc,
  evidenceSources,
  maternalLine,
  mitochondrialQc,
  modernOrigins,
  paternalLine,
} from "./simon";

const allFacts = [
  ...modernOrigins.map((origin) => origin.estimate),
  ...ancientOrigins.map((origin) => origin.estimate),
  ...autosomalQc.map((item) => item.value),
  ...mitochondrialQc.map((item) => item.value),
  ...bigYQc.map((item) => item.value),
  maternalLine.base,
  maternalLine.terminal,
  maternalLine.formed,
  maternalLine.tmrca,
  maternalLine.testers,
  paternalLine.base,
  paternalLine.terminal,
  paternalLine.formed,
  paternalLine.tmrca,
  paternalLine.testers,
];

describe("Simon public evidence", () => {
  it("keeps English and Danish presentation contracts in structural parity", () => {
    const keys = (value: unknown): unknown => {
      if (!value || typeof value !== "object") return typeof value;
      return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, keys(child)]));
    };
    expect(keys(getEvidenceCopy("da"))).toEqual(keys(getEvidenceCopy("en")));
  });

  it("preserves threshold precision for trace origins", () => {
    const traces = modernOrigins.filter((origin) => origin.id !== "scandinavia");
    expect(traces).toHaveLength(2);
    expect(traces.every((origin) => origin.estimate.precision === "lessThan")).toBe(true);
    expect(traces.map((origin) => origin.estimate.value)).toEqual([1, 1]);
  });

  it("keeps the published autosomal and ancient estimates", () => {
    expect(modernOrigins[0].estimate.value).toBe(99);
    expect(ancientOrigins.map((origin) => origin.estimate.value)).toEqual([49, 39, 12]);
  });

  it("keeps the audited aggregate QC values", () => {
    expect(Object.fromEntries(autosomalQc.map((item) => [item.id, item.value.value]))).toEqual({
      rows: 725291,
      mapped: 725276,
      called: 723043,
      "call-rate": 99.69006,
    });
    expect(Object.fromEntries(mitochondrialQc.map((item) => [item.id, item.value.value]))).toEqual({
      length: 16570,
      substitutions: 29,
      insertion: 1,
      uncertain: 1,
    });
    expect(Object.fromEntries(bigYQc.map((item) => [item.id, item.value.value]))).toEqual({
      callable: 14879003,
      variants: 32,
      pass: 30,
      flagged: 2,
    });
  });

  it("distinguishes base labels, terminal branches, formation, and TMRCA", () => {
    expect(maternalLine.base.value).toBe("U5b1b1a");
    expect(maternalLine.terminal.value).toBe("U5b1b1a+7385+16519");
    expect(maternalLine.tmrca.value).toEqual({ mean: 836, low: 505, high: 1127 });
    expect(paternalLine.base.value).toBe("R-L21");
    expect(paternalLine.terminal.value).toBe("R-BY67151");
    expect(paternalLine.tmrca.value).toEqual({ mean: 1482, low: 1168, high: 1703 });
  });

  it("includes intermediate nodes omitted from the v1 milestone paths", () => {
    expect(maternalLine.nodes.map((node) => node.label)).toEqual(expect.arrayContaining(["N+8701", "R"]));
    expect(paternalLine.nodes.map((node) => node.label)).toEqual(expect.arrayContaining(["R-Z290", "R-S552"]));
  });

  it("resolves every fact source and never exposes a private source URL", () => {
    for (const fact of allFacts) {
      expect(fact.sourceIds.length).toBeGreaterThan(0);
      for (const sourceId of fact.sourceIds) expect(evidenceSources[sourceId]).toBeDefined();
    }
    const privateSources = Object.values(evidenceSources).filter((source) => source.kind === "private-export");
    expect(privateSources).toHaveLength(1);
    expect(privateSources[0].url).toBeUndefined();
  });

  it("dates all mutable vendor-tree facts", () => {
    for (const fact of [maternalLine.terminal, maternalLine.formed, maternalLine.tmrca, maternalLine.testers, paternalLine.terminal, paternalLine.formed, paternalLine.tmrca, paternalLine.testers]) {
      expect(fact.asOf).toBe("2026-09-02");
    }
  });
});
