---
tags:
- HowTo
---
# Git HowTo

## Push until specific commit

This how you can push until a specific commit (hash):

```bash
COMMIT=1f72f3ba764e4ece0cd556779781b414c2efacb6
echo "Summary of the commits diff:"
git --no-pager log origin/main..$COMMIT --oneline
git push origin $COMMIT:main
```

## Fork aktualisieren

In diesem Beispiel haben wir einen Fork:

* Upstream: https://github.com/Mint-System/Odoo-Build/
* Origin: https://github.com/sozialinfo/Odoo-Build

### Einrichten

Repo öffnen.

```bash
cd Sozialinfo-Odoo-Build
git switch 16.0
```

Mit `git remote -v` im Repo die Remotes anzeigen. Wenn nötig den Upsream hinzufügen:

```bash
git remote add upstream git@github.com:Mint-System/Odoo-Build.git
```

 Mit `git switch Mint-System-16.0` den Upstream-Branch wechseln. Wenn nötig erstellen:

```bash
git switch --oprhan Mint-System-16.0 
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

In Main-Branch wechseln.

```bash
git switch 16.0
git rebase Mint-System-16.0
git stash pop
```

Submodule dem Index inzufügen.

```bash
task git-submodule-add git@github.com:sozialinfo/odoo-apps-sozialinfo.git addons/sozialinfo
```

Referenzen der Submodule aktualisieren.

```bash
task checkout 16.0
task git-submodule-pull
```

Alles committen.

```bash
gaa
gcmsg "feat: checkout upstream"
gp -f
```
