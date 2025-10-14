---
tags:
  - Prozess
kind:
  - howto
section: process
---

# Prozesse Infrastruktur - Upgrade Odoo.sh

## Produktives Upgrade durchführen

- Nachricht an den Kunden schicken:

```
Guten Tag

Diese Odoo Installation wird innerhalb der nächsten Stunde von Version 16.0 auf 18.0 aktualisiert.

Wir bitten Sie während dieser Zeit keine Bearbeitungen in Odoo vorzunehmen. Alle Änderungen ab jetzt werden nicht in der aktualisierten Odoo Installation sein.

Mit freundlichen Grüssen

Mint System Team
```

- Drehbuch bis zum Abschnitt "Upgrade" ausführen
- Im Tab _Upgrade_ die Ziel-Version wählen
- Upgrade-Porzess starten
- Upgrade-Prozess auslösen indem man den `upgrade` Branch auf den `main` Branch pusht:

```bash
cd $ODOO_SH_GIT_PROJECT

# Create backup branch
git switch main
git switch -c backup-main
git push --set-upstream origin backup-main

# Push upgrade branch to main
git switch upgrade
git push origin +upgrade:main
```

Wenn das Upgrade nicht ausgelöst wird, kann man einen leeren Commit machen und pushen:

```bash
git commit -m "Trigger Upgrade" --allow-empty
git push origin +upgrade:main
```

- Gemäss Drehbuch das Upgrade fertigstellen
- Den `backup-main` Branch lokal löschen
- Nachricht an den Kunden:

```
Guten Tag

Das Odoo Upgrade war erfolgreich.

Den Odoo Upgrade Bericht finden Sie unter "Dialog > Kanäle > Administrators".

Wir bitten Sie die Odoo Installation zu verfizieren und allfällige Fehler zu melden.

Mit freundlichen Grüssen

Mint System Team
```
