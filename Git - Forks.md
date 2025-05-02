---
tags:
  - HowTo
---

# Git - Fork

Alles zu Git Forks.

## Fork aktualiseren

In diesem Beispiel haben wir einen Fork:

* Upstream: https://github.com/Mint-System/Odoo-Build/
* Origin: https://github.com/sozialinfo/Odoo-Build

Und möchten diesen einrichten und aktualisieren.

### Einrichten

Repo öffnen.

```bash
cd ~/Sozialinfo-Odoo-Build
git switch main
```

Upstream-Remote hinzufügen:

```bash
git remote add upstream git@github.com:Mint-System/Odoo-Build.git
```

Den Upstream-Branch erstelllen:

```bash
git checkout -b upstream-main upstream/main
```

Von dort den Upstream-Branch pullen.

```bash
git pull upstream main
```

### Ausführen

Aktualisieren Upstream-Branch.

```bash
git switch upstream-main
git pull upstream main
```

Fork-Dateien auschecken und stashen.

```bash
git checkout main .gitmodules odoo.config.template
git stash
```

Branch neu anlegen und Fork-Dateien wieder einfügen. 

```bash
git branch -D main
git switch -c main
git stash pop
```

Submodule auschecken.

```bash
task switch-git-folder 16.0
task pull-git-folder
task save-version
```

Rebrand the repo.

```
sed -i 's/Mint System/Sozialinfo/g' README.md
sed -i 's/Mint-System/Sozialinfo/g' README.md
sed -i 's|https://www.mint-system.ch|https://www.sozialinfo.ch|g' README.md
```

Alles committen.

```bash
git add --all
git commit -m "chore: update from upstream"
git push -f --set-upstream origin main
```
