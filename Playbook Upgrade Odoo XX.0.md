---
lang: en
tags:
  - Templates
section: template
kind:
  - reference
---

# Playbook Upgrade Odoo XX.0

The playbook supports two modes: test and production. When executing the production mode the production database will be replaced with the upgraded database at the very end.

## Prepare 📝

Start a command line and copy these env vars:

```bash
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

Backup database.

```bash
ssh "$SERVER" sudo docker-postgres-backup -c "$POSTGRES_CONTAINER" -d "$DATABASE"
```

## Upgrade ⬆️

Drop the target database.

```bash
ssh -p "$PORT" "$SERVER" docker-postgres-drop -c "$POSTGRES_CONTAINER" -d "$TARGET_DATABASE"
```

Run upgrade script in **test** mode.

```bash
ssh -p "$PORT" "$SERVER" docker-odoo-upgrade -c "$POSTGRES_CONTAINER" -d "$DATABASE" -s "$ODOO_VERSION" -n "$TARGET_DATABASE" -t "$TARGET_ODOO_VERSION"
```

Run upgrade script in **production** mode.

```bash
ssh -p "$PORT" "$SERVER" docker-odoo-upgrade -c "$POSTGRES_CONTAINER" -d "$DATABASE" -s "$ODOO_VERSION" -n "$TARGET_DATABASE" -t "$TARGET_ODOO_VERSION" -m production
```

Backup database and restore **database** if target postgres container is different.

```bash
ssh "$SERVER" sudo docker-postgres-backup -c "$POSTGRES_CONTAINER" -d "$TARGET_DATABASE"
ssh "$SERVER" docker-postgres-restore -c "$TARGET_POSTGRES_CONTAINER" -d "$TARGET_DATABASE" -f "/var/tmp/$POSTGRES_CONTAINER/$TARGET_DATABASE.sql" -r
```

Copy filestore if **test** mode or target Odoo container is different.

```bash
ssh -p "$PORT" "$SERVER" docker-volume-copy -s "$ODOO_CONTAINER:/filestore/$DATABASE" -t "$TARGET_ODOO_CONTAINER:/filestore/$TARGET_DATABASE" -f
# ssh -p "$PORT" "$SERVER" bash -c "docker exec -u root -it \"$TARGET_ODOO_CONTAINER\" chown -R odoo:odoo \"/var/lib/odoo/filestore/$TARGET_DATABASE\""
```

## Configure ⚙️

Uninstall deprecated modules.

```bash
ssh -p "$PORT" "$SERVER" docker-odoo-uninstall -c "$TARGET_ODOO_CONTAINER" -d "$TARGET_DATABASE" -u project_task_all_menu
```

Install new modules.

```bash
ssh -p "$PORT" "$SERVER" docker-odoo-init -c "$TARGET_ODOO_CONTAINER" -d "$TARGET_DATABASE" -i auth_impersonate_user
```

Update all modules.

```bash
ssh -p "$PORT" "$SERVER" docker-odoo-update -c "$TARGET_ODOO_CONTAINER" -d "$TARGET_DATABASE" -u all
ssh -p "$PORT" "$SERVER" docker-odoo-clear-assets -c "$TARGET_ODOO_CONTAINER" -d "$TARGET_DATABASE"
```

## Testing 🔬

Run the test cases and process the feedback.

## Production 🚀

Rename the databases if **production** mode.

```bash
ssh -p "$PORT" "$SERVER" docker-postgres-rename -c "$TARGET_POSTGRES_CONTAINER" -s "$DATABASE" -t "${DATABASE}-old"
ssh -p "$PORT" "$SERVER" docker-postgres-rename -c "$TARGET_POSTGRES_CONTAINER" -s "$TARGET_DATABASE" -t "$DATABASE"
ssh -p "$PORT" "$SERVER" docker-postgres-list -c "$TARGET_POSTGRES_CONTAINER"
```

Rename the filestore if **production** mode.

```bash
ssh -p "$PORT" "$SERVER" docker exec "$TARGET_ODOO_CONTAINER" mv "/var/lib/odoo/filestore/$TARGET_DATABASE" "/var/lib/odoo/filestore/$DATABASE"
```

Update the proxy configuration and update Ansible inventory.

## Cleanup 🧹

Remove the outdated Odoo container, volume, data and database.

Merge the upgrade host definition into the main host definition.

## Troubleshooting 💡

==Document and resolve upgrade issues.==
