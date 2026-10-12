## Oprava načítání – skutečný produkt 641

Živá stránka je https://www.golden-life.cz/peptides-glp-1-woman-balance-sacek/. Její název v dataLayer je „Peptides GLP-1 Woman Balance sáček“, bez slov Dark Cherry. Původní kontrola názvu vyžadovala Dark Cherry a proto odmítala správný produkt. Oprava se váže na ověřené productId 641 a shodu hlavního formuláře, ne na marketingový název. Oba obrázky mají přímo src autentické hlavní fotografie SKU 641 a fungují i bez JS; skript pak sleduje hlavní galerii. Offline náhled obsahuje tuto fotografii vloženou jako data URI. Texty, krátký popis, tabulky a nákupní bridge nezměněny.

Předchozí poznámky o nenalezené stránce a prázdném offline náhledu jsou historické a touto opravou překonané. Nasazení do uloženého Shoptet popisu je oddělené od Git aktualizace; místní browser-only test se za nasazení nevydává.

---

## Aktuální úprava hlavní fotografie

Původní GitHub výřez se již nezobrazuje v popisu ani CTA. Obě místa přebírají stejný načtený currentSrc hlavního obrázku z galerie hostitelského produktu, pouze pokud jde o sáčkovou Dark Cherry variantu a productId formuláře souhlasí s produktovými daty. Respektují srcset, pozdní načtení, změnu/replacement galerie a chybové stavy; bez ověřené galerie se ukáže neutrální místo fotografie, nikoli krabice jiného SKU. Produktové texty, složení, krátký popis a nákupní bridge beze změny.

Veřejná URL /peptides-glp-1-woman-balance-dark-cherry-sacek/ vrací stránku nenalezeno; uložené nasazení sáčkové stránky proto není ověřené. Offline náhled ukazuje zástupná místa; testování zrcadlení používá výslovně syntetické host identity a reálný referenční packshot pouze jako zkušební data.

---

# Woman Balance Dark Cherry – sáček: pracovní verze

Zdroj: Git main d10077bca83cbcb257f56944cd32aae4a37f2485 a veřejná produktová stránka https://www.golden-life.cz/peptides-glp-1-woman-balance-dark-cherry/.

Předpoklad: 1 samostatný sáček 9 g se stejným složením jako jedna dávka původního balení. Potvrzení přesného SKU a etikety chybí. Živá sáčková URL nebyla nalezena ani ve vyhledávání obchodu.

Fotografie: výřez skutečného sáčku z veřejné fotografie cta.png, bez generování nebo přepisování obalu. Nízké rozlišení; samostatný originál je vhodnější.

Změny: nový krátký a dlouhý popis; 270 g / 30 sáčků -> 9 g / 1 sáček; balení obsahuje 1 denní dávku; nový produktový název a obrázek; odstranění FAQ slibující optimální výsledky pro toto jednodávkové balení; přidání základních povinných upozornění; bezpečný přechod k nákupu pouze při shodě názvu sáčkové varianty a host productId. Původní produkt zůstává beze změny.

Cena, skladovost ani shop SKU nejsou vymyšlené. CTA neodesílá košík, jen přesouvá k nákupu na správném hostu; v náhledu vypnuté.

## Tvrzení a omezení – kontrola před publikací

Produktový info.md ani NOT-ALLOWED.md pro tuto variantu nejsou k dispozici. Následující tvrzení jsou převzatá, nikoli schválená. Schválené znění z produktového souboru nelze doložit. Bezpečná neutrální alternativa: „Doplněk stravy s příchutí Dark Cherry. Balení obsahuje 1 sáček (9 g), tedy 1 denní dávku.“

Kritický konflikt: text cílí na ženy 40+, ale omezení říká „Vhodné pro děti od 8 let“. Neopravováno odhadem; je nutná ověřená etiketa. Další konflikty: „12 složek“ versus delší tabulka složení; „Additives free“ při deklarovaném sladidle, aromatu a barvivech. Nejde o schválenou verzi pro publikaci.

### Dlouhý popis
- NEOVĚŘENO: Peptides GLP-1 Woman Balance Dark Cherry – sáček | Večerní drink pro hormonální rovnováhu | Golden Life
- NEOVĚŘENO: Peptides GLP-1 Woman Balance Dark Cherry – sáček – večerní night drink pro ženskou hormonální rovnováhu, kontrolu chuti a noční regeneraci. S Nextida® GLP One®, myo-inositolem a kolagenem.
- NEOVĚŘENO: Peptides GLP-1 Woman Balance Dark Cherry – sáček | Ženská rovnováha ve večerním rituálu
- NEOVĚŘENO: Night drink s Nextida® GLP One®, inositoly, kolagenem a rostlinnými extrakty pro hormonální rovnováhu, kontrolu chuti a klidný spánek.
- NEOVĚŘENO: Klíč k ženské rovnováze
- NEOVĚŘENO: Funkční komplex inspirovaný GLP-1 přístupem pro kontrolu chuti a metabolickou rovnováhu.
- NEOVĚŘENO: restaurant Podporuje kontrolu chuti k jídlu
- NEOVĚŘENO: autorenew Podporuje metabolickou rovnováhu
- NEOVĚŘENO: verified_user Pečuje o pokožku a noční regeneraci
- NEOVĚŘENO: Nextida® GLP One® je moderní funkční kolagenní komplex inspirovaný GLP-1 přístupem. Podporuje kontrolu chuti k jídlu, pocit sytosti a metabolickou rovnováhu – bez injekcí a agresivních stimulantů.
- NEOVĚŘENO: Kolagenní peptidy se navíc podílejí na péči o pokožku, vlasy a nehty a podporují noční regeneraci organismu zevnitř.
- NEOVĚŘENO: Večerní rituál pro hormonální rovnováhu a metabolický komfort. Lahodný night drink s příchutí třešně.
- NEOVĚŘENO: Peptides GLP-1 Woman Balance spojuje v jednom večerním sáčku 12 složek podporujících ženskou rovnováhu – Nextida® GLP One® , myo-inositol a D-chiro-inositol , kolagenní peptidy , rostlinné extrakty , vlákninu a vitaminy s minerály .
- NEOVĚŘENO: Místo řady jednotlivých doplňků získáte jeden promyšlený večerní rituál, který podporuje hormonální rovnováhu , kontrolu chuti , klidný spánek , noční regeneraci a metabolický komfort . Jeden sáček navečer nahradí až 16 tablet denně.
- NEOVĚŘENO: Hormonální rovnováha
- NEOVĚŘENO: Hormonální rovnováha
- NEOVĚŘENO: Noční kolagen a regenerace
- NEOVĚŘENO: Noční kolagen a regenerace
- NEOVĚŘENO: Klidný spánek
- NEOVĚŘENO: Klidný spánek
- NEOVĚŘENO: Metabolická rovnováha
- NEOVĚŘENO: Metabolická rovnováha
- NEOVĚŘENO: Základem je Nextida® GLP One® – funkční kolagenní komplex inspirovaný GLP-1 přístupem, který podporuje kontrolu chuti k jídlu, pocit sytosti a metabolickou rovnováhu. Myo-inositol a D-chiro-inositol přirozeně doplňují hormonální rovnováhu a ženskou vitalitu, zatímco glukomannan s inulinem Frutafit® podporují trávení, sytost a zdravé střevní prostředí.
- NEOVĚŘENO: Kolagenní peptidy s glycinem pečují o pokožku, vlasy a nehty a podporují noční regeneraci zevnitř. Chrom a zinek doplňují komplex o antioxidační ochranu – vše bez agresivních stimulantů.
- NEOVĚŘENO: Rostlinné extrakty schizandry, ženského ženšenu, kontryhele a pískavice spolu se sójovými izoflavony tradičně podporují ženskou vitalitu, psychickou pohodu a celkovou rovnováhu v období peri- a menopauzy.
- NEOVĚŘENO: Extrakt z višní (Dark Cherry) podporuje klidné usínání a večerní regeneraci. Vitaminy D3, K2 a kyselina listová zajišťují každodenní podporu moderního životního stylu žen.
- NEOVĚŘENO: ✓ Hormonální rovnováha 40+
- NEOVĚŘENO: ✓ Úleva od návalů a teplotní komfort
- NEOVĚŘENO: ✓ Klidný spánek a večerní zklidnění
- NEOVĚŘENO: ✓ Pocit sytosti a kontrola hmotnosti
- NEOVĚŘENO: ✓ Antioxidační ochrana buněk
- NEOVĚŘENO: ✓ Ženská vitalita a libido
- NEOVĚŘENO: ✓ Metabolismus a energie
- NEOVĚŘENO: V období kolem čtyřicítky a v menopauze se začnou dít věci, které nečekáte. Hormony kolísají, přicházejí návaly a výkyvy nálad, hůř se usíná, drží se váha a energie chybí dřív, než den pořádně začne.
- NEOVĚŘENO: Inositoly. Fytohormony. Kolagen. GLP-1 peptidy. Klidný spánek.
- NEOVĚŘENO: Pocit rovnováhy
- NEOVĚŘENO: 3 000 mg kolagenních peptidů pro kontrolu chuti a metabolickou rovnováhu.
- NEOVĚŘENO: Přirozená podpora hormonální rovnováhy a ženské vitality.
- NEOVĚŘENO: Vláknina pro trávení, sytost a zdravé střevo.
- NEOVĚŘENO: Klidné usínání a lahodná třešňová chuť.
- NEOVĚŘENO: Adaptogeny pro odolnost a psychickou pohodu.
- NEOVĚŘENO: Přírodní fytohormony pro ženskou rovnováhu.
- NEOVĚŘENO: Klidný spánek a antioxidační ochrana.
- NEOVĚŘENO: Metabolismus, antioxidace a každodenní podpora.
- NEOVĚŘENO: Longevity složka pro buněčný metabolismus.
- NEOVĚŘENO: 3 000 mg kolagenních peptidů z hovězího kolagenu. Funkční komplex inspirovaný GLP-1 přístupem podporuje kontrolu chuti k jídlu, pocit sytosti a metabolickou rovnováhu.
- NEOVĚŘENO: Kolagenní peptidy zároveň pečují o pokožku, vlasy a nehty a podporují noční regeneraci organismu zevnitř.
- NEOVĚŘENO: 2 000 mg myo-inositolu a 20 mg D-chiro-inositolu v přirozeném poměru. Inositoly patří mezi klíčové látky pro ženskou hormonální rovnováhu.
- NEOVĚŘENO: Přirozeně podporují vitalitu, metabolickou pohodu a celkovou rovnováhu organismu.
- NEOVĚŘENO: Glukomannan z kořene konjaku bobtná ve vodě a podporuje pocit sytosti, což pomáhá omezit večerní chutě.
- NEOVĚŘENO: Prebiotická vláknina inulin Frutafit® podporuje trávení a zdravé střevní prostředí.
- NEOVĚŘENO: Tradičně se spojuje s podporou klidného večerního usínání a regenerace organismu.
- NEOVĚŘENO: Podporují odolnost organismu, psychickou pohodu a celkovou ženskou vitalitu.
- NEOVĚŘENO: Kontryhel a pískavice řeckého sena spolu se sójovými izoflavony patří mezi rostlinné fytohormony.
- NEOVĚŘENO: Tradičně podporují ženskou hormonální rovnováhu a zmírnění výkyvů nálady i komfortu.
- NEOVĚŘENO: 1 100 mg L-glycinu přispívá ke zklidnění a kvalitnímu spánku a je stavební aminokyselinou kolagenu.
- NEOVĚŘENO: N-acetyl-L-cystein podporuje antioxidační ochranu buněk.
- NEOVĚŘENO: Chrom přispívá k udržení normální hladiny glukózy v krvi, zinek k ochraně buněk před oxidačním stresem.
- NEOVĚŘENO: Vitaminy D3, K2 MK-7 a kyselina listová (B9) doplňují komplex o každodenní podporu ženského organismu.
- NEOVĚŘENO: Calcium alfa-ketoglutarát (Ca-AKG) je moderní longevity složka. Alfa-ketoglutarát je přirozený meziprodukt buněčného energetického metabolismu a bývá spojován s podporou zdravého stárnutí.
- NEOVĚŘENO: Ve vázané formě zároveň dodává vápník, který přispívá k běžným funkcím organismu.
### Krátký popis
- NEOVĚŘENO: Večer bývá nejtěžší – únava, chutě na sladké a rozkolísané hormony dokážou zamotat hlavu i metabolismus. Peptides GLP-1 Woman Balance – Dark Cherry – sáček je večerní night drink s lahodnou třešňovou chutí, který v jedné dávce spojuje 12 složek pro ženskou rovnováhu. Klíčovou složkou je Nextida® GLP-1 One – moderní funkční komplex inspirovaný GLP-1 přístupem, který podporuje kontrolu chuti k jídlu, pocit sytosti a metabolickou rovnováhu. Myo-inositol a rostlinné extrakty pomáhají vyladit hormonální rovnováhu, kolagen a glycin podporují noční regeneraci a extrakt z višní přispívá ke klidnému usínání. Jeden sáček navečer nahradí až 16 tablet denně – bez agresivních stimulantů.
- NEOVĚŘENO: Hormonální rovnováha
- NEOVĚŘENO: Hormonální rovnováha
- NEOVĚŘENO: Klidný spánek a regenerace
- NEOVĚŘENO: Klidný spánek
- NEOVĚŘENO: hmotnost

Model: gpt-6.1-sol. Nástroje: Git, Python/Pillow, Chromium. Placené generování neproběhlo; cenu modelového běhu zde nelze ověřit.
