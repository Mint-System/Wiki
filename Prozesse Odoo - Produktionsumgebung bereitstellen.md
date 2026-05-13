---
title: Prozesse Odoo - Produktionsumgebung bereitstellen
kind: howto
section: process
---

Auf der [[Odoo Produktionsumgebung]] arbeitet der Kunde. Diese Umgebung muss immer verfügbar und gesichert sein.

## Installation

Arbeitsschritte:

- Bereitstellen Umgebung gemäss Bestellung
- Initialisieren Datenbank mit `docker-odoo-init`
- Standard-Login-Informationen an Kunde mitteilen
- Erstellen zusätzlicher Admin-Benutzer:
  - Name: Administrator Mint System
  - E-Mail-Adresse: login@mint-system.ch
  - Passwort: In KeePass generieren

## Initialisierung

Arbeitsschritte:

- Standard-Module installieren:
	- Microsoft Outlook `microsoft_outlook`
	- Prometheus Exporter `prometheus_exporter`
	- Mail Server Filter `mail_server_filter`
	- Mail Service Account `mail_service_users`
	- Kontakte `contacts`
	- Module Auto Update `module_auto_update`
- Alias-Domain festlegen
- Sprachpakete installieren und aktivieren
- Postausgangs- und Posteingangsserver einrichten

### Unternehmensdaten eintragen

Arbeitsschritte:

- Unternehmensdaten (Adresse, Mehrwertsteuer-ID, UID) erfassen
- Dokumentlayout konfigurieren

## Benutzer einladen

Arbeitsschritte:

- Liste mit Name und E-Mail erstellen
- Gruppe _Standardzugriff für neue Benutzer_ prüfen
- Prüfen Versand von E-Mails
- Benutzer gemäss Liste erstellen