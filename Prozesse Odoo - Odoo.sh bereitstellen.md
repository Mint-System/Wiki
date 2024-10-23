---
tags:
- Prozess
---
# Prozesse Odoo - Odoo.sh bereitstellen

## Initialisierung

### Bestehendes Projekt übernehmen

Arbeitsschritte:
* Kontaktaufnahme mit Besitzer des GitHub Repository
* Anfrage zum Transfer des Repository machen
* Anfrage zur Freigabe auf das bestehende Odoo.sh Projekt machen

### Neues Projekt erstellen

Arbeitsschritte:
* Einloggen auf <https://odoo.sh>
* Neues Projekt anlegen
* Erstellen `dev` und `main` Branch
* Deployment des produktiven Branches

### Berechtigung Kunde einrichten

Arbeitsschritte:
* Kunde auffordern zur Erstellung eines GitHub-Accounts
* Freigabe des GitHub und des Odoo.sh-Projekts an den Kunden

## Upgrade initialisieren

Arbeitssschritte:
* In Odoo.sh git Repository einen leeren Staging-Branch für das Upgrade erstellen
	* `git switch int`
	* `git switch -c --orphan 16.0-upgrade`
* Branch in Odoo.sh in den Staging -Bereich verschieben
* Im Tab *Upgrade* die Zielversion wählen und das Upgrade aktivieren
* Auf dem Branch die migrierten Odoo Module einchecken oder die entsprechenden Submodule auschecken