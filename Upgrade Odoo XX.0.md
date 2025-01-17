---
lang: en
tags:
- templates
---
# Upgrade Odoo XX.0

## Prepare

Set env vars.

```bash
export ODOO_CURRENT_VERSION="XX.0"
export ODOO_TARGET_VERSION="XX.0"
export DATABASE="erp"
export NEW_DATABASE="${DATABASE}_${ODOO_TARGET_VERSION}"
export COMPANY="mint-system"
export POSTGRES_CONTAINER="postgres01"
export SERVER="zeus.mint-system.com"
```

Backup and download database from server.

```bash
ssh "$SERVER" sudo docker-postgres-backup -c "$POSTGRES_CONTAINER" -d "$DATABASE"
mkdir -p "tmp/$COMPANY"
scp "$SERVER:/var/tmp/$POSTGRES_CONTAINER/$DATABASE.sql" "tmp/$COMPANY/$DATABASE.sql"
```

Checkout current Odoo environment.

```bash
task checkout "$ODOO_CURRENT_VERSION"
```

Install Python requirements.

```bash
task install-requirements addons/server_tools/requirements.txt
```

Clear filestore and restore database.

```bash
task start db
task drop-db "$DATABASE"
docker-postgres-create -c db -d "$DATABASE"
docker-postgres-restore -c db -f "tmp/$COMPANY/$DATABASE.sql"
```

Remove or replace [[Unsupported Modules]].

```bash
task remove-module "$DATABASE" module_name
task init-module "$DATABASE" module_name
```

Login and check the Odoo log.

```bash
task start native "$DATABASE"
```
## Upgrade

Run the upgrade scripts.

```bash
task drop-db "$NEW_DATABASE"
task clear-filestore "$NEW_DATABASE"
task upgrade-odoo "$DATABASE" "$ODOO_TARGET_VERSION" production
```

Checkout target Odoo environment.

```bash
task checkout "$ODOO_TARGET_VERSION"
```

Clear the browser cache and Odoo assets, then start the server.

```bash
task clear-assets "$NEW_DATABASE"
task start native "$NEW_DATABASE"
```

Login and check the Upgrade report.

## Configure

Install or remove modules.

```bash
task init-module "$NEW_DATABASE" module_name
task remove-module "$NEW_DATABASE" module_name
```

Make new Odoo configurations.

Update the language packages.

Install, update, disable or remove selected snippets.

```bash
task install-snippet "$COMPANY" path/to/snippet
task update-snippet "$COMPANY" path/to/snippet
task disable-snippet "$COMPANY" path/to/snippet
task remove-snippet "$COMPANY" path/to/snippet
```

## Testing

Test the upgraded system.

Note any regressions.

Run the test cases.

### Name of the test case

## Deploy

Export the new database.

```bash
docker-postgres-backup -c db -d "$NEW_DATABASE" -o "tmp/$COMPANY"
```

Deploy the upgraded database.

```bash
scp "tmp/$COMPANY/db/$NEW_DATABASE.sql" "$SERVER:~"
```

Restore the upgraded database.

```bash
ssh "$SERVER" 
DATABASE=erp-dev
NEW_DATABASE=erp_18.0
POSTGRES_CONTAINER=postgre01
docker-postgres-restore -f "$NEW_DATABASE" -c "$POSTGRES_CONTAINER" -d "$DATABASE" -r
```

Copy the filestore.

```bash
ODOO_CONTAINER=odoo01
SOURCE_DATABASE=erp
docker-volume-copy -s "$ODOO_CONTAINER:/filestore/$SOURCE_DATABASE" -t "$ODOO_CONTAINER:/filestore/$DATABASE" -f
docker exec -u root "$ODOO_CONTAINER" chown -R odoo:odoo "/var/lib/odoo/filestore/$DATABASE"
```

Update all modules.

```bash
docker-odoo-update -c "$ODOO_CONTAINER" -d "$DATABASE" -u base
```

## Troubleshooting
