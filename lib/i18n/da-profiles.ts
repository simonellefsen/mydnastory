type TextBits = {
  tagline?: string;
  lede?: string;
  heroAlt?: string;
  tested?: string;
  originsHeadline?: { lead: string; accent: string };
  originsLede?: string;
  origins?: Record<string, { kicker?: string; summary?: string; detail?: string }>;
  ancientHeadline?: { lead: string; mid: string; end: string };
  ancientLede?: string;
  ancientOrigins?: Record<string, { era?: string; when?: string; summary?: string; detail?: string }>;
  haplogroup?: {
    formed?: string;
    headline?: string;
    known?: string;
    rarityNote?: string;
    painting?: string;
  };
  haploPath?: Record<string, { copy?: string }>;
  motherlineMapCaption?: string;
  motherlineSpotlights?: { title: string; copy: string }[];
  yHaplogroup?: {
    formed?: string;
    headline?: string;
    known?: string;
    rarityNote?: string;
  };
  yHaploPath?: Record<string, { copy?: string }>;
  fatherlineMapCaption?: string;
  fatherlineSpotlights?: { title: string; copy: string }[];
  connectionsLede?: string;
  connections?: Record<string, { blurb?: string }>;
  genomePainting?: string;
  comingTeaser?: string;
};

export const daProfiles: Record<string, TextBits> = {
  simon: {
    tagline: "Nord i autosomerne. To ældre tråde.",
    lede: "Næsten hvert autosomalt stræk er malet skandinavisk. Under det sidder en svensk morlinje fra middelalderen og en sjælden paternel kvist på det atlantiske R-L21-træ — plus det X, kun en mor kan give en søn.",
    heroAlt: "En vinterfjord under et svagt nordlys, uden mennesker i billedet",
    tested: "FamilyTreeDNA · myOrigins v3 · mtFull Sequence · Big Y",
    originsHeadline: { lead: "Hundrede procent Europa.", accent: "Nioghalvfems af det nordligt." },
    originsLede:
      "FamilyTreeDNA myOrigins v3 maler Simon som helt europæisk, og næsten helt skandinavisk. De resterende spor er under én procent hver — de skiver, metoden selv advarer er lette at fejllæse.",
    origins: {
      scandinavia: {
        kicker: "Hele huset",
        summary:
          "Næsten al Simons autosomale afstamning ligger hos skandinaviske referencepopulationer — Danmark, Sverige, Norge og den bredere nordiske halvø.",
        detail:
          "FamilyTreeDNAs myOrigins v3 placerer 99 % af hans autosomale DNA hos skandinaviske referencer. Det er ikke et pas. Det er en statistisk lighed. Y-kromosomet og mitokondrierne fortæller ældre, smallere historier, som det tal ikke kan se.",
      },
      baltic: {
        kicker: "Et spor ved siden af",
        summary: "Et spor tildelt baltiske referencer. FamilyTreeDNA markerer spor som de skiver, der lettest opfindes.",
        detail:
          "Under én procent. Metodens eget papir behandler spor som skrøbelige. Det kan være ægte østbaltisk deling i kanten af Skandinavien, eller støj i et genom der allerede er 99 % nordligt. En hvisken, ikke et kapitel.",
      },
      sephardic: {
        kicker: "En mærket hvisken",
        summary:
          "Et spor under mærkatet sefardisk jødisk. FamilyTreeDNA advarer om, at spor så små især let fejlattribueres.",
        detail:
          "Under én procent, tegnet mod Iberien. Spor er det første, der falder, når referencepaneler skifter. Dette site læser det ikke som en familiehistorie.",
      },
    },
    ancientHeadline: { lead: "Halv jæger.", mid: "Så markerne.", end: "Så en tynd hest." },
    ancientLede:
      "Under det moderne kort ligger en langt ældre opskrift. FamilyTreeDNA splitter europæisk autosomalt DNA i tre dybe strømme. Simons blanding er tung på jæger-samler, så bonde, med en beskeden metalalderpuls.",
    haplogroup: {
      formed: "forgrenede sig fra U5b1b1a+7385 omkring 1200 f.Kr.",
      headline: "En svensk morlinje fra vikingetiden.",
      known: "8 nævner Sverige, 1 Finland",
      rarityNote:
        "Femten testere sidder på U5b1b1a+7385+16519. Den levende geografi er svensk, med ét finsk kit. Forældregrenen er allerede bronzealder; denne kvist er middelalderlig.",
    },
    motherlineMapCaption:
      "En skematisk vandring: Østafrika → Nærorienten → haplogruppe U → U5 i istidens Europa → en svensk middelalderkvist. Ikke et GPS-spor — en mitokondriel datterrute.",
    yHaplogroup: {
      formed: "forgrenede sig fra R-S7293 omkring 1050 f.Kr.",
      headline: "En sjælden paternel kvist, dateret til omkring 1500 e.Kr.",
      known: "Norge 2, England 1",
      rarityNote:
        "Tre Big Y-testere på R-BY67151. Forælderen R-S7293 er allerede en lille metalaldergren; denne kvist er senmiddelalderlig. Autosomerne er 99 % skandinaviske. Y sidder på R-L21 / DF13, den store atlantiske familie.",
    },
    fatherlineMapCaption:
      "En skematisk vandring: Østafrika → Eurasien → R1b → atlantisk L21/DF13 → en senmiddelalderlig kvist med testere i Norge og England. Ikke en slægtsnavnehistorie. En Y-rute af sønner.",
    connectionsLede:
      "FamilyTreeDNA lister bemærkelsesværdige og arkæologiske personer, der deler en Y- eller mitokondriel ane med Simon. Det er ikke fætre i nogen families forstand. Levende matchnavne vises ikke her.",
    genomePainting:
      "Chippen læser autosomer og X — 725.276 SNP’er her. En søns X er det X, hans mor gav ham. Y er ikke på dette microarray; det blev sekventeret separat som Big Y (R-BY67151). Maleriet på kontinentskala er skandinavisk, med to spor under én procent.",
  },
};

export const daComingTeaser = "Det første kit lander her. Samme fornavnsregel, samme kapitler.";
