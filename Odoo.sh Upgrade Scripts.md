---
lang: en
---
# Odoo.sh Upgrade Scripts

During the Upgrade process there will be issues such as shown here:

![[Odoo Upgrade Issue.png]]

The message gives an hint on what should be done:

`2024-11-14 09:08:46,611 27 CRITICAL db_2188827 odoo.addons.base.maintenance.migrations.base.pre-models-no-model-data-delete: It looks like you forgot to call util.delete_unused(cr, "product.list1")

## Create upgrade script module

The upgrade scripts should be created inside the modules. However, in many cases access to the modules is not given and therefore a custom module needs to created.

The module has to be installed on on the main and the upgrade branch

Here is an example of what the module structure might look like:

### main branch (14.0)

**manifest.py**

### upgrade branch (17.0)

**manifest.py**