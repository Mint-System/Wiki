---
tags:
- Definition
---
# Odoo Enterprise Upgrade

Description of the [[Odoo Enterprise Edition]] upgrade process. For [[Odoo Community Edition]] there is the [[Odoo Community Upgrade]] project.

## Setup upgrade environment

Create new Odoo instance:
* Create new Odoo host `$ALIAS-NN` by copying the inventory folder
* Remove database and backup config
* Update Odoo config with Odoo 14 revision
* Bump instance number and change port
* Register in `hosts.yml` and deploy

Prepare for test upgrade:
* Remove `erp-dev` database
* Enable proxy redirect to new instance

## [[Odoo Upgrade from 13.0 to 14.0]]

## [[Odoo Upgrade from 14.0 to 15.0]]