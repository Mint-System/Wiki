---
title: Prozesse Odoo - Migration Module
kind: howto
section: process
---

## Submodule-Branch initialisieren

Arbeitsschritte:

- Neuer Repo-Branch erstellen

```bash
task create-repo addons/$repo
```

- Template-Dateien kopieren und `README.md` Datei aktualisieren

```bash
task generate-repo-docs addons/$repo
```

- Änderungen committen

```bash
cd addons/$repo
git add --all
git commit -m "feat: init $(git branch --show-current)"
git push --set-upstream origin $(git branch --show-current)
```

- Submodule registrieren

```bash
task add-git-folder 19.0 git@github.com:Mint-System/Odoo-Apps-$repo.git addons/$repo
```

- Änderungen auf Odoo Build committen
- Repo auf <https://apps.odoo.com/apps/dashboard/repos> registrieren

## Modul migrieren

Arbeitsschritte:

- In Odoo-Build die neue Odoo Version auschecken:

```bash
task load-version $target_version
```

- Auschecken Modul von vorhergehender Version

```bash
cd addons/$repo
git checkout $source_version $module
```

- Modul-Code und Version in `__manifest__.py` aktualisieren

```bash
task migrate-module addons/$repo/$module
```

- Generiere die Modul Docs

```bash
task generate-module-docs addons/$repo/$module
```

- Modul installieren und testen

```bash
task init-module addons/$repo/$module
```

- Modul linten und Repo aktualisieren:

```bash
cd addons/$repo/
task all
```

- Wenn nötig führe die prompts aus.

```bash
task update-with-llm addons/$repo/$module/views/*.xml prompts/migrate-view-definitions.md
```

- Test-Instruktionen erstellen (siehe [[Odoo Module Test Instructions]])
- Migration committen

```bash
git -C addons/$repo add --all
git -C addons/$repo commit -m "feat($module): migrate
```

- Optional einen Pull-Request erstellen:
  - Feature branch erstellen `git switch -c mig-$module`
  - Und mit dem CLI einen PR erstellen `gh pr create`
  - Wenn PR gemerged ist, das Submodule-Repo deployen
- Änderungen pushen

```bash
git push
```
