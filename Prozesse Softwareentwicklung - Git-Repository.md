---
title: Prozesse Softwareentwicklung - Git-Repository
kind: howto
section: process
---

## Profil einrichten

Arbeitsschritte:

- Terminal starten
- Befehl eingeben:

```console
git config --global user.name "Kurt Gisler"
git config --global user.email kurt.gisler@mint-system.ch
```

## Git-Repository erstellen

Arbeitsschritte:

- Einloggen auf [[GitHub|GitHub]] für öffentliche Repositories
- Einloggen auf [[Git Mint System]] für private Repositories
- Erstellen Repository

## Synchronisierungskonflikt beheben

Arbeitsschritte:

- Terminal öffnen und in das Projekt navigieren
- Befehl `git reset --hard HEAD` eingeben (lokale Änderungen gehen verloren)
- Nach Bedarf den letzten commit löschen `git reset HEAD^`
- Von Remote Repository aktualisieren mit `git pull`
