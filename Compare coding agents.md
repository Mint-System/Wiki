---
title: Compare coding agents
kind: explain
lang: en
author: Janik von Rotz
section: dev
---

Comparing LLM agents is difficult. I wanted to build a simple feature this Obsidian Wiki. Obsidian features _bases_, these are basically queries for the entire markdown file structure. There is no other output format, except for the bases view of Obsidian. The coding agent should build a simple js script that renders the bases view definitions to markdown tables.

## Prompt

This is the prompt.

```
I would like to process the view definition files in the `./bases` folder and output them as markdown table.
The input data for the views are the markdown files and their frontmatter data.
Have a look at `./Prozesse.base.md` to see an example output.
Can you complete the `./generate-base-views.js` file?
Use `js-yaml` to read the bases file.
Use `gray-matter` to read the frontmatter of the markdown files.
Note that the filters are strings and can be run as js code.
To process the markdown files create a list of objects with attributes.
Don't hardcode the field names of the view defintions.
Only add comments for functions and for loops.
Use pnpm instead of npm.
Don't output the content of the markdown files in the markdown table.
```

## Execution

I used [[Qwen Coder]] and the [[Infomaniak AI Tools]] to execute the prompt.

## Results

qwen3-coder-plus: Often produced syntax errors. Took many interations.

Qwen3-235B-A22B-Instruct-2507: Used libraries not asked to use.
