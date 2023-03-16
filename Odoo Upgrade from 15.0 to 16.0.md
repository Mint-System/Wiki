---
tags:
- HowTo
---
# Odoo Upgrade from 15.0 to 16.0

## Native Test 🚧

Try to upgrade without checking out 15.0.

### Prepare

Set env vars.

```bash
export ODOO_VERSION=16.0
export MODE=test
export PGHOST=localhost
export PGUSER=odoo
export PGPASSWORD=odoo
export DATABASE=erp
export NEW_DATABASE=${DATABASE}_${ODOO_VERSION}
export COMPANY=mint-system
alias odoo-upgrade="python <(curl -s https://upgrade.odoo.com/upgrade)"
```

Checkout 16.0 environment.

```bash
task checkout $ODOO_VERSION
```

Start local development environment.

```bash
task start db,native
```

### Restore

Download remote database to local folder.

```bash
odoo-backup -d $DATABASE -o tmp/$COMPANY/$DATABASE.zip ...
```

Clear filestore and restore database.

```bash
task drop-db $DATABASE
task clear-filestore $DATABASE
odoo-restore -f tmp/$COMPANY/$DATABASE.zip
```

### Upgrade

Run the upgrade script with option `test`.

```bash
odoo-upgrade $MODE -d $DATABASE -t 16.0 -r $NEW_DATABASE
```

### Verify

### Deploy

