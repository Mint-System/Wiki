# Odoo Upgrade

Description of the [[Odoo Enterprise Edition]] upgrade process. For [[Odoo Community Edition]] there is the [[OpenUpgrade]] project.

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

## Upgrade from 13.0 to 14.0

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

* Run the upgrade script, optionas are `test` and `production`

```bash
odoo-upgrade test -d $DATABASE -t 14.0
```

It should automatically restore the database.

* Switch local development environment to targeted version

```bash
task checkout 14.0
task start db,native
```

* Test and remove unsupported modules

```bash
export DATABASE="${DATABASE}_backup_2021_10_20_11_11"
task remove-module $DATABASE web_diagram
task remove-module $DATABASE auth_oauth_multi_token
```

* Check custom modules

```
task odoo-cloc $DATABASE
```

* Export database

```
odoo-backup -d $DATABASE -o tmp/.../erp-dev.zip
```

* Upload database to test environment

```
odoo-restore -d erp-dev -f tmp/.../erp-dev.zip**0**0**0**1**0l********** ...
```

**Production**

Execute the same steps as for *Tests* except for these changes:

`odoo-upgrade production -d $DATABASE -t 14.0`

* Upload database to production environment

In addition you must:
* Reconnect the [[Odoo Subscription]]

## Troubleshooting

### Modules missing

Remove specific modules that are not supported.

```bash
task remove-module erp_test_14.0_2021_04_27_09_02 auth_oauth_multi_token
task remove-module erp_test_14.0_2021_04_27_09_02 web_company_color
```

### Connection lost

If the connection is lost during the upgrade process, the database won't be restored.

**Resolution**

```
export TOKEN=PcLKAKFELD15Eel56EbhbSwEHa9DCKTjLsoTCDZeBxgrzVb1DfW8of_Jcw
odoo-upgrade status -t $TOKEN
odoo-upgrade restore -d erp -r erp-14.0 -t $TOKEN
odoo-upgrade log -t $TOKEN
```

### Studio customizations missing

After the restore the console show this error:

```
Some dependencies may be missing: ['studio_customization']
```

**Resolution**

Manually export the customizations.

### Prognostizierter Bestand ist nicht aktualisiert

Der Bericht Prognostizierter Bestand ist nicht aktuell.

**Resolution**

Install `stock_enterprise`.