---
tags:
  - Prozess
kind:
  - howto
---
# Prozesse Infrastruktur - Odoo Upgrade

## Upgrade-Umgebung einrichten

Arbeitsschritte:

* Erstelle einen neuen Odoo-Host `$ALIAS_upgrade`, indem du den Inventory-Ordner kopierst.
* Entferne die Datenbank- und Backup-Konfiguration.
* Aktualisiere die Odoo-Konfiguration mit der Odoo-Revision.
* Erhöhe die Instanznummer und ändere den Port.
* Registriere den Host in `hosts.yml` und führe das Deployment durch.
* Entferne die `erp-dev` Datenbank.
* Aktiviere die Proxy-Weiterleitung zur neuen Instanz.

## Einladung für Testing mitteilen

Arbeitsschritte:

* Nachricht an die TesterIn schicken:

```
Hallo $VORNAME

Die Upgrade-Umgebung $ODOO_LINK steht zum Testen bereit.

Die Testfälle sind in diesem Dokument festgehalten: $TESTING_FILELINK
Du kannst die Testfälle weiter ausformulieren oder umformlieren.
Das Feedback zum Testing wird hier gesammelt: $FEEDBACK_FILELINK

Kannst du beschrieben Testfälle ausführen und bei Problemen eine Beschreibung im Feedback-Dokument festhalten.

Bei Fragen zu den Test-Fällen oder Struktur der Feedbacks, bitte melden.

Viele Grüsse
```

## Produktives Upgrade durchführen

Arbeitsschritte:

* Nachricht an den Kunden schicken:

```
Guten Tag

Diese Odoo Installation wird innerhalb der nächsten Stunde von Version 16.0 auf 18.0 aktualisiert.

Wir bitten Sie während dieser Zeit keine Bearbeitungen in Odoo vorzunehmen. Alle Änderungen ab jetzt werden nicht in der aktualisierten Odoo Installation sein.

Mit freundlichen Grüssen

Mint System Team
```

* Führe das Produktions-Upgrade gemäss dem Playbook aus.
* Wechsle `$ALIAS` und `$ALIAS_upgrade`.
* Verschiebe die Datenbank- und Backup-Konfiguration.
* Aktiviere die Proxy-Weiterleitung zur neuen Instanz.
* Nachricht an den Kunden:

```
Guten Tag

Das Odoo Upgrade war erfolgreich.

Den Odoo Upgrade Bericht finden Sie unter "Dialog > Kanäle > Administrators".

Wir bitten Sie die Odoo Installation zu verfizieren und allfällige Fehler zu melden.

Mit freundlichen Grüssen

Mint System Team
```

