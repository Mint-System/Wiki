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

## Customizing

### Stammdaten importieren
* Import `uom.uom.csv`
* Import `product.template.csv`
* Import `mrp.bom.csv`
* Import `mrp.workcenter.csv`
* Import `mrp.routing.workcenter.csv`
* Import `stock.warehouse.orderpoint.csv`
* Import `res.partner.csv`
* Import `product.supplierinfo.csv`
* Import `product.pricelist.cvs`
* Import `res.users.cvs`

### Lagerbestand buchen
Inventur anlegen, Inventur starten, Inventur/Inventory/Bestandszeilen, importieren
* Import `stock.inventory.line.csv`
Bestandsbuchungen durchführen

### Apps installieren
* Web Gantt (web_gantt)
* Dashboard (board)
* Studio (web_studio)
* Strichcode (stock_barcode)
* Lager-Bardoce in Mobile (stock_barcode_mobile)
* Documents Spreadsheets (Documents Spreadsheet)

### Filter einrichten
Prognostizierter Bestand

### Einstellungen wählen
Mehrere Währungen