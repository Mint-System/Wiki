---
tags:
  - Prozess
kind:
  - howto
---
# Prozesse Odoo - Produktionsumgebung bereitstellen

Auf der [[Odoo Produktionsumgebung]] arbeitet der Kunde. Diese Umgebung muss immer verfügbar und gesichert sein.

## Installation

App installieren:

* Microsoft Outlook `microsoft_outlook` #Odoo15 
* Fetchmail Outlook  `fetchmail_outlook` #Odoo15 
* Prometheus Exporter `prometheus_exporter`
* Mail Server Filter `mail_server_filter`

## Initialisierung

Arbeitsschritte:

* Bereitstellen Umgebung gemäss Bestellung
* Konfiguration Mail-Server
* Einladen Benutzer und Vergabe Berechtigungen

### Unternehmensdaten eintragen

Arbeitsschritte:

* Unternehmensdaten festlegen: Adresse, Mehrwertsteuer-ID, UID, etc.
* Benutzer erfassen: Personal muss nicht zwingend Benutzer sein
* Sprachpakete installieren
* Geschäftsunterlagen: Papierformat
* Diskussion: Externe E-Mail-Server
* Integration Kalender: Google, Outlook

### Lokalisierung festlegen

Arbeitsschritte:

* Sprachpakete installieren und aktivieren
* Währung festlegen
