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

In Main-Branch wechseln.

```bash
git switch 16.0
```

Files aus dem upstream Branch kopieren.

```bash
git checkout Mint-System-16.0 .
```

Liste der Submoduels zurücksetzen.

```bash
git restore --staged .gitmodules
git checkout .gitmodules
```

Referenzen der Submodule aktualisieren.

```bash
task checkout 16.0
task git-submodule-pull
```

Alles committen.

```bash
gaa
gcmsg "feat: Checkout from upstream"
gp
```

## Create fork with merged PRs

Repo: https://github.com/OCA/sale-workflow

