# Odoo OpenUpgrade from 14.0 to 15.0

## Prepare

Set env vars.

```bash
export DATABASE=odoo
export COMPANY=mint-system
export ODOO_CURRENT_VERSION=14.0
export ODOO_TARGET_VERSION=15.0
```

Download the database.

```bash
odoo-backup -d $DATABASE -o tmp/$COMPANY/$DATABASE.zip ...
```

Checkout Odoo environment.

Start local development environment.

```bash
task checkout $ODOO_CURRENT_VERSION
task start db,native
```

## Restore

Clear filestore and restore database.

```bash
task drop-db $DATABASE
task clear-filestore $DATABASE
odoo-restore -f tmp/$COMPANY/$DATABASE.zip
```

Login and check the Odoo log.

Remove [[Unsupported Modules]].

## Upgrade

Checkout target Odoo environment.

```bash
task checkout $ODOO_TARGET_VERSION
```

Clone the OpenUpgrade scripts.

```bash
git clone git@github.com:OCA/OpenUpgrade.git tmp/openupgrade
cd tmp/openupgrade && git checkout $ODOO_TARGET_VERSION && git pull && ../..
sed -i -r 's/(addons_path.*)/\1,tmp\/openupgrade/' config/odoo-native.conf
```

Run the upgrade scripts.

```bash
source task source
./odoo/odoo-bin -d $DATABASE --config config/odoo-native.conf --update=all --stop-after-init --load=base,web,openupgrade_framework
```

Clear the assets and start the server.

```bash
task clear-assets $DATABASE
task start db,native
```

Login and check the Odoo log.

Update all modules.

```
task update-module $DATABASE all
```

## Configure

Migrate custom modules.

## Verify

Test the upgraded system.

## Deploy

Export the database.

```bash
odoo-backup -d $DATABASE -o tmp/$COMPANY/$DATABASE-$ODOO_TARGET_VERSION.zip
```

Deploy the upgraded database.

```bash
odoo-restore -f tmp/$COMPANY/$DATABASE-$ODOO_TARGET_VERSION.zip -d $DATABASE -r ...
```

## Troubleshooting

### UndefinedColumn

**Problem**

When starting the Odoo database the following error is thrown:

```bash
UndefinedColumn: column res_company.scss_modif_timestamp does not exist 
```

**Solution**

Update *Web Company Color*.

```bash
task install-module $DATABASE web_company_color
```
