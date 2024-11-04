---
lang: en
tags:
- HowTo
---
# Odoo.sh Test Upgrade

There is no official documentation on how a Odoo.sh database is upgraded. This note provides an overview:

* In the Odoo.sh repository create an upgrade branch (orphan)

The name of the branch should contain the Odoo version (as there might be multiple upgrade branches)

* In Odoo.sh project move the branch to the staging section
* In the upgrade tab activate the upgrade

Whenever a commit is done on this branch Odoo.sh will apply the upgrade scripts

* Add the git submodules to the repository
* Once all required Odoo modules are available test with customer
* If the feedback loop is closed merge the upgrade branch into the main branch
* Execute the upgrade
