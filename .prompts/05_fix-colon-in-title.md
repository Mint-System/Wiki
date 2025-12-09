Read the `AGENTS.md` and `task` to get an understanding of the project. The task is to update the frontmatter of all markdown files.

The `title` field must not have a colon `:`. Replae colons with dashes (as the filename).

Here is an example of the `./Nextcloud - Configure ignored files.md` file.

```markdown
---
title: Nextcloud: Configure ignored files
lang: en
kind: howto
section: dev
---

Open the nextcloud client window and click on _Edit ignored files_ of a selected sync configuration.

![[Nextcloud client ignored files.png]]

Enter these default patterns:

- .~lock\*
- workspace (for Obsidian users)
- .DS_Store (for Mac users)
- .git (for developers)
- default.vim (for developers)
- node_modules (for developers)
- .now (for developers)
- .vercel (for developers)

The list of ignored files is saved to `.sync-exclude.lst`.

```

Afterwards it should look like this:

```markdown
---
title: Nextcloud - Configure ignored files
lang: en
kind: howto
section: dev
---

Open the nextcloud client window and click on _Edit ignored files_ of a selected sync configuration.

![[Nextcloud client ignored files.png]]

Enter these default patterns:

- .~lock\*
- workspace (for Obsidian users)
- .DS_Store (for Mac users)
- .git (for developers)
- default.vim (for developers)
- node_modules (for developers)
- .now (for developers)
- .vercel (for developers)

The list of ignored files is saved to `.sync-exclude.lst`.

```
