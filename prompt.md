---
title: "Migrate from Vuepress to Zensical"
author: "Janik von Rotz <login@janikvonrotz.ch>"
action: implement
state: draft
date_completed: YYYY-MM-DD
harness:
model:
input_tokens:
output_tokens:
---

# Migrate from Vuepress to Zensical

Note: @Clanker refers to the "ai agent" (you) who is working on this prompt file.

@Clanker when working on this prompt file, make sure to:

- Read context and task section first
- Prepare a list of todos
- Update the todo list while working on task

## Context

@Clanker Read the `AGENTS.md` and `README.md` to get an understanding of the project.

## Task

I want to replace Vuepress with Zensical.

### Remove Vuepress

Remove everything related to Vuepress:

- `.vuepress` config dir
- `package.json` packge file
- `pnpm-lock.yaml` pnpm lock file

In `task` remove the help rows.

### Move build scripts

There are few JavaScript scripts:

- `build.js`
- `generate-bases-views.js`
- `convert-canvas-to-svg.js`

Move them into a `bin` folder.

### Install Zensical

The Taskfile alreay provides the command to install, preview and build with Zensical.

Run `init-zensical-docs` and update task help rows.

Add a command `prepare-docs` that runs the `bin/build.js` ouputs the files in `docs`.

Then Zensical should build from `docs`.

### Add plausible

The Vupress project injected plausible.js code. Do the same with extra.js in Zensical. Use the same doman.

### Mint System Link in Nav

The Vuepress site show a button for `[Mint System GmbH](https://www.mint-system.ch/)`. Try to replicate this for Zensical.

### Footer

For every document a footer is generated. They look like this:

```
Backlinks:

🔗 README

📝 Edit on GitHubor 🔷 Open in Obsidian

This page is maintained by Mint System GmbH
```

Remove the credits in `build.js`:

```
This page is maintained by Mint System GmbH
```

And configure Zensical to link Mint System GmbH in the footer <https://zensical.org/docs/setup/footer/>.

### Update guide

Remove the Vuepress section in `Mitarbeit.md`. 

In `Prozesse Wiki - Entwicklung` document in German how clone this repo, run the pepare command and preview the site.


@Clanker When task is completed set frontmatter state to review. Prompt the author to verify the results.

## Worklog

@Clanker Add a summary here once the task has been completed.

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness and model. If you have access to session info also add token count.
