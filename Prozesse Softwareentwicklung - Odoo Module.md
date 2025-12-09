---
kind:
  - howto
section: process
---

# Prozesse Softwareentwicklung - Odoo Module

## Modul initialisieren

Arbeitsschritte:

- App anhand Vorlage erstellen `task create-module addons/$REPO/$MODULE`
- Alle nicht benötigten Dateien und Ordner entfernen: `data`, `demo`, `report`, `static/src`
- Entwicklung der Models in `models/`
- Entwicklung der Views in `views/`
- Entwicklung der Zugriffskontrollen in `security/`
- Aktualisieren Manifest `__manifest__.py`
- Modul linten `task lint-module addons/$REPO/$MODULE`
- Datenbank starten und initialisieren `task start db; task init-db`
- Modul installieren `task init-module addons/$REPO/$MODULE`
- Entwicklungsumgebung starten und Modul testen `task start native`
