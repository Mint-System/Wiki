# Odoo Upgrade

## From 13.0 to 14.0

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
python <(curl -s https://upgrade.odoo.com/upgrade) test -d erp -t 14.0
```

It should automatically resote the database.

* Swich local development environment to targeted version

If connection has been lost proceed with this:

* Store the token `export TOKEN=...`
* Check the status `python <(curl -s https://upgrade.odoo.com/upgrade) status -t $TOKEN`
* Restore the database `python <(curl -s https://upgrade.odoo.com/upgrade) restore -d erp -r erp-14.0 -t $TOKEN`

**Production**