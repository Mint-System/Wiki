---
lang: en
tags:
- Prozess
---
# Process Infrastructure: Upgrade Odoo

## Setup upgrade environment

Working steps:
* Create new Odoo host `$ALIAS-NN` by copying the inventory folder
* Remove database and backup config
* Update Odoo config with Odoo revision
* Bump instance number and change port
* Register in `hosts.yml` and deploy
* Remove `erp-dev` database
* Enable proxy redirect to new instance

## Execte production upgrade


* Message to customer:

```
Guten Tag

Diese Odoo Installation wird in der nächsten Stunde von Version 16.0 auf 17.0 aktualisiert.

Wir bitten Sie während dieser Zeit keine Bearbeitungen in Odoo vorzunehmen. Alle Änderungen ab jetzt werden nicht in der aktualisierten Odoo Installation sein.

Mit freundlichen Grüssen

Mint System Team
```

* Execute the production upgrade according to the upgrade script