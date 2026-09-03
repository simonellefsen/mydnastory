import type { Locale } from "./config";

export type TwigCopy = {
  kicker: string;
  title: string;
  accent: string;
  lede: string;
  image: string;
  imageAlt: string;
  cards: { title: string; copy: string }[];
  papers: { cite: string; point: string }[];
};

export type BeyondCopy = {
  kicker: string;
  title: string;
  accent: string;
  lede: string;
  modelTitle: string;
  modelCopy: string;
  hetTitle: string;
  hetCopy: (name: string, pct: string) => string;
  rohTitle: string;
  rohCopy: (n: string, longest: string) => string;
};

export type ScienceCopy = {
  twigs: Record<string, TwigCopy>;
  beyond: BeyondCopy;
};

const science: Record<Locale, ScienceCopy> = {
  en: {
    twigs: {
      U5b1b1a: {
        kicker: "Beyond the badge",
        title: "U5 is Ice Age Europe.",
        accent: " This twig is medieval Sweden.",
        lede: "The mtFull FASTA confirms the three extras that name the living twig: T16144C, A7385G, T16519C. Mitotree (July 2026) dates U5b1b1a+7385+16519 to 836 CE (505–1127), with fifteen testers, mostly Swedish. The oak above it is a large northeastern Bronze Age family; Simon’s extra is a small Swedish fork, not a people.",
        image: "/images/sweden-winter.jpg",
        imageAlt: "A winter Swedish landscape standing in for a northern motherline",
        cards: [
          {
            title: "A Mesolithic Dane, then a Finnish oak, then a Swedish extra",
            copy: "Fannerup 855 (Allentoft et al. 2024) is U5b1b1, Jutland, fifth millennium BCE. U5b1b1a+7385, confirmed in the FASTA, is a Bronze Age node with about 1,300 testers — Finland first, then Sweden and Norway. Iron Age Levänluhta (Lamnidis et al. 2018) sits on a sister of the 16519 twig. Simon’s last extra is T16519C, dated 836 CE.",
          },
          {
            title: "Cheddar Man is an uncle, not a face",
            copy: "Cheddar Man is U5b1, around 8000 BCE. Shared node 12,000 BCE. Genomic papers reconstruct him with dark skin and blue eyes. That is his genome. It is not a portrait of anyone alive on this twig.",
          },
          {
            title: "U5 and the hunter-gatherer half",
            copy: "Simon’s autosomes are 49% FamilyTreeDNA Hunter-Gatherer. U5 is the mitochondrial family most often found in Western hunter-gatherers. The FASTA is one mother’s whole mt genome. The 49% is the rest of the autosomes. They rhyme without being the same measurement.",
          },
        ],
        papers: [
          { cite: "Allentoft et al. 2024", point: "100 generations of Danish population history, including Fannerup 855 on U5b1b1." },
          { cite: "Lamnidis et al. 2018", point: "Iron Age Levänluhta, Finland, on U5b1b1a1 — a sister of Simon’s 16519 twig under A7385G." },
          { cite: "FamilyTreeDNA Mitotree 2026.07.28", point: "U5b1b1a+7385+16519 TMRCA 836 CE (CI 505–1127), 15 testers; parent +7385 at 1205 BCE." },
        ],
      },
      "R-BY67151": {
        kicker: "Beyond the badge",
        title: "An Atlantic Y in a Scandinavian genome.",
        accent: " Three testers. About 1500 CE.",
        lede: "R-BY67151 is a thin Big Y twig on R-P312 / L21 / DF13, the Bell Beaker western oak of R1b. FamilyTreeDNA’s tree (August 2026) now names the thinning: FTT9, then BY197676, then S7293, then this late-medieval fork. Two testers name Norway, one names England. The autosomes are 99% Scandinavian. One fatherline does not have to match the rest of the house.",
        image: "/images/british-isles.jpg",
        imageAlt: "A stormy Atlantic coastline standing in for the R-L21 story",
        cards: [
          {
            title: "P312 is a Beaker door",
            copy: "R-P312 formed around 2840 BCE. It is the western Bell Beaker fatherline. L21, around 2650 BCE, is the Insular son. Simon’s Y takes that door. His autosomes do not. That is normal: a Y is one grandfather’s grandfather, not the recipe of the whole genome.",
          },
          {
            title: "DF13 is an oak with bones",
            copy: "R-DF13, around 2560 BCE, has tens of thousands of living testers and hundreds of ancient genomes. Rathlin 1 (Cassidy et al. 2016) sits on DF21, a brother of Simon’s FTT9. Yarnton and Amesbury Down are Beaker-period English men on the same oak (Olalde et al. 2018; Akbari et al. 2026). The shared node is 2560 BCE, not a boat.",
          },
          {
            title: "Then the oak thins",
            copy: "FTT9 has fifteen Big Y testers. BY197676 has nine. S7293 has six. BY67151 has three, dated 1482 CE (1168–1703). FamilyTreeDNA lists 32 equivalent SNPs for the terminal twig. The February 2020 Big Y VCF calls every one of them derived. Treat 1482 as a centre, not a baptism.",
          },
        ],
        papers: [
          { cite: "Cassidy et al. 2016", point: "Rathlin 1, an Early Bronze Age man from Rathlin Island, Y haplogroup R-DF21 under DF13." },
          { cite: "Olalde et al. 2018 / Patterson et al. 2022 / Akbari et al. 2026", point: "Bell Beaker and Bronze Age Britain as the demographic engine that made L21/DF13 common on the islands; Yarnton and related English genomes on that oak." },
          { cite: "FamilyTreeDNA Discover Y-tree 2026.8.30", point: "Path DF13 > FTT9 > BY197676 > S7293 > BY67151. Terminal TMRCA 1482 CE (CI 1168–1703), three testers, 32 equivalent SNPs." },
        ],
      },
    },
    beyond: {
      kicker: "Beyond myOrigins",
      title: "What the chip still holds.",
      accent: " FamilyTreeDNA did not plot this.",
      lede: "The raw autosomal file is a map of 700,000 sites. Ethnicity percentages are one reading of it. Newer population genomics lets us read others.",
      modelTitle: "The three-way mix is not the academic three-way",
      modelCopy:
        "FamilyTreeDNA splits European autosomes into Hunter-Gatherer, Early Farmer, and Metal Age Invader. Since Haak 2015 and Allentoft 2024 the research model is different: Western hunter-gatherers (WHG), Anatolian farmers, and Yamnaya-related steppe (itself Eastern hunter-gatherers plus Caucasus). In that framework present-day Danes usually carry a large farming layer, a substantial steppe layer, and a smaller WHG layer. A 49% “hunter-gatherer” / 12% “invader” result is a proprietary clustering, not evidence that half the genome is Ertebølle. The 2024 Danish transect shows two near-total turnovers: local Mesolithic people left little. Most “forager” ancestry in a modern Dane arrived with farmers from the south, or folded inside steppe ancestry from the east.",
      hetTitle: "Diversity on the array",
      hetCopy: (name, pct) =>
        `${name}’s called autosomal markers are ${pct}% heterozygous. That is a normal European figure on this kind of microarray, which is enriched for common variants.`,
      rohTitle: "Runs of homozygosity",
      rohCopy: (n, longest) =>
        n === "1"
          ? `One stretch longer than 1.5 Mb, ${longest} cM. That pattern fits a northern European without a recent cousin marriage — not a closed village.`
          : `${n} stretches longer than 1.5 Mb, longest ${longest} cM. That pattern fits a northern European without a recent cousin marriage — not a closed village.`,
    },
  },
  da: {
    twigs: {
      U5b1b1a: {
        kicker: "Bagved mærkatet",
        title: "U5 er istidens Europa.",
        accent: " Kvisten er middelalderens Sverige.",
        lede: "mtFull-FASTA’en bekræfter de tre ekstra, der navngiver den levende kvist: T16144C, A7385G, T16519C. Mitotree (juli 2026) daterer U5b1b1a+7385+16519 til 836 e.Kr. (505–1127), med femten testere, mest svenske. Egetræet ovenover er en stor nordøstlig bronzealderfamilie; Simons ekstra er en lille svensk forgrening, ikke et folk.",
        image: "/images/sweden-winter.jpg",
        imageAlt: "Et vintersvensk landskab som stand-in for en nordlig morlinje",
        cards: [
          {
            title: "En mesolitisk dansker, så et finsk egetræ, så en svensk ekstra",
            copy: "Fannerup 855 (Allentoft m.fl. 2024) er U5b1b1, Jylland, femte årtusinde f.Kr. U5b1b1a+7385, bekræftet i FASTA’en, er et bronzealderknudepunkt med omkring 1.300 testere — Finland først, så Sverige og Norge. Jernalderens Levänluhta (Lamnidis m.fl. 2018) sidder på en søster til 16519-kvisten. Simons sidste ekstra er T16519C, dateret 836 e.Kr.",
          },
          {
            title: "Cheddar Man er en onkel, ikke et ansigt",
            copy: "Cheddar Man er U5b1, omkring 8000 f.Kr. Fælles knude 12.000 f.Kr. Genomiske artikler rekonstruerer ham med mørk hud og blå øjne. Det er hans genom. Det er ikke et portræt af nogen levende på denne kvist.",
          },
          {
            title: "U5 og jæger-halvdelen",
            copy: "Simons autosomer er 49 % FamilyTreeDNA jæger-samler. U5 er den mitokondrielle familie, man oftest finder hos vestlige jæger-samlere. FASTA’en er én mors hele mt-genom. De 49 % er resten af autosomerne. De rimer uden at være den samme måling.",
          },
        ],
        papers: [
          { cite: "Allentoft m.fl. 2024", point: "100 generationer af dansk befolkningshistorie, inklusive Fannerup 855 på U5b1b1." },
          { cite: "Lamnidis m.fl. 2018", point: "Jernalderens Levänluhta, Finland, på U5b1b1a1 — en søster til Simons 16519-kvist under A7385G." },
          { cite: "FamilyTreeDNA Mitotree 2026.07.28", point: "U5b1b1a+7385+16519 TMRCA 836 e.Kr. (CI 505–1127), 15 testere; forælder +7385 ved 1205 f.Kr." },
        ],
      },
      "R-BY67151": {
        kicker: "Bagved mærkatet",
        title: "Et atlantisk Y i et skandinavisk genom.",
        accent: " Tre testere. Omkring 1500 e.Kr.",
        lede: "R-BY67151 er en tynd Big Y-kvist på R-P312 / L21 / DF13, klokkebæger-egentræet i vestlig R1b. FamilyTreeDNAs træ (august 2026) navngiver nu udtyndingen: FTT9, så BY197676, så S7293, så denne senmiddelalderlige forgrening. To testere nævner Norge, én England. Autosomerne er 99 % skandinaviske. Én farlinje behøver ikke ligne resten af huset.",
        image: "/images/british-isles.jpg",
        imageAlt: "En atlantisk kyst som stand-in for R-L21-historien",
        cards: [
          {
            title: "P312 er en klokkebæger-dør",
            copy: "R-P312 opstod omkring 2840 f.Kr. Det er den vestlige klokkebæger-farlinje. L21, omkring 2650 f.Kr., er den insulære søn. Simons Y tager den dør. Hans autosomer gør ikke. Det er normalt: et Y er én farfars farfar, ikke hele genomet.",
          },
          {
            title: "DF13 er et egetræ med knogler",
            copy: "R-DF13, omkring 2560 f.Kr., har titusindvis af levende testere og hundredvis af oldtidsgenomer. Rathlin 1 (Cassidy m.fl. 2016) sidder på DF21, en bror til Simons FTT9. Yarnton og Amesbury Down er klokkebæger-engelske mænd på samme egetræ (Olalde m.fl. 2018; Akbari m.fl. 2026). Det fælles knudepunkt er 2560 f.Kr., ikke en båd.",
          },
          {
            title: "Så tynder egetræet ud",
            copy: "FTT9 har femten Big Y-testere. BY197676 har ni. S7293 har seks. BY67151 har tre, dateret 1482 e.Kr. (1168–1703). FamilyTreeDNA lister 32 ækvivalente SNP’er for den terminale kvist. Februar 2020-Big Y-VCF’en kalder dem alle afledte. Behandl 1482 som et centrum, ikke en dåb.",
          },
        ],
        papers: [
          { cite: "Cassidy m.fl. 2016", point: "Rathlin 1, en tidlig bronzealdermand fra Rathlin Island, Y-haplogruppe R-DF21 under DF13." },
          { cite: "Olalde m.fl. 2018 / Patterson m.fl. 2022 / Akbari m.fl. 2026", point: "Klokkebæger og bronzealderens Britannien som den demografiske motor, der gjorde L21/DF13 almindelig på øerne; Yarnton og beslægtede engelske genomer på det egetræ." },
          { cite: "FamilyTreeDNA Discover Y-træ 2026.8.30", point: "Sti DF13 > FTT9 > BY197676 > S7293 > BY67151. Terminal TMRCA 1482 e.Kr. (CI 1168–1703), tre testere, 32 ækvivalente SNP’er." },
        ],
      },
    },
    beyond: {
      kicker: "Bagom myOrigins",
      title: "Det chippen stadig gemmer.",
      accent: " FamilyTreeDNA tegnede ikke dette.",
      lede: "Den rå autosomale fil er et kort over 700.000 steder. Etnicitetsprocenter er én læsning. Nyere populationsgenomik lader os læse andre.",
      modelTitle: "Tredelingen er ikke den akademiske tredeling",
      modelCopy:
        "FamilyTreeDNA splitter europæiske autosomer i jæger-samler, tidlig bonde og metalalderens indvandrer. Siden Haak 2015 og Allentoft 2024 er forskningsmodellen en anden: vestlige jæger-samlere (WHG), anatolske bønder og Yamnaya-beslægtet steppe (selv østlige jæger-samlere plus Kaukasus). I den ramme bærer nulevende danskere typisk et stort bondelag, et væsentligt steppelag og et mindre WHG-lag. Et resultat på 49 % “jæger-samler” / 12 % “indvandrer” er en proprietær klynge, ikke bevis for at halvdelen af genomet er Ertebølle. Det danske tværsnit fra 2024 viser to næsten totale udskiftninger: de lokale mesolitiske mennesker efterlod lidt. Det meste “jæger”-afstamning hos en moderne dansker kom med bønder sydfra, eller ligger foldet ind i steppeafstamning østfra.",
      hetTitle: "Diversitet på arrayet",
      hetCopy: (name, pct) =>
        `${name}s kaldte autosomale markører er ${pct} % heterozygote. Det er et normalt europæisk tal på denne slags microarray, som er beriget for almindelige varianter.`,
      rohTitle: "Homozygote stræk",
      rohCopy: (n, longest) =>
        n === "1"
          ? `Ét stræk længere end 1,5 Mb, ${longest} cM. Mønstret passer til en nordeuropæer uden et nyligt fætter-ægteskab — ikke en lukket landsby.`
          : `${n} stræk længere end 1,5 Mb, længst ${longest} cM. Mønstret passer til en nordeuropæer uden et nyligt fætter-ægteskab — ikke en lukket landsby.`,
    },
  },
};

export function getScience(locale: Locale): ScienceCopy {
  return science[locale] ?? science.en;
}
