---
title: Template Worklog
kind: reference
section: template
---

````markdown
---
date: {{DATE}}
author: {{VALUE:author}}
kind: worklog
---
```js quickadd
const plugin = this.app.plugins.plugins['active-user-and-participants'];
if (plugin) {
	const getActiveParticipant = plugin.getActiveParticipant();
	this.variables.author = getActiveParticipant.name;
} else {
	new Notice('Active User and Participants plugin not found');
}
```
# {{NAME}}

## Vorbereitung

==Definieren das Vorgehen und Ziele.==

## Ausführung

==Protokolliere die Arbeitsschritte und Ergebnisse.==

## Review

==Verifiziere das Resultat mit den Zielen.==
````
