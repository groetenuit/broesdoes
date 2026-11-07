---
title: Projecten Overzicht
layout: default
---

# Onze Projecten

Hieronder vindt u al onze projecten. Dit overzicht wordt automatisch bijgewerkt wanneer u een nieuw project toevoegt in Pages CMS:

<ul>
  {% for project in site.werk %}
    <li>
      <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
    </li>
  {% endfor %}
</ul>
