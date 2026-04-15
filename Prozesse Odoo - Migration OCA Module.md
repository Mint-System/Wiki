---
title: Prozesse Odoo - Migration OCA Module
kind: howto
section: process
---

## Mint System Fork für OCA Repository erstellen

Arbeitsschritte:

- Go to the OCA repo f.g. https://github.com/OCA/sale-workflow/ and create a fork
- Make sure to copy all branches
- In the Odoo Build project add the `mint-system` remote

```bash
task add-git-remote mint-system git@github.com:Mint-System/sale-workflow.git oca/sale-workflow
```

- Ensure that the repo `oca/sale-workflow` has the `mint-system` remote.

## OCA-Modul migrieren

Arbeitsschritte:

- Prüfen ob für das gesuchte Modul ein Pull-Request existiert, der alle Tests erfüllt
  - Denn Branch des Pull-Request bereitstellen
- Prüfen ob die OCA plant das Modul auf die Odoo Zielversion upzugraden
  - Modul gemäss Anleitung [[Migrate OCA module to XX.0]] migrieren
  - Den Branch des Pull-Request bereitstellen
