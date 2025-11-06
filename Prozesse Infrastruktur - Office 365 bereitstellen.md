---
kind:
  - howto
tags:
  - Prozess
section: process
---

# Prozesse Infrastruktur - Office 365 bereitstellen

## Odoo-Postfach einrichten

Arbeitsschritte:

- Festlegen Name des Postfachs
- Zusammenstellen der benötigten Informationen und Mail an Kunde

```markdown
Guten Tag

Wir möchten gerne Ihre Odoo-Instanz bereitstellen. Dazu brauchen wir technische Konfigurationen von ihrer Seite.

**Odoo Postfach**

Wir haben festgestellt, dass ihre E-Mail-Provider Office 365 ist. Damit Odoo mit Office 365 E-Mails versenden kann braucht es einen Office365 Benutzer mit Postfach. Ein Gruppen-Postfach ist nicht möglich.

Im weiteren muss Odoo als OAuth-App registriert werden: https://www.odoo-wiki.org/settings-oauth.html#odoo-als-oauth-app-auf-azure-registrieren
Zur Konfiguration des Odoo-Postfachs benötigen wir die folgenden Informationen:

- Office 365 Benutzername: odoo@example.com
- Office 365 Passwort:
- 2-Faktor TOTP QR-Code:
- OAuth Client-ID:
- OAuth Client Secret:

Das Passwort und die Secrets können mit einem kPaste-Link zugestellt werden: https://kpaste.infomaniak.com/

Zur Validierung der OAuth-Konfiguration brauchen wir noch einen:

- Screenshot der OAuth-App Berechtigungen
- Screenshot der Redirect URIs

Diese Punkte werden oft falsch konfiguriert und erschweren die Fehlernanalyse.

Sind diese Angaben ausreichend?

Vielen Dank für ihre Rückmeldung.

Freundlicher Gruss

$VORNAME $NACHNAME
```
