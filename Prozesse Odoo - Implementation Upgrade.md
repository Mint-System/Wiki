---
tags:
- Prozess
---
# Prozesse Odoo - Implementation Upgrade

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

## Odoo Upgrade ausführen

Arbeitsschritte:
* Durchführen Upgrade gemäss Edition und Hosting
	* Odoo Comunity Edition: [[Odoo Community Upgrade]]
	* Odoo Enterprise Edition: [[Odoo Enterprise Upgrade]]
	* Odoo.sh Hosting: [[#Odoo.sh Upgrade durchführen]]

## Odoo.sh Upgrade durchführen

Arbeitssschritte:
* In Odoo.sh git Repository einen leeren Staging-Branch für das Upgrade erstellen
	* `git switch int`
	* `git switch -c --orphan 16.0-upgrade`
* Branch in Odoo.sh in den Staging -Bereich verschieben
* Im Tab *Upgrade* die Zielversion wählen und das Upgrade aktivieren
* Auf dem Branch die migrierten Odoo Module einchecken oder die entsprechenden Submodule auschecken