---
tags:
  - Prozess
kind: reference
---
# Prozesse Odoo.sh - Modul Migration

Damit Sie Module für ein Odoo.sh Projekt/Repsitory migrieren können müssen Sie die folgenden Prozesse zur Vorbereitung ausführen:

* [[Prozesse Odoo.sh - Projekt bereitstellen#Odoo.sh Repository einrichten]]
* [[Prozess Odoo.sh - Upgrade Implementation#Upgrade-Branch einrichten]]

Wenn Sie den Upgrade-Branch eingerichtet haben, können Sie Submodule in der neuen Version hinzufügen und Module migrieren:

* [[Prozesse Odoo.sh - Projekt bereitstellen#Submodul hinzufügen]]
* [[Prozesse Odoo - Modul Migration#Modul migrieren]]

Wenn Sie Module migriert haben und diese bereitstellen möchten, führen Sie [[#Submodul aktualisieren]] aus.

## Submodul aktualisieren

Arbeitsschritte:

* Klone das Odoo.sh Git Repo
* Klone die Submodule mit `git submodule update --init`
* Öffne das Odoo.sh Git Repo in VSCode
* Aktualisiere das ausgewählte Submodul

![[Odoo.sh Submodule.png]]

Alternative auf der Kommandozeile:

```bash
cd odoo-apps-manufacture
git switch 16.0
git pull
```

* Stage die neue Submodule-Referenz und committe die Änderung im Git Repo

```bash
git add doo-apps-manufacture
git commit -m "chore: odoo-apps-manufacture"
```