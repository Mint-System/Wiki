---
title: Prozesse Odoo - Upgrade-Umgebung bereitstellen
kind: howto
section: process
---

Auf der Upgrade-Umgebung verifiziert der Kunde die neue Odoo-Version.

## Upgrade-Umgebung bereitstellen

Arbeitsschritte:

- Erstelle einen neuen Odoo-Host `$ALIAS_upgrade`, indem du den bestehenden Inventory-Ordner kopierst
- Entferne die Datenbank- und Backup-Konfiguration
- Aktualisiere die Odoo-Konfiguration mit der Odoo-Revision
- Passe den Odoo-Hostname an
- Registriere den Host in `hosts.yml` und führe das Deployment durch.
- Aktiviere die Proxy-Weiterleitung zur neuen Instanz.


## Upgrade-Umgebungsvariablen erstellen

Arbeitsschritte:

* Erstelle in Odoo-Build ein neues Upgrade-Dotenv: `task create-dotenv $DOMAIN upgrade`
* Passe die Umgebungs-Variablen anhand der Ansible-Definition an
* Definiere die zusätzlichen Umgebungsvariablen für den _Configuration_-Schritt
* Prüfe die Konfiguration mit ` task upgrade-odoo $DOMAIN info`