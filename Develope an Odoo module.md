---
tags:
- HowTo
---

# Develope an Odoo module

When developing an Odoo module the best way to get started is by adopting the [[OCA]] best practices.

In this guide we give an overview of the practices.

## Repositories

The OCA organizes their modules into multiple collections / repositories. Visit <https://github.com/OCA/> to get an overview.

A good example is the <https://github.com/OCA/sale-workflow> repo. It contains all sale related modules of the OCA.

## Branches

For each Odoo version there is a git branch (..., 13.0, 14.0, 15.0, 16.0, ...). Modules are migrated between these branches for each major release.

## Template

The OCA modules are bootstraped from <https://github.com/OCA/oca-addons-repo-template>. It uses [[Copier]] to scaffold a new module structure.

## Odoo Linting

The Copier template ships a [[pre-commit]] configuration, that uses [[pylint]] for linting. Pylint is extended with <https://github.com/OCA/pylint-odoo>. 

## Python Linting

The template ships with a lot more quality tools. The config files for these tools are stored in the root of each repo and branch. Here is an example <https://github.com/OCA/sale-workflow/blob/16.0>.

The most important quality tools are:

* [[flake8]]
* [[isort]]
* [[black]]
* [[autoflake]]

## Testing

#FIXME 