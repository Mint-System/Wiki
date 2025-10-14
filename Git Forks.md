---
kind:
  - tutorial
---

# Git Forks

Alles zu Git Forks.

## Fork aktualiseren

In diesem Beispiel haben wir einen Fork:

- Upstream: https://github.com/Mint-System/Odoo-Build/
- Origin: https://github.com/sozialinfo/Odoo-Build

Und möchten diesen einrichten und aktualisieren.

### Einrichten

Repo öffnen.

```bash
cd ~/Sozialinfo-Odoo-Build
```

Upstream-Remote hinzufügen:

```bash
git remote add upstream git@github.com:Mint-System/Odoo-Build.git
git fetch upstream
```

Den Upstream-Branch erstelllen:

```bash
git checkout -b upstream-main upstream/main
```

### Aktualisieren

Aktualisieren Upstream-Branch.

```bash
git switch upstream-main
git pull upstream main
```

Fork-Dateien auschecken und stashen.

```bash
git checkout main odoo.conf.template versions/16.0 versions/18.0
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
task sync-git-folder
task save-version
```

Rebrand the repo.

```bash
sed -i 's/Mint System GmbH/Sozialinfo/g' README.md
sed -i 's/Mint System/Sozialinfo/g' README.md
sed -i 's/Mint-System/Sozialinfo/g' README.md
sed -i 's|https://www.mint-system.ch|https://www.sozialinfo.ch|g' README.md
```

Alles committen.

```bash
git add --all
git commit -m "BREAKING CHANGE: update from upstream"
git push -f --set-upstream origin main
```
