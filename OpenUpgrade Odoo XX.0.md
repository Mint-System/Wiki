# OpenUpgrade Odoo XX.0

## Prepare

Set env vars.

```bash
export ODOO_CURRENT_VERSION=XX.0
export ODOO_TARGET_VERSION=XX.0
export COMPANY=mint-system
export POSTGRES_CONTAINER=odoo01
export DATABASE=erp
export SERVER=zeus.mint-sytstem.com
```

Download the database.

```bash
ssh $SERVER docker-postgres-backup -c "$POSTGRES_CONTAINER" -d "$DATABASE"
scp "$SERVER:/mnt/tmp/$POSTGRES_CONTAINER/$DATABASE.sql" "tmp/$COMPANY/$DATABASE.sql"
```

Checkout Odoo environment.

Start local development environment.

```bash
task checkout $ODOO_CURRENT_VERSION
task start db,native
```

## Restore

Clear filestore and restore database.

```bash
task drop-db $DATABASE
task clear-filestore $DATABASE
odoo-restore -f tmp/$COMPANY/$DATABASE.sql
```

Login and check the Odoo log.

## Upgrade

