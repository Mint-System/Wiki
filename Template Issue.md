---
title: Template Issue
kind: reference
section: template
---

````markdown
---
state: open
date: { { DATE } }
author: { { VALUE:author } }
kind: issue
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

## Problem

==What is the problem? How can the problem be reproduced?==

## Analysis

==Document the problem analysis here.==

## Workaround

==Describe a possible workaround here.==

## Solution

==What was the solution to the problem?==
````
