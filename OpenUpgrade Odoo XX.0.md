# OpenUpgrade Odoo XX.0

## Prepare

Set env vars.

```bash
export ODOO_CURRENT_VERSION=XX.0
export ODOO_TARGET_VERSION=XX.0
export COMPANY=mint-system
export POSTGRES_CONTAINER=odoo01
export DATABASE=erp
export NEW_DATABASE=${DATABASE}_${ODOO_TARGET_VERSION}
export SERVER=zeus.mint-sytstem.com
```

Backup and download database from server.

```bash
ssh $SERVER sudo docker-postgres-backup -c "$POSTGRES_CONTAINER" -d "$DATABASE"
mkdir -p "tmp/$COMPANY"
scp "$SERVER:/mnt/tmp/$POSTGRES_CONTAINER/$DATABASE.sql" "tmp/$COMPANY/$DATABASE.sql"
```

Checkout Odoo environment.

```bash
task checkout $ODOO_CURRENT_VERSION
```

Install Python requirements.

```bash
task install-requirements addons/server_tools/requirements.txt
```

Clear filestore and restore database.

```bash
task start db
task drop-db "$DATABASE"
docker-postgres-restore -c db -f "tmp/$COMPANY/$DATABASE.sql"
```

Login and check the Odoo log.

```bash
task start native "$DATABASE"
```

Remove [[Unsupported Modules]].

## Upgrade

Checkout target Odoo environment.

```bash
task checkout "$ODOO_TARGET_VERSION"
```

Clone the OpenUpgrade scripts.

```bash
git clone git@github.com:OCA/OpenUpgrade.git tmp/openupgrade
git -C tmp/openupgrade checkout "$ODOO_TARGET_VERSION" git -C tmp/openupgrade pull
```

Install Python requirements.

```bash
task install-requirements addons/server_tools/requirements.txt
task install-requirements tmp/openupgrade/requirements.txt
```

Set OpenUpgrade env vars.

```bash
ODOO_ADDONS_PATH=tmp/openupgrade
ODOO_PARAM="--load=base,web,openupgrade_framework"
```

Run the upgrade scripts.

```bash
task update-module "$DATABASE" all
```

Once the upgrade finished, start the server.

```bash
task start native "$DATABASE"
```

## Deploy

Export the database.

```bash
docker-postgres-backup -c db -d "$DATABASE" -o "tmp"
mv "tmp/db/$DATABASE.sql" "tmp/$COMPANY/$NEW_DATABASE.sql"
```

Upload database to server.

```bash
scp "tmp/$COMPANY/$NEW_DATABASE.sql" "$SERVER:~"
```

Restore the database.

```bash
ssh "$SERVER" sudo docker-postgres-restore -c "$POSTGRES_CONTAINER" -d "$DATABASE" -f "~/$NEW_DATABASE.sql"
```

Fix filestore permissions.

```bash
docker exec -u root "$CONTAINER" chown -R odoo:odoo "/var/lib/odoo/filestore/$DATABASE"
docker exec -u root "$CONTAINER" chown -R odoo:odoo "/var/lib/odoo/sessions"
```
## Cleanup

Disable the OpenUpgrade env vars.

## Troubleshooting

### Record already exists

**Problem**

```
 odoo.sql_db: bad query: INSERT INTO "ir_act_window_view" ("act_window_id", "create_date", "create_uid", "sequence", "view_id", "view_mode", "write_date", "write_uid") VALUES (362, '2024-12-15 17:55:27.097998', 1, 10, 1227, 'kanban', '2024-12-15 17:55:27.097998', 1) RETURNING "id"
ERROR: duplicate key value violates unique constraint "act_window_view_unique_mode_per_action"
DETAIL:  Key (act_window_id, view_mode)=(362, kanban) already exists.
```

**Solution**

```sql
DELETE FROM ir_act_window_view WHERE act_window_id = '362';
```