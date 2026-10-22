# Beauty, Hormonal, Longevity a Slim — fotografie a stylované detaily

## Co se opravilo
- Všech pět produktových fotografií v každém ze čtyř boxů používá aktuálně ověřenou hlavní galerii přesného zdrojového produktu (20 karet, 11 jedinečných produktů). Staré URL láhve, Good Sleep, manga a Beauty NAD+ vracely 404. Ananasový původní obrázek byl infografikou dávkování, ne hlavním packshotem. Peptides má nový odkaz na stejnou fotografii.
- Detaily načítají i skutečnou sdílenou knihovnu `/user/documents/upload/css/golden-life-produkt.css` a její Material Symbols. Čtečka povoluje tuto konkrétní ověřenou cestu, nikoli libovolné CSS obchodu. Styly zůstávají v ShadowRoot, texty a původní produktové barvy se nepřebarvují podle boxu.
- Knihovny se načítají až po kliknutí; zdrojem popisu zůstává kanonický produkt. Cache platí pro návštěvu této stránky. Selhání má viditelnou zprávu a opakování, ne neostylovaný obsah.
- Osm párových souborů (čtyři `shoptet/` fragmenty a čtyři plné dokumenty `web/`) dostalo nový neměnný pin a SHA-384. Záloha používá stejné bytes z raw GitHub a ověřuje je před spuštěním.
- Funkční UFIRST HTML, jeho krátký popis i jeho vlastní starý pin jsou byte-for-byte beze změny. Nová verze čtečky na jiné SHA jeho chování nemění.

## Zachováno
Původní rozložení, pět konkrétních produktů, šestá karta balení, tlačítka, texty, FAQ i stávající propojení s hlavním produktem. Krátké popisy nemají tyto produktové fotografie ani čtečku, proto se neměnily. Nejde o redesign, nový produkt ani nové složení. Zachování ověřeno proti výchozímu commitu `15a40a9e04b387dd150d6f1404c9f17f3f94a1a5`.

## Použití
Do HTML režimu dlouhého popisu daného boxu patří celý příslušný soubor:
- `shoptet/beauty.html`
- `shoptet/hormonal.html`
- `shoptet/longevity.html`
- `shoptet/slim.html`

Změna v Gitu není uložení do Shoptetu. Do administrace se nic neukládalo. Po vložení a uložení je nutné ověřit skutečně publikovanou stránku, protože CMS může kód transformovat. V hlavním produktu se stávající úvodní/CTA fotografie dále přebírá z jeho nativní galerie; staré samostatné mockup URL boxů nejsou náhradní nové fotografie a v samostatném plném dokumentu mohou chybět.

## Náhled
Samostatně předaný `Darkove-boxy-fotografie-a-detaily-NAHLED.html` je jediný offline soubor se čtyřmi přepínatelnými sadami produktových karet a klikacími plnými detaily. Není to kompletní e-shop ani soubor pro vložení do CMS. Obsahuje uložené veřejné snímky, zmenšené skutečné fotografie, původní zdrojové CSS a vložené ikonové písmo. Písmo Metropolis hostitele může být v offline náhledu nahrazené Arialem. Nákup ani externí spojení nejsou povolené. Zbývající nedostupné doplňkové fotografie jsou v offline náhledu označené textem, nikoli smyšlenou náhradou.

## Ověřeno skutečným během
- 80 responzivních případů: všech 20 tlačítek v šířkách 320, 390, 768 a 1440 px. Fotografie karet načtené a dekódované; detaily, zavírání, nativní přepínače, tabulky, cache a izolace okolních stylů. Bez chyb JavaScriptu a bez vodorovného přesahu vnějšího dokumentu.
- 22 porovnání vybraných computed styles s kanonickým uloženým editorským obsahem při 390 a 1440 px: primární barvy, barva a první rodina písma nadpisu, pozadí a rámečky karty/tabulky. Nejde o pixelovou shodu s celou Shoptet šablonou.
- Selhání povinného CSS a zotavení přes opakování; neschválený import se nepošle; chybný produktový identifikátor se odmítne. Ověřena záložní cesta čtečky i odmítnutí změněného souboru při neshodě SHA-384.
- 20 detailů načteno v Chromium přes skutečnou veřejnou síť, včetně CDN čtečky a potřebného CSS (200). Jen hostitelský dokument byl lokální testovací náhrada na doméně obchodu; nejde o uložené nasazení v Shoptetu. Žádný nákupní požadavek.
- 40 offline kliknutí: všechny boxy a všechny produkty na mobilu i desktopu. Žádné externí požadavky, žádné chyby JavaScriptu.
- Vizuálně zkontrolovány porovnávací listy hlavních fotografií a aktuální desktopové mřížky všech čtyř boxů plus mobilní detaily. Původní produktové texty byly zachovány, nikoli znovu právně schváleny.

## Otevřené zdrojové závady
Některé doplňkové obrázky už v kanonických produktových popisech vracejí 404 — např. USB míchátko `cta.png`, I-leucin v Activatoru a doporučovaný starý mockup all-in-one drinku. V těchto zdrojích se nic nepřepisovalo. To je odlišné od pěti opravených hlavních produktových fotografií každého boxu; jejich všech 20 výskytů je ověřeno. Texty obsahují převzatá zdravotní tvrzení; tato čistě technická oprava je nepřidává ani neschvaluje.

## Provenience a cena
Výchozí Git `main`, `brand/RULES.md`, původní funkční UFIRST implementace a aktuální veřejné galerie, produktové HTML a CSS. Model GPT-6.1-sol; Python, Chromium/Playwright a existující Composio GitHub spojení pod botem Goldie. Bez placeného generování obrázků (0 Kč za generování); náklady modelu a konektoru nejsou k dispozici, nejsou vydávány za nulové.
