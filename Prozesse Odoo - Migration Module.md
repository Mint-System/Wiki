---
title: Prozesse Odoo - Migration Module
kind: howto
section: process
---

## Submodule-Branch initialisieren

Arbeitsschritte:

- Navigation in das Submodule

```bash
cd addons/$REPO
```

- Neuer Branch erstellen

```bash
git switch --orphan $TARGET_VERSION
```

- Alle Dateien entfernen

```bash
rm -rf ./*
```

- Template-Dateien kopieren und `README.md` Datei aktualisieren

```bash
task template-repo addons/$REPO
```

- Änderungen committen

```bash
git add --all
git commit -m "feat: init $(git branch --show-current)"
git push --set-upstream origin $(git branch --show-current)
```

- Submodule auf Odoo Build hinzufügen

```bash
task add-git-submodule git@github.com:Mint-System/Odoo-Apps-$REPO.git addons/$REPO
```

- Änderungen auf Odoo Build committen
- Register repo to <https://apps.odoo.com/apps/dashboard/repos>

## Modul migrieren

Arbeitsschritte:

- In Odoo-Build die neue Odoo Version auschecken:

```bash
task load-version $TARGET_VERSION
```

- Auschecken Modul von vorhergehender Version

```bash
cd addons/$REPO
git checkout $SOURCE_VERSION $MODULE
```

- Modul-Code und Version in `__manifest__.py` aktualisieren

```bash
task migrate-module addons/$REPO/$MODULE
```

- Generiere die Mdoul README-Datei

```bash
task generate-module-docs $!
```

- Modul installieren und testen

```bash
task init-module $!
```

- Modul linten und Repo aktualisieren:

```bash
cd addons/$REPO/
task all
```

- Wenn nötig führ die [[Odoo module migration prompts]] aus
- Test-Instruktionen erstellen (siehe [[Odoo Module Test Instructions]])
- Migration committen

```bash
git -C addons/$REPO add --all
git -C addons/$REPO commit -m "feat($MODULE): migrate
```

- Optional einen Pull-Request erstellen:
  - Feature branch erstellen `git switch -c mig-$MODULE`
  - Und mit dem CLI einen PR erstellen `gh pr create`
  - Wenn PR gemerged ist, das Submodule-Repo deployen
- Änderungen pushen

```bash
git push
```

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
