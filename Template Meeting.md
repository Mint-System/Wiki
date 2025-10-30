---
tags:
  - Vorlagen
kind:
  - reference
section: template
---

# Template Meeting

````markdown
---
date: {{DATE}}
participants:
{{VALUE:participants}}
kind: meeting
---
```js quickadd
const enteredParticipants = [];
let participant = "";

// Keep prompting until user enters empty string
while (participant !== null) {
  participant = await this.quickAddApi.inputPrompt("Enter participant name (leave empty to finish):");
  
  if (participant && participant.trim() !== "") {
    enteredParticipants.push(participant.trim());
  } else {
    break;
  }
}

const participantsYaml = enteredParticipants.map(p => `  - ${p}`).join('\n');
this.variables.participants = participantsYaml;
```
# {{NAME}}

## Agenda

Folgende Themen werden besprochen:

* ==Punkt 1==
* ==Punkt 2==

## Punkt 1

==Notizen zum Meeting.==

==Aufgaben für die Nachbearbeitung:==

- [ ] Zu erledigen @Person/Org
````
