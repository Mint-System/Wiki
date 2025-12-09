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
const selectedParticipants = await this.quickAddApi.checkboxPrompt([
  'Kurt',
  'Ulrich',
  'Marcus',
  'Janik',
  'Gerit',
])

const participantsYaml = selectedParticipants.map((p) => `  - ${p}`).join('\n')

this.variables.participants = participantsYaml
```

# {{NAME}}

```

```
````
