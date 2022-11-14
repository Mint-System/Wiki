# Odoo Upgrade from 14.0 to 15.0

## Prepare

Start a native Odoo instance with the [[Odoo Development]] environment.

* Define settings

```bash
DATABASE=odoo
FROM=14.0
TARGET=15.0
```

* Start local development environment

```bash
task checkout $TARGET
task start db,native
```

* Clear the local filestore and database

```bash
task drop-db $DATABASE
task clear-filestore $DATABASE
```

* Remove [[Incompatible Modules]] from remote

* Backup remote database to local folder and restore it

```bash
odoo-backup -d $DATABASE -o tmp/$DATABASE.zip ...
odoo-restore -r -f tmp/$DATABASE.zip
```

## Upgrade

* Stop the server, checkout target and clone the openupgrade scripts

```bash
git clone git@github.com:OCA/OpenUpgrade.git tmp/openupgrade
cd tmp/openupgrade && git checkout $TARGET && git pull && ../..
sed -i -r 's/(addons_path.*)/\1,tmp\/openupgrade/' config/odoo-native.conf
```

* Run the upgrade scripts

```bash
source task source
./odoo/odoo-bin -d $DATABASE --config config/odoo-native.conf --update=all --stop-after-init --load=base,web,openupgrade_framework
```

* Clear the assets, run the server and check the log

```bash
docker-odoo-clear-assets -c db -d $DATABASE
task start db,native
```

* If required migrate modules

* Update all modules

```
task update-module $DATABASE all
```

## Deploy

* Backup the new database

```bash
odoo-backup -d $DATABASE -o tmp/$DATABASE-$TARGET.zip
```

* Deploy the Odoo 15 instance

* Drop the current database, restore the new database and tail the server log

```bash
odoo-drop -d $DATABASE ...
odoo-restore -f tmp/$DATABASE-$TARGET.zip -r -d $DATABASE ...
```

* If required deploy new modules