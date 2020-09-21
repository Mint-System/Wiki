# Odoo bestellen
Bestellung einer Odoo-Installation.

Arbeitsschritte:
* Zusammenstellen Informationen Kunde:
	* Host: Unter welcher Host-Adresse ist Odoo erreichbar? Beispiel: `erp.example.com`. 
	* Service-Mail-Account: Zugangsdaten zu einem Service-Mail-Account für eingehende und ausgehende E-Mail Integration. Beispiel: `email: mailbot@example.com, password: pass1234, smtp-address: smtp.example.com:25, security: tls`.
	* Subscription-Code: Wenn es eine Odoo-Enterprise-Installation, braucht es den Subscription-Code um die Odoo-Umgebung zu aktivieren.
	* Liste der Apps: Welche Enterprise-Apps müssen aktiviert werden?
	* Sprackpaket: Welche Sprachpakete sollen installiert werden?
	* [[Odoo Testumgebung|Testumgebung]]: Benötigt der Kunde eine Testumgebung? Wenn ja, unter welcher URL soll diese erreichbar sein? Beispiel: `erp-dev.example.com`.
* Erstellen Aufgabe in Kundenprojekt mit Kundeninformationen
* Zuweisen an [[Team Infrastruktur]]