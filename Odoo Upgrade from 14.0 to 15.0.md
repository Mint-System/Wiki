---
tags:
- HowTo
---
# Odoo Upgrade from 14.0 to 15.0

## Prepare

Set env vars.

```bash
export ODOO_CURRENT_VERSION=14.0
export ODOO_TARGET_VERSION=15.0
export MODE=test
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

Checkout Odoo environment.

```bash
task checkout $ODOO_CURRENT_VERSION
```

Install python packages.

Start local development environment.

```bash
task start db,native
```

## Restore

Clear filestore and restore database.

```bash
task clear-filestore $DATABASE
odoo-restore -f tmp/$COMPANY/$DATABASE.zip
```

Login and check the Odoo log.

Remove [[Unsupported Modules]].

```bash
task remove-module $DATABASE ...
```

Update modules.

## Upgrade

Run the upgrade scripts.

```bash
odoo-upgrade $MODE -d $DATABASE -t $ODOO_TARGET_VERSION -r $NEW_DATABASE
```

Checkout target Odoo environment.

```bash
task checkout $ODOO_TARGET_VERSION
```

Clear the assets and start the server.

```bash
task clear-assets $NEW_DATABASE
task start native
```

Login and check the Odoo log.

Check the Upgrade report.

## Configure

Migrate custom modules.

Install new modules.

```bash
task install-module $NEW_DATABASE ...
```

Reset selected views.

Make new Odoo configurations.

Activate options in the settings page.

Update selected snippets.

## Verify

Test the upgraded system.

Run these test cases.

Note regressions.

## Deploy

Export the new database.

```bash
odoo-backup -d $NEW_DATABASE -o tmp/$COMPANY/$NEW_DATABASE.zip
```

## Troubleshooting

### External ID not found in the system

**Problem**

The upgrade for the on-premise enterprise database failed with this error:

```
External ID not found in the system: quality_mrp.worksheet_page
```

**Solution**

Install `quality_mrp`.

Source: <https://www.odoo.com/de_DE/my/task/2794306?access_token=7b35c536-e265-497c-8114-4a9e9c8589ea>