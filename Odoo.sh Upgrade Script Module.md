---
lang: en
draft: false
kind: howto
section: dev
---

# Odoo.sh Upgrade Script Module

During the Upgrade process there will be issues such as shown here:

![[Odoo Upgrade Issue.png]]

The message gives an hint on what should be done:

`2024-11-14 09:08:46,611 27 CRITICAL db_2188827 odoo.addons.base.maintenance.migrations.base.pre-models-no-model-data-delete: It looks like you forgot to call util.delete_unused(cr, "product.list1")

## Create upgrade scripts module

The upgrade scripts should be created inside the modules. However, in many cases access to the modules is not given and therefore a custom module `upgrade_scripts` needs to created.

This module has to be installed on on the main and the upgrade branch

Here is an example of what the module structure might look like:

### main branch (14.0)

**manifest.py**

```python
{
    "name": "Upgrade Script",
    "summary": "Run pre and post upgrade actions.",
    "author": "Mint System GmbH, Odoo Community Association (OCA)",
    "website": "https://www.mint-system.ch",
    "category": "Technical",
    "version": "14.0.1.0.0",
    "license": "AGPL-3",
    "depends": ["base"],
    "installable": True,
    "auto_install": False,
    "application": False,
}
```

\***\*init**.py\*\*

```python
# empty
```

### upgrade branch (17.0)

**manifest.py**

```python
{
    "name": "Upgrade Script",
    "summary": "Run pre and post upgrade actions.",
    "author": "Mint System GmbH, Odoo Community Association (OCA)",
    "website": "https://www.mint-system.ch",
    "category": "Technical",
    "version": "15.0.1.0.0",
    "license": "AGPL-3",
    "depends": ["base"],
    "installable": True,
    "auto_install": False,
    "application": False,
}
```

\***\*init**.py\*\*

```
# empty
```

**upgrades/15.0.1.0.0/pre-10-init_upgrade.py**

```python
import logging

from odoo.upgrade import util

_logger = logging.getLogger(__name__)

def migrate(cr, version):
    util.remove_view(cr, "purchase_requisition.report_purchaserequisitions_document")
    util.delete_unused(cr, "product.list1")
```
