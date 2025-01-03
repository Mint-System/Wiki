# Upgrade Odoo.sh XX.0

## Prepare

Set env vars.

```bash
export COMPANY="gelso"
export ODOO_URL=https://$DATABASE.dev.odoo.com
export ODOO_DATABASE="gelsoag-upgrade-17425638"
export ODOO_USERNAME=login@mint-system.ch
export ODOO_PASSWORD=***
```

Create credentials file with `task create-odoo-env "$COMPANY"`.

Test connection with `task test-jsonrpc "$COMPANY"`.

Backup database in Odoo.sh project.

## Upgrade

Run the Odoo.sh upgrade process.

Login and check the Upgrade report.

## Configure

Install or remove modules in Odoo.sh shell.

```bash
odoo-bin -i module_name
```

Make new Odoo configurations.


Install, update, disable or remove selected snippets.

```bash
task install-snippet "$COMPANY" path/to/snippet
task update-snippet "$COMPANY" path/to/snippet
task disable-snippet "$COMPANY" path/to/snippet
task remove-snippet "$COMPANY" path/to/snippet
```
## Verify

Test the upgraded system.

Note any regressions.

Run the test cases.