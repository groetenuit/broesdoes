# Broes Does (Eleventy)

Statische site met Eleventy 3, gepubliceerd op GitHub Pages. Inhoud bewerk je in Pages CMS (zie `.pages.yml`) of rechtstreeks in de bestanden.

```bash
npm install
npm start        # http://localhost:8080
npm run build    # bouwt naar _site/
```

## Waar staat wat

```
src/_data/nav.json        het menu (hoofd) en de footerlinks (voet): hier pas je het menu aan
src/_data/site.json       titel, e-mail, beschrijving, origin (basis-URL voor og:url / og:image)
src/_includes/default.html       kader van elke pagina: header, menu, footer
src/_includes/home.html          layout van de homepagina
src/_includes/contact-layout.html  layout van de contactpagina
src/index.md, hoe-zo.md, contact.md, services.md   losse pagina's
src/portfolio.html        projectenoverzicht (leest alle bestanden uit src/werk)
src/werk/*.md             één bestand per project
src/_includes/project.html          layout van een projectpagina
src/js/projecten.js       filteren en raster/lijst op de portfolio-pagina
src/images/, src/style.css   afbeeldingen en opmaak
```

## Menu aanpassen

Open `src/_data/nav.json` en wijzig, voeg toe of verwijder een regel. Het menu en de footer van alle pagina's passen zich aan.

## Eigen domein koppelen

1. Zet `origin` in `src/_data/site.json` op je domein (bv. `https://www.broesdoes.be`).
2. Verwijder in `.github/workflows/static.yml` het blok `env: PATH_PREFIX: ...`.
3. Maak `src/CNAME` aan met je domein en voeg `eleventyConfig.addPassthroughCopy("src/CNAME");` toe aan `eleventy.config.js`.
