---
title: Playbook Upgrade Odoo XX.0
lang: en
section: template
kind: reference
---

The playbook supports two modes: **test** and **production**. When executing the production mode the production database will be replaced with the upgraded database at the very end.

## Prepare 📝

Start a command line and copy these env vars:

```bash
export HOST='upgrade.example.com'
export SERVER='zeus.mint-system.com'
export PORT=22

export ODOO_CONTAINER='odoo01'
export ODOO_VERSION='16.0'
export POSTGRES_CONTAINER='postgres01'
export DATABASE='odoo'

export TARGET_ODOO_CONTAINER='odoo02'
export TARGET_ODOO_VERSION='18.0'
export TARGET_POSTGRES_CONTAINER='postgres02'
export TARGET_DATABASE='upgrade'
```

Create credentials file with `task create-env $HOST odoo`. Test connection with `task test-xmlrpc $HOST.

Backup and restore database if postgres container is different.

```bash
ssh -p "$PORT" "$SERVER" sudo docker-postgres-backup -c "$POSTGRES_CONTAINER" -d "$DATABASE"
ssh -p "$PORT" "$SERVER" docker-postgres-restore -c "$TARGET_POSTGRES_CONTAINER" -d "$DATABASE" -f "/var/tmp/$POSTGRES_CONTAINER/$DATABASE.sql" -r
```

Stop the container if **production** mode.

```bash
ssh "$SERVER" docker stop "$ODOO_CONTAINER"
```
## Upgrade ⬆️

Drop the target database.

```bash
ssh -p "$PORT" "$SERVER" docker-postgres-drop -c "$TARGET_POSTGRES_CONTAINER" -d "$TARGET_DATABASE"
```

Run upgrade script in **test** mode.

```bash
ssh -p "$PORT" "$SERVER" docker-odoo-upgrade -c "$TARGET_POSTGRES_CONTAINER" -d "$DATABASE" -s "$ODOO_VERSION" -n "$TARGET_DATABASE" -t "$TARGET_ODOO_VERSION"
```

Run upgrade script in **production** mode.

```bash
ssh -p "$PORT" "$SERVER" docker-odoo-upgrade -c "$TARGET_POSTGRES_CONTAINER" -d "$DATABASE" -s "$ODOO_VERSION" -n "$TARGET_DATABASE" -t "$TARGET_ODOO_VERSION" -m production
```

Copy filestore.

```bash
ssh -p "$PORT" "$SERVER" docker-volume-copy -s "$ODOO_CONTAINER:/filestore/$DATABASE" -t "$TARGET_ODOO_CONTAINER:/filestore/$TARGET_DATABASE" -f
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

Update snippets.

```bash
task disable-snippet $HOST snippets/sale.report_saleorder_document.add_note_space.xml
task install-snippet $HOST snippets/sale.report_saleorder_document.add_signature_note.xml
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

### ==Title of the issue== 🟥

**Problem**

==How to reproduce the problem?==

**Solution**

==What is the solution to resolve the issue?==