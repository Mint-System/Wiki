---
title: Prozesse Odoo - Migration OCA Module
kind: howto
section: process
---

## Mint System Fork für OCA Repository erstellen

Arbeitsschritte:

- Go to the repo and create a fork
- Navigate into the local repo`cd oca/sale-workflow
- Add the fork as remote `git remote add mint-system git@github.com:Mint-System/sale-workflow.git`
- Checkout a customer branch `git switc -c $BRANCH-$PROJECT_CODE`
- Push a branch to the remote with `git push mint-system $BRANCH-$PROJECT_CODE`

## OCA-Modul migrieren

Arbeitsschritte:

- Prüfen ob für das gesuchte Modul ein Pull-Request existiert, der alle Tests erfüllt
  - Denn Branch des Pull-Request bereitstellen
- Prüfen ob die OCA plant das Modul auf die Odoo Zielversion upzugraden
  - Modul gemäss Anleitung [[Migrate OCA module to XX.0]] migrieren
  - Den Branch des Ppull-Request bereitstellen
