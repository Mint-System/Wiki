---
---

--- Template Weely
kind: reference
section: template
---

````markdown
---
date: {{DATE}}
author: {{VALUE:author}}
kind: solution
project: {{VALUE:project}}
tags:
{{VALUE:tags}}
draft: true
---
```js quickadd
const plugin = this.app.plugins.plugins['active-user-and-participants'];
if (plugin) {
	const getActiveParticipant = plugin.getActiveParticipant();
	this.variables.author = getActiveParticipant.name;
} else {
	new Notice('Active User and Participants plugin not found');
}

const projectFiles = this.app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("Projekte/") && f.name === "README.md");
const projectNames = [...new Set(
  projectFiles.map(f => {
    const folder = f.path.split("/")[1];
    return folder.replace(/ (Shared|Private)$/, "").trim();
  })
)].sort();
if (projectNames.length === 0) throw new Error("No projects found in Projekte/ folder");

const selectedProject = await this.quickAddApi.suggester(projectNames, projectNames);
if (!selectedProject) throw new Error("No project selected");
this.variables.project = selectedProject;

const enteredTags = [];
let tag = "";
while (tag !== null) {
  tag = await this.quickAddApi.inputPrompt("Enter tag (leave empty to finish):");
  
  if (tag && tag.trim() !== "") {
    enteredTags.push(tag.trim());
  } else {
    break;
  }
}
const tagsYaml = enteredTags.map(t => `  - ${t}`).join('\n');
this.variables.tags = tagsYaml;
```
# {{NAME}}

## Herausforderung

==Vor welcher Herausforderung stand der Kunde?==

## Problem

==Warum war das Problem schwierig zu lösen?==

## Prozess

==Mit welchem Prozess wurde das Problem analysiert und eine Lösung erarbeitet?==

## Lösung

==Wie sieht die Lösung aus?==

## Review

==Was muss man bedenken, wenn man diese Lösung anwenden möchte?==
```
