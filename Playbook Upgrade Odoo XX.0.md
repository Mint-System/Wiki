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

## Configure ⚙️

Update snippets.

```bash
source task load-dotenv acme
task disable-snippet $TARGET_HOST snippets/sale.report_saleorder_document.add_note_space.xml
task install-snippet $TARGET_HOST snippets/sale.report_saleorder_document.add_signature_note.xml
```

## Testing 🔬

Run the test cases and process the feedback.

## Production 🚀

Rename the databases and filestore if **production** mode.

```bash
task upgrade-odoo acme rename-production
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