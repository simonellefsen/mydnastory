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
    tmrca?: string;
    ci95?: string;
  };
  haploPath?: Record<string, { copy?: string; yearLabel?: string }>;
  motherlineMapCaption?: string;
  motherlineSpotlights?: { title: string; copy: string }[];
  yHaplogroup?: {
    formed?: string;
    headline?: string;
    known?: string;
    rarityNote?: string;
    tmrca?: string;
    ci95?: string;
  };
  yHaploPath?: Record<string, { copy?: string; yearLabel?: string }>;
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
      known: "Sverige 8, Finland 1",
      rarityNote:
        "Femten testere sidder på U5b1b1a+7385+16519. mtFull-FASTA’en bekræfter T16144C, A7385G og T16519C mod rCRS. Forælderen +7385 er en stor nordøstlig familie (Finland, Sverige, Norge, Sápmi). Denne extra-mutationskvist er svensk og middelalderlig.",
    },
    haploPath: {
      L: {
        copy: "Mitokondriel Eva i bred forstand: moren til alle levende mitokondrielle linjer. Ikke den første kvinde. En flaskehals på én tråd.",
      },
      L3: {
        copy: "L3 er den afrikanske mor til de to linjer, der gik ud: N og M. Herfra går historien nordpå.",
      },
      N: {
        copy: "N er den eurasiske dør. De fleste europæiske morlinjer, inklusive U, sidder nedstrøms.",
      },
      U: {
        copy: "U er en gammel europæisk familie. Dens døtre jagede i istidens Europa længe før agerbruget.",
      },
      U5: {
        copy: "U5 er den klassiske vestlige jæger-samler-morlinje. Is, refugier, og senere de første bosættere i et tøende nord.",
      },
      U5b: {
        copy: "U5b er den vestlige søster til U5a. Mesolitisk Britannien, Skandinavien og Atlanterhavskysten bærer den stadig.",
      },
      U5b1: {
        copy: "Cheddar Man sidder på U5b1. Efter isen er grenen allerede i Britannien og Nordsø-verdenen.",
      },
      U5b1b1: {
        copy: "Fannerup 855, en mesolitisk mand fra Jylland, sidder her. Morlinjen er allerede dansk tusinder af år før den kvist, testerne lever på.",
      },
      U5b1b1a: {
        copy: "T16144C. Mitotree (juli 2026) daterer dette knudepunkt til omkring 1415 f.Kr. Levende testere samler sig i Finland, så Sverige og Norge — en nordøstlig bronzealderfamilie, endnu ikke en svensk folketælling.",
      },
      "U5b1b1a+7385": {
        copy: "A7385G, bekræftet i FASTA’en. Omkring 1.300 full-sequence-testere. Jernalderbegravelser ved Levänluhta i Finland sidder her. FASTA’en er på dette egetræ; den sidste ekstra mutation ligger stadig forude.",
      },
      "U5b1b1a+7385+16519": {
        copy: "Den levende kvist. T16519C, en hurtig kontrolregion-ekstra, bekræftet i FASTA’en. Mitotree daterer den seneste kvinde på netop denne gren til 836 e.Kr. (505–1127). Femten testere; otte nævner Sverige, én Finland. Sekvensen selv forbliver privat.",
      },
    },
    motherlineMapCaption:
      "En skematisk vandring: Østafrika → Nærorienten → haplogruppe U → U5 i istidens Europa → et stort nordøstligt +7385-egetræ → en svensk middelalderkvist. Ikke et GPS-spor — en mitokondriel datterrute.",
    motherlineSpotlights: [
      {
        title: "En svensk kvist",
        copy: "Femten testere på U5b1b1a+7385+16519. Otte nævner Sverige, én Finland. FASTA’en bekræfter de tre ekstra mod rCRS. Mitotrees ur for den sidste kvinde er 836 e.Kr. (505–1127).",
      },
      {
        title: "U5 før markerne",
        copy: "U5 er jæger-samlernes morlinje i Vesteuropa. Cheddar Man, Motala og en mesolitisk dansker i Fannerup sidder alle på ældre U5b-grene af samme familie. FASTA’en er et helt mt-genom; de ældre knudepunkter sidder i sekvensen sammen med de svenske ekstra.",
      },
      {
        title: "En dronning på U5b1",
        copy: "Mechtilde af Holsten, Danmarks dronning i det trettende århundrede, deler U5b1 — ikke middelalderkvisten, det ældre knudepunkt ved 12.000 f.Kr. En sjov kendsgerning, ikke en kusine.",
      },
    ],
    yHaplogroup: {
      formed: "forgrenede sig fra R-S7293 omkring 1050 f.Kr.",
      headline: "En sjælden paternel kvist, dateret til omkring 1500 e.Kr.",
      known: "Norge 2, England 1",
      rarityNote:
        "Tre Big Y-testere på R-BY67151. FamilyTreeDNA lister 32 ækvivalente SNP’er for kvisten; februar 2020-Big Y-VCF’en kalder dem alle afledte. Linjen forlod det store DF13-egetræ ved FTT9 i tidlig bronzealder og tyndede ud gennem BY197676 og S7293. Autosomerne er 99 % skandinaviske. Y er atlantisk.",
    },
    yHaploPath: {
      "Y-Adam": {
        copy: "Faderen til alle levende Y-linjer, i samme flaskehals-forstand som mitokondriel Eva. Ikke den første mand.",
      },
      BT: {
        copy: "BT er stammen, de fleste mænd uden A00 sidder på. Herfra begynder vandringen ud af Afrika.",
      },
      F: {
        copy: "F er den eurasiske udstråling. G, H, I, J og K forgrener sig alle fra dette nabolag.",
      },
      P: {
        copy: "P er far til Q og R. Steppen og Amerika sidder nedstrøms for dette knudepunkt, på forskellige sønner.",
      },
      "R-M207": {
        copy: "Haplogruppe R. Én søn bliver R1a, en anden R1b. Simons linje er R1b.",
      },
      "R-M343": {
        copy: "R1b. Tutankhamon placeres på dette oldtidsknudepunkt — en sjov kendsgerning om 17.000 f.Kr., ikke Det Nye Rige.",
      },
      "R-P312": {
        copy: "P312 er den vestlige klokkebæger-farlinje. Det er den dør, R1b tog ind i Atlanterhavseuropa. Darwin og Crick sidder på det ældre R-M269; P312 er sønnen, der gik vestpå.",
      },
      "R-L21": {
        copy: "L21 er den store atlantiske gren af P312. Den er almindelig i Storbritannien og Irland og findes i Bretagne og Norge. Her forlader Simons Y det generelle vestlige R1b og tager den insulære dør.",
      },
      "R-DF13": {
        copy: "DF13 er et egetræ: titusindvis af levende testere og hundredvis af oldtidsgenomer. Tidlig bronzealdermænd ved Rathlin, Yarnton og Amesbury sidder på dette knudepunkt. Simons linje er ved at forlade egetræet.",
      },
      "R-FTT9": {
        copy: "Udtyndingen. FamilyTreeDNAs træ (august 2026) sætter femten Big Y-testere på FTT9, mod titusinder på DF13. England, Norge, Skotland. En sjælden tidlig bronzealder-forgrening, ikke et slægtsnavn.",
      },
      "R-BY197676": {
        copy: "Ni testere. England og Norge. Uret her er midten af bronzealderen. Februar 2020-VCF’en kalder otte af de ni ækvivalente SNP’er afledte i høj kvalitet; den niende er afledt ved lavere dybde.",
      },
      "R-S7293": {
        copy: "Seks Big Y-testere, så et split. Thomas Powys sidder på søstergrenen R-FT287223. Simon sidder på BY67151. Omkring 1 ud af 120.000 testere deler et knudepunkt så tæt. Stadig en metalalder-forgrening, ikke en retssal.",
      },
      "R-BY67151": {
        copy: "Tre testere. Norge 2, England 1. FamilyTreeDNAs ur for den sidste mand på netop denne gren er 1482 e.Kr. (95 % interval 1168–1703). Toogtredive ækvivalente SNP’er; 2020-Big Y-VCF’en har dem alle afledte. En senmiddelalderlig paternel familie på et atlantisk Y, inde i et 99 % skandinavisk autosomalt genom.",
      },
    },
    fatherlineMapCaption:
      "En skematisk vandring: Østafrika → R1b → klokkebæger P312 → atlantisk L21/DF13 → den tynde FTT9-gren → en senmiddelalderlig kvist med testere i Norge og England. Ikke en slægtsnavnehistorie. En Y-rute af sønner.",
    fatherlineSpotlights: [
      {
        title: "Et atlantisk Y",
        copy: "P312, L21 og DF13 er klokkebægertidens vestlige egetræ af R1b. Simons autosomer ligner ikke britiske. Hans Y sidder alligevel på det egetræ — én paternel tråd, ikke resten af genomet.",
      },
      {
        title: "Egetræet tynder ud",
        copy: "FTT9 har femten Big Y-testere. BY197676 har ni. S7293 har seks. BY67151 har tre. Februar 2020-regionsfilen dækker 14,9 millioner baser af chrY; de navngivne terminale SNP’er er alle afledte dér.",
      },
      {
        title: "En dommer på søstergrenen",
        copy: "Thomas Powys (1649–1719) er R-FT287223, den anden søn af S7293. FamilyTreeDNA tæller det stadig som en sjælden bemærkelsesværdig forbindelse. Tre tusinde år af fædre, ikke en retssal.",
      },
    ],
    ancientOrigins: {
      hunter: {
        when: "Fra ca. 45.000 år siden",
        summary:
          "Næsten halvdelen af Simons europæiske autosomale afstamning ligner stadig de første moderne mennesker, der gik ind på et tøende kontinent — det samme dybe lag som i La Brana, Loschbour og Motala.",
        detail:
          "FamilyTreeDNAs jæger-samler-komponent er deres stand-in for vestlige jæger-samlere. Niogfyrre procent er højt for en nulevende nordeuropæer. Morlinjen U5 er selv en klassisk jæger-samler-morfamilie i mesolitisk Europa — Cheddar Man, Motala, Fannerup — så autosomer og mitokondrier rimer, uden at være den samme kendsgerning.",
      },
      farmer: {
        when: "Ca. 8.000–7.000 år siden",
        summary: "Hvede, keramik og faste dale. Bønder flyttede fra Nærorienten langs Anatolien ind i Donau og videre mod Spanien.",
        detail:
          "Niogtredive procent følger den ekspansion — linjebåndkeramik og tragtbægerverdener, der lavede Europas kost og gener om. Ötzi sidder på den brede bondebevægelse. Hos nulevende skandinaver er bondelaget som regel stort; her er det den anden stemme, ikke den første.",
      },
      invader: {
        when: "Ca. 5.800 år siden",
        summary:
          "En mindre puls fra den pontisk-kaspiske steppe: heste, vogne og bronze. FamilyTreeDNAs navn er dramatisk; den akademiske etiket er Yamnaya-relateret afstamning.",
        detail:
          "Tolv procent er beskedent ved siden af jæger-halvdelen. Den paternelle haplogruppe er til gengæld R1b — den Y-familie, der red steppeekspansionen ind i Vesteuropa. Autosomer og Y behøver ikke at fylde det samme. En enkelt farlinje kan sidde på et steppe-Y, mens resten af genomet blev nordligt.",
      },
    },
    connectionsLede:
      "FamilyTreeDNA lister bemærkelsesværdige og arkæologiske personer, der deler en Y- eller mitokondriel ane med Simon. Det er ikke fætre i nogen families forstand. Levende matchnavne vises ikke her.",
    connections: {
      powys: {
        blurb:
          "Kronjurist og dommer i det sene stuartske England, blandt andet i retssagen mod de syv biskopper. Hans Big Y-kvist er R-FT287223, søster til Simons R-BY67151. De deler R-S7293, et paternel knudepunkt i metalalderen. FamilyTreeDNA tæller den nærhed som omkring 1 ud af 120.000 testere. Ikke en juridisk ane. En forgrening ved 1050 f.Kr.",
      },
      darwin: {
        blurb:
          "Naturforskeren bag On the Origin of Species. Det fælles Y-knudepunkt er R-M269, den store vesteuropæiske farlinje, omkring 4450 f.Kr. De fleste vesteuropæiske mænd sidder et sted på det egetræ. En sjov kendsgerning i dyb tid, ikke en billet til Beagle.",
      },
      crick: {
        blurb:
          "Medopdageren af dobbelthelixen. Igen er det fælles knudepunkt R-M269 ved 4450 f.Kr. — den samme vesteuropæiske Y-familie, ikke Cavendish-laboratoriet.",
      },
      tut: {
        blurb:
          "Drengeskongen af det attende dynasti. FamilyTreeDNA placerer den fælles paternelle ane ved R-M343 (R1b), omkring 17.000 f.Kr. Det er istidens fader til vesteuropæisk R1b, ikke Kongernes Dal.",
      },
      rathlin: {
        blurb:
          "En tidlig bronzealdermand fra Rathlin Island (Cassidy m.fl. 2016). Hans Y er R-DF21, en bror til Simons FTT9 under det samme DF13-egetræ. Omkring 1 ud af 9 testere deler et knudepunkt så bredt. Et klokkebæger-irsk genom på den atlantiske farlinje — ikke en viking, og ikke en nær fætter.",
      },
      fannerup: {
        blurb:
          "En mesolitisk mand fra Fannerup på Jylland (Allentoft m.fl. 2024). Han sidder på U5b1b1, to trin over Simons levende kvist. Omkring 1 ud af 148 testere deler et knudepunkt så tæt. En dansk jæger-samler i samme morlinjefamilie, fem tusinde år før 836 e.Kr.",
      },
      levanluhta: {
        blurb:
          "En jernalderbegravelse i en finsk kilde (Lamnidis m.fl. 2018). Genomet er U5b1b1a1, en søster til Simons 16519-kvist under A7385G. Det fælles knudepunkt er omkring 1205 f.Kr. Et nordøstligt egetræ, ikke en svensk landsby, og ikke et levende match.",
      },
      cheddar: {
        blurb:
          "Mesolitisk Britannien, før markerne. Cheddar Man er U5b1. Simons linje er en langt senere svensk datter af den samme istidsmor. Mørk hud og blå øjne i den genomiske rekonstruktion er hans historie, ikke Simons ansigt.",
      },
      mechtilde: {
        blurb:
          "Danmarks dronning som hustru til Abel. Det fælles maternelle knudepunkt er U5b1 ved 12.000 f.Kr. — samme dybde som Cheddar Man, ikke det trettende århundredes hof. En krone på en gammel jæger-samler-morlinje.",
      },
      vistegutten: {
        blurb:
          "Viste-drengen, Norges bedst bevarede stenalderskelet, fra Vistehola i Rogaland. Det fælles knudepunkt er U5a'b ved 28.000 f.Kr. Et mesolitisk norsk barn på den brede U5-familie, ikke den svenske middelalderkvist.",
      },
      motala: {
        blurb:
          "Motala 1, en mesolitisk kvinde fra bopladsen ved Vättern. Igen U5a'b — istidsmoren til U5a og U5b. Jæger-samler-Sverige for syv tusinde år siden.",
      },
      byrsa: {
        blurb:
          "Ariche, en ung fønikisk mand begravet på Byrsa-højen i Karthago. Fælles knude U5b ved 20.000 f.Kr. En punisk begravelse på en europæisk jæger-samler-morlinje, der allerede havde gået langt fra isen.",
      },
      neanderthal: {
        blurb:
          "Hvert nulevende menneske deler denne dybde på det mitokondrielle træ, og hver nulevende mand deler det tilsvarende Y-skel. En fætter på en langt ældre hominin-gren, ikke en privat familiehemmelighed.",
      },
    },
    genomePainting:
      "Chippen læser autosomer og X — 725.276 SNP’er her. En søns X er det X, hans mor gav ham. Y er ikke på dette microarray; det blev sekventeret separat som Big Y. Februar 2020-regionsfilen dækker 14,9 millioner baser af chrY, der bestod QC. Alle 32 ækvivalente SNP’er for R-BY67151 er afledte i den VCF. mtFull-FASTA’en er et komplet rCRS-alignet genom og bekræfter T16144C, A7385G og T16519C; sekvensen forbliver privat. Maleriet på kontinentskala er skandinavisk, med to spor under én procent.",
  },
};

export const daComingTeaser = "Det første kit lander her. Samme fornavnsregel, samme kapitler.";
