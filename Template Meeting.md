---
tags:
  - Vorlagen
kind:
  - reference
---
# Template Meeting

````markdown
---
date: {{DATE}}
participants:
{{VALUE:participants}}
type: meeting
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

## Input

Folgende Themen werden besprochen:

* ==Punkt 1==
* ==Punkt 2==

## Notizen

==Notizen zum Meeting.==

==Aufgaben für die Nachbearbeitung:==

- [ ] Zu erledigen @Person/Org
````