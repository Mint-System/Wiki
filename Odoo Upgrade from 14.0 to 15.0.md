---
tags:
- HowTo
---
# Odoo Upgrade from 14.0 to 15.0

## Native Test

Steps to upgrade a database for testing purposes from dev machine.

### Prepare

Checkout 14.0 environment.

```bash
task checkout 14.0
```

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

Clear the local filestore and database.

```bash
task drop-db $DATABASE
task clear-filestore $DATABASE
```

Start local development environment.

```bash
task start db,native
```

### Restore

Restore to local folder and restore it

```bash
odoo-restore -f "tmp/$COMPANY/$DATABASE.zip"
```

Remove unsupported modules.

```bash
task remove-module ...
```

Install modules.

```bash
task install-module ...
```

### Upgrade

Run the upgrade script with option `test`.

```bash
odoo-upgrade $MODE -d $DATABASE -t 15.0
```

Switch local development environment to targeted version.

```bash
task checkout 15.0
task start db,native
NEW_DATABASE=erp_test_15.0_YYYY_MM_DD_HH_SS
```

### Configure

Open <http://localhost:8069/web/database/manager> to access new db.

Install new modules.

```bash
task install-module $NEW_DATABASE mrp_account_enterprise
```

### Deploy

Export the database

```bash
odoo-backup -d $NEW_DATABASE -o tmp/$COMPANY/$NEW_DATABASE.zip
```

## Native Production

It is the same procedure as with [[#Native Test]], but instead of using the `test` option for the upgrade mode, use `export MODE=production`.

## Docker Production 🚧

#FIXME See support ticket <https://www.odoo.com/de_DE/my/task/2836411?access_token=757b30f0-da6c-461a-88d7-6a048cc62592>

Steps to make productive upgrade from Docker container.

* Create a backup

```bash
sudo su
run-cron-job -n "Backup job docker odoo backup erp"
```

* Set env vars

```bash
export PGHOST=$(docker exec odoo09 bin/bash -c "echo \$HOST")
export PGUSER=$(docker exec odoo09 bin/bash -c "echo \$USER")
export PGPASSWORD=$(docker exec odoo09 bin/bash -c "echo \$PASSWORD")
export DATABASE=erp
alias python=python3
alias odoo-upgrade="python <(curl -s https://upgrade.odoo.com/upgrade)"
```

* Log into container and set env vars

```bash
docker exec -it odoo09 bash
cd

export PGHOST="$HOST"
export PGUSER="$USER"
export PGPASSWORD="$PASSWORD"
export DATABASE=erp
alias python=python3
alias odoo-upgrade="python <(curl -s https://upgrade.odoo.com/upgrade)"
```

* Run the upgrade script with option `production`.

```bash
odoo-upgrade production -d $DATABASE -t 15.0
```

* Deploy Odoo container
* Setup proxy
* Update cron jobs
* Test and remove unsupported modules

## Troubleshooting

### External ID not found in the system

**Problem**

The upgrade for the on-premise enterprise database failed with this error:

> External ID not found in the system: quality_mrp.worksheet_page

**Solution**

Install `quality_mrp`.

Source: <https://www.odoo.com/de_DE/my/task/2794306?access_token=7b35c536-e265-497c-8114-4a9e9c8589ea>