---
commit_ref: f55d00e40845624739627bcda027cb6abdea95f9
title: "Analyse rendering issue"
author: "Janik von Rotz <login@janikvonrotz.ch>"
action: implement
state: completed
date_completed: 2026-10-28
harness: pi
model: moonshotai/Kimi-K2.6
input_tokens: 320
output_tokens: 270
---

# Analyse rendering issue

Note: @Clanker refers to the "ai agent" (you) who is working on this prompt file.

@Clanker when working on this prompt file, make sure to:

- Read context and task section first
- Prepare a list of todos
- Update the todo list while working on task

## Context

@Clanker Read the `AGENTS.md` and `README.md` to get an understanding of the project.

## Task

I have weird issue. Zensical produces a h2 header for a list item.

The input is this file: Prozesse%20Organisation.md

```markdown
Dokumentation der Organisations-Prozesse.

- [[Prozesse Organisation - Weekly]]
```

The `prepare-docs` produces: docs/prozesse-organisation.md

```markdown
Dokumentation der Organisations-Prozesse.

- [Prozesse Organisation - Weekly](/prozesse-organisation-weekly/)
```

And the `build-zensical-docs` produces: site/prozesse-organisation/index.html

```html
<p>Dokumentation der Organisations-Prozesse.</p>
<h2 id="-prozesse-organisation-weekly">- <a href="/prozesse-organisation-weekly/">Prozesse Organisation - Weekly</a><a class="headerlink" href="#-prozesse-organisation-weekly" title="Permanent link">&para;</a></h2>
```

Why is it an `h2` tag instead of `<ul><li></li></ul>`.

It works for other files like `Prozesse%20Organisation%20-%20Weekly.md`. Maybe the markup is the problem.

@Clanker When task is completed set frontmatter state to review. Prompt the author to verify the results.

## Worklog

The issue was caused by a missing blank line between the last list item and the `---` horizontal rule separator in the footer appended by `bin/build.js`. When a source markdown file does not end with a trailing newline, the footer was appended as:

```markdown
- [Prozesse Organisation - Weekly](/prozesse-organisation-weekly/)
---
```

Python-Markdown (used by MkDocs/Zensical) interpreted `---` as a **Setext-style `h2` underline** for the preceding line, because there was no blank line separating the list item from the horizontal rule.

**Fix applied:** Changed `bin/build.js` line 217 from:

```javascript
let footer = ['\n', '---', '\n'].join('')
```

to:

```javascript
let footer = ['\n\n', '---', '\n\n'].join('')
```

This ensures there is always a blank line before the `---`, so it renders as `<ul><li>` followed by `<hr />` instead of an `<h2>`. The `prepare-docs` and `build-zensical-docs` pipelines were re-run and the output was verified.

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness and model. If you have access to session info also add token count.
