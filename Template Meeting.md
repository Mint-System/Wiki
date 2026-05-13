---
title: Template Meeting
kind: reference
section: template
---

````markdown
---
date: {{VALUE:formattedDate}}
participants:
{{VALUE:participants}}
kind: meeting
---
```js quickadd
const today = new Date();
const todayDay = today.getDate();
const todayMonth = today.getMonth() + 1;
const todayYear = today.getFullYear();

const pad = (n) => n.toString().padStart(2, '0');

let input = await this.quickAddApi.inputPrompt("Enter date (DD, DD.MM, or DD.MM.YYYY). Leave empty for today:");

let finalDateStr;

if (!input || input.trim() === "") {
    // Default to today - ISO format YYYY-MM-DD
    finalDateStr = `${todayYear}-${pad(todayMonth)}-${pad(todayDay)}`;
} else {
    const parts = input.trim().split('.');
    
    if (parts.length === 1) {
        // Only Day entered (e.g., "19") -> YYYY-MM-DD
        const day = parseInt(parts[0]);
        if (isNaN(day)) throw new Error("Invalid day format");
        finalDateStr = `${todayYear}-${pad(todayMonth)}-${pad(day)}`;
    } 
    else if (parts.length === 2) {
        // Day and Month (e.g., "19.06") -> YYYY-MM-DD
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        if (isNaN(day) || isNaN(month)) throw new Error("Invalid date format");
        finalDateStr = `${todayYear}-${pad(month)}-${pad(day)}`;
    } 
    else if (parts.length === 3) {
        // Full date (e.g., "20.01.2028") -> YYYY-MM-DD
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const year = parseInt(parts[2]);
        if (isNaN(day) || isNaN(month) || isNaN(year)) throw new Error("Invalid date format");
        finalDateStr = `${year}-${pad(month)}-${pad(day)}`;
    } else {
        throw new Error("Invalid date format. Use DD, DD.MM, or DD.MM.YYYY");
    }
}

this.variables.formattedDate = finalDateStr;

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
