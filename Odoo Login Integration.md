# Odoo Login Integration
Mint System unterstützt die Verbindung von Odoo mit verschiedenen Login-Systemen. Dazu gehören:

* LDAP
* OAuth
	* [[Login mit Odoo.com]]
	* [[Login Mint System]]
	* [[Login with GitLab]]

Login-Systeme von Facebook, Google oder Odoo.com können für interne und externe Benutzer freigeschaltet werden.

Der OAuth Zugriff ist für Apps und Mobilgeräte eingeschränkt. Nach Bedarf kann für den Benutzer-Account ein Passwort hinterlegt werden.

## Zwei-Faktor-Authentisierung

In Odoo 14 steht die Funktion standardmässig zur Verfügung: <https://www.odoo.com/documentation/user/14.0/general/auth/2fa.html>

Für Odoo leider nicht. Es sind einige Apps für eine [[One Time Password Authentication]] mit dem Google-Authenticator verfügbar.