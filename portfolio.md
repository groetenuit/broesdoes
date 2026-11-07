---
title: Projecten Overzicht
description: Porftolio
layout: default
---
Aantal gevonden projecten in de map: {{ site.werk | size }}

<main id="inhoud">
  <section data-index data-view="grid" aria-labelledby="index-titel">
    <div class="index-head grid12">
      <h1 id="index-titel">Alle projecten <span class="f-muted">({{ site.werk.size }})</span></h1>
      <div class="filters" role="group" aria-label="Filter op soort" hidden>
        <button type="button" class="chip" data-filter="alle" aria-pressed="true">Alle</button>
        <button type="button" class="chip" data-filter="Campagne" aria-pressed="false">Campagne</button>
        <button type="button" class="chip" data-filter="Editoriaal" aria-pressed="false">Editoriaal</button>
        <button type="button" class="chip" data-filter="Identiteit" aria-pressed="false">Identiteit</button>
        <button type="button" class="chip" data-filter="Signalisatie" aria-pressed="false">Signalisatie</button>
        <button type="button" class="chip" data-filter="Verpakking" aria-pressed="false">Verpakking</button>
        <button type="button" class="chip" data-filter="Web" aria-pressed="false">Web</button>
      </div>
      <div class="views" role="group" aria-label="Weergave" hidden>
        <button type="button" class="chip" data-view="grid" aria-pressed="true">Raster</button>
        <button type="button" class="chip" data-view="list" aria-pressed="false">Lijst</button>
      </div>
    </div>

    <div class="index-body">
      <!-- 1. RASTER WEERGAVE (Grid) -->
      <ul class="p-grid" role="list">
        {% for project in site.werk %}
        <li data-type="{{ project.project_type }}">
          <a href="{{ project.url | relative_url }}">
            <div class="ph ph--{{ forloop.index }} r-43" style="view-transition-name: b-{{ project.slug }}; view-transition-class: beeld; {% if project.featured_image %}background-image: url('{{ project.featured_image | relative_url }}'); background-size: cover;{% endif %}">
              <span class="ph-label">{{ project.title }}</span>
            </div>
            <span class="naam">
              <span>{{ project.title }}</span>
              <span>{{ project.project_year }}</span>
            </span>
          </a>
        </li>
        {% endfor %}
      </ul>

      <!-- 2. LIJST WEERGAVE (List) -->
      <ul class="p-list" role="list">
        {% for project in site.werk %}
        <li data-type="{{ project.project_type }}">
          <a href="{{ project.url | relative_url }}">
            <span class="c-naam">{{ project.title }}</span>
            <span class="c-plaats">{{ project.project_location }}</span>
            <span class="c-type">{{ project.project_type }}</span>
            <span class="c-jaar">{{ project.project_year }}</span>
            <span class="c-meer">Bekijk</span>
          </a>
        </li>
        {% endfor %}
      </ul>
    </div>
  </section>
</main>
