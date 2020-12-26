# Odoo Datenmanagement

Für die Odoo Demos werden Datensätze und Szenarios gepflegt. Für jede Odoo App wird festgehalten wie die [[Odoo Demodaten]] exportiert wurden und wie die dazugehörige Export-Datei heisst.

## Exportvorlagen

### Benutzer

Exportieren von Benutzer.

Listenansicht: *Einstellungen > Benutzer >  Benutzer verwalten*

Felder Benutzer:
```
Name
Login
Sprache
```
Datei: `res.users.csv`

### Kontakte

Listenansicht: *Kontakte*

Felder Kontakt:
```
Name
Straße
Straße2
Stadt
PLZ
Land
USt-IdNr.
Telefon
Mobil
E-Mail
Websiten-Link
Ist ein Unternehmen
Bankverzeichnis/Kontonummer
Bankverzeichnis/Bank/ID
```

Datei: `res.partner.csv`

### E-Mail-Server

Exportieren von Mail-Konfigurationen.

Listenansicht: *Einstellungen > Diskussion > Externe E-Mail-Server > Ausgehender Mail-Server*

Felder Ausgehender Mail-Server:
```
Priorität
Beschreibung
Postausgang-Server (SMTP)
Benutzername
Passwort
Verbindungssicherheit
SMTP-Port
```
Datei: `ir.mail_server.csv`

Listenansicht: *Einstellungen > Diskussion > Externe E-Mail-Server > Eingehender Mail-Server*

Felder Eingehender Mail-Server:
```
Name
Servertyp
SSL/TLS
Einen neuen Datensatz erzeugen
Letztes Abholdatum
Nachrichten
Status
Passwort
Port
Servername
Benutzername 
```
Datei: `fetchmail.server.csv`

### Fertigung

Exportieren von Produkten, Arbeitsplätze, Arbeitspläne und mehr.

Listenansicht: *Fertigung > Stammdaten > Produkt*

Felder Produkte:
```
Interne Referenz
Name
Lieferanten/Lieferant/Externe ID
Lieferant/Menge
Lieferanten/Preis
```
Datei: `product.template.csv`

Listenansicht: *Fertigung > Stammdaten > Arbeitsplätze*

Felder Arbeitsplätze:
```
Sequenz
Code
Arbeitsplatz
```
Datei: `mrp.workcenter.csv`

### Projekt

Exportieren von Stufen, Projekte, Aufgaben und Stichwörter.

Listenasnicht: *Projekt > Konfiguration > Stufen*

Felder Stufen:
```
Sequenz
Stufenbezeichnung
In Kanban eingeklappt
Beschreibung
Projekte/Externe ID 
```
File: `project.task.type.csv`

Listenansicht: *Projekt > Konfiguration > Projekte*

Felder Projekte:
```
Sequenz
Name
Projektmanager
Kunde
Zeiterfassung 
```
Datei: `project.project.csv`

Listenansicht: *Projekt > Alle Aufgaben*

Felder Hauptaufgaben:
```
Titel
Projekt
Zugewiesen an
Geplante Stunden
Stufe
```
Datei: `project.task_main.csv`

Felder Aufgaben:
```
Titel
Projekt
Zugewiesen an
Geplante Stunden
Stufe
```
Datei: `project.task.csv`

### Arbeitszeit

Felder Arbeitszeit:
```
Name
Arbeitszeit
Arbeitszeit/Arbeitszeit von
Arbeitszeit/Arbeitszeit bis
```
Datei: `resource.calendar.csv`

### Arbeitsverträge

Felder Vertrag:
```
+ Vergütung
```
Datei: `hr.contract.csv`

### Lohnarten

Felder Lohnarten:
```
Name
Code
Kategorie
Vergütungsstruktur/ID
Berechnungsart
Prozent (%)
Prozent basierend auf
Python Bedingung
Python Code
Fester Betrag
Habenkonto
Sollkonto
```
Datei: `hr.salary.rule.csv`

### Unternehmen

Listenansicht: *Einstellungen > Benutzer und Unternehmen > Unternehmen*

Export mit Option *Ich will Daten aktualisieren*.

Felder Unternehmen:
```
Unternehmensname
Strasse
Stadt
PLZ
Land/Land
Website-Link
E-Mail
USt-IdNr.
```
Datei: `res.company.csv`


## Importvorgänge

### Produkt

Navigation: *Verkauf > Prodoukte > Produktvarianten*

Die Datei `product.template.csv` importieren.

### Bankverzeichnis

Navigation: *Kontakte > Konfiguration > Bankverzeichnis*

Die Datei `res.bank.csv` importieren.

### Arbeitszeiten

Navigation: *Einstellungen > Technisch > Ressource (Objekt) > Arbeitszeit*

Die Datei `resource.calendar.csv` importieren.

### Kontakte

Navigation: *Kontakte*

Die Datei `res.partner.csv` importieren.

### Bankkonten

Navigation: *Kontakte > Konfiguration > Bankkonten*

Die Datei `res.partner.bank.csv` importieren.

### Abteilungen

Navigation: *Personal > Konfiguration > Abteilungen*

Die Datei `hr.departement.csv` importieren.

### Arbeitsstellen

Navigation: *Personal > Konfiguration > Arbeitstellen*

Die Datei `hr.job.csv` importieren.

### Personal

Navigation: *Personal*

Die Datei `hr.employee.csv` importieren.

### Arbeitsverträge

Navigation *Personal > Verträge*

Die Datei `hr.contract.csv` importieren.

### Lohnarten

Navigation *Personalabrechnung > Konfiguration > Regeln*

Die Datei  ` ` importieren.

### Preislisten

Die Datei  `product.pricelist.csv` importieren.

### Arbeitsplätze

Die Datei  `mrp.workcenter.csv` importieren.

### Routen

Die Datei  `mrp.routing.workcenter.csv` importieren.

### Stücklisten

Die Datei `mrp.bom.csv` importieren.