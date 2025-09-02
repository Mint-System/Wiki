---
tags:
  - Prozess
kind:
  - howto
section: process
---
# Prozesse Odoo - Produktionsumgebung bereitstellen

Auf der [[Odoo Produktionsumgebung]] arbeitet der Kunde. Diese Umgebung muss immer verfügbar und gesichert sein.

## Installation

Arbeitsschritte:

* Bereitstellen Umgebung gemäss Bestellung
* Initialisieren Datenbank mit `docker-odoo-init`
* Standard-Login-Informationen an Kunde mitteilen
* Erstellen zusätzlicher Admin-Benutzer:
	* Name: Administrator Mint System
	* E-Mail-Adresse: login@mint-system.ch
	* Passwort: In KeePass generieren

## Initialisierung

Standard-Module installieren:

* Microsoft Outlook `microsoft_outlook` #Odoo15 
* Fetchmail Outlook  `fetchmail_outlook` #Odoo15 
* Prometheus Exporter `prometheus_exporter`
* Mail Server Filter `mail_server_filter`
* Mail Service Account `mail_service_users`

### Unternehmensdaten eintragen

Arbeitsschritte:

* Unternehmensdaten festlegen: Adresse, Mehrwertsteuer-ID, UID, etc.
* Weitere Benutzer erfassen: Personal muss nicht zwingend Benutzer sein
* Geschäftsunterlagen: Papierformat
* Integration Kalender: CalDav, Google, Outlook

### Lokalisierung festlegen

Arbeitsschritte:

* Sprachpakete installieren und aktivieren
* Währung festlegen
