---
title: Develope an Odoo module
section: communication
lang: en
kind: explain
---

When developing an Odoo module the best way to get started is by adopting the [[OCA]] and [[Odoo S.A.]] best practices.

In this guide we give an overview of the practices.

## Guidelines

Odoo S.A. provides a coding guideline <https://www.odoo.com/documentation/16.0/de/contributing/development/coding_guidelines.html>. The guide provides answers on how to almost every aspect of dveloping an Odoo module.

However, this guide is superseded by the OCA guidelines <https://github.com/OCA/odoo-community.org/blob/master/website/Contribution/CONTRIBUTING.rst>.

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

The linting uses tool like [[prettier]]. The template ships with a lot more quality tools. The config files for these tools are stored in the root of each repo and branch. Here is an example <https://github.com/OCA/sale-workflow/blob/16.0>.
