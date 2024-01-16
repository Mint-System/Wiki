---
tags:
- Prozess
---
# Prozesse Odoo: Migration

## Odoo Modul migrieren

Arbeitsschritte:
* Odoo branch auschecken `task checkout $BRANCH`
* Navigation in das Modul Repo `cd addons/$REPO`
* Auschecken Modul von vorhergehender Version `git checkout $OLD_BRANCH $MODULE`
* Modul linten und anpassen `task lint-module addons/$REPO/$MODULE`
* Modul installieren und testen `task install-module addons/$REPO/$MODULE`
* Readme aktualisieren `task update-readme addons/$REPO/README.md`
* Migration comitten `cd addons/$REPO; git add .; git commit -m "migration $MODULE"`
