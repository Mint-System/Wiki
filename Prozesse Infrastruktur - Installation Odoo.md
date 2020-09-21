# Installation Odoo
Bereitstellung Odoo-Umgebung.

## Odoo-Umgebung bereitstellen
Arbeitsschritte:
* Odoo-Konfiguration in [[Ansible Inventory]] erstellen
* Odoo-Umgebung deployen
* Proxy-Konfiguration in [[Ansible Inventory]] erstellen
* Installation über den Databasemanager

## Odoo-Installation initialisieren
Arbeitsschritte:
* App Odoo referral program (odoo_referral) entfernen
* Installation Apps:
	* Show DB Name (show_db_name)
	* Auth OAuth Keycloak (auth_oauth_keycloak)
* Benutzer `admint` archivieren 

## Odoo Master Password erstellen
Für jeden Kunden muss ein [[Odoo Master Password]] erstellt werden.

Arbeitsschritte:
* Lokale Odoo-Entwicklungsumgebung starten
* Installation Odoo mit `docker-odoo-install`
* Den [Datebankmanager](http://localhost:8069/web/database/manager) aufrufen
* Odoo Master Password festlegen
* Die Odoo-Konfiguration speichern und den Password-Hash kopieren
* Passwort und Hash Informationen im [[Ansible Vault]] speichern.
