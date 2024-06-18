---
tags:
- Prozess
---
# Prozesse Odoo - Demoumgebung bereitstellen

## Demoumgebung installieren

Arbeitsschritte:
* Definieren Domain  `$NAME.14.odoo.build`
* Installation Odoo mit [[Ansible Build]]
* Konfiguration Mail-Server
* Unternehmensdaten eintragen
* Ausgewählte Module installieren und konfigurieren
* Benutzer registrieren
* Corporate Design umsetzen
* Aktualisieren [[Demoumgebungen#Odoo]]

### Login Mint System konfigurieren

Integration in [[Login Mint System]].

Arbeitsschritte:
* Bei [[Login Mint System#mint-system ch Realm]] die Applikation registrieren
* Benutzer mit Rolle `access` austatten
* Zugriff testen

## Demoumgebung entfernen

Arbeitsschritte:
* Einträge aus Ansible Inventar löschen
* DNS-Einträge löschen
* OAuth Client URL von Liste *Valid Redirect URIs* entfernen
* Projektaufgaben bereinigen
* Datenbank löschen
