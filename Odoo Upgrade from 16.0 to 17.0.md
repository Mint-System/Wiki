---
tags:
  - HowTo
archive: true
---
# Odoo Upgrade from 16.0 to 17.0

## Prepare

Set env vars.

```bash
export ODOO_CURRENT_VERSION=16.0
export ODOO_TARGET_VERSION=17.0
export MODE=test # Options: test, production
export PGHOST=localhost
export PGUSER=odoo
export PGPASSWORD=odoo
export DATABASE=erp
export NEW_DATABASE=${DATABASE}_${ODOO_TARGET_VERSION}
export COMPANY=mint-system
alias odoo-upgrade="python <(curl -s https://upgrade.odoo.com/upgrade)"
```

Download the database.

```bash
odoo-backup -d $DATABASE -o tmp/$COMPANY/$DATABASE.zip ...
```

Checkout current Odoo environment.

```bash
task checkout $ODOO_CURRENT_VERSION
```

Start local development environment.

```bash
task start db,native
```

## Restore

Clear filestore and restore database.

```bash
task drop-db $DATABASE
task clear-filestore $DATABASE
odoo-restore -f tmp/$COMPANY/$DATABASE.zip
```

Remove or replace [[Unsupported Modules]].

```bash
task remove-module $DATABASE ...
task init-module $DATABASE ...
```

Login and check the Odoo log.
## Upgrade

Run the upgrade scripts.

```bash
task clear-filestore $NEW_DATABASE
task drop-db  $NEW_DATABASE
odoo-upgrade $MODE -d $DATABASE -t $ODOO_TARGET_VERSION -r $NEW_DATABASE
```

Checkout target Odoo environment.

```bash
task checkout $ODOO_TARGET_VERSION
```

Upgrade all modules.

```bash
task update-module $NEW_DATABASE base
```

Clear the browser cache and Odoo assets, then start the server.

```bash
task clear-assets $NEW_DATABASE
task start native
```

Login and check the Upgrade report.
## Configure

Install new modules.

```bash
task init-module $NEW_DATABASE ...
```

Make new Odoo configurations.

Update the language packages.

Update or remove selected snippets.
## Verify

Test the upgraded system.

Run the test cases.

Note any regressions.

## Deploy

Export the new database.

```bash
odoo-backup -d $NEW_DATABASE -o tmp/$COMPANY/$NEW_DATABASE.zip
```

Deploy the upgraded database.

Restore the upgraded database. 

