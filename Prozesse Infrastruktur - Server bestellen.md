---
tags:
- Prozess
---
# Prozesse Infrastruktur - Server bestellen
Server bei [[Team Infrastruktur]] bestellen.

## Managed Server bestellen

Arbeitsschritte:
* Informationen von Kunden zusammenstellen:
	* Server-Typ: Server-Typ aus dem Angebot. Beispiel: [[Managed Server]] (Deutschland, Medium)
	* Betriebssystem: Das [[Betriebssystem#Server]] bestimmen. Empfohlen ist [[Debian]].
	* Service-Domäne: Unter welcher Host-Adresse sind Applikationen erreichbar. Beispiel: `$SUBDOMAIN.example.com`
	* Server-Alias: Einen Alias in [[Servers#Liste]] auswählen
	* DNS-Verwaltung: Möchte der Kunde die DNS-Einträge verwalten oder soll das die Mint System übernehmen?
* Erstellen Aufgabe in Kundenprojekt und zuweisen an Infrastruktur.