---
tags:
- Vorlagen
---
# Odoo XX.0 Upgrade

Author: [[Janik von Rotz]]

This is an implementation of an [[Odoo Enterprise Upgrade]].

## Prepare

Make preparations for the Odoo upgrade.

Set env vars.

```bash
export MODE=test
export PGHOST=localhost
export PGUSER=odoo
export PGPASSWORD=odoo
export DATABASE=erp
export COMPANY=mint-system
alias odoo-upgrade="python <(curl -s https://upgrade.odoo.com/upgrade)"
```

Download the database.

```bash
odoo-backup -d $DATABASE -o tmp/$COMPANY/$DATABASE.zip ...
```

## Restore

Clear filestore and restore database.

Login and check Odoo log.

Remove unsupported modules.

Reinstall modules.

## Upgrade

Run the upgrade scripts.

Remove unsupported Odoo Modules.

## Configure

Install new modules.

Reset selected views.

Make new Odoo configurations.

Activate options in the settings page.

Update selected snippets.

## Verify

Test the upgraded system.

Run these test cases.

## Deploy

Export the database

Deploy the upgraded database.

## Troubleshooting

Document problems and solutions.