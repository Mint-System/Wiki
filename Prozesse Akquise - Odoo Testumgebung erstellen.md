---
tags:
- Prozess
---
# Prozesse Akquise - Odoo Testumgebung erstellen

## Odoo Testumgebung erstellen

Arbeitsschritte:
* Definieren Sie einen Datenbanknamen
* Rufen Sie die Url <https://$DATENBANKNAMEN.14.odoo.buil> auf
* Installieren Sie die Odoo-Datenbank
	* Master Password: siehe [[Passwortmanager]]
	* Database Name: `$DATENBANKNAMEN`
	* Email: Persönliche Email
	* Password: Persönliches Passwort
	* Language: German (CH)
	* Country: Switzerland
* Installation Odoo Apps
	* `mail_enterprise`
	* `web_enterprise`
	* `show_db_name`
	* `ir_mail_server_data`
* Weitere Odoo Apps nach Bedarf installieren
* Benutzer einladen

## Odoo Testumgebung bestellen

Arbeitsschritte:
* Aufgabe *Odoo Demoumgebung* in Projekt Akquise erstellen
	* Festhalten Liste der zu installierenden Apps mit dem technischen Namen
	* Festhalten des [[Odoo Hosting#Lizenzierung|Lizenz-Typ]]
	* Domain nach Schema `$NAME.mintsys.ch` festlegen.
* Zuweisen der Aufgabe an [[Team Infrastruktur]]

::: tip
Der technische Name der Odoo App kann der Prozess-Dokumentation entnommen werden. Beispielsweise ist der technische Name von Einkauf gemäss [[Prozesse Odoo - App Einkauf]] `purchase`.
:::