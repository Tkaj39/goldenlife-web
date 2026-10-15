# Oprava stylů importovaných detailů — UFIRST

## Ověřená příčina
Předchozí čtečka při sanitizaci odstraňovala `@import` bez načtení závislostí. Na aktuálních stránkách all-in-one drink, Brain & Focus a Care Free přitom základní layout i brandové proměnné žijí v externích UFIRST knihovnách. Navíc CSSOM rozbaloval zkrácené vlastnosti s `var()` do prázdných longhand hodnot: např. pozadí pak chybělo a bílý text byl na bílé.

## Změna
- Načítání závislostí ve stejném pořadí jako v kanonickém produktu: UFIRST10.css, ufirst-produkt.css, u all-in-one navíc all-in-one.css a nakonec UFIRST-PATCH.css.
- Podpora zdrojových fontů Inter, Impact/Anton a Material Symbols. Relativní URL se řeší vůči příslušnému CSS.
- Zkrácené vlastnosti background, border, font apod. zůstávají zachované i s proměnnými.
- Styly zůstávají izolované uvnitř otevřeného detailu v ShadowRoot. Nepřebarvují box ani zbytek e-shopu; skripty zdrojových produktů se nespouštějí, nákupní prvky se nepřebírají.
- Načtení až po kliknutí, cache po dobu návštěvy. Chyba povinného CSS nabídne opakování místo zobrazení neostylovaného detailu.
- Spouštěč pouze UFIRST boxu je připnutý k novému loader commitu se SRI SHA-384. Nový jsDelivr endpoint přechodně vracel 503; při závěrečném skutečném browser testu už odpověděl 200. Přidaná a testovaná záložní cesta vede na stejný neměnný Git blob. Jeho bytes se před spuštěním kontrolují SHA-384; neshoda se nikdy nespustí. Nejde o spouštění skriptů z importovaných produktových stránek.

## Rozsah
Upraven loader a spouštěče, pouze CMS dlouhý popis UFIRST a jeho plný HTML dokument. Ostatní boxy mají původní připnutý loader a nebyly změněné. Texty, složení, SKU a fotografie boxu se nemění. Nová zdravotní tvrzení se nepřidávají ani se touto opravou neschvalují původní tvrzení.

## Kontroly a meze
19 responzivních scénářů se skutečnými aktuálními veřejnými HTML/CSS, včetně porovnání computed styles s kanonickým zdrojem u všech tří UFIRST doplňků v pěti šířkách. Nativní akordeony, přepínače oblastí a checkbox tabulky složení, izolace okolí, selhání CSS/opakování a odmítnutí neschváleného importu. Samostatný offline náhled ověřen pro všech pět produktů na mobilu a desktopu, bez externích požadavků. Ověřen i minifikovaný spouštěč, první kliknutí, výpadek CDN a odmítnutí podvrženého obsahu při neshodě SHA-384. Závěrečný browser test načetl skutečný vzdálený loader, aktuální Brain & Focus HTML a tři CSS knihovny přes veřejnou síť; pouze hostitelský dokument byl lokální testovací náhrada, nikoli uložená stránka obchodu. Model GPT-6.1-sol, Python, Chromium; bez generování obrázků, náklady modelu/konektoru nejsou doložené.

V originálu zdrojů jsou stále nefunkční odkazy na dvě fotografie USB míchátka (`cta.png`, `jakfunguje.jpg`) a plakát videa all-in-one (`vyvoj-video-poster.jpg`). Není to chyba CSS importu, soubory nejsou nahrazované smyšlenými obrázky. Offline náhled používá snímky a menší vložené fotografie, nikoli živé aktualizace.

Publikace na GitHubu není nasazení do Shoptetu. Do HTML režimu dlouhého popisu UFIRST boxu se vkládá celý `shoptet/ufirst.html`; po uložení je nutné ověřit reálně publikovanou stránku. Samostatný offline náhled je v předaném ZIP, není zdrojem pro vložení do CMS.
