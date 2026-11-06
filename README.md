# Studio Lijn: lichte portfoliosite

De site bestaat uit gewone HTML-pagina's en één stylesheet, samen ongeveer 85 KB. Er is geen framework, geen database en geen webfonts. Het enige JavaScript is een klein script van 1 KB voor de knoppen van de projectslider.

## Bestanden

| Bestand | Inhoud |
|---|---|
| `index.html` | Homepage: intro, drie recente projecten, diensten |
| `portfolio.html` | Slider met alle projecten |
| `werk-*.html` | Eén pagina per project |
| `js/slider.js` | Vorige- en volgende-knoppen van de slider |
| `over-ons.html` | Verhaal, team, werkwijze |
| `contact.html` | Contactformulier en gegevens |
| `bedankt.html` | Pagina na het versturen van het formulier |
| `voorwaarden.html` | Algemene voorwaarden (sjabloon) |
| `privacy.html` | Privacyverklaring (sjabloon) |
| `style.css` | Alle opmaak, met licht en donker thema |

## Aanpassen

1. **Naam en gegevens.** Zoek en vervang "Studio Lijn", het adres, het ondernemingsnummer, het e-mailadres en het telefoonnummer in alle bestanden. In België moet je ondernemingsnummer op je website staan. Het staat daarom in de voet van elke pagina.
2. **Kleuren.** Pas de variabelen bovenaan `style.css` aan, zowel voor het lichte als het donkere thema.
3. **Beelden.** Maak een map `img/` aan. Exporteer elk beeld als WebP in de afmetingen die bij de plek horen (900 × 1100 px staand voor de slider, 1200 × 900 px voor de homepage, 1600 × 1200 px op de projectpagina) en hou het onder 200 KB. Vervang dan in elke `.thumb` de `<span class="placeholder">` door het `<img>`-voorbeeld dat in de commentaarregel erboven staat.
4. **Juridische pagina's.** Vul de ontbrekende gegevens in, zoals je hostingpartij, en laat de teksten nakijken.
5. **Menu en voet.** Die staan op elke pagina. Pas je ze aan, doe dat dan op alle pagina's.

## Een project toevoegen

1. Kopieer een bestaande projectpagina, bijvoorbeeld `werk-kaaitheater.html`, en geef ze een nieuwe naam, zoals `werk-mijn-project.html`. Pas de titel, de tekst en de beelden aan.
2. Open `portfolio.html` en zoek de lijst met tegels: elke tegel begint met `<li class="tile"`. Kopieer een tegel en zet hem op de plek waar je hem in de slider wilt.
3. Pas in die tegel aan:
   - de naam, de korte omschrijving, het type en het jaar;
   - de link `href="werk-...html"`, op twee plaatsen;
   - het label: zet `<span>Nieuw</span>` in `tile-badge`, of laat dat vak leeg;
   - de kleurbolletjes: elk `<li style="background-color: #...">` is één kleur uit het palet van het project, maximaal vijf.
4. Pas het aantal aan in de titel boven de slider: "Alle projecten · 6".
5. Wil je het project ook op de homepage, kopieer dan een kaart in `index.html` (die begint met `<a class="work"`).

Voeg je regelmatig projecten toe, dan wordt dat kopiëren en plakken snel omslachtig. Dan is de Grav-versie handiger.

## Contactformulier

Een statische site heeft geen server om het formulier te verwerken. Je hebt twee mogelijkheden:

- **Netlify**: het formulier werkt daar meteen. De berichten verschijnen in je Netlify-dashboard en je kunt ze laten doorsturen naar je e-mail.
- **Andere hosting**: maak een gratis formulier aan bij bijvoorbeeld Formspree. Zet de link die je krijgt in het `action`-attribuut van het formulier en verwijder `data-netlify`.

## Online zetten

Sleep de map naar **Netlify Drop** (app.netlify.com/drop) en je site staat online. Daarna koppel je je eigen domeinnaam. Cloudflare Pages en GitHub Pages werken ook.

## Overstappen van WordPress

1. Exporteer je teksten via *Extra → Exporteren* in WordPress, of kopieer ze rechtstreeks van je site.
2. Download je beelden uit de mediabibliotheek (`wp-content/uploads`) en zet ze om naar WebP.
3. Wijzigen je adressen, bijvoorbeeld van `/projecten/naam/` naar `portfolio.html`? Stel dan doorverwijzingen in, zodat oude links en Google blijven werken. Op Netlify doe je dat met een bestand `_redirects`, bijvoorbeeld:
   ```
   /portfolio/*   /portfolio.html   301
   /contact/      /contact.html     301
   ```
4. Zet de nieuwe site online, koppel je domein en zeg daarna je WordPress-hosting op.

## Later uitbreiden

Krijg je veel projecten, of wil je per project een aparte pagina? Dan is een static site generator zoals **Eleventy** de logische volgende stap. Je schrijft elk project dan in een Markdown-bestand, en het menu en de voet staan maar op één plek. Wil je teksten aanpassen zonder code, dan kun je er later een lichte CMS bovenop zetten, zoals Decap CMS of Pages CMS.
