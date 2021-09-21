# Prozess Demoumgebung bereitstellen

## 1 Initialisierung
Arbeitsschritte:
* Definieren Domain  `$NAME.14.odoo.build`
* Installation Odoo mit [[Ansible Playbooks]]
* Laden Datenbankvorlage
* Mail-Domäne gemäss Domain festlegen
* Unternehmensdaten eintragen
* Ausgewählte Module installieren und konfigurieren
* Benutzer registrieren
* Corporate Design umsetzen
* Aktualisieren [[Demoumgebungen#Odoo]]

## 2 Installation
Auswahl:
* Odoo Cloud Notification Client (OCN) (ocn_client) #Odoo13
* Web-Enterprise (web_enterprise) #Odoo13-14

### Login Mint System
Integration in [[Login Mint System]].

Arbeitsschritte:
* Bei [[Login Mint System#mint-system ch Realm]] die Applikation registrieren
* Benutzer mit Rolle `access` austatten
* Zugriff testen

### Entfernen Demoumgebung
Arbeitsschritte:
* Einträge aus Ansible Inventar löschen
* DNS-Einträge löschen
* OAuth Client URL von Liste *Valid Redirect URIs* entfernen
* Projektaufgaben bereinigen
* Datenbank löschen
