---
lang: en
---
# Plabyook Upgrade Odoo XX.0

## Prepare

Env vars from Ansible inventory:

```bash
export CUSTOMER="Mint System"
export SERVER="zeus.mint-system.com"
export PORT=22

export ODOO_CONTAINER="odoo01"
export POSTGRES_CONTAINER="postgres01"
export ODOO_VERSION="16.0"
export DATABASE="odoo"

export TARGET_ODOO_CONTAINER="odoo02"
export TARGET_POSTGRES_CONTAINER="postgres02"
export TARGET_DATABASE="upgrade"
export TARGET_ODOO_VERSION="18.0"
```

Backup database.

```bash
ssh -p "$PORT" "$SERVER" sudo docker-postgres-backup -c "$POSTGRES_CONTAINER" -d "$DATABASE"
```

Restore database.

```bash
ssh -p "$PORT" "$SERVER" sudo docker-postgres-restore -c "$TARGET_POSTGRES_CONTAINER" -d "$DATABASE" -f "/var/tmp/$POSTGRES_CONTAINER/odoo.sql"
```

## Upgrade

Optional: Drop the target database.

```bash
ssh -p "$PORT" "$SERVER" sudo docker-postgres-drop -c "$TARGET_POSTGRES_CONTAINER" -d "$TARGET_DATABASE"
```

Run upgrade script.

```bash
ssh -p "$PORT" "$SERVER" sudo docker-odoo-upgrade -c "$TARGET_POSTGRES_CONTAINER" -h "$TARGET_POSTGRES_CONTAINER" -d "$DATABASE" -s "$ODOO_VERSION" -n "$TARGET_DATABASE" -t "$TARGET_ODOO_VERSION"
```

Copy filestore.

```bash
docker-volume-copy -s "$ODOO_CONTAINER:/filestore/$DATABASE" -t "$TARGET_ODOO_CONTAINER:/filestore/$TARGET_DATABASE" -f
docker exec -u root "$TARGET_ODOO_CONTAINER" chown -R odoo:odoo "/var/lib/odoo/filestore/$TARGET_DATABASE"
```

Update all modules.

```bash
docker-odoo-update -c "$TARGET_ODOO_CONTAINER" -d "$TARGET_DATABASE" -u base
```

## Configure

Uninstall deprecated modules.

```bash
ssh -p "$PORT" "$SERVER" docker-odoo-uninstall -c "$TARGET_ODOO_CONTAINER" -d "$TARGET_DATABASE" -u auth_impersonate_user
```

## Testing

==Define test cases.==