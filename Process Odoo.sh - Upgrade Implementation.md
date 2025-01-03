---
lang: en
tags:
  - Prozess
---

# Process Odoo.sh - Upgrade Implementation

## Setup upgrade branch

Follow these instruction to setup an upgrade branch in the Odoo.sh project

* Open the Odoo.sh project git repository in the terminal
* Create an upgrade branch (orphan) `git checkout --orphan -b XX.0`

The name of the branch should contain the Odoo version (as there might be multiple upgrade branches).

* In Odoo.sh project move the branch to the staging section
* In the upgrade tab activate the upgrade

Check if the upgrade runs without problems. Otherwise open a support ticket or create [[Odoo.sh Upgrade Scripts]].

Whenever a commit is done on this branch Odoo.sh will apply the upgrade scripts.

* Add the git submodules to the repository
* Once all required Odoo modules are available start testing with the customer
