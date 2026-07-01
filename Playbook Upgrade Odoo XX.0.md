---
project: Odoo Acme Corporation
lang: en
section: template
kind: reference
---

The playbook supports two modes: **test** and **production**. When executing the production mode the production database will be replaced with the upgraded database at the very end.

## Prepare 📝

Copy the production database to the upgrade environment. 

```bash
task upgrade-odoo acme dump-database
task upgrade-odoo acme dump-filestore
task upgrade-odoo acme drop-database
```

## Upgrade ⬆️

Run the **test** upgrade.

```bash
task upgrade-odoo acme upgrade-test
task upgrade-odoo acme clear-assets
task upgrade-odoo acme init
task upgrade-odoo acme uninstall
task upgrade-odoo acme update
task upgrade-odoo acme configure-test
```

Run the **production** upgrade.

```bash
task upgrade-odoo acme stop-container
task upgrade-odoo acme upgrade-production
task upgrade-odoo acme clear-assets
task upgrade-odoo acme init
task upgrade-odoo acme uninstall
task upgrade-odoo acme update
task upgrade-odoo acme configure-production

```

If **production** then replace the Ansible prod host with the upgrade host vars. Update the Nginx proxy configuration.
## Configure ⚙️

Open in browser and login.

```bash
task upgrade-odoo acme restart
task upgrade-odoo acme browse
```

Update snippets.

```bash
source task load-dotenv acme
task disable-snippet $TARGET_HOST snippets/sale.report_saleorder_document.add_note_space.xml
task install-snippet $TARGET_HOST snippets/sale.report_saleorder_document.add_signature_note.xml
```

## Testing 🔬

Run the test cases and process the feedback.

If **production** mode run the "click everywhere" action.

## Production 🚀

Rename the databases and filestore if **production** mode.

```bash
task upgrade-odoo acme rename-target
```

Run the Ansible Odoo playbook with the new configuration.

Deploy the updated Nginx configuration including the Postgres and Odoo exporter with Ansible.

## Cleanup 🧹

Ensure the backups jobs are defined correctly.

Remove the old Odoo container, volume, data and database.

## Troubleshooting 💡

==Document and resolve upgrade issues.==

### ==Title of the issue== 🟥

**Problem**

==How to reproduce the problem?==

**Solution**

==What is the solution to resolve the issue?==