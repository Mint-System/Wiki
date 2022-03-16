# Odoo Upgrade from 14.0 to 15.0

## Test

Steps to upgrade a databse for testing purposes.

* Checkout 14.0 environment

```bash
task checkout 14.0
```

* Set env vars

```bash
export PGHOST=localhost
export PGUSER=odoo
export PGPASSWORD=odoo
export DATABASE=erp
alias odoo-upgrade="python <(curl -s https://upgrade.odoo.com/upgrade)"
```

* Clear the local filestore and database

```bash
task drop-db $DATABASE
task clear-filestore $DATABASE
```

* Start local development environment

```bash
task start db,native
```

* Export remote database to local folder and restore it

```bash
odoo-backup -d $DATABASE ...
odoo-restore -f ...
```

* Run the upgrade script with option `test`.

```bash
odoo-upgrade test -d $DATABASE -t 15.0
```

* Switch local development environment to targeted version

```bash
task checkout 15.0
task start db,native
```

* Open <http://localhost:8069/web/database/manager> to access new db
* Test and remove unsupported modules

## Troubleshooting

### External ID not found in the system

**Problem**

The upgrade for the on-premise enterprise database failed with this error:

> External ID not found in the system: quality_mrp.worksheet_page

**Solution**

Install `quality_mrp`.

Source: <https://www.odoo.com/de_DE/my/task/2794306?access_token=7b35c536-e265-497c-8114-4a9e9c8589ea>