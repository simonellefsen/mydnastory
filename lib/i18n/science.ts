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
        lede: "R-BY67151 is a thin Big Y twig on R-L21 / DF13, the great Insular branch of R1b. FamilyTreeDNA dates the last man of this exact branch to 1482 CE (1168–1703). Two testers name Norway, one names England. The autosomes are 99% Scandinavian. One fatherline does not have to match the rest of the house.",
        image: "/images/british-isles.jpg",
        imageAlt: "A stormy Atlantic coastline standing in for the R-L21 story",
        cards: [
          {
            title: "L21 is a western door",
            copy: "R-L21 formed around 2650 BCE. It is common in Britain and Ireland and present in Brittany and Norway. Simon’s Y takes that door. His autosomes do not. That is normal: a Y is one grandfather’s grandfather, not the recipe of the whole genome.",
          },
          {
            title: "DF13 is an oak",
            copy: "R-DF13, around 2550 BCE, has tens of thousands of testers. Crick and Darwin sit on the older R-M269. Simon’s line is a later Atlantic son of that oak, then a Metal Age fork at S7293, then this medieval twig.",
          },
          {
            title: "A small clock",
            copy: "Three men. The date will move. FamilyTreeDNA’s 95% interval for BY67151 already runs from the twelfth century to 1703. Treat 1482 CE as a centre, not a baptism.",
          },
        ],
        papers: [
          { cite: "Myres et al. 2011 / Busby et al. 2012", point: "R-L21 as the dominant Insular R1b clade, with spill into western France and Norway." },
          { cite: "Cassidy et al. 2016 / Olalde et al. 2018", point: "Bell Beaker / Bronze Age Britain as the demographic engine that made L21 common on the islands." },
          { cite: "FamilyTreeDNA Big Y / Discover", point: "R-BY67151 TMRCA 1482 CE (CI 1168–1703), parent R-S7293 at 1050 BCE, three testers." },
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
        lede: "R-BY67151 er en tynd Big Y-kvist på R-L21 / DF13, den store insulære gren af R1b. FamilyTreeDNA daterer den sidste mand på netop denne gren til 1482 e.Kr. (1168–1703). To testere nævner Norge, én England. Autosomerne er 99 % skandinaviske. Én farlinje behøver ikke ligne resten af huset.",
        image: "/images/british-isles.jpg",
        imageAlt: "En atlantisk kyst som stand-in for R-L21-historien",
        cards: [
          {
            title: "L21 er en vestlig dør",
            copy: "R-L21 opstod omkring 2650 f.Kr. Den er almindelig i Storbritannien og Irland og findes i Bretagne og Norge. Simons Y tager den dør. Hans autosomer gør ikke. Det er normalt: et Y er én farfars farfar, ikke hele genomet.",
          },
          {
            title: "DF13 er et egetræ",
            copy: "R-DF13, omkring 2550 f.Kr., har titusindvis af testere. Crick og Darwin sidder på det ældre R-M269. Simons linje er en senere atlantisk søn, så en metalalder-gren ved S7293, så denne middelalderkvist.",
          },
          {
            title: "Et lille ur",
            copy: "Tre mænd. Datoen vil rykke sig. FamilyTreeDNAs 95 %-interval for BY67151 løber allerede fra 1100-tallet til 1703. Behandl 1482 e.Kr. som et centrum, ikke en dåb.",
          },
        ],
        papers: [
          { cite: "Myres m.fl. 2011 / Busby m.fl. 2012", point: "R-L21 som den dominerende insulære R1b-gren, med spredning til det vestlige Frankrig og Norge." },
          { cite: "Cassidy m.fl. 2016 / Olalde m.fl. 2018", point: "Klokkebæger / bronzealderens Britannien som den demografiske motor, der gjorde L21 almindelig på øerne." },
          { cite: "FamilyTreeDNA Big Y / Discover", point: "R-BY67151 TMRCA 1482 e.Kr. (CI 1168–1703), forælder R-S7293 1050 f.Kr., tre testere." },
        ],
      },
    },
  },
};

export function getScience(locale: Locale): ScienceCopy {
  return science[locale] ?? science.en;
}
