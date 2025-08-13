---
tags:
  - Prozess
kind:
  - howto
---
# Prozesse Odoo - Modul Migration

## Submodule-Branch initialisieren

Arbeitsschritte:

* Navigation in das Submodule 

```bash
cd addons/$REPO
```

* Neuer Branch erstellen
```bash
git switch --orphan $TARGET_VERSION
```

* Alle Dateien entfernen

```bash
rm -rf ./*
```

* Template-Dateien kopieren

```bash
task template-repo addons/$REPO
```

* Die `README.md` Datei aktualisieren 

```bash
task update-repo-docs
```

* Änderungen committen

```bash
git add --all
git commit -m "feat: init $TARGET_VERSION"
git push --set-upstream origin $TARGET_VERSION"
```

* Submodule auf Odoo Build hinzufügen

```bash
task add-git-submodule git@github.com:Mint-System/Odoo-Apps-$REPO.git addons/$REPO
```

* Änderungen auf Odoo Build committen
* Register repo to <https://apps.odoo.com/apps/dashboard/repos>

## Modul migrieren

Arbeitsschritte:

* In Odoo-Build die neue Odoo Version auschecken: 

```bash
task load-version $TARGET_VERSION
```

* Auschecken Modul von vorhergehender Version

```bash
cd addons/$REPO
git checkout $SOURCE_VERSION $MODULE`
```

* Modul-Version in `__manifest__.py` aktualisieren
* Modul-Code aktualisieren

```bash
task upgrade-module addons/$REPO/$MODULE $SOURCE_VERSION
```

* Modul-README aktualisieren

```bash
task generate-module-docs addons/$REPO/$MODULE
```

* Modul installieren und testen

```bash
task init-module addons/$REPO/$MODULE
```

* Test-Instruktionen erstellen (siehe [[Odoo Module Test Instructions]])
* Repo-README aktualisieren

```bash
task update-readme addons/$REPO
```

* Modul linten und anpassen:

```bash
cd addons/$REPO
task all
```

* Migration committen

```bash
git add --all; git commit -m "feat($MODULE): migrate
```

* Optional einen Pull-Request erstellen:
	* Feature branch erstellen `git switch -c mig-$MODULE`
	* Und mit dem CLI einen PR erstellen `gh pr create`
	* Wenn PR gemerged ist, das Submodule-Repo deployen
* Änderungen pushen

```bash
git push
```

## Mint System Fork für OCA Repository erstellen

Arbeitsschritte:

* Go to the repo and create a fork
* Navigate into the local repo`cd oca/sale-workflow
* Add the fork as remote `git remote add mint-system git@github.com:Mint-System/sale-workflow.git`
* Checkout a customer branch `git switc -c $BRANCH-$PROJECT_CODE`
* Push a branch to the remote with `git push mint-system $BRANCH-$PROJECT_CODE`

## OCA-Modul migrieren

Arbeitsschritte:

* Prüfen ob für das gesuchte Modul ein Pull-Request existiert, der alle Tests erfüllt
* Prüfen ob eine Anleitung für die Odoo-Version existiert: [[Odoo Build - Migrate an OCA module]]
* Modul-Migration gemäss Anleitung ausführen