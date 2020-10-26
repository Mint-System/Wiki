# Datenmanagement

## Exportvorlagen

### E-Mail-Server

Exportieren von Mail-Konfigurationen.

Listenansicht: *Einstellungen > Diskussion > Externe E-Mail-Server > Ausgehender Mail-Server*

Felder:
```
Priorität
Beschreibung
Postausgang-Server (SMTP)
Benutzername
Passwort
Verbindungssicherheit
SMTP-Port 
```
Datei: `ir.mail_server.xlsx`

Listenansicht: *Einstellungen > Diskussion > Externe E-Mail-Server > Eingehender Mail-Server*

Felder:
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
Datei: `fetchmail.server.xlsx`

### Produkt

Exportieren von Lieferanten und Produkten.

Listenansicht: *Fertigung > Stammdaten > Produkt*

Felder:
```
Interne Referenz
Name
Lieferanten/Lieferant/Externe ID
Lieferant/Menge
Lieferanten/Preis
```
Datei: `product.template.xlsx`

### Projekt

Exportieren von Stufen, Projekte, Aufgaben und Stichwörter.

Listenasnicht: *Projekt > Konfiguration > Stufen*

Felder:
```
Sequenz
Stufenbezeichnung
In Kanban eingeklappt
Beschreibung
```
File: `project.task.type.xlsx`

Listenansicht: *Projekt > Konfiguration > Projekte*

Felder:
```
Sequenz
Name
Projektmanager
Kunde
Zeiterfassung 
```
Datei: `project.project.xlsx`

## Importvorgänge

### Produkt

Die Datei `product.template.xlsx` importieren. Die folgenden Anpassungen im Importdialog vornehmen:
* 