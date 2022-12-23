---
tags:
- Vorlagen
---
# Odoo XX.0 Upgrade

Author: [[Janik von Rotz]]

## Prepare

Make preparations for the Odoo upgrade.

### Remove modules

Remove unsupported modules.

## Upgrade

Run the upgrade scripts.

### Execute test upgrade

HowTo: <https://wiki.mint-system.ch/odoo-upgrade-from-14.0-to-15.0.html>

```bash
export MODE=test
export PGHOST=localhost
export PGUSER=odoo
export PGPASSWORD=odoo
export DATABASE=odoo
alias odoo-upgrade="python <(curl -s https://upgrade.odoo.com/upgrade)"
```

### Reinstall modules

Reinstall specific modules.

### Reset views

Reset selected views.

## Configure

Make new Odoo configurations.

### Make settings

Activate options in the settings page.

### Update snippets

Update selected snippets.

## Test

Test the upgraded system.

### Run test cases

Run these test cases.

## Troubleshooting

Document problems and solutions.