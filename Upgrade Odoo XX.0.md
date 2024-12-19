---
lang: en
tags:
- templates
---
# Upgrade Odoo XX.0

## Prepare

Set env vars.

```bash
export ODOO_CURRENT_VERSION=XX.0
export ODOO_TARGET_VERSION=XX.0
export DATABASE=erp
export NEW_DATABASE=${DATABASE}_${ODOO_TARGET_VERSION}
export COMPANY=mint-system
export POSTGRES_CONTAINER=postgres01
export SERVER=zeus.mint-system.com
export MODE=test # Options: test, production
alias odoo-upgrade="python <(curl -s https://upgrade.odoo.com/upgrade)"
```

Env erstellen/bearbeiten `task edit-env $COMPANY` und aktuelle Verbindungsdaten eintragen:

```bash
ODOO_URL=https://erp.example.com
ODOO_DATABASE=erp
ODOO_USERNAME=login@mint-system.ch
ODOO_PASSWORD=***
```

Verbindung testen mit `task test-jsonrpc`.

Backup and download database from server.

```bash
ssh $SERVER sudo docker-postgres-backup -c "$POSTGRES_CONTAINER" -d "$DATABASE"
mkdir -p "tmp/$COMPANY"
scp "$SERVER:/var/tmp/$POSTGRES_CONTAINER/$DATABASE.sql" "tmp/$COMPANY/$DATABASE.sql"
```

Checkout current Odoo environment.

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
docker-postgres-create -c db -d "$DATABASE"
docker-postgres-restore -c db -f "tmp/$COMPANY/$DATABASE.sql"
```

Login and check the Odoo log.

```bash
task start native "$DATABASE"
```

Remove or replace [[Unsupported Modules]].

```bash
task remove-module $DATABASE ...
task init-module $DATABASE ...
```

Login and check the Odoo log.

```
task start native $DATABASE
```
## Upgrade

Run the upgrade scripts.

```bash
task clear-filestore $NEW_DATABASE
task drop-db $NEW_DATABASE
odoo-upgrade $MODE -d $DATABASE -t $ODOO_TARGET_VERSION -r $NEW_DATABASE
```

Checkout target Odoo environment.

```bash
task checkout $ODOO_TARGET_VERSION
```

Update all modules.

```bash
task update-module $NEW_DATABASE base
```

Clear the browser cache and Odoo assets, then start the server.

```bash
task clear-assets $NEW_DATABASE
task start native $NEW_DATABASE
```

Login and check the Upgrade report.

## Configure

Install new modules.

```bash
task init-module $NEW_DATABASE ...
```

Make new Odoo configurations.

Update the language packages.

Update or remove selected snippets.

```bash
task install-snippet $COMPANY path/to/snippet
```

## Verify

Test the upgraded system.

Run the test cases.

Note any regressions.

## Deploy

Export the new database.

```bash
odoo-backup -d $NEW_DATABASE -o tmp/$COMPANY
```

Deploy the upgraded database.

Restore the upgraded database.

Update proxy config.

## Troubleshooting
