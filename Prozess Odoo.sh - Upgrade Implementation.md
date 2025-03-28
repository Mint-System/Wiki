---
tags:
  - Prozess
---

# Process Odoo.sh - Upgrade Implementation

## Branch einrichten

Befolge diese Anweisungen, um einen Upgrade-Branch im Odoo.sh-Projekt einzurichten:

* Öffne das Git-Repository des Odoo.sh-Projekts im Terminal.
* Erstelle einen Upgrade-Branch (verwaist) mit `git checkout --orphan=upgrade`.

Der Name des Branches sollte die Odoo-Version enthalten, da es mehrere Upgrade-Branches geben könnte.

* Verschiebe den Branch im Odoo.sh-Projekt in den Staging-Bereich.
* Aktiviere das Upgrade im Upgrade-Tab.

Überprüfe, ob das Upgrade ohne Probleme läuft. Falls nicht, erstelle ein Support-Ticket oder erstelle [[Odoo.sh Upgrade Scripts]].

Jedes Mal, wenn ein Commit in diesem Branch gemacht wird, führt Odoo.sh die Upgrade-Skripte aus.

* Füge die Git-Submodule zum Repository hinzu.
* Sobald alle erforderlichen Odoo-Module verfügbar sind, beginne mit den Tests beim Kunden.

## Submodul aktualisieren

Arbeitsschritte:

* Klonen Sie das Odoo.sh Git Repo
* Klonen Sie die Submodule `git submodule update --init`
* Öffnen Sie das Odoo.sh Git Repo in VSCode
* Aktualisieren Sie ein ausgewähltes Submodul

![[Odoo.sh Submodule.png]]

```bash
cd odoo-apps-manufacture
git switch 16.0
git pull
```

* Committen Sie die Änderung im Git Repo

```bash
git add doo-apps-manufacture
git commit -m "chore: odoo-apps-manufacture"
```
