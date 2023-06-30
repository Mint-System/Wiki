---
tags:
- HowTo
---
# Odoo Upgrade from 13.0 to 16.0

## Prepare

Set env vars.

```bash
export ODOO_CURRENT_VERSION=13.0
export ODOO_TARGET_VERSION=16.0
export MODE=test
export PGHOST=localhost
export PGUSER=odoo
export PGPASSWORD=odoo
export DATABASE=erp
export NEW_DATABASE=${DATABASE}_${ODOO_TARGET_VERSION}
export COMPANY=mint-system
alias odoo-upgrade="python <(curl -s https://upgrade.odoo.com/upgrade)"
```

Download the database.

```bash
odoo-backup -d $DATABASE -o tmp/$COMPANY/$DATABASE.zip ...
```

Checkout current Odoo environment.

```bash
task checkout $ODOO_CURRENT_VERSION
```

Install python packages.

Start local development environment.

```bash
task start db,native
```

## Restore

Clear filestore and restore database.

```bash
task clear-filestore $DATABASE
odoo-restore -f tmp/$COMPANY/$DATABASE.zip
```

Login and check the Odoo log.

Remove [[Unsupported Modules]].

## Upgrade

Run the upgrade scripts.

```bash
odoo-upgrade $MODE -d $DATABASE -t $ODOO_TARGET_VERSION -r $NEW_DATABASE
```

Checkout target Odoo environment.

```bash
task checkout $ODOO_TARGET_VERSION
```

Clear the assets and start the server.

```bash
task clear-assets $DATABASE
task start native
```

Login and check the Odoo log.

Check the Upgrade report.

## Configure

Migrate custom modules.

Reinstall modules.

Install new modules.

Reset selected views.

Make new Odoo configurations.

Activate options in the settings page.

Update selected snippets.

## Verify

Test the upgraded system.

Run these test cases.

Note regressions.

## Deploy

Export the new database.

```bash
odoo-backup -d $NEW_DATABASE -o tmp/$COMPANY/$NEW_DATABASE.zip
```

Deploy the upgraded database.

Copy filestore from backup.

## Troubleshooting

### Missing attribute get_deals_offers

**Problem**

```
Error while render the template
AttributeError: 'website' object has no attribute 'get_deals_offers'
Template: 422
Path: /t/t/div[2]/section[1]/t[2]
Node: <t t-foreach="website_offers" t-as="offers"/>
```

**Lösung**

Vorlage zurücksetzen auf Ausgangsversion.

### Missing website_search_box_input

**Problem**

```
Error while render the template
AttributeError: 'Request' object has no attribute '_context'
Template: website.website_search_box_input
Path: /t/form/t[1]/div/div/input[1]
Node: <input type="hidden" id="search_start_limit" name="start_limit" t-att-value="elastic_set_id.get(\'start_limit\')" data-oe-model="ir.ui.view" data-oe-id="1671" data-oe-field="arch" data-oe-xpath="/data/xpath/div/input[1]"/>
```

**Lösung**

Vorlage zurücksetzen auf Ausgangsversion.

### viewFieldsInfo is undefined

**Problem**

```
Uncaught Promise > viewFieldsInfo is undefined
```

**Lösung**

```
docker-odoo-clear-assets -c odoo33 -d odoo4
```