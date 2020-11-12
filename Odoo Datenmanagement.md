# Datenmanagement

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

Felder aufgaben:
```
Titel
Projekt
Zugewiesen an
Geplante Stunden
Stufe
```
Datei: `project.task.csv`

## Importvorgänge

### Produkt

Die Datei `product.template.csv` importieren. Die folgenden Anpassungen im Importdialog vornehmen:
* 