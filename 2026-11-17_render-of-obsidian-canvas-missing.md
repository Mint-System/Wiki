---
commit_ref: 79f778c44b0c9e739a0dbbf9b69aea441fa65644
title: "Render of Obsidian Canvas missing"
author: "Janik von Rotz <login@janikvonrotz.ch>"
session_id: 01a1e932-6b44-7194-821b-7e9211ef6d40
action: execute
state: completed
date_completed: 2026-11-17
harness: pi
provider: mistral
model: deepseek-v4-1-flash-1017
input_tokens: 41581
output_tokens: 6469
---

# Render of Obsidian Canvas missing

Note: @Clanker refers to the "ai agent" (you) who is working on this prompt file.

@Clanker when working on this prompt file, make sure to:

- Read the `AGENTS.md` to get an understanding of the project
- Read task section and prepare a list of todos
- Update the todo list while working on task

## Task

I have a file `Odoo%20Modul-Architektur.md` that embeds `attachments/Odoo%20Module-Architecture.canvas`.

When I check the resulting page <https://wiki.mint-system.ch/odoo-modul-architektur/> nothing is shown.

The `task prepare-docs` command is supposed to convert all `.canvas` files to `.svg`. Then it is supposed to convert canvas image links.

However, the result `docs/odoo-modul-architektur.md` is not correct.

@Clanker When task is completed set frontmatter state to review. If you have access to session info add token count and session id. Prompt the author to verify the results.

## Worklog

The canvas embed `![[Odoo Module-Architecture.canvas]]` in `Odoo Modul-Architektur.md` was not rendered for three reasons, all fixed in `bin/`:

1. **Canvas files in `attachments/` were never converted.** The `canvas` step in `bin/build.js` only scanned the root directory. It now also scans `attachments/`, so `attachments/Odoo Module-Architecture.canvas` is converted to `docs/odoo-module-architecture.svg`.
2. **Embeds without an alias fell through.** The `obsidianCanvas` regex required text after `.canvas` (e.g. `|Title`), so `![[Name.canvas]]` was not matched and was later turned into a broken `![](./name.canvas)` link. The regex now matches an optional alias and renders embeds as images (`![Name](./name.svg)`).
3. **Unescaped XML broke the SVG.** The canvas contains `Services & cron`; the raw `&` made the SVG invalid XML, so the browser refused to render it. `bin/convert-canvas-to-svg.js` now XML-escapes node, edge and group text.

Verified with `./task prepare-docs`: `docs/odoo-modul-architektur.md` now references `![Odoo Module-Architecture](./odoo-module-architecture.svg)` and all generated SVGs under `docs/` parse as valid XML.

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness, provider and model. If you have access to session info update token count. Finally, update the changelog with the most important changes.
