---
title: Template Weely
kind: reference
section: template
---

````markdown
---
date: {{DATE}}
participants:
{{VALUE:participants}}
kind: weekly
---
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
````
