# Server bestellen
Bestellen eines [[Server]] bei Infrastruktur.

Arbeitsschritte:
* Informationen von Kunden zusammenstellen:
	* Server-Typ: Server-Typ aus dem Angebot. Beispiel: [[Managed Server]] (Deutschland, Medium)
	* Service-Domäne: Unter welcher Adresse die Applikation erreichbar sein soll. Beispiel: `erp.example.com`
	* Service-Mail-Account: Zugangsdaten zu einem Service-Mail-Account für ausgehende E-Mail-Integration. Beispiel: `email: mailbot@example.com, password: pass1234, smtp-address: smtp.example.com:456`
	* DNS-Verwaltung: Möchte der Kunde die DNS-Einträge verwalten oder soll das die Mint System übernehmen?
* Erstellen Aufgabe in Kundenprojekt und zuweisen an Infrastruktur.