# Odoo Datenmanagement

Für die Odoo Demos werden Datensätze und Szenarios gepflegt. Für jede Odoo App wird festgehalten wie die [[Odoo Demodaten]] exportiert werden und wie die dazugehörige Export-Datei heisst.

## Exportvorlagen

Entscheidend ist, dass es noch eine Spalte **id** gibt. Beim Export muss dazu im Export-Dialog das Häkchen oben links gesetzten sein. Die Spalte **id** ist eine eindeutige Referenz für jeden Eintrag. Damit können bestehende Einträge überschrieben werden und in bestimmten Fällen möchte man die Berechnungen im Erstellvorgang umgehen indem zweimal Importiert und so die berechneten Werte überschreibt.

### Benutzer

Exportieren von Benutzer.

Listenansicht: *Einstellungen > Benutzer >  Benutzer verwalten*

Felder Benutzer:
```
name
login
lang
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

### Personal

Listenansicht: *Kontakte*

Felder Kontakt:
```
name
work_email
deparment_id/id
job_id/id
user_id/id
```

Datei: `hr.employee.csv`

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

### OAuth Provider

Listenansicht: *Provider*

Felder Kontakt:
```
Provider Name
Client ID
Erlaubt
Keycloak
Nachrichtentext
Gültigkeitsbereich
Validierungs URL
Authorisierungs URL
```

Datei: `auth.oauth.provider.csv`

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

### Abwesenheitszeiten

Listenansicht: *Abwesenheitszeiten > *

Felder Abwesenheitszeit:
```
id
employee_id
holiday_status_id
name
state
x_synced
request_date_from
date_from
request_date_to
date_to
number_of_days
```
Datei: `hr.leave.csv`

::: warning
Währen dem Importvorgang wird die Dauer mit dem Start- und Enddatum berechnet, das heisst nach dem ersten Import stimmt die Dauer nicht (Wochenende wird nicht abgezählt). Um das zu lösen kann man den Import-Vorgang nochmals durchführen. Anhand der *id* werden dann die bestehenden Einträge überschrieben statt erstellt. Dann stimmt auch die Dauer des Eintrags.
:::

Beispiel:

![[Abwesenheiten Beispiel Export.png]]

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


### Fenster öffnen/schliessen ...

Listenansciht: *Einstellungen > Technisch > Aktionen > Fenster öffnen/schliessen ...*

Fehler:
```
Name der Aktion
Zielmodell
Aktionsart
```
Datei: `ir.actions.act_window.csv`

### Menüeinträge

Listenansciht: *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge*

Fehler:
```
id
name
parent_id/id
sequence
action
```
Datei: `ir.ui.menu.csv`

### Exportvorlagen

Listenansciht: *Einstellungen > Technisch > Exportvorlagen*

Fehler:
```
Exportbezeichnung
Ressource (Objekt)
Export ID/Feldname
```
Datei: `ir.exports.csv`

## Importvorgänge

### Produkt

Navigation: *Verkauf > Prodoukte > Produktvarianten*

Die Datei `product.template.csv` importieren.

### Preislisten

Navigation: *Einkauf > Konfiguration > Preislisten*

Die Datei `product.supplierinfo.csv` importieren.

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

Die Datei  `hr.salary.rule.basis.csv` importieren.

### Preislisten

Die Datei  `product.pricelist.csv` importieren.

### Arbeitsplätze

Die Datei  `mrp.workcenter.csv` importieren.

### Routen

Die Datei  `mrp.routing.workcenter.csv` importieren.

### Stücklisten

Die Datei `mrp.bom.csv` importieren.