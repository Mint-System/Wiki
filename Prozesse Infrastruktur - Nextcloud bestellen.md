---
tags:
  - Prozess
kind:
  - howto
section: process
---
# Prozesse Infrastruktur - Nextcloud bestellen

Bestellung einer Odoo-Installation.

## Nextcloud-Instanz bestellen

Arbeitsschritte:

* Zusammenstellen Informationen Kunde:
	* **Nextcloud Domain**: Unter welcher Adresse soll Nextcloud erreichbar sein? Empfehlung: `cloud.example.com`.
	* **Collabora Domain**: Unter welcher Adresse soll Collabora erreichbar sein? Empfehlung: `doc.example.com`
	* **Mail-Account**: Zugangsdaten zu einem Service-Mail-Account zum Versand von Mails durch Nextcloud. Beispiel: `email: cloud@example.com, password: pass1234, server: smtp.example.com:587, security: tls`. Bei Bedarf kann auch Mint System einen Account zur Verfügung stellen.
* Erstellen Aufgabe in Kundenprojekt mit Kundeninformationen
* Aufgabe an [[Kreis Infrastruktur]] zuweisen

