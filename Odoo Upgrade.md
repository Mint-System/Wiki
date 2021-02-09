# Odoo Upgrade

## Setup test environment

Create new Odoo instance:
* Create new Odoo instance `$ALIAS-14` by copying the folder
* Remove database and backup config
* Update Odoo config with Odoo 14 revision
* Bump instance number and change port
* Register in `hosts.yml` and deploy

Enable proxy redirect
* Change

## Upgrade from 13.0 to 14.0

::: tip
The main challenge of the upgrade process is having the filestore at the right location.
:::

**Test**

Steps to upgrade a databse.

* Export remote database to local folder
* Start local development environment
* Restore database
* Run the upgrade script

```
export PGHOST=localhost
export PGUSER=odoo
export PGPASSWORD=odoo
python <(curl -s https://upgrade.odoo.com/upgrade) test -d erp -t 14.0 -r erp-dev
```

It should automatically rertote the database.

* Switch local development environment to targeted version

If connection has been lost proceed with this:

* Store the token `export TOKEN=...`
* Check the status `python <(curl -s https://upgrade.odoo.com/upgrade) status -t $TOKEN`
* Restore the database `python <(curl -s https://upgrade.odoo.com/upgrade) restore -d erp -r erp-dev -t $TOKEN`

**Production**

## Troubleshooting

