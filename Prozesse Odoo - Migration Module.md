---
title: Prozesse Odoo - Migration Module
kind: howto
section: process
---

## Submodule-Branch initialisieren

Arbeitsschritte:

- Neuer Repo-Branch erstellen

```bash
task create-repo addons/$REPO
```

- Template-Dateien kopieren und `README.md` Datei aktualisieren

```bash
task generate-repo-docs addons/$REPO
```

- Navigation in das Submodule

```bash
cd addons/$REPO
```

- Änderungen committen

```bash
git add --all
git commit -m "feat: init $(git branch --show-current)"
git push --set-upstream origin $(git branch --show-current)
```

- Submodule registrieren

```bash
task add-git-folder git@github.com:Mint-System/Odoo-Apps-$REPO.git addons/$REPO
```

- Änderungen auf Odoo Build committen
- Repo auf <https://apps.odoo.com/apps/dashboard/repos> registrieren

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

- Wenn nötig führe die promts aus.

```bash
task update-with-llm addons/$REPO/$MODULE/views/*.xml prompts/migrate-view-definitions.md
```

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
