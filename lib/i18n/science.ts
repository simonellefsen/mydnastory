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
  beyond: {
    kicker: string;
    title: string;
    accent: string;
    lede: string;
    modelTitle: string;
    modelCopy: string;
    traitTitle: string;
    traitLede: string;
    hetTitle: string;
    hetCopy: (name: string, pct: string) => string;
    rohTitle: string;
    rohCopy: (n: string, longest: string) => string;
    missing: string;
    derivedHom: string;
    het: string;
    ancestralHom: string;
    traits: Record<string, { label: string; note: string }>;
  };
  ibd: {
    kicker: string;
    title: string;
    accent: string;
    lede: (cm: string, segs: string, x: string) => string;
    expected: string;
    empty: string;
    hover: string;
    chrom: (id: string, cm: string, n: string) => string;
    note: string;
    silent: string;
  };
};

export const science: Record<Locale, ScienceCopy> = {
  en: {
    twigs: {
      H10a1u: {
      kicker: "A closer look at H10a1u",
      title: "A thousand-year twig",
      accent: " on a three-thousand-year thread.",
      lede: "FamilyTreeDNA dates the living mother of H10a1u to about 1090 CE. That is young. The mutation itself is not. The interesting part is the silence in between.",
      image: "/images/medieval-denmark.jpg",
      imageAlt: "A reconstructed medieval Danish village of turf-roofed timber houses by a winter fjord, with a small wooden church at dusk",
      cards: [
        {
          title: "2250 BCE, then a long hush",
          copy: "H10a1u branched from H10a1 in the Early Bronze Age. FamilyTreeDNA needs at least two non-identical testers before it names a twig, so 1090 CE is the most recent woman shared by the four people on the branch today — not the year the mutation appeared. For about three millennia the line survived as a thin thread. Most of her Bronze Age sisters left larger families. This one did not, until a medieval Danish woman whose daughters still have testers.",
        },
        {
          title: "A clock on four people",
          copy: "The 95% interval is 687–1422 CE: late Viking Age through the High Middle Ages. With only four testers the clock is noisy; add a tester and the date will move. Two of the four name Denmark. No ancient genome has been called H10a1u itself — the twig is too rare and too recent for archaeology to have caught it yet.",
        },
        {
          title: "H10 came with the fields",
          copy: "Haplogroup H was almost absent in Mesolithic hunter-gatherers and rose as farming spread. A 2013 Nature Communications study of ancient H genomes found that much of today’s H diversity was already in place by the mid-Neolithic. H10 itself turns up among Early Neolithic farmers in Central Europe. A 2018 study of 24,216 Danes found haplogroup H in about 45% of the country, the product of several Neolithic founder events, not one village.",
        },
        {
          title: "H10a1 walked the Bronze Age",
          copy: "The parent branch is a Central European Bronze Age family: Únětice in Lower Austria, Kisapostag in Hungary, Trzciniec in Poland, later a Viking Age man at Bogøvej on Langeland (CGG106777). That is the corridor that eventually reaches Denmark. Pernille’s H10a1u is one named daughter of that family, not a separate origin story.",
        },
        {
          title: "Around 1100 CE in Denmark",
          copy: "If the living root sat in Denmark, she lived after official Christianization, in the century of stone churches and early royal administration — the world that becomes the Valdemars. Mitochondria cannot prove her parish. They can say the surviving daughters of this twig still point here.",
        },
        {
          title: "A Mitotree name",
          copy: "H10a1u is a FamilyTreeDNA Mitotree label. YFull’s public MTree currently splits H10a1 into other letters (H10a1a, H10a1c, H10a1d…) and does not list a u. Fine-scale names move as more full sequences arrive. The biology is the shared mutations; the letter is a filing system.",
        },
      ],
      papers: [
        {
          cite: "Brotherton et al., Nature Communications 2013",
          point: "Ancient haplogroup H genomes: H rare in Mesolithic Europe, diversified by the mid-Neolithic.",
        },
        {
          cite: "Bybjerg-Grauholm et al., PLOS ONE 2018",
          point: "24,216 Danes: H ~45%, multiple founder events; H carriers look strongly Danish on the autosomes.",
        },
        {
          cite: "Allentoft et al., Nature 2024",
          point: "100 ancient Danish genomes: Ertebølle hunter-gatherers replaced by Funnelbeaker farmers, then by steppe-related people. Local Mesolithic DNA left little in later Danes.",
        },
      ],
      },
      H1e1b1f1: {
        kicker: "A closer look at H1e1b1f1",
        title: "A Viking-Age twig",
        accent: " on a Late Neolithic family.",
        lede: "FamilyTreeDNA dates the living mother of H1e1b1f1 to about 950 CE. That is the late Viking Age. The parent branch is more than two millennia older. Fifteen testers, not four — and this time the parent family already has names in the Danish Middle Ages.",
        image: "/images/viking-age-denmark.jpg",
        imageAlt: "A late tenth-century Danish coastal settlement of turf-roofed longhouses by a grey fjord at dusk",
        cards: [
          {
            title: "1700 BCE, then a long hush",
            copy: "H1e1b1f1 branched from H1e1b1f in the Bronze Age — FamilyTreeDNA’s mean is 1705 BCE (95% 2455–1022 BCE). The 950 CE date is the most recent woman shared by the fifteen testers on this named twig, not the year the mutation appeared. YFull defines the parent H1e1b1f by A9545G and makes it younger (formed ~300 BCE, TMRCA ~1200 CE). Clocks disagree; the biology is a thin northern thread that only bushy-tips in the last thousand years.",
          },
          {
            title: "A clock on fifteen people",
            copy: "The 95% interval is 717–1176 CE: mid-Viking Age through the early Valdemars. Fifteen testers tighten the clock relative to a four-person twig. Six name Denmark, two Norway, one Sweden, six unknown. The living geography is Scandinavian. No ancient genome has been called H1e1b1f1 itself — the last letter is too young — but the parent family is already on Danish ground in the Middle Ages.",
          },
          {
            title: "H1 is the great western daughter",
            copy: "H1 is marked by G3010A and is the largest European daughter of H. A 2005 Genome Research study placed its expansion in post-glacial western Europe, with a strong Iberian signal. In Denmark H1 is common: about 15% of a forensic Danish sample, and H1 makes up roughly 38% of all H in 24,216 Danes. H1e (G5460A) is much rarer there — about 0.5% in that forensic set. Helle’s line is a late northern leaf on a very large western tree.",
          },
          {
            title: "H1e1b1 walked the Iron Age",
            copy: "The closer archaeological kin sit at H1e1b1, around 3350 BCE: an Early Iron Age woman at Stambolovo in Bulgaria (I15848, Lazaridis 2022), an ~11-year-old Thuringian girl at Brücken in Saxony-Anhalt (436–542 CE, Gretzinger 2025), and several Late Avar burials at Mödling–Goldene Stiege in Lower Austria (600–800 CE, Wang 2025). That is a Central European motherline that later has a Scandinavian named daughter — not a line that began in a Viking hall.",
          },
          {
            title: "Already in Denmark around 950",
            copy: "YFull places an ancient Danish mitogenome (MK059610) on H1e1b1f, and a sister twig H1e1b1d is a cluster of Danish sequences. An early medieval burial at Sankt Mathias has been called H1e1b1. The parent family was in Denmark in the same centuries as the living TMRCA. If the woman around 950 CE sat in Scandinavia, she lived in Harald Bluetooth’s and Sweyn Forkbeard’s world — conversion, royal power, and the North Sea as a road.",
          },
          {
            title: "Beethoven is not H1e1",
            copy: "FamilyTreeDNA still lists Ludwig van Beethoven as an H1e1 “notable connection.” Hair sequenced in 2023 (Begg et al., Current Biology) is haplogroup H1b1+16362C. The shared node with Helle is H1, around 5200 BCE, not H1e1. Discover pages lag published genomes. The fun fact survives only one step higher on the tree.",
          },
        ],
        papers: [
          {
            cite: "Pereira et al., Genome Research 2005",
            point: "H1 and H3 as post-glacial western European expansions, with a strong Iberian signal.",
          },
          {
            cite: "Bybjerg-Grauholm et al., PLOS ONE 2018",
            point: "24,216 Danes: H ~45%; H1 is the largest H subclade in the country.",
          },
          {
            cite: "Begg et al., Current Biology 2023",
            point: "Beethoven’s authentic hair is H1b1+16362C, not the H1e1 that some public trees still show.",
          },
          {
            cite: "Lazaridis et al. 2022; Gretzinger et al. 2025; Wang et al. 2025",
            point: "Ancient H1e1b1 in Iron Age Bulgaria, Thuringian Saxony-Anhalt, and Avar-period Mödling.",
          },
        ],
      },
    },
    beyond: {
      kicker: "Beyond myOrigins",
      title: "What the chip still holds.",
      accent: " FamilyTreeDNA did not plot this.",
      lede: "The raw autosomal file is a map of 700,000 sites. Ethnicity percentages are one reading of it. Newer population genomics — and a grandmother sitting on the same chip — let us read others.",
      modelTitle: "The three-way mix is not the academic three-way",
      modelCopy:
        "FamilyTreeDNA splits European autosomes into Hunter-Gatherer, Early Farmer, and Metal Age Invader. Since Haak 2015 and Allentoft 2024 the research model is different: Western hunter-gatherers (WHG), Anatolian farmers, and Yamnaya-related steppe (itself Eastern hunter-gatherers plus Caucasus). In that framework present-day Danes usually carry a large farming layer, a substantial steppe layer, and a smaller WHG layer. A 50% “hunter-gatherer” / 13% “invader” result is a proprietary clustering, not evidence that half the genome is Ertebølle. The 2024 Danish transect shows two near-total turnovers: local Mesolithic people left little. Most “forager” ancestry in a modern Dane arrived with farmers from the south, or folded inside steppe ancestry from the east.",
      traitTitle: "Ancestry-informative sites on the chip",
      traitLede:
        "A handful of well-studied SNPs were typed. These are population associations, not a medical report and not a portrait.",
      hetTitle: "Diversity on the array",
      hetCopy: (name, pct) =>
        `${name}’s called markers are ${pct}% heterozygous. That is a normal European figure on this kind of microarray, which is enriched for common variants.`,
      rohTitle: "Runs of homozygosity",
      rohCopy: (n, longest) =>
        `${n} stretches longer than 1.5 Mb, longest ${longest} cM. That pattern fits a northern European without a recent cousin marriage — not a closed village.`,
      missing: "Not on this chip",
      derivedHom: "Homozygous for the derived allele",
      het: "Heterozygous",
      ancestralHom: "Homozygous for the ancestral allele",
      traits: {
        lactase: {
          label: "Lactase persistence",
          note: "European -13910C>T. TT/CT associated with digesting milk in adulthood.",
        },
        eyes: {
          label: "Eye colour",
          note: "GG strongly associated with blue/grey eyes in Europeans; AA with brown.",
        },
        skin24a5: {
          label: "Light skin (SLC24A5)",
          note: "The A allele is nearly fixed in Europe and is the main light-skin variant.",
        },
        skin45a2: {
          label: "Light skin (SLC45A2)",
          note: "European light-skin allele; still variable in southern Europe.",
        },
        irf4: {
          label: "Hair / freckling",
          note: "T associated with lighter hair and freckling in Europeans.",
        },
        mc1r7: {
          label: "Red hair (R151C)",
          note: "A well-known red-hair loss-of-function allele.",
        },
        mc1r8: {
          label: "Red hair (R160W)",
          note: "A second common red-hair allele.",
        },
        earwax: {
          label: "Earwax type",
          note: "TT dry earwax (East Asian); CC wet earwax (typical in Europe).",
        },
        edar: {
          label: "EDAR V370A",
          note: "East Asian hair-thickness allele; ancestral in Europe.",
        },
        secretor: {
          label: "ABO secretor status",
          note: "AA associated with non-secretor status in Europeans.",
        },
      },
    },
    ibd: {
      kicker: "Shared haplotypes",
      title: "The DNA Helle actually passed.",
      accent: " Not an ethnicity pie.",
      lede: (cm, segs, x) =>
        `Where the two kits cannot be opposite homozygotes for a long run, they can still share a haplotype. Those candidate segments sum to ${cm} cM on the autosomes (${segs} stretches) and ${x} cM on X. A paternal grandmother is expected to share about 1,500–2,000 cM autosomally, in a handful of long pieces broken by recombination in the father.`,
      expected: "Grandmother–granddaughter expectation",
      empty: "No long segment on this chromosome — the father likely passed the other grandfather’s copy, or only scraps below the length threshold.",
      hover: "Each amber block is a run without opposite homozygotes, ≥5 cM.",
      chrom: (id, cm, n) => `Chromosome ${id} · ${cm} cM in ${n} segment${n === "1" ? "" : "s"}`,
      note: "Unphased identity-by-state, gaps over 1 Mb break a run, lengths from a sex-averaged chromosome map. This is not FamilyTreeDNA’s match list and not a court exhibit. Opposite sites cannot sit inside a shared segment. Two opposite calls on X are more likely chip errors than a break in a father’s X.",
      silent: "No long IBD",
    },
  },
  da: {
    twigs: {
      H10a1u: {
      kicker: "Et nærmere kig på H10a1u",
      title: "En tusindårig kvist",
      accent: " på en tretusindårig tråd.",
      lede: "FamilyTreeDNA daterer den nulevende mor til H10a1u til omkring 1090 e.Kr. Det er ungt. Mutationen selv er det ikke. Det interessante er stilheden derimellem.",
      image: "/images/medieval-denmark.jpg",
      imageAlt: "En rekonstrueret middelalderlig dansk landsby med tømmerhuse og tørvetage ved en vinterfjord, med en lille trækirke i skumringen",
      cards: [
        {
          title: "2250 f.Kr., derefter en lang stilhed",
          copy: "H10a1u forgrenede sig fra H10a1 i ældre bronzealder. FamilyTreeDNA kræver mindst to ikke-identiske testere, før en kvist får navn, så 1090 e.Kr. er den seneste kvinde, de fire nulevende på grenen deler — ikke året mutationen opstod. I omkring tre årtusinder overlevede linjen som en tynd tråd. De fleste bronzealder-søstre efterlod større familier. Denne gjorde ikke, før en middelalderlig dansk kvinde, hvis døtre stadig har testere.",
        },
        {
          title: "Et ur på fire mennesker",
          copy: "95 %-intervallet er 687–1422 e.Kr.: sen vikingetid gennem højmiddelalderen. Med kun fire testere er uret støjende; én tester mere, og datoen rykker. To af de fire nævner Danmark. Intet oldtidsgenom er kaldt H10a1u — kvisten er for sjælden og for ung til, at arkæologien har fanget den endnu.",
        },
        {
          title: "H10 kom med markerne",
          copy: "Haplogruppe H var næsten fraværende hos mesolitiske jæger-samlere og steg, da agerbruget spredte sig. Et Nature Communications-studie fra 2013 af oldtidens H-genomer viste, at meget af nutidens H-diversitet allerede var på plads i mellemneolitikum. H10 selv dukker op blandt tidlige neolitiske bønder i Centraleuropa. Et studie fra 2018 af 24.216 danskere fandt haplogruppe H hos omkring 45 % af landet, resultatet af flere neolitiske grundlæggerbegivenheder, ikke én landsby.",
        },
        {
          title: "H10a1 vandrede i bronzealderen",
          copy: "Forældregrenen er en centraleuropæisk bronzealderfamilie: Únětice i Niederösterreich, Kisapostag i Ungarn, Trzciniec i Polen, senere en vikingetidsmand fra Bogøvej på Langeland (CGG106777). Det er korridoren, der til sidst når Danmark. Pernilles H10a1u er en navngiven datter af den familie, ikke en separat oprindelseshistorie.",
        },
        {
          title: "Omkring 1100 e.Kr. i Danmark",
          copy: "Hvis den nulevende rod sad i Danmark, levede hun efter den officielle kristning, i århundredet med stenkirker og tidlig kongelig administration — den verden, der bliver Valdemarernes. Mitokondrier kan ikke bevise hendes sogn. De kan sige, at de overlevende døtre af denne kvist stadig peger herhen.",
        },
        {
          title: "Et Mitotree-navn",
          copy: "H10a1u er en FamilyTreeDNA Mitotree-etiket. YFulls offentlige MTree splitter i øjeblikket H10a1 i andre bogstaver (H10a1a, H10a1c, H10a1d…) og lister ikke et u. De finkornede navne rykker, efterhånden som flere fulde sekvenser kommer. Biologien er de fælles mutationer; bogstavet er et arkivsystem.",
        },
      ],
      papers: [
        {
          cite: "Brotherton m.fl., Nature Communications 2013",
          point: "Oldtidens haplogruppe H-genomer: H sjælden i mesolitisk Europa, diversificeret i mellemneolitikum.",
        },
        {
          cite: "Bybjerg-Grauholm m.fl., PLOS ONE 2018",
          point: "24.216 danskere: H ~45 %, flere grundlæggerbegivenheder; H-bærere ser stærkt danske ud på autosomerne.",
        },
        {
          cite: "Allentoft m.fl., Nature 2024",
          point: "100 olddanske genomer: Ertebølle-jægere afløst af tragtbægerbønder, derefter af steppe-beslægtede. Lokalt mesolitisk DNA efterlod lidt i senere danskere.",
        },
      ],
      },
      H1e1b1f1: {
        kicker: "Et nærmere kig på H1e1b1f1",
        title: "En vikingetidskvist",
        accent: " på en senneolitisk familie.",
        lede: "FamilyTreeDNA daterer den nulevende mor til H1e1b1f1 til omkring 950 e.Kr. Det er sen vikingetid. Forældregrenen er mere end to årtusinder ældre. Femten testere, ikke fire — og denne gang har forældrefamilien allerede navne i den danske middelalder.",
        image: "/images/viking-age-denmark.jpg",
        imageAlt: "En dansk kystbebyggelse fra slutningen af 900-tallet med tørretækte langhuse ved en grå fjord i skumringen",
        cards: [
          {
            title: "1700 f.Kr., derefter en lang stilhed",
            copy: "H1e1b1f1 forgrenede sig fra H1e1b1f i bronzealderen — FamilyTreeDNAs middel er 1705 f.Kr. (95 % 2455–1022 f.Kr.). Datoen 950 e.Kr. er den seneste kvinde, de femten testere på denne navngivne kvist deler, ikke året mutationen opstod. YFull definerer forælderen H1e1b1f ved A9545G og gør den yngre (dannet ~300 f.Kr., TMRCA ~1200 e.Kr.). Uhrene er uenige; biologien er en tynd nordlig tråd, der først busker i det sidste årtusind.",
          },
          {
            title: "Et ur på femten mennesker",
            copy: "95 %-intervallet er 717–1176 e.Kr.: midt-vikingetid gennem de tidlige Valdemarer. Femten testere strammer uret i forhold til en kvist med fire. Seks nævner Danmark, to Norge, én Sverige, seks ukendt. Den levende geografi er skandinavisk. Intet oldtidsgenom er kaldt H1e1b1f1 — det sidste bogstav er for ungt — men forældrefamilien er allerede på dansk jord i middelalderen.",
          },
          {
            title: "H1 er den store vestlige datter",
            copy: "H1 er mærket af G3010A og er den største europæiske datter af H. Et Genome Research-studie fra 2005 lagde dens ekspansion i postglacialt Vesteuropa, med et stærkt iberisk signal. I Danmark er H1 almindelig: omkring 15 % af et forensisk dansk sample, og H1 udgør groft 38 % af al H hos 24.216 danskere. H1e (G5460A) er langt sjældnere dér — omkring 0,5 % i det forensiske sæt. Helles linje er et sent nordligt blad på et meget stort vestligt træ.",
          },
          {
            title: "H1e1b1 vandrede i jernalderen",
            copy: "De tættere arkæologiske slægtninge sidder ved H1e1b1, omkring 3350 f.Kr.: en tidlig jernalderkvinde i Stambolovo i Bulgarien (I15848, Lazaridis 2022), en ca. 11-årig thüringisk pige i Brücken i Sachsen-Anhalt (436–542 e.Kr., Gretzinger 2025) og flere senavariske begravelser ved Mödling–Goldene Stiege i Niederösterreich (600–800 e.Kr., Wang 2025). Det er en centraleuropæisk morlinje, der senere får en skandinavisk navngiven datter — ikke en linje der begyndte i en vikingehal.",
          },
          {
            title: "Allerede i Danmark omkring 950",
            copy: "YFull placerer et olddansk mitogenom (MK059610) på H1e1b1f, og en søsterkvist H1e1b1d er en klynge af danske sekvenser. En tidlig middelalderlig begravelse ved Sankt Mathias er kaldt H1e1b1. Forældrefamilien var i Danmark i de samme århundreder som den nulevende TMRCA. Hvis kvinden omkring 950 e.Kr. sad i Skandinavien, levede hun i Harald Blåtands og Svend Tveskægs verden — omvendelse, kongemagt og Nordsøen som vej.",
          },
          {
            title: "Beethoven er ikke H1e1",
            copy: "FamilyTreeDNA lister stadig Ludwig van Beethoven som en H1e1-“bemærkelsesværdig forbindelse.” Hår sekventeret i 2023 (Begg m.fl., Current Biology) er haplogruppe H1b1+16362C. Det fælles knudepunkt med Helle er H1, omkring 5200 f.Kr., ikke H1e1. Discover-sider halter efter offentliggjorte genomer. Det sjove faktum overlever kun ét trin højere på træet.",
          },
        ],
        papers: [
          {
            cite: "Pereira m.fl., Genome Research 2005",
            point: "H1 og H3 som postglaciale vesteuropæiske ekspansioner, med et stærkt iberisk signal.",
          },
          {
            cite: "Bybjerg-Grauholm m.fl., PLOS ONE 2018",
            point: "24.216 danskere: H ~45 %; H1 er den største H-undergruppe i landet.",
          },
          {
            cite: "Begg m.fl., Current Biology 2023",
            point: "Beethovens ægte hår er H1b1+16362C, ikke det H1e1 nogle offentlige træer stadig viser.",
          },
          {
            cite: "Lazaridis m.fl. 2022; Gretzinger m.fl. 2025; Wang m.fl. 2025",
            point: "Oldtids-H1e1b1 i jernalderens Bulgarien, thüringisk Sachsen-Anhalt og avar-tidens Mödling.",
          },
        ],
      },
    },
    beyond: {
      kicker: "Bagom myOrigins",
      title: "Det chippen stadig gemmer.",
      accent: " FamilyTreeDNA tegnede ikke dette.",
      lede: "Den rå autosomale fil er et kort over 700.000 steder. Etnicitetsprocenter er én læsning. Nyere populationsgenomik — og en bedstemor på samme chip — lader os læse andre.",
      modelTitle: "Tredelingen er ikke den akademiske tredeling",
      modelCopy:
        "FamilyTreeDNA splitter europæiske autosomer i jæger-samler, tidlig bonde og metalalderens indvandrer. Siden Haak 2015 og Allentoft 2024 er forskningsmodellen en anden: vestlige jæger-samlere (WHG), anatolske bønder og Yamnaya-beslægtet steppe (selv østlige jæger-samlere plus Kaukasus). I den ramme bærer nulevende danskere typisk et stort bondelag, et væsentligt steppelag og et mindre WHG-lag. Et resultat på 50 % “jæger-samler” / 13 % “indvandrer” er en proprietær klynge, ikke bevis for at halvdelen af genomet er Ertebølle. Det danske tværsnit fra 2024 viser to næsten totale udskiftninger: de lokale mesolitiske mennesker efterlod lidt. Det meste “jæger”-afstamning hos en moderne dansker kom med bønder sydfra, eller ligger foldet ind i steppeafstamning østfra.",
      traitTitle: "Afstamningsinformative steder på chippen",
      traitLede:
        "En håndfuld velstuderede SNP’er blev typet. Det er populationsassociationer, ikke en lægeerklæring og ikke et portræt.",
      hetTitle: "Diversitet på arrayet",
      hetCopy: (name, pct) =>
        `${name}s kaldte markører er ${pct} % heterozygote. Det er et normalt europæisk tal på denne slags microarray, som er beriget for almindelige varianter.`,
      rohTitle: "Homozygote stræk",
      rohCopy: (n, longest) =>
        `${n} stræk længere end 1,5 Mb, længst ${longest} cM. Mønstret passer til en nordeuropæer uden et nyligt fætter-ægteskab — ikke en lukket landsby.`,
      missing: "Ikke på denne chip",
      derivedHom: "Homozygot for det afledte allel",
      het: "Heterozygot",
      ancestralHom: "Homozygot for det ancestrale allel",
      traits: {
        lactase: {
          label: "Laktasepersistens",
          note: "Europæisk -13910C>T. TT/CT associeret med at fordøje mælk som voksen.",
        },
        eyes: {
          label: "Øjenfarve",
          note: "GG stærkt associeret med blå/grå øjne hos europæere; AA med brune.",
        },
        skin24a5: {
          label: "Lys hud (SLC24A5)",
          note: "A-allelet er næsten fast i Europa og er den vigtigste lys-hud-variant.",
        },
        skin45a2: {
          label: "Lys hud (SLC45A2)",
          note: "Europæisk lys-hud-allel; stadig variabel i Sydeuropa.",
        },
        irf4: {
          label: "Hår / fregner",
          note: "T associeret med lysere hår og fregner hos europæere.",
        },
        mc1r7: {
          label: "Rødt hår (R151C)",
          note: "Et velkendt rødhårs-allel med tab af funktion.",
        },
        mc1r8: {
          label: "Rødt hår (R160W)",
          note: "Et andet almindeligt rødhårs-allel.",
        },
        earwax: {
          label: "Ørevoks",
          note: "TT tørt ørevoks (østasiatisk); CC vådt ørevoks (typisk i Europa).",
        },
        edar: {
          label: "EDAR V370A",
          note: "Østasiatisk hårtykkelses-allel; ancestralt i Europa.",
        },
        secretor: {
          label: "ABO-sekretorstatus",
          note: "AA associeret med non-sekretorstatus hos europæere.",
        },
      },
    },
    ibd: {
      kicker: "Delte haplotyper",
      title: "Det DNA, Helle faktisk gav videre.",
      accent: " Ikke en etnicitetstærte.",
      lede: (cm, segs, x) =>
        `Hvor de to kits ikke kan være modsatte homozygoter i et langt stræk, kan de stadig dele en haplotype. De kandidat-segmenter summer til ${cm} cM på autosomerne (${segs} stræk) og ${x} cM på X. En fars mor forventes at dele omkring 1.500–2.000 cM autosomalt, i en håndfuld lange stykker brudt af rekombination hos faderen.`,
      expected: "Forventning bedstemor–sønnedatter",
      empty: "Intet langt segment på dette kromosom — faderen har sandsynligvis givet den anden bedstefars kopi videre, eller kun stumper under længdetærsklen.",
      hover: "Hver ravfarvet blok er et stræk uden modsatte homozygoter, ≥5 cM.",
      chrom: (id, cm, n) => `Kromosom ${id} · ${cm} cM i ${n} segment${n === "1" ? "" : "er"}`,
      note: "Ufaselt identity-by-state, huller over 1 Mb bryder et stræk, længder fra et kønsgennemsnitligt kromosomkort. Dette er ikke FamilyTreeDNAs matchliste og ikke et retsdokument. Modsatte steder kan ikke ligge i et delt segment. To modsatte kald på X er snarere chipfejl end et brud i et fars-X.",
      silent: "Ingen lang IBD",
    },
  },
};

export function getScience(locale: Locale): ScienceCopy {
  return science[locale] ?? science.en;
}
