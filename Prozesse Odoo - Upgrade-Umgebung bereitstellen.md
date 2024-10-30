# Prozesse Odoo - Upgrade-Umgebung bereitstellen

Auf der Upgrade-Umgebung verifiziert der Kunde die neue Odoo-Version.

## Initialisierung

Arbeitsschritte:
* Kopieren Host in Ansible-Inventar als `$ALIAS_upgrade`
* Anpassen Odoo-Revision
* Festlegen Subdomain `upgrade.example.com`
* Anpassen Module-Repos
* Deaktivieren Backup-Konfiguration
* Deployment auf Server