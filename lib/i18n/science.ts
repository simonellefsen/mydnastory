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

export type ScienceCopy = {
  twigs: Record<string, TwigCopy>;
};

const science: Record<Locale, ScienceCopy> = {
  en: {
    twigs: {
      U5b1b1a: {
        kicker: "Beyond the badge",
        title: "U5 is Ice Age Europe.",
        accent: " This twig is medieval Sweden.",
        lede: "FamilyTreeDNA’s living date for U5b1b1a+7385+16519 is about 850 CE, with fifteen testers, mostly Swedish. The family above it is much older: U5b is the hunter-gatherer motherline of western Europe, and a Mesolithic Dane at Fannerup already sits on U5b1b1.",
        image: "/images/sweden-winter.jpg",
        imageAlt: "A winter Swedish landscape standing in for a northern motherline",
        cards: [
          {
            title: "A Mesolithic Dane, then a medieval Swede",
            copy: "Fannerup 855 (Allentoft et al. 2024) is U5b1b1, 4671–4253 BCE, Jutland. Simon’s living twig is a daughter of that node dated to 850 CE. The motherline was in Denmark five thousand years before the testers who name Sweden.",
          },
          {
            title: "Cheddar Man is an uncle, not a face",
            copy: "Cheddar Man is U5b1, around 8000 BCE. Shared node 12,000 BCE. Genomic papers reconstruct him with dark skin and blue eyes. That is his genome. It is not a portrait of anyone alive on this twig.",
          },
          {
            title: "U5 and the hunter-gatherer half",
            copy: "Simon’s autosomes are 49% FamilyTreeDNA Hunter-Gatherer. U5 is the mitochondrial family most often found in Western hunter-gatherers. The two facts rhyme without being the same measurement: one is the whole genome’s deep recipe, the other is one mother’s thread.",
          },
        ],
        papers: [
          { cite: "Allentoft et al. 2024", point: "100 generations of Danish population history, including Fannerup 855 on U5b1b1." },
          { cite: "Brace et al. 2019", point: "Cheddar Man and Mesolithic British genomes; U5b1 as a hunter-gatherer motherline in Britain." },
          { cite: "Posth et al. 2016 / Malmström et al. 2009", point: "U5 dominance in Mesolithic Scandinavia, including Motala." },
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
  },
  da: {
    twigs: {
      U5b1b1a: {
        kicker: "Bagved mærkatet",
        title: "U5 er istidens Europa.",
        accent: " Kvisten er middelalderens Sverige.",
        lede: "FamilyTreeDNAs levende datering for U5b1b1a+7385+16519 er omkring 850 e.Kr., med femten testere, mest svenske. Familien ovenover er langt ældre: U5b er jæger-samlernes morlinje i Vesteuropa, og en mesolitisk dansker i Fannerup sidder allerede på U5b1b1.",
        image: "/images/sweden-winter.jpg",
        imageAlt: "Et vintersvensk landskab som stand-in for en nordlig morlinje",
        cards: [
          {
            title: "En mesolitisk dansker, så en middelalderlig svensker",
            copy: "Fannerup 855 (Allentoft m.fl. 2024) er U5b1b1, 4671–4253 f.Kr., Jylland. Simons levende kvist er en datter af det knudepunkt, dateret til 850 e.Kr. Morlinjen var i Danmark fem tusinde år før testerne, der nævner Sverige.",
          },
          {
            title: "Cheddar Man er en onkel, ikke et ansigt",
            copy: "Cheddar Man er U5b1, omkring 8000 f.Kr. Fælles knude 12.000 f.Kr. Genomiske artikler rekonstruerer ham med mørk hud og blå øjne. Det er hans genom. Det er ikke et portræt af nogen levende på denne kvist.",
          },
          {
            title: "U5 og jæger-halvdelen",
            copy: "Simons autosomer er 49 % FamilyTreeDNA jæger-samler. U5 er den mitokondrielle familie, man oftest finder hos vestlige jæger-samlere. De to fakta rimer uden at være den samme måling.",
          },
        ],
        papers: [
          { cite: "Allentoft m.fl. 2024", point: "100 generationer af dansk befolkningshistorie, inklusive Fannerup 855 på U5b1b1." },
          { cite: "Brace m.fl. 2019", point: "Cheddar Man og mesolitiske britiske genomer; U5b1 som jæger-morlinje i Britannien." },
          { cite: "Posth m.fl. 2016 / Malmström m.fl. 2009", point: "U5-dominans i mesolitisk Skandinavien, inklusive Motala." },
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
  },
};

export function getScience(locale: Locale): ScienceCopy {
  return science[locale] ?? science.en;
}
