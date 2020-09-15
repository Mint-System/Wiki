# Demoumgebung bereitstellen
## Initialisierung
Arbeitsschritte:
* Registration Domain  `$NAME.mintsys.ch`
* Installation Odoo mit [[Ansible Playbooks]]
* Laden Datenbankvorlage
* Mail-Domäne gemäss Domain festlegen
* Unternehmensdaten eintragen
* Ausgewählte Module installieren und konfigureiren
* Benutzer registrieren
* Corporate Design umsetzen

## Installation Apps
Auswahl:
* Odoo Cloud Notification Client (OCN) (ocn_client)
* Web-Enterprise (web_enterprise)

## Login Mint System
Integration in [[Login Mint System]].

Arbeitsschritte:
* Bei [[Login Mint System#mint-system ch Realm]] die Applikation registrieren
* Benutzer mit Rolle `access` austatten
* Zugriff testen

## Entfernen Demoumgebung
Arbeitsschritte:
* Einträge aus Ansible Inventar löschen
* DNS-Einträge löschen
* OAuth Client URL von Liste *Valid Redirect URIs* entfernen
* Projektaufgaben bereinigen
* Datenbank löschen