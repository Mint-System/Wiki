---
tags:
- Definition
---
# Odoo Devleopment Guidelines

## Odoo Modules
### What is a Odoo module?

An Odoo module can be an Application, Extension, Connector or a Bridge.

- **Application**: Defines a new data model and business workflows.
- **Extension**: Add fields and hook into existing business flows.
- **Connector**: Connects a model to a thirdparty service.
- **Bridge**: Connects a business flow between two or more apps.

### **What is not a Odoo module?**

Heres is what a Odoo module should not do:

- **Configuration**: A module must not define Odoo configurations (of other modules).

Configuration is part of the Odoo environment and modules should work independent of the environment. Providing data to setup the initial state for the module itself is fine.

- **Business Data**: A module must not contain business data.

Except it is localization data or module configuration data. Having business specific data makes changes on that data more difficult to execute.

- **Automation**: A module must not automate manual actions without option.

Automation must always be opt-in. Process Automation only works if the underlying business process has been implemented properly.

### What to aim for when developing a module?

When developing a module aim for:

- **Standalone**: To Odoo a module is a system unit. Make sure that the mdoule works only with its dependencies installed.
- **Generic**: Modules should work in any Odoo environment and therefore don’t expect environment specific configurations for your module.
- **Decoupled**: Make sure to define the least possible amount of dependencies for your module and keep the overall dependency graph small.
- **Demo Data**: Provide demo data for testing and dev environments.
- **Tests**: Write tests for your module.
- **Docs**: Provide a documentation for the module. Only a few comments can be of help.