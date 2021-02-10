# Odoo Upgrade

## Setup test environment

Create new Odoo instance:
* Create new Odoo host `$ALIAS-14` by copying the folder
* Remove database and backup config
* Update Odoo config with Odoo 14 revision
* Bump instance number and change port
* Register in `hosts.yml` and deploy

Prepare for test upgrade:
* Remove erp-dev database
* Enable proxy redirect to new instance

## Upgrade from 13.0 to 14.0

::: tip
The main challenge of the upgrade process is having the filestore at the right location.
:::

**Test**

Steps to upgrade a databse.

* Start local development environment
* Export remote database to local folder and restore database
* Run the upgrade script

```
export PGHOST=localhost
export PGUSER=odoo
export PGPASSWORD=odoo
alias odoo-upgrade="python <(curl -s https://upgrade.odoo.com/upgrade)"
odoo-upgrade test -d erp -t 14.0
```

It should automatically restore the database.

* Switch local development environment to targeted version
* Test and export database
* Upload database to test environment

**Production**

## Troubleshooting

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