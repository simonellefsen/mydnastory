import { createReadStream, existsSync, readFileSync, readdirSync } from "node:fs";
import { createInterface } from "node:readline";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const privateDirectory = join(repositoryRoot, "ftdna", "simon_ellefsen");
const expected = JSON.parse(readFileSync(join(repositoryRoot, "data", "evidence", "simon.aggregate.json"), "utf8"));

function fail(message) {
  throw new Error(`Private evidence verification failed: ${message}`);
}

function expectEqual(actual, wanted, label) {
  if (actual !== wanted) fail(`${label} expected ${wanted}, received ${actual}`);
}

function unquote(value = "") {
  return value.startsWith('"') && value.endsWith('"') ? value.slice(1, -1) : value;
}

function privateFile(suffix, exactName) {
  if (!existsSync(privateDirectory)) fail("the ignored local source directory is unavailable");
  const match = readdirSync(privateDirectory).find((name) => exactName ? name === exactName : name.toLowerCase().endsWith(suffix));
  if (!match) fail(`a required ${suffix.toUpperCase()} input is unavailable`);
  return join(privateDirectory, match);
}

async function verifyAutosomal() {
  const input = privateFile(".csv");
  const reader = createInterface({ input: createReadStream(input), crlfDelay: Infinity });
  const mappedChromosomes = new Set([...Array.from({ length: 22 }, (_, index) => String(index + 1)), "X"]);
  let resultColumn = -1;
  let chromosomeColumn = -1;
  let delimiter = ",";
  let rows = 0;
  let mappedRows = 0;
  let calledRows = 0;

  for await (const line of reader) {
    if (resultColumn < 0) {
      delimiter = line.includes("|") ? "|" : ",";
      const header = line.split(delimiter);
      resultColumn = header.indexOf("RESULT");
      chromosomeColumn = header.indexOf("CHROMOSOME");
      if (resultColumn < 0 || chromosomeColumn < 0) fail("the autosomal header is not recognized");
      continue;
    }
    if (!line) continue;
    rows += 1;
    const fields = line.split(delimiter);
    if (mappedChromosomes.has(unquote(fields[chromosomeColumn]))) mappedRows += 1;
    if (/^[ACGT]{2}$/.test(unquote(fields[resultColumn]))) calledRows += 1;
  }

  expectEqual(rows, expected.autosomal.rows, "autosomal rows");
  expectEqual(mappedRows, expected.autosomal.mappedRows, "mapped autosomal rows");
  expectEqual(calledRows, expected.autosomal.calledRows, "called autosomal rows");
  return `autosomal ${rows.toLocaleString("en-US")} rows, ${calledRows.toLocaleString("en-US")} called`;
}

function verifyMitochondrial() {
  const input = privateFile(".fasta");
  const sequence = readFileSync(input, "utf8")
    .split(/\r?\n/)
    .filter((line) => line && !line.startsWith(">"))
    .join("")
    .toUpperCase();

  expectEqual(sequence.length, expected.mitochondrial.sequenceLength, "mtDNA sequence length");
  expectEqual([...sequence].filter((base) => !/[ACGT]/.test(base)).length, expected.mitochondrial.uncertainPositions, "mtDNA uncertain positions");

  for (const marker of expected.mitochondrial.branchMarkers) {
    // The local sequence contains one insertion before these rCRS positions.
    const observed = sequence[marker.position];
    expectEqual(observed, marker.derived, `${marker.name} derived allele`);
  }

  return `mtDNA ${sequence.length.toLocaleString("en-US")} characters, ${expected.mitochondrial.branchMarkers.length} terminal-path markers`;
}

async function verifyBigY() {
  const input = privateFile(".vcf", "variants.vcf");
  const reader = createInterface({ input: createReadStream(input), crlfDelay: Infinity });
  const expectedByPosition = new Map(expected.bigY.branchVariants.map((variant) => [variant.position, variant]));
  const observedBranchVariants = new Map();
  let records = 0;
  let chrYRecords = 0;
  let passRecords = 0;

  for await (const line of reader) {
    if (!line || line.startsWith("#")) continue;
    records += 1;
    const fields = line.split("\t");
    const chromosome = fields[0];
    const position = Number(fields[1]);
    const reference = fields[3];
    const alternatives = (fields[4] ?? "").split(",");
    const filter = fields[6];
    if (chromosome === "chrY") chrYRecords += 1;
    if (filter === "PASS") passRecords += 1;

    const branchVariant = expectedByPosition.get(position);
    if (!branchVariant || chromosome !== "chrY") continue;
    const genotype = (fields[9] ?? "").split(":", 1)[0];
    const alleleIndexes = genotype.split(/[|/]/).map(Number).filter(Number.isFinite);
    const calledAlleles = alleleIndexes.map((index) => index === 0 ? reference : alternatives[index - 1]);
    observedBranchVariants.set(position, {
      derived: calledAlleles.includes(branchVariant.derived),
      reference,
      filter,
    });
  }

  expectEqual(records, expected.bigY.vcfRecords, "Big Y VCF records");
  expectEqual(chrYRecords, expected.bigY.chrYRecords, "Big Y chrY records");
  expectEqual(passRecords, expected.bigY.passRecords, "Big Y PASS records");

  for (const variant of expected.bigY.branchVariants) {
    const observed = observedBranchVariants.get(variant.position);
    if (!observed) fail(`${variant.name} is absent from the Big Y VCF`);
    expectEqual(observed.reference, variant.ancestral, `${variant.name} reference allele`);
    expectEqual(observed.derived, true, `${variant.name} derived call`);
    if (variant.expectedFilter === "PASS") expectEqual(observed.filter, "PASS", `${variant.name} filter`);
    if (variant.expectedFilter === "quality-flagged" && observed.filter === "PASS") fail(`${variant.name} was expected to retain a quality flag`);
  }

  const bedInput = privateFile(".bed", "regions.bed");
  const bedReader = createInterface({ input: createReadStream(bedInput), crlfDelay: Infinity });
  let callableBases = 0;
  for await (const line of bedReader) {
    if (!line || line.startsWith("#")) continue;
    const [, start, end] = line.split("\t");
    callableBases += Number(end) - Number(start);
  }
  expectEqual(callableBases, expected.bigY.callableBases, "Big Y callable bases");

  const passedBranchCalls = [...observedBranchVariants.values()].filter((variant) => variant.filter === "PASS").length;
  return `Big Y ${callableBases.toLocaleString("en-US")} callable bases, ${observedBranchVariants.size}/32 branch variants derived, ${passedBranchCalls} PASS`;
}

const results = [];
results.push(await verifyAutosomal());
results.push(verifyMitochondrial());
results.push(await verifyBigY());

for (const result of results) console.log(`✓ ${result}`);
console.log(`✓ approved aggregate fixture verified as of ${expected.asOf}; no raw rows were emitted`);
