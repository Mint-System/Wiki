Read the `AGENTS.md` to get an understanding of the project. The task is to remove the `tags` key and values from the frontmatter of all files.

Here is a simple example for `bpmn.io.md`:

```markdown
---
tags:
  - Definition
section: tool
kind: reference
website: https://bpmn.io/
---

# bpmn.io
```

After the change:

```markdown
---
section: tool
kind: reference
website: https://bpmn.io/
---

# bpmn.io
```
