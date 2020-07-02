# Initialisierung
Für eine Installation werden die folgenden Informationen benötigt:

**Domain**

Unter welcher Domain soll die Odoo Anwendung erreichbar sein?
Wer verwaltet die Domäne?

**E-Mail Server**

Odoo braucht eine Anbindung an einen E-Mail Server. Wird dieser zur Verfügung gestellt?
Um eine Anbindung vornzunehmen, braucht es technische Details. Können Sie diese zur Verfügung stellen?

**Sprache**

Welche Sprachen sollen installiert werden?

**Hosting-Modell**

Welches Hosting-Modell ist bevorzugt?

**Benutzer**

Wieviele Benutzer erhalten Zugriff? Mit welchen Berechtigungen sollen sie ausgestattet werden?

**Design**

Gibt es bereits ein Corporate Design mit Logo, Farben und Schrift?

**Apps**

Welche Odoo Apps sollen bereitgestellt werden?

## Aufgaben Intern

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
	* Logo hinzufügen und Anpassung Dokumentenlayout
	* Benutzer erstellen und Berechtigungen konfigurieren
	* Installation der Initialmodule:
		* Base: web_color, web_responsive, show_db_name, project, auth_oauth_keycloak
		* Enterprise: web_responsive
