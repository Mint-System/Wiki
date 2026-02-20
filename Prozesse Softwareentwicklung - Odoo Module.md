---
title: Prozesse Softwareentwicklung - Odoo Module
kind: howto
section: process
---

## Modul initialisieren

Arbeitsschritte:

- App anhand Vorlage erstellen `task create-module addons/$REPO/$MODULE`
- Alle nicht benötigten Dateien und Ordner entfernen: `data`, `demo`, `report`, `static/src`
- Entwicklung der Models in `models/`
- Entwicklung der Views in `views/`
- Entwicklung der Zugriffskontrollen in `security/`
- Aktualisieren Manifest `__manifest__.py`
- Datenbank starten und initialisieren `task start db; task init-db`
- Modul installieren `task init-module addons/$REPO/$MODULE`
- Entwicklungsumgebung starten und Modul testen `task start native`
