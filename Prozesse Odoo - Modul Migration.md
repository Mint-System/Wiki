---
tags:
- Prozess
---
# Prozesse Odoo - Modul Migration

## Odoo Submodule-Branch initialisieren

Arbeitsschritte:

* Navigation in das Submodule `cd addons/$REPO`
* Neuer Branch erstellen `git switch --orphan $BRANCH`
* Alle Dateien entfernen `rm -rf ./*`
* Template-Dateien kopieren `cp -r ../../templates/$BRANCH/. .`
* Die `README.md` Datei aktualisieren.
* Änderungen committen `git add --all; git commit -m "feat: init $BRANCH"; git push --set-upstream origin $BRANCH"`
* Submodule auf Odoo Build hinzufügen `task git-submodule-add git@github.com:Mint-System/Odoo-Apps-$REPO.git addons/$REPO`
* Änderungen auf Odoo Build committen
* Register repo to <https://apps.odoo.com/apps/dashboard/repos>

## Odoo Modul migrieren

Arbeitsschritte:

* Navigation in das Submodule-Repo `cd addons/$REPO`
* Auschecken Modul von vorhergehender Version `git checkout $SOURCE_VERSION $MODULE`
* Modul-Code aktuallisieren mit `task upgrade-module addons/$REPO/$MODULE $SOURCE_VERSION`
* Modul-Version in `__manifest__.py` aktualisieren
* Modul installieren und testen `task init-module addons/$REPO/$MODULE`
* Test-Instruktionen erstellen (siehe [[Odoo Module Test Instructions]])
* README aktualisieren `task update-readme addons/$REPO/README.md`
* Modul linten und anpassen `task lint`
* Migration committen `git add --all; git commit -m "feat: migrate $MODULE"`
* Pull-Request erstellen und Review beantragen `gh pr create`
* Wenn PR gemerged ist, das Submodule-Repo deployen

## Mint System Fork für OCA-Repo erstellen

Arbeitsshritte:

* Go to the repo and create a fork
* Navigate into the local repo`cd oca/sale-workflow
* Add the fork as remote `git remote add mint-system git@github.com:Mint-System/sale-workflow.git`
* Checkout a customer branch `git switc -c $BRANCH-$PROJECT_CODE`
* Push a branch to the remote with `git push mint-system $BRANCH-$PROJECT_CODE`
