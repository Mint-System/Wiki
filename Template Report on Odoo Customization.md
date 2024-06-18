---
lang: en
tags:
- Templates
---

# Template Report on Odoo Customization
Author: [[Janik von Rotz]]\
Date: YYYY-MM-DD

The report is for the Odoo project <https://example.com>.

## Metrics

Collection of various metrics about the Odoo project.

### Lines of Code

Running `odoo-bin cloc` on the shell.

**Result**

**Comment**

### Managed Modules

Check if the custom modules follow some good practice and if the version is tracked.

**Result**

**Comment**

### Custom  Fields

Lookup field names that start with `x_studio` and are of type base fields.

**Result**

**Comment**

### Custom Views

Lookup view names that start with `studio_customization` or `Odoo Studio`.

**Result**

**Comment**

### Quality of Edits

Checking the quality of XPath edits in the custom views.

**Result**

**Comment**

## Summary

Each metric is rated by problematic, bad, good or excellent.

| Metric           | State       | Comment |
| ---------------- | ----------- | ------- |
| Lines of Code    | good        |         |
| Managed Modules  | bad         |         |
| Custom Fieds     | problematic |         |
| Custom Views     | problematic |         |
| Quality of Edits | bad         |         |

The customization done with Odoo Studio are problematic. The key question is who is taking responsibility of the edits during an Odoo upgrade.