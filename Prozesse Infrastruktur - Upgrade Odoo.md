---
kind:
  - howto
section: process
---

# Prozesse Infrastruktur - Odoo Upgrade

## Upgrade-Umgebung einrichten

Arbeitsschritte:

- Erstelle einen neuen Odoo-Host `$ALIAS_upgrade`, indem du den Inventory-Ordner kopierst.
- Entferne die Datenbank- und Backup-Konfiguration.
- Aktualisiere die Odoo-Konfiguration mit der Odoo-Revision.
- Erhöhe die Instanznummer und ändere den Port.
- Registriere den Host in `hosts.yml` und führe das Deployment durch.
- Entferne die `erp-dev` Datenbank.
- Aktiviere die Proxy-Weiterleitung zur neuen Instanz.

## Produktives Upgrade durchführen

Arbeitsschritte:

- Nachricht an den Kunden schicken:

```
Guten Tag

Diese Odoo Installation wird innerhalb der nächsten Stunde von Version 16.0 auf 18.0 aktualisiert.

Wir bitten Sie während dieser Zeit keine Bearbeitungen in Odoo vorzunehmen. Alle Änderungen ab jetzt werden nicht in der aktualisierten Odoo Installation sein.

Mit freundlichen Grüssen

Mint System Team
```

- Führe das Produktions-Upgrade gemäss dem Playbook aus.
- Wechsle `$ALIAS` und `$ALIAS_upgrade`.
- Verschiebe die Datenbank- und Backup-Konfiguration.
- Aktiviere die Proxy-Weiterleitung zur neuen Instanz.
- Nachricht an den Kunden:

```
Guten Tag

Das Odoo Upgrade war erfolgreich.

Den Odoo Upgrade Bericht finden Sie unter "Dialog > Kanäle > Administrators".

Wir bitten Sie die Odoo Installation zu verfizieren und allfällige Fehler zu melden.

Mit freundlichen Grüssen

Mint System Team
```
