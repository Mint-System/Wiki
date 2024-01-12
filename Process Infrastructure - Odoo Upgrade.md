---
lang: en
tags:
- Prozess
---
# Process Infrastructure: Odoo Upgrade

## Setup upgrade environment

Working steps:
* Create new Odoo host `$ALIAS-NN` by copying the inventory folder
* Remove database and backup config
* Update Odoo config with Odoo revision
* Bump instance number and change port
* Register in `hosts.yml` and deploy
* Remove `erp-dev` database
* Enable proxy redirect to new instance