---
title: Index
layout: default
---
# Onze Projecten

Hieronder vindt u al onze projecten. Dit overzicht wordt automatisch bijgewerkt wanneer u een nieuw project toevoegt in Pages CMS:

- {% for project in site.werk %}
- [{{ project.title }}]({{ project.url | relative_url }})
-  {% endfor %}

