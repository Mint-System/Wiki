---
tags:
  - Prozess
kind:
  - howto
section: process
---
# Prozesse Infrastruktur - Server bestellen

Server bei [[Kreis Infrastruktur]] bestellen.

## Managed Server bestellen

Arbeitsschritte:

* Informationen von Kunden zusammenstellen:
	* **Server-Typ**: Server-Typ aus dem Angebot. Beispiel: [[Managed Server]] (Deutschland, Medium)
	* **Betriebssystem**: Das [[Betriebssystem#Server]] bestimmen. Empfohlen ist [[Debian]].
	* **Service-Domains**: Unter welcher Host-Adresse sind Applikationen erreichbar. Beispiel: `Odoo: $SUBDOMAIN.example.com`
	* **DNS-Verwaltung**: Wer muss zum Einrichten der DNS-Einträge kontaktiert werden
* Erstellen Aufgabe in Kundenprojekt und zuweisen an [[Kreis Infrastruktur]].