# Lahev UFIRST — krátký a dlouhý popis

Samostatná nová stránka pro produkt 638: https://www.golden-life.cz/lahev-ufirst/. Původní Lahev Golden Life (597) i dárkové boxy zůstávají beze změny. Základ je existující stručná karta lahve, nikoli nová dlouhá prodejní stránka.

## Vložení
- `shoptet/lahev-ufirst.html`: kompletní obsah do HTML režimu dlouhého popisu.
- `shoptet/lahev-ufirst-kratky.html`: krátký popis.
- `web/Golden Life Lahev UFIRST/`: plný HTML dokument a krátký fragment v `maly/`.
- `nahledy/lahev-ufirst.html`: samostatný offline náhled s vloženými fotografiemi; technické fontové náhrady Anton/Montserrat jsou označené.

Fotografie se bere ze skutečné hlavní galerie produktu 638, v popisu je navíc ověřená veřejná výchozí fotografie. Skript sleduje načtenou galerii, src/srcset a výměnu jejího prvku; fotografie jiného produktu se nepřevezme. Při chybě se ukáže textová náhrada. Doporučení odkazují na kanonický UFIRST all-in-one drink (576) a USB míchátko (653); žádný vlastní košík, cena ani dostupnost se nepřidávají.

Ověřené vizuální znaky: průhledné tělo, žlutobílé logo a šroubovací víčko ve stříbrném odstínu. Objem, materiál, myčka, horké nápoje a neprotékání nejsou u tohoto konkrétního produktu doložené, proto nejsou slíbené. Údaj 0,5 l ze staré Golden Life lahve se nepřenáší automaticky.

Zdroje: původní povolená šablona `shoptet/lahev.html`, aktuální veřejné produktové stránky a originální fotografie, `brand/RULES.md`, dodaný UFIRST vizuální manuál 1.0 (2026). Tyrkysové plochy a tmavý čitelný text. Žádná nová zdravotní tvrzení.

Model GPT-6.1-sol. Python + Chromium; bez placeného generování. Publikace v GitHub main není uložení do Shoptetu. Offline náhled nesleduje živou galerii; synchronizaci mají CMS a plný webový dokument.
