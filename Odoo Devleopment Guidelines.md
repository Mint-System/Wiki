---
tags:
- Definition
---

# Odoo Devleopment Guidelines

## Odoo Modules
### What is a Odoo module?

An Odoo module can be an Application, Extension or a Bridge:

- **Application**: Defines a new data model and business workflows
- **Extension**: Add fields and hook into existing business flows
- **Bridge**: Connects a business flow between two or more apps

### **What is not a Odoo module?**

Heres is what a Odoo module should not do:

- **Configuration**: A module must not setup Odoo configurations

Configuration is part of the Odoo environment and modules should be independent of the environment.

- **Data**: A module must not contain business data

Except it is localization data. Having business specific data makes changes on that data more difficult to execute.

- **Automation**: A module must not automate manual actions without option

Automation must always be opt-in. Process Automation only works if the underlying business process has been implemented properly.