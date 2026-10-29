---
commit_ref: 4830bab5b6421757c38234d5b1b17c6d43e27715
title: "Issue with list and remove edit button"
author: "Janik von Rotz <login@janikvonrotz.ch>"
action: implement
state: completed
date_completed: 2025-10-29
harness: pi
model: moonshotai/Kimi-K2.6
input_tokens: 3956041
output_tokens: 20438
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

- Removed `content.action.edit` from `zensical.toml` theme features. The Zensical edit button (with a broken link) is no longer rendered on pages; the footer already contains working "Edit on GitHub" and "Open in Obsidian" links added by `build.js`.
- Added `normalizeListIndentation()` to `bin/build.js` to fix nested list rendering. Obsidian/CommonMark uses 2 spaces per nesting level, but Python-Markdown (used by Zensical) requires 4 spaces per level with its default `tab_length=4`. The function doubles the indentation of space-indented list items outside fenced code blocks during the `prepare-docs` conversion, so nested lists are preserved correctly in the generated HTML. Tab-indented lists are left untouched because Python-Markdown already handles them correctly.

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness and model. If you have access to session info also add token count.
