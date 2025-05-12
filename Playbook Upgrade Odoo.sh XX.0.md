# Playbook Upgrade Odoo.sh XX.0

## Prepare 📝

Set env vars.`

```bash
export COMPANY="gelso"
export ODOO_DATABASE="gelsoag-upgrade-17425638"
export ODOO_URL=https://$ODOO_DATABASE.dev.odoo.com
export ODOO_USERNAME=login@mint-system.ch
export ODOO_PASSWORD=***
```

Create credentials file with `task create-odoo-env "$COMPANY"`.

Test connection with `task test-jsonrpc "$COMPANY"`.

Backup database in Odoo.sh project.

## Upgrade ⬆️

Run the Odoo.sh upgrade process.

Login and check the Upgrade report.

## Configure ⚙️

Install, update or remove modules in Odoo.sh shell.

```bash
odoo-bin --stop-after-init -i $MODULE_NAME
odoo-update $MODULE_NAME
echo "self.env['ir.module.module'].search([('name', '=', '$MODULE_NAME')]).button_immediate_uninstall()" | odoo-bin shell
```

Make new Odoo configurations.

Install, update, disable or remove selected snippets.

```bash
task install-snippet "$COMPANY" path/to/snippet
task update-snippet "$COMPANY" path/to/snippet
task disable-snippet "$COMPANY" path/to/snippet
task remove-snippet "$COMPANY" path/to/snippet
```

## Testing 🔬


==Define test cases.==

## Production 🚀

Run the Odoo.sh upgrade process.

## Troubleshooting 💡

==Document and resolve upgrade issues.==