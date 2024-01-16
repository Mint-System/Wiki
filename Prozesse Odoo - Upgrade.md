---
tags:
- Prozess
---
# Prozesse Odoo: Upgrade

## Prozess initialisieren

Arbeitsschritte:
* Erstellen Modulliste auf Server ([[Vorlage Odoo Upgrade Modules]])
* Upgrade-Strategy wählen: [[Odoo Enterprise Upgrade]] oder [[Odoo Community Upgrade]]
* Bereitstellen Odoo-Umgebung auf der neuen Version

## Modulliste erstellen

Arbeitsschritte:
* Auf Server einloggen `ssh $ALIAS.mint-system.com`
* Modulliste generieren `docker-odoo-cloc -c $CONTAINER -d $DATABASE`
* Modulliste auf Aufgabe eintragen

## Module prüfen

Arbeitsschritte:
* Lokale Entwicklungssumgebung bereitstellen ([[Odoo Build]])
* Jedes Modul in Modulliste prüfen und bei Bedarf migrieren
* Module paketieren und veröffentlichen
* Bereitstellen auf neuer Odoo-Umgebung

## Odoo upgraden

Arbeitsschritte:
* Durchführen Upgrade gemäss ausgewählter Strategie
