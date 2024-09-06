---
tags:
- Prozess
---
# Prozesse Infrastruktur - Odoo bestellen
Bestellung einer Odoo-Installation.

## DNS-Einträge und Postfach anfragen

* DNS-Registrar von Kunde abfragen

```bash
dig $DOMAIN_KUNDE NS
```

* Mail-Provider von Kunde abfragen

```
dig $DOMAIN_KUNDE MX
```

* Mit diesen Angaben einen Vorschlag für DNS und Postfach machen:

```md
Guten Tag

Wir möchten gerne ihree Odoo-Instanz bereitstellen. Dazu brauchen wir technische Konfigurationen von ihrer Seite.

**DNS-Einträge**

Damit Odoo im Browser angezeigt weren kann, braucht es einen DNS-Eintrag unter ihrer Domäne $DOMAIN_KUNDE.

Können Sie die folgenden DNS-Einträge einrichten?

	odoo.$DOMAIN_KUNDE CNAME $ALIAS.mint-system.com
	odoo-int.$DOMAIN_KUNDE CNAME $ALIAS.mint-system.com
	odoo-dev.$DOMAIN_KUNDE CNAME $ALIAS.mint-system.com

Wir haben festgestellt, dass Sie die Domain beim Registrar $KUNDEN_REGISTRAR verwalten. Sie können dort die DNS-Einträge erstyellen.

**Postfach**

Zur Kommunikation braucht Odoo ein eigenes Postfach.

Unser Vorschlag: odoo@DOMAIN_KUNDE

Wir haben festgestellt, dass ihre E-Mail-Provider Office365 ist. Damit ODoo das Postfach verwenden kann, muss Odoo als OAuth-App registriert werden: https://www.odoo-wiki.org/settings-oauth.html#odoo-als-oauth-app-auf-azure-registrieren

Sind diese Angaben ausreichend?

Vielen Dank für ihre Rückmeldung

Freundlicher Gruss

$VORNAME $NACHNAME
```

## Odoo-Instanz bestellen

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