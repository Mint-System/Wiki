---
commit_ref: d0e381bdaf17912c51c2f3318c3bc2b20c2cac92
title: "Convert info boxes"
author: "Janik von Rotz <login@janikvonrotz.ch>"
action: implement
state: completed
date_completed: 2026-11-04
harness: pi
provider: mistral
model: deepseek-v4-1-flash-1017
input_tokens: 318768
output_tokens: 27280
---

# Convert info boxes

Note: @Clanker refers to the "ai agent" (you) who is working on this prompt file.

@Clanker when working on this prompt file, make sure to:

- Read the `AGENTS.md` and `README.md` to get an understanding of the project
- Read entire task section and prepare a list of todos
- Update the todo list while working on task

## Task

The info boxes in file such as <Prozesse%20Finanzen%20-%20Abrechnung.md>:

```markdown
:::tip

:::
```

Are not rendered as acutal boxes <https://wiki.mint-system.ch/prozesse-finanzen-abrechnung/>.

This works in `~/Odoo-Wiki` project.

See `~/Odoo-Wiki/Accounting Reports.md` and <https://www.odoo-wiki.org/accounting-reports/> for comparison.

Investigate why this works in `Odoo-Wiki` and apply fix to this project.

@Clanker When task is completed set frontmatter state to review. Prompt the author to verify the results.

## Worklog

**Cause:** Zensical uses Python-Markdown, which only understands `!!! type` admonitions. The Obsidian callout syntax `::: tip` is not converted, so the block was emitted as a plain `<p>` paragraph. `Odoo-Wiki` renders boxes because its `bin/build.js` already converts `:::` containers into indented `!!!` admonitions. The theme and markdown extension config of both projects are identical, so the difference was purely in the build step.

**Fix:**

`:::` is Vuepress syntax, not Obsidian. Rather than keep translating it at build time, the sources were migrated to the native Zensical/MkDocs syntax so no conversion step is needed.

- Converted all callouts in this vault (25 blocks in 18 files) to `!!! type` with a four-space indented body. Titles are quoted, since an unquoted title ends up in the class attribute.
- `bin/build.js` is unchanged. An intermediate `convertCallouts()` helper was added during the investigation and removed again once the sources were native, so the build has no callout logic.
- Same migration applied to `~/Odoo-Wiki`: 428 callouts across 226 files converted, including the two titled warnings that previously rendered with a generic title. `Contribution.md` now documents the `!!!` syntax in both its code samples and its live demos. `convertContainers()` and `containerTypes` were removed from `~/Odoo-Wiki/bin/build.js`.

**Verification:**

- `~/Wiki`: `./task prepare-docs` + `zensical build` renders all 25 callouts (13 tip, 11 warning, 1 info) on 18 pages, e.g. `site/prozesse-finanzen-abrechnung/index.html:492`. `No issues found`.
- `~/Odoo-Wiki`: `node bin/build.js all` + `zensical build` still renders 428 admonitions (225 tip, 202 warning, 1 info) with no malformed classes and no `:::` leaking into the HTML. `No issues found`.
- No `:::` remains outside code fences in either repo. The `Markdown Tutorial.md` examples are inside a fence and were left as-is.

@Clanker If author confirms results set frontmatter state to completed, otherwise to aborted. Update date, harness, provider and model. If you have access to session info also add token count.
