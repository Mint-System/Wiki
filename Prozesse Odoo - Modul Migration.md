---
tags:
- Prozess
---
# Prozesse Odoo - Modul Migration

## Odoo Submodule-Branch initialisieren

Arbeitsschritte:
* Navigation in das Submodule `cd addons/$REPO`
* Neuer Branch erstellen `git switch --orphan $BRANCH`
* Alle Dateien ausser `README.md` entfernen
* Alle Lint-Dateien kopieren `cp template/$BRANCH/.* addons/$REPO/`
* Änderungen committen `git add .; git commit -m "init $BRANCH branch; git push --set-upstream origin $BRANCH"`
* Submodule auf Odoo Build hinzufügen `git submodule add -f -b 17.0 git@github.com:Mint-System/Odoo-Apps-$REPO.git addons/$REPO`
* Änderungen auf Odoo Build committen
## Odoo Modul migrieren

Arbeitsschritte:
* Odoo Branch auschecken `task checkout $BRANCH`
* Navigation in das Submodule-Repo `cd addons/$REPO`
* Auschecken Modul von vorhergehender Version `git checkout $OLD_BRANCH $MODULE`
* Modul linten und anpassen `task lint-module addons/$REPO/$MODULE`
* Modul installieren und testen `task install-module addons/$REPO/$MODULE`
* Test-Instruktionen erstellen (siehe [[Odoo Module Test Instructions]])
* README aktualisieren `task update-readme addons/$REPO/README.md`
* Migration committen `cd addons/$REPO; git add .; git commit -m "migration $MODULE"`
* Pull-Request erstellen und Review beantragen
* Wenn PR gemerged ist das Submodule-Repo deployen
