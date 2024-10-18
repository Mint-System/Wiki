---
lang: en
tags:
- Vorlagen
---
# Migrate Odoo Modules XX.0

States:

* **Blank**: Module migration is pending
* **Doing**: Migration is in progress
* **Skip**: Functional validation not possible
* **Review**: Review is requested
* **Pending**: PR needs to be updated or Module is ready to be initialized
* **Init**: The module is deployed and initialized in the upgrade environment
* **Missing**: The source of the module could be found
* **Deprecated**: This module must be removed before upgrade

| Module Name             | State | Comment                                              |
| ----------------------- | ----- | ---------------------------------------------------- |
| account_invoice_carrier | Init  | Mint System Module: Upgrade from Version 14.0 needed |
