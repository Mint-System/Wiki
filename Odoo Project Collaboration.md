---
kind: explain
section: dev
lang: en
---

A short outline on how we want to collaborate on Odoo projects with third parties.

## General Conditions

- We do not recommend nor use Odoo Studio. Instead we create [[Odoo Snippets]].
- When working with [[ai agents]] prompts have to be submitted and committed to the repo. See [[Taskfile prompts]] for details.
- Whoever breaks the Odoo build last is responsible to fix it.

## Module Development

- We build modules according to the [[OCA Guidelines]].
- Modules must be made available in public repos.
- Add module repos as git submodules to Odoo.sh projects.

## Quality Assurance

- The module can be installed without errors.
- The code of the module is linted.
- There are not typos in strings and texts.
- The module has been UI tested.