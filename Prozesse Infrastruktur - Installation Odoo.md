# Prozess Installation Odoo
Bereitstellung Odoo-Umgebung.

## Odoo-Umgebung bereitstellen
Arbeitsschritte:
* Odoo-Konfiguration in [[Ansible Inventory]] erstellen
* Odoo-Umgebung deployen
* Proxy-Konfiguration in [[Ansible Inventory]] erstellen
* Installation über den Databasemanager

## Odoo-Installation initialisieren
Arbeitsschritte:
* App Odoo referral program (`odoo_referral`) entfernen
* Installation Mint System Apps:
	* Show DB Name (`show_db_name`)
	* Auth OAuth Keycloak (`auth_oauth_keycloak`)
* Installation Odoo Enterprise Apps:
	* Odoo Cloud Benachrichtigungen Client (OCN) (`ocn_client`) #Odoo13 
	* Mail Enterprise (`mail_enterprise`) #Odoo14 
* Benutzer `admint` archivieren 

## Odoo Master Password erstellen
Für jeden Kunden muss ein [[Odoo Master Password]] erstellt werden.

Arbeitsschritte:
* Lokale Odoo-Entwicklungsumgebung starten
* Den [Datebankmanager](http://localhost:8069/web/database/manager) aufrufen
* Neues Odoo Master Password festlegen
* Die Odoo-Konfiguration speichern und den Password-Hash kopieren
* Passwort und Hash Informationen im [[Ansible Vault]] speichern.
