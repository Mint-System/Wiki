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
cd Sozialinfo-Odoo-Build
git switch 16.0
```

Upstream-Remote hinzufügen:

```bash
git remote add upstream git@github.com:Mint-System/Odoo-Build.git
```

Den Upstream-Branch erstelllen:

```bash
git checkout -b Mint-System-16.0 upstream/16.0
```

Von dort den Upstream-Branch pullen.

```bash
git pull upstream 16.0
```

### Ausführen

Aktualisieren Upstream-Branch.

```bash
git switch Mint-System-16.0 
git pull upstream 16.0
```

Submodules-Datei auschecken.

```bash
git checkout 16.0 .gitmodules
git stash
```

Branch neu anlegen und Submodules-Datei wieder einfügen. 

```bash
git branch -D 16.0
git switch -c 16.0
git stash pop
```

Submodule neu auschecken.

```bash
task git-submodule-switch 16.0
task git-submodule-pull
```

Rebrand the READMEs.

```
sed -i 's/Mint System/Sozialinfo/g' README.md
sed -i 's/Mint-System/Sozialinfo/g' README.md
```

Alles committen.

```bash
git add --all
git commit -m "feat: checkout upstream"
git push -f --set-upstream origin 16.0
```
