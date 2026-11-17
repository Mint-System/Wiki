---
commit_ref:
title: "Render of Obsidian Canvas missing"
author: "Janik von Rotz <login@janikvonrotz.ch>"
session_id:
action: execute
state: draft
date_completed: YYYY-MM-DD
harness:
provider:
model:
input_tokens:
output_tokens:
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

@Clanker Add a summary here once the task has been completed.

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness, provider and model. If you have access to session info update token count. Finally, update the changelog with the most important changes.
