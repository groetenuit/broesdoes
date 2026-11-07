---
title: Index
description: Broes Droes houdt van foto en video
layout: home
---
# Welkom

Hoi, ik ben Broes. Sommigen beweren dat ik met een fototoestel in mijn handen geboren ben, anderen dat ik het gewoon niet kan wegleggen. De waarheid ligt ergens in het midden. Wat vaststaat: ik hou van verhalen, van mensen, plekken en momenten die je raken.

# Onze Projecten

Hieronder vindt u al onze projecten. Dit overzicht wordt automatisch bijgewerkt wanneer u een nieuw project toevoegt in Pages CMS:

- {% for project in site.werk %}
- [{{ project.title }}]({{ project.url | relative_url }})
- {% endfor %}

