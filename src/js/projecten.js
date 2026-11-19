// Portfolio-overzicht: filteren op soort en wisselen tussen raster en lijst.
(() => {
  const root = document.querySelector("[data-index]");
  if (!root) return;

  const items = [...root.querySelectorAll("li[data-type]")];
  const filterKnoppen = [...root.querySelectorAll("button[data-filter]")];
  const viewKnoppen = [...root.querySelectorAll("button[data-view]")];
  const teller = root.querySelector(".f-muted");
  const aantalProjecten = root.querySelectorAll(".p-grid li").length;

  // Elke soort die in de projecten voorkomt krijgt een filterknop (ook "Eigen werk", ...)
  const groep = root.querySelector(".filters");
  [...new Set(items.map((li) => li.dataset.type).filter(Boolean))].forEach((soort) => {
    if (filterKnoppen.some((k) => k.dataset.filter === soort)) return;
    const knop = document.createElement("button");
    knop.type = "button";
    knop.className = "chip";
    knop.dataset.filter = soort;
    knop.setAttribute("aria-pressed", "false");
    knop.textContent = soort;
    groep.append(knop);
    filterKnoppen.push(knop);
  });

  // Filters zonder projecten zijn doodlopend: verberg ze
  filterKnoppen.forEach((knop) => {
    const soort = knop.dataset.filter;
    if (soort !== "alle" && !items.some((li) => li.dataset.type === soort)) knop.hidden = true;
  });

  function zetFilter(soort) {
    items.forEach((li) => {
      li.hidden = soort !== "alle" && li.dataset.type !== soort;
    });
    filterKnoppen.forEach((k) => k.setAttribute("aria-pressed", String(k.dataset.filter === soort)));
    if (teller) {
      const zichtbaar = soort === "alle" ? aantalProjecten : items.filter((li) => !li.hidden).length / 2;
      teller.textContent = `(${zichtbaar})`;
    }
  }

  function zetWeergave(weergave) {
    root.dataset.view = weergave;
    viewKnoppen.forEach((k) => k.setAttribute("aria-pressed", String(k.dataset.view === weergave)));
  }

  filterKnoppen.forEach((k) => k.addEventListener("click", () => zetFilter(k.dataset.filter)));
  viewKnoppen.forEach((k) => k.addEventListener("click", () => zetWeergave(k.dataset.view)));
})();
