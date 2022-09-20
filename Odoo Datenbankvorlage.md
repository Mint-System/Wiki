---
tags:
- Definition
---
# Odoo Datenbankvorlage
Die Odoo Datenbankvorlage ist auf der [[Cloud Mint System]] verfügbar.

Die Vorlagen wurde mit diesen Arbeitsschritten erstellt.

## Odoo

* Installation Datenbank in Sprache Deutsch
* Benutzername: `login@mint-system.ch`
* Passwort des Administrators speichern
* Anzeigename und Anzeigebild des Administrators `Administrator Mint System` anpassen
* Externer Mail-Server aktivieren
* Anpassen des Unternehmens-Datensatz mit Demodaten
* Benutzer erstellen und Berechtigungen konfigurieren
* Entfernen `odoo_referral`apps (Odoo13)
* Installation der Initialmodule:
	* note
	* show_db_name
	* auth_oauth_keycloak
	* web_responsive (Odoo-Community)
* Konfigurieren OAuth Provider

## Allgemein

Es existieren zusätzliche manuelle Arbeitsschritte für die finale Konfiguration:

* [[Odoo Login Integration]]
* [[Odoo Email Konfiguration]]