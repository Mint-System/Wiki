# Upgrade Odoo.sh XX.0

## Prepare

Set env vars.

```bash
export DATABASE=gelsoag-upgrade-17425638
export COMPANY="mint-system"
```

Create and edit env file `task edit-env $COMPANY`. Enter connection credentials:

```bash
ODOO_URL=https://$DATABASE.dev.odoo.com
ODOO_DATABASE=$DATABASE
ODOO_USERNAME=login@mint-system.ch
ODOO_PASSWORD=***
```

Test connection with `task test-jsonrpc $COMPANY`.

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