---
title: Template Weely
kind: reference
section: template
---

````markdown
```js quickadd
const plugin = this.app.plugins.plugins['active-user-and-participants'];
if (plugin) {
	const participantNames = plugin.getParticipantNames();
	const selectedParticipants = await this.quickAddApi.checkboxPrompt(participantNames);
	const participantsYaml = selectedParticipants.map(p => `  - ${p}`).join('\n');
	this.variables.participants = participantsYaml;
} else {
	new Notice('Active User and Participants plugin not found');
}
```
# {{NAME}}

## Projektstatus

[Dashboard Projekte](https://erp.mint-system.ch/web#menu_id=1477&cids=1&id=14&action=1749&model=knowledge.article&view_type=form)

## Wochenplanung

| Manager | Assigned | Project                   | Comment |
| ------- | -------- | ------------------------- | ------- |
| Janik   | Ulrich   | *Softwareentwicklung*     |         |

## Dialog Geteilt

## Dialog Privat
````
