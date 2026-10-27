---
commit_ref:
title: "Add GitHub Deploy Docs action"
author: "Janik von Rotz <login@janikvonrotz.ch>"
action: implement
state: draft
date_completed: YYYY-MM-DD
harness:
model:
input_tokens:
output_tokens:
---

# Add GitHub Deploy Docs action

Note: @Clanker refers to the "ai agent" (you) who is working on this prompt file.

@Clanker when working on this prompt file, make sure to:

- Read context and task section first
- Prepare a list of todos
- Update the todo list while working on task

## Context

@Clanker Read the `AGENTS.md` and `README.md` to get an understanding of the project.

## Task

Similar to `~/main.build` I would like to have a "Deploy Docs" action. Instead of Forgejo it is GitHub. But the actions are very similar.

Create the folder and copy the action. Then run `init-agekey-sops` and setup the encryption for the `deploy-docs` secret.

The `deploy-docs` is kube config file. I will copy and encrypt the file myself.

@Clanker When task is completed set frontmatter state to review. Prompt the author to verify the results.

## Worklog

@Clanker Add a summary here once the task has been completed.

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness and model. If you have access to session info also add token count.
