# Demoumgebung bereitstellen
## Initialisierung
Arbeitsschritte:
* Registration Domain  `$NAME.mintsys.ch`
* Installation Odoo mit [[Ansible Playbooks]]
* Laden Datenbankvorlage
* Mail-Domäne gemäss Domain festlegen
* Unternehmensdaten eintragen
* Ausgewählte Module installieren und konfigurieren
* Benutzer registrieren
* Corporate Design umsetzen
* Aktualisieren [[Demoumgebungen#Odoo]]

## Installation Apps
Auswahl:
* Odoo Cloud Notification Client (OCN) (ocn_client) #Odoo13
* Web-Enterprise (web_enterprise) #Odoo13-14

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

## Demodaten importieren
Arbeitsschritte:
* Import leere Datenbank `odoo leer.zip`
* Import `res.users.csv`
* Import `product.template.csv`
* Import `mrp.bom.csv`
* Import `mrp.workcenter.csv`
* Installation App *Kontakte*
* Import `res.partner.csv`
* Arbeitsplan für *Oberrohr* und *Rahmen unbeschichtet* erstellen
* Mengen für die Bestandteile des Rahmens anpassen
* Lieferanten für die Produkte für den Rahmen hinterlegen
* Diese Inhalte finden sich in der Datenbank `odoo.zip`