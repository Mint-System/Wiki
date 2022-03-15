# Odoo Upgrade from 13.0 to 14.0

::: tip
The main challenge of the upgrade process is having the filestore at the right location.
:::

**Test**

Steps to upgrade a databse.

* Set env vars

```bash
export PGHOST=localhost
export PGUSER=odoo
export PGPASSWORD=odoo
export DATABASE=erp
alias odoo-upgrade="python <(curl -s https://upgrade.odoo.com/upgrade)"
```

* Start local development environment

```bash
task start db,native
```

* Clear the local filestore and database

```bash
task drop-db erp
task clear-filestore erp
```

* Export remote database to local folder and restore it

```bash
odoo-backup -d $DATABASE ...
odoo-restore -f ...
```

* Run the upgrade script, options are `test` and `production`

```bash
odoo-upgrade production -d $DATABASE -t 14.0
```

It should automatically restore the database.

* Switch local development environment to targeted version

```bash
task checkout 14.0
task start db,native
```

* Open <http://localhost:8069/web/database/manager> to get the new db name
* Test and remove unsupported modules

```bash
export DATABASE=erp_backup_2021_11_10_18_16
task remove-module $DATABASE web_diagram
task remove-module $DATABASE auth_oauth_multi_token
```

* Check custom modules

```
task odoo-cloc $DATABASE
```

* Export database

```
odoo-backup -d $DATABASE -o tmp/.../erp-14.0.zip
```

* Upload database to test environment

```
odoo-restore -d erp-dev -f tmp/.../erp-14.0.zip -r -h https://erp-dev...
```

**Production**

Execute the same steps as for *Tests* except for these changes:

`odoo-upgrade production -d $DATABASE -t 14.0`

* Upload database to production environment

In addition you must:
* Reconnect the [[Odoo Subscription]]