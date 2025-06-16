---
lang: en
tags:
  - Templates
---
# Playbook Upgrade Odoo XX.0

## Prepare 📝

Start a command line and copy these env vars:

```bash
export CUSTOMER="Mint System"
export SERVER="zeus.mint-system.com"
export PORT=22

export ODOO_CONTAINER="odoo01"
export ODOO_VERSION="16.0"
export POSTGRES_CONTAINER="postgres01"
export DATABASE="odoo"

export TARGET_ODOO_CONTAINER="odoo02"
export TARGET_ODOO_VERSION="18.0"
export TARGET_POSTGRES_CONTAINER="postgres02"
export TARGET_DATABASE="upgrade"
```

Backup database and restore database if target postgres container is different.

```bash
ssh -p "$PORT" "$SERVER" docker-postgres-backup -c "$POSTGRES_CONTAINER" -d "$DATABASE"
ssh -p "$PORT" "$SERVER" docker-postgres-restore -c "$TARGET_POSTGRES_CONTAINER" -d "$DATABASE" -f "/var/tmp/$POSTGRES_CONTAINER/$DATABASE.sql" -r
```

## Upgrade ⬆️

Optional: Drop the target database.

```bash
ssh -p "$PORT" "$SERVER" docker-postgres-drop -c "$TARGET_POSTGRES_CONTAINER" -d "$TARGET_DATABASE"
```

Run upgrade script in test mode.

```bash
ssh -p "$PORT" "$SERVER" docker-odoo-upgrade -c "$TARGET_POSTGRES_CONTAINER" -d "$DATABASE" -s "$ODOO_VERSION" -n "$TARGET_DATABASE" -t "$TARGET_ODOO_VERSION"
```

Run upgrade script in production mode.

```bash
ssh -p "$PORT" "$SERVER" docker-odoo-upgrade -c "$TARGET_POSTGRES_CONTAINER" -d "$DATABASE" -s "$ODOO_VERSION" -n "$TARGET_DATABASE" -t "$TARGET_ODOO_VERSION" -m production
```

Copy filestore in test mode.

```bash
ssh -p "$PORT" "$SERVER" docker-volume-copy -s "$ODOO_CONTAINER:/filestore/$DATABASE" -t "$TARGET_ODOO_CONTAINER:/filestore/$TARGET_DATABASE" -f
ssh -p "$PORT" "$SERVER" bash -c "docker exec -u root -it \"$TARGET_ODOO_CONTAINER\" chown -R odoo:odoo \"/var/lib/odoo/filestore/$TARGET_DATABASE\""
```

## Configure ⚙️

Uninstall deprecated modules.

```bash
ssh -p "$PORT" "$SERVER" docker-odoo-uninstall -c "$TARGET_ODOO_CONTAINER" -d "$TARGET_DATABASE" -u project_task_all_menu
```

Update all modules.

```bash
ssh -p "$PORT" "$SERVER" docker-odoo-update -c "$TARGET_ODOO_CONTAINER" -d "$TARGET_DATABASE" -u base
ssh -p "$PORT" "$SERVER" docker-odoo-clear-assets -c "$TARGET_ODOO_CONTAINER" -d "$TARGET_DATABASE"
```

## Testing 🔬

==Define test cases.==

## Production 🚀

Rename the databases if production mode.

```bash
ssh -p "$PORT" "$SERVER" docker-postgres-rename -c "$TARGET_POSTGRES_CONTAINER" -s "$DATABASE" -t "${DATABASE}-old"
ssh -p "$PORT" "$SERVER" docker-postgres-rename -c "$TARGET_POSTGRES_CONTAINER" -s "$TARGET_DATABASE" -t "$DATABASE"
ssh -p "$PORT" "$SERVER" docker-postgres-list -c "$TARGET_POSTGRES_CONTAINER"
```

## Troubleshooting 💡

==Document and resolve upgrade issues.==