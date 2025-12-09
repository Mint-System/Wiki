---
lang: en
section: template
kind:
  - reference
---
---
project: Project XY
---


# Migrate modules to Odoo XX.0

States:

- **Migrate**: Module migration is pending
- **Doing**: Migration is in progress
- **Review**: Review is requested
- **Init**: Module is ready to be initialized
- **Done**: The module is deployed and installed in the upgrade environment
- **Skip**: Functional validation not possible
- **Missing**: The source of the module could be found
- **Deprecated**: This module must be removed before upgrade

| Module Name               | Provider   | State | Comment |
| ------------------------- | ---------- | ----- | ------- |
| account_invoice_timesheet | Thirdparty |       |         |
| auditlog                  | OCA        |       |         |
