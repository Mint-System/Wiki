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
task upgrade-odoo acme dump
task upgrade-odoo acme filestore
task upgrade-odoo acme drop
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
task upgrade-odoo acme restart
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
task upgrade-odoo acme restart
```

If **production** then replace the Ansible prod host with the upgrade host vars. Update the Nginx proxy configuration.
## Configure ⚙️

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
task upgrade-odoo acme rename-production
```

Deploy the Odoo container with Ansible.

Deploy the Nginx configuration with Ansible.

## Cleanup 🧹

Ensure the backups jobs are defined correctly.

Remove the outdated Odoo container, volume, data and database.

## Troubleshooting 💡

==Document and resolve upgrade issues.==

### ==Title of the issue== 🟥

**Problem**

==How to reproduce the problem?==

**Solution**

==What is the solution to resolve the issue?==