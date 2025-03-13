---
lang: en
tags:
- Prozess
---
# Processes Infrastructure - Upgrade Odoo

## Setup upgrade environment

Working steps:

* Create new Odoo host `$ALIAS_upgrade` by copying the inventory folder
* Remove database and backup config
* Update Odoo config with Odoo revision
* Bump instance number and change port
* Register in `hosts.yml` and deploy
* Remove `erp-dev` database
* Enable proxy redirect to new instance

## Execute production upgrade

* Message to customer:

```
Guten Tag

Diese Odoo Installation wird innerhalb der nächsten Stunde von Version 16.0 auf 18.0 aktualisiert.

Wir bitten Sie während dieser Zeit keine Bearbeitungen in Odoo vorzunehmen. Alle Änderungen ab jetzt werden nicht in der aktualisierten Odoo Installation sein.

Mit freundlichen Grüssen

Mint System Team
```

* Execute the production upgrade according to the playbook
* Switch `$ALIAS` and `$ALIAS_upgrade`
* Move database and backup config
* Enable proxy redirect to new instance
* Message to customer:

```
Guten Tag

Das Odoo Upgrade war erfolgreich.

Den Odoo Upgrade Bericht finden Sie unter "Dialog > Kanäle > Administrators".

Wir bitten Sie die Odoo Installation zu verfizieren und allfällige Fehler zu melden.

Mit freundlichen Grüssen

Mint System Team
```

