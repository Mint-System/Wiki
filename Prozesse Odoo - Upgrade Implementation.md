---
tags:
- Prozess
---
# Prozesse Odoo - Upgrade Implementation

## Prozess initialisieren

Arbeitsschritte:
* Erstellen Modulliste auf Server ([[Migrate Modules to Odoo XX.0]])
* Upgrade-Strategy wählen: [[Odoo Enterprise Upgrade]] oder [[Odoo Community Upgrade]]

## Modulliste erstellen

Arbeitsschritte:
* Auf Server einloggen `ssh $ALIAS.mint-system.com`
* Modulliste generieren `docker-odoo-cloc -c $CONTAINER -d $DATABASE`
* Modulname aus Konsole kopieren und filtern
* Vorlage "Migrate Modules XX.0" kopieren
* Modulnamen einfügen

## Module prüfen

Arbeitsschritte:
* Lokale Entwicklungssumgebung bereitstellen ([[Odoo Build]])
* Jedes Modul anhand <https://odoo.build/modules.html> prüfen
* Bei Bedarf das Modul migrieren
* Bereitstellen Modul auf neuer Odoo-Umgebung

## Drehbuch und Testfälle entwickeln

Arbeitsschritte:
* Auswählen Upgrade gemäss Edition und Hosting:
	* Odoo Comunity Edition: [[Odoo Community Upgrade]]
	* Odoo Enterprise Edition: [[Odoo Enterprise Upgrade]]
	* Odoo.sh Hosting: [[#Odoo.sh Upgrade durchführen]]
* Iterative Entwicklung Upgrade-Drehbuch für Kunde
* Entwickeln Testfälle anhand Vorlage [[Testing Upgrade Odoo XX.0]]
