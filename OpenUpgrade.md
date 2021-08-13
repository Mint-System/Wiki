# OpenUpgrade

Website:<https://oca.github.io/OpenUpgrade/>

A step by step guide to upgrade an [[Odoo Community Edition]] using [[Odoo Development]].

## Upgrade from 13.0 to 14.0

* Define settings

```bash
DATABASE=mint-system
FROM=13.0
TARGET=14.0
```

* Start local development environment

```bash
task checkout $FROM
# with docker
task start
# or native
task start db
task start native
```

* Clear the local filestore and database

```bash
# with docker
docker-odoo-drop $DATABASE
# or native
task drop-db $DATABASE
task clear-filestore $DATABASE
```

* Export remote database to local folder and restore it

```bash
odoo-backup ...
# with docker
docker-odoo-restore ...
# or native
odoo-restore ...
```

* Clone openupgrade and stop server

```bash
git clone git@github.com:OCA/OpenUpgrade.git oca/openupgrade
cd oca/openupgrade && git checkout $TARGET && ../..
echo "\noca/openupgrade" >> config/addons_path
task update-config
```

* Install openupgrade scripts

```bash
# with docker
docker-odoo-install -d $DATABASE -m openupgrade_scripts
# or native
task install-module $DATABASE openupgrade_scripts
```

* Run the openupgrade scripts

```bash
task checkout $TARGET
echo "\noca/openupgrade" >> config/addons_path
task update-config
# WIP: with docker
docker exec odoo odoo-bin -d $DATABASE --config /etc/odoo/odoo.conf --update=all --stop-after-init --load=base,web,openupgrade_framework 
# or native
odoo-bin -d $DATABASE --config config/odoo-native.conf --update=all --stop-after-init --load=base,web,openupgrade_framework 
```

* Remove unsupported modules

```bash
# with docker

# or native
task remove-module $DATABASE web_diagram
```

* Remove unsupported views

```bash
task start-shell $DATABASE
```

See [[Odoo Shell Scripts]].

* Clear assets and restart server

```bash
# with docker

# or native
task clear-assets $DATABASE
task start native
```
