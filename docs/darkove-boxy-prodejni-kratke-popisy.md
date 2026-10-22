# Prodejní krátké popisy dárkových boxů

## Rozsah
Upravené jsou krátké popisy všech pěti boxů v `web/Golden Life Darkovy box */maly/`. Dlouhé popisy, galerie, šestá karta, produktové identity i čtečka detailů se nemění. Formát krátkých popisů (CSS, pět ikon v jedné řadě a rozbalení pěti produktů) je zachovaný. Texty jsou připravené i jako samostatné `shoptet/{variant}-kratky.html` pro jednoznačné vložení do krátkého popisu.

## Zjištění na veřejné stránce
Veřejný výpis vyhledávání boxů používá `.p-desc[data-testid=productCardShortDescr]`. U UFIRST je vidět zkrácený začátek krátkého popisu, nikoli jen jeho název. Proto nový úvod nezačíná opakováním názvu a dlouhým katalogovým seznamem: cílová osoba a motivace jsou hned na začátku, potom praktický důvod koupit celý box. Nové úvody mají 206–226 znaků. Offline kategorie je pouze označená modelová ukázka zkrácení na 200 znaků; přesný limit všech živých kategorií se neprohlašuje za ověřený.

## Copy přístup a tvrzení
Nabídka: osobní dárek, každodenní rituál, hotový výběr pěti produktů, dárková krabice a praktická láhev s míchátkem. Beauty zdůrazňuje ananasový kolagenový nápoj, Slim příchuť ananas–mango a aktivní režim, Hormonal ženský osobní rituál s konkrétními řadami, Longevity objevování péče o sebe a UFIRST práci/sport/cesty. Nejsou slibovány účinky na hormony, stres, paměť, hubnutí, spalování tuků nebo délku života.

Z původních ikonových popisků a krátkých vět pod produkty byly pojmenovaně odstraněny nepodložené fyziologické sliby: např. „Hormonální rovnováha“, „Klidný spánek“, „Kontrola chuti“, „Podpora metabolismu a přirozené detoxikace organismu.“, „Tobolky pro kvalitní spánek a noční spalování tuků.“, „Podpora mozku, paměti a soustředění pro jasnou hlavu.“ a „Podpora psychické pohody a zvládání stresu.“ Nové konkrétní náhrady jsou v přiloženém registru změn: identifikace skutečných produktů a použití lahve/míchátka, nikoli vymyšlené schválené zdravotní tvrzení. Soubor `brand/NOT-ALLOWED.md` v dostupných zdrojích chybí; nic z něj nebylo domyšlené. U ananasového kolagenu je sekce schválených tvrzení v jeho produktovém souboru prázdná. Proto se místo tvrzení o pleti/vlasech/nechtech používá přesná identifikace „Kolagenový nápoj s příchutí ananasu.“ U UFIRST existují konkrétní nutrientová tvrzení v jeho produktovém souboru, ale nejsou nutná pro tento stručný dárkový text a nejsou nahrazena volným slibem mozku nebo stresu. Názvy produktů byly zachované jako identifikátory, nikoli rozšířené do zdravotních příslibů.

## Nasazení
Do HTML režimu krátkého popisu vložit celý odpovídající `shoptet/{beauty,hormonal,longevity,slim,ufirst}-kratky.html`. Nejde o dlouhý popis ani změnu kategorie v administraci. Publikace na GitHub není uložení do Shoptetu; po uložení je potřeba ověřit skutečné znění ve výpisu i detailu.

## Zdroje a cena
Výchozí Git main `aeea6a1cfad67c0f9b8d10198f8a3de11f3f7499`, `brand/RULES.md`, `brand/product/{slim-extreme-collagen-box-s-prichuti-ananasu,slim-extreme-collagen-box-ananas-mango,beauty-longevity-nad-drink,ufirst-all-in-one-drink-}/info.md`, původní ověřené obsahy boxů a veřejná UFIRST karta ve vyhledávání. Model GPT-6.1-sol, Python a Chromium/Playwright; bez placené generace médií. Cenu modelu a konektoru nelze doložit.

## Hotové texty
### Beauty
Daruj jí každodenní rituál krásy, ne další věc do skříně. Pro ženu, která si ráda dopřeje kolagenový nápoj. Pět produktů v jedné dárkové krabici, včetně lahve a míchátka — bez vybírání každého zvlášť. S příchutí ananasu.

### Hormonal
Osobní dárek pro ženu, která si chce dopřát chvíli pro sebe. Hotový výběr pěti produktů pro její každodenní rituál — s Woman Hormonal Balance, nápojem Dark Cherry, Anti-Age Longevity NAD+, lahví a míchátkem. V dárkové krabici.

### Longevity
Dárek pro ženu, kterou baví péče o sebe a promyšlené každodenní rituály. Pět produktů Golden Life v jedné krabici — s nápojem Beauty & Longevity NAD+, lahví a míchátkem. Nemusíš je vybírat a skládat zvlášť.

### Slim
Pro ženu, která má ráda pohyb a kolagenové nápoje. Daruj jí hotový set pro každodenní režim: kolagen s příchutí ananas–mango, dva další doplňky řady Slim, láhev a míchátko. Pět produktů v dárkové krabici, bez skládání zvlášť.

### UFIRST
Dárek pro ty, kdo střídají práci, sport a chvíle pro sebe. all-in-one drink, dva další doplňky, lahev a míchátko v jednom boxu — praktický set pro každodenní rituál doma i na cestách. Pět produktů, jeden promyšlený dárek.
