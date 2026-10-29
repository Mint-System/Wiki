---
title: "Issue with list and remove edit button"
author: "Janik von Rotz <login@janikvonrotz.ch>"
action: implement
state: draft
date_completed: YYYY-MM-DD
harness:
model:
input_tokens:
output_tokens:
---

# Issue with list and remove edit button

Note: @Clanker refers to the "ai agent" (you) who is working on this prompt file.

@Clanker when working on this prompt file, make sure to:

- Read the `AGENTS.md` and `README.md` to get an understanding of the project
- Read entire task section and prepare a list of todos
- Update the todo list while working on task

## Task

First of all remove the Zensical edit button. The link does not work and I already add an edit link in the footer.

Then Zensical does something weird. This markdown:

```
- Optional einen Pull-Request erstellen:
  - Feature branch erstellen `git switch -c mig-$module`
  - Und mit dem CLI einen PR erstellen `gh pr create`
  - Wenn PR gemerged ist, das Submodule-Repo deployen
- Änderungen pushen
  
```

Is rendered as flat list:

```html
<ul>
<li>Optional einen Pull-Request erstellen:</li>
<li>Feature branch erstellen <code>git switch -c mig-$<mark data-md-highlight="">modul</mark>e</code></li>
<li>Und mit dem CLI einen PR erstellen <code>gh pr create</code></li>
<li>Wenn PR gemerged ist, das Sub<mark data-md-highlight="">modul</mark>e-Repo deployen</li>
<li>Änderungen pushen</li>
</ul>
```

Why?

@Clanker When task is completed set frontmatter state to review. Prompt the author to verify the results.

## Worklog

@Clanker Add a summary here once the task has been completed.

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness and model. If you have access to session info also add token count.
