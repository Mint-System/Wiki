---
title: Prozesse Odoo - Upgrade-Umgebung bereitstellen
kind: howto
section: process
---

Auf der Upgrade-Umgebung verifiziert der Kunde die neue Odoo-Version.

## Upgrade-Umgebung bereitstellen

Arbeitsschritte:

- Erstelle einen neuen Odoo-Host `$ALIAS_upgrade`, indem du den Inventory-Ordner kopierst.
- Entferne die Datenbank- und Backup-Konfiguration.
- Aktualisiere die Odoo-Konfiguration mit der Odoo-Revision.
- Erhöhe die Instanznummer und ändere den Port.
- Registriere den Host in `hosts.yml` und führe das Deployment durch.
- Entferne die `erp-dev` Datenbank.
- Aktiviere die Proxy-Weiterleitung zur neuen Instanz.
