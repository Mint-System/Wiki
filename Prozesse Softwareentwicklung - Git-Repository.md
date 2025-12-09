---
title: Prozesse Softwareentwicklung - Git-Repository
kind: howto
section: process
---

## Profil einrichten

Arbeitsschritte:

- [[VSCodium]] oder [[VSCode]] öffnen
- _Terminal > New Terminal_ wählen
- Befehl eingeben:

```console
git config --global user.name "Kurt Gisler"
git config --global user.email kurt.gisler@mint-system.ch
```

## Git-Repository erstellen

Arbeitsschritte:

- Einloggen auf GitHub für öffentliche Repositories
- Einloggen auf [[GitLab]] für private Repositories
- Erstellen Repository mit Typ-Prefix

## Synchronisierungskonflikt beheben

Arbeitsschritte:

- Das Projekt in [[VSCodium]] oder [[VSCode]] öffnen
- _Terminal > New Terminal_ wählen
- Befehl `git reset --hard HEAD` eingeben (lokale Änderungen gehen verloren)
- Nach Bedarf den letzten commit löschen `git reset HEAD^`
- Von Remote Repository aktualisieren mit `git pull`
