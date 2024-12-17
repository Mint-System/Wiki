---
tags:
- Prozess
---
# Prozesse Odoo - Upgrade Implementation

## Prozess initialisieren

Arbeitsschritte:
* Erstellen Modulliste auf Server ([[Migrate Odoo Modules XX.0]])
* Upgrade-Strategy wählen: [[Odoo Enterprise Upgrade]] oder [[Odoo Community Upgrade]]
* Bereitstellen Odoo-Umgebung auf der neuen Version

## Modulliste erstellen

Arbeitsschritte:
* Auf Server einloggen `ssh $ALIAS.mint-system.com`
* Modulliste generieren `docker-odoo-cloc -c $CONTAINER -d $DATABASE`
* Modulliste als Issue "Migrate Modules XX.0" erfassen

## Module prüfen

Arbeitsschritte:
* Lokale Entwicklungssumgebung bereitstellen ([[Odoo Build]])
* Jedes Modul in Modulliste prüfen und bei Bedarf migrieren
* Module paketieren und veröffentlichen
* Bereitstellen auf neuer Odoo-Umgebung

## Prozess entwickeln

Arbeitsschritte:
* Auswählen Upgrade gemäss Edition und Hosting:
	* Odoo Comunity Edition: [[Odoo Community Upgrade]]
	* Odoo Enterprise Edition: [[Odoo Enterprise Upgrade]]
	* Odoo.sh Hosting: [[#Odoo.sh Upgrade durchführen]]
* Iterative Entwicklung Upgrade-Drehbuch für Kunde
