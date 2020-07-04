Die Odoo Datenbank Vorlage ist auf der [[Mint System Cloud]] verfügbar.

Die Vorlagen wurde mit diesen Arbeitsschritten erstellt:

* Registration des Datenbank- und Applikations-Container im Wiki
* Konfiguration der Datenank und und Applikation im Infrastruktur-Projekt
* Registration der Domäne
* Konfiguration des Proxy-Dienstes
* Bereitstellung der Applikation
* Einloggen und Vorbereiten gemäss Informationen des Kunden
	* Installation Datenbank in ausgewählter Sprache
	* Benutzername: admint
	* Passwort des Administrators speichern
	* Anzeigename und Anzeigebild des Administrators `Administrator Mint System` anpassen
	* Konfiguration ausgehender Mail-Server
	* Konfiguration eingehender Mail-Server
	* Anpassen des Unternehmens-Datensatz
	* Logo und Favicon hinzufügen und Anpassung Dokumentenlayout
	* Benutzer erstellen und Berechtigungen konfigurieren
	* Kalender synchronisation einrichten
	* Installation der Initialmodule:
		* Base: web_color, web_responsive, show_db_name, project, auth_oauth_keycloak
		* Enterprise: web_responsive,contacts_enterprise,ocn_client

Es existieren zusätzliche manuelle Arbeitsschritte für die finale Konfiguration:

* [[Odoo Login Integration]]
* [[Odoo Website Konfiguration]]
* [[Odoo Email Konfiguration]]