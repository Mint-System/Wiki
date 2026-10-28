---
commit_ref: a3df7b1720f5b85378dfb5bfa6209711ba161320
title: "Add GitHub Deploy Docs action"
author: "Janik von Rotz <login@janikvonrotz.ch>"
action: implement
state: completed
date_completed: 2026-10-27
harness: pi
model: infomaniak/moonshotai/Kimi-K2.6
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

- Created `.github/workflows/deploy-docs.yml` adapted from `~/main.build/.forgejo/workflows/deploy-docs.yml` for GitHub Actions (uses `ubuntu-latest` runner with `mintsystem/taskfile.build:latest` container).
- Created `.github/secrets/kubeconfig.yml` placeholder file.
- Generated new age key for `wiki` project with `init-agekey-sops`.
- Created `.sops.yaml` with creation rule for `.github/secrets/*.yml` files using the new age public key.
- The kubectl command targets `app=taskfile-build -n wiki` (following Mint System convention).

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness and model. If you have access to session info also add token count.
