---
commit_ref: 3c1c9ecf7d1612f0b28efa9f63b255098752ce5c
title: "Migrate from Vuepress to Zensical"
author: "Janik von Rotz <login@janikvonrotz.ch>"
action: implement
state: completed
date_completed: 2026-10-26
harness: pi
model: moonshotai/Kimi-K2.6
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

@Clanker summary of completed migration (Vuepress → Zensical):

**Remove Vuepress**
- Deleted `.vuepress/` (config, layouts, plugins, public), `pnpm-lock.yaml`; removed Vuepress help rows and functions (`install`, `update`, `dev-vuepress`, `build-vuepress`, `serve-vuepress`, `lint`) from `task`.

**Move build scripts**
- Moved to `bin/`: `build.js`, `generate-bases-views.js`, `convert-canvas-to-svg.js` (plus `delete-bases-views.js`).

**Install Zensical**
- Ran `./task init-zensical-docs` (creates `.venv`, installs `zensical` 0.0.73).
- Added `prepare-docs` command (`node bin/build.js all`) and Zensical help rows (`init/dev/build/serve-zensical-docs`).
- `bin/build.js` now outputs to `docs/`; got rid of vuepress copy/sitemap; fixed path root and the `all`-argument bug so index/canvas/convert/glossary/attachments all run; gitUrl now `Mint-System/Wiki` `main`; removed the "This page is maintained by Mint System GmbH" credit.
- Reintroduced a minimal `package.json` (only `gray-matter`, required by `bin/build.js`) + `package-lock.json`.

**Zensical config**
- `zensical.toml`: `site_name = "Wiki Mint System"`, `site_url = https://wiki.mint-system.ch/`, repo_url/edit_uri, `language = "de"`, favicon/logo `assets/icon.png`, nav (Home `readme.md`, Glossar `glossary.md`, Mint System GmbH external link), extra_css/javascript.

**Plausible** (via extra.js, same domain)
- `docs/javascripts/extra.js` injects `https://plausible.io/js/script.js` with `data-domain = wiki.mint-system.ch` (equals old Vuepress plugin).

**Mint System GmbH link**
- Nav entry + `docs/stylesheets/style.css` styles `.md-nav__link[href="https://www.mint-system.ch/"]` as the teal (`#14d6c4`) button, matching the old layout.

**Footer**
- Zensical `copyright` links Mint System GmbH (`© 2026 <a ...>Mint System GmbH</a>`), per <https://zensical.org/docs/setup/footer/>.

**Guides**
- Removed the VuePress section from `Mitarbeit.md` (replaced with a Zensical section listing `task`, `zensical.toml`, `package.json`, `bin/*`).
- Documented in German in `Prozesse Wiki - Entwicklung.md` how to clone, run `init-zensical-docs`/`npm install`/`prepare-docs` and preview (`dev-zensical-docs`, `build`+`serve`).

**Housekeeping**
- `.gitignore`: ignore `.venv`, `site`, `docs`, `node_modules`; dropped Vuepress-era entries.
- Removed generated `.github/workflows/docs.yml` (site deploys on Vercel, not GitHub Pages).
- Verified: `./task build-zensical-docs` builds 995 pages with no issues; footer link, plausible injection, nav button and favicon confirmed in the built site.

**Review follow-up fixes** (after author feedback):
- Home page: `README.md` now maps to `docs/index.md` (served at the site root `/`) instead of `docs/readme.md`; nav Home points to `index.md`; backlinks/glossary link README to `/`.
- Header: enabled `navigation.tabs` + Material indigo palette (like taskfile.build) so the nav renders as top-level tabs (Home, Glossar, Mint System GmbH); button CSS also styles the `.md-tabs__link`.
- URLs: internal wiki links now use clean URLs (`/tutorial/`) instead of `/tutorial.html`, matching how Zensical serves pages (`http://localhost:8000/tutorial/`).
- Footer: rewrote the per-page footer as plain markdown + inline HTML anchors (was raw `<footer>` HTML block rendered as literal text); Obsidian URI omits the `.md` extension (standard Obsidian URI format) so the link validator reports no noise.
- Result: `./task build-zensical-docs` → clean "No issues found".

@Clanker Please review and verify the migration results.

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness and model. If you have access to session info also add token count.
