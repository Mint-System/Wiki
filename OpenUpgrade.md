# OpenUpgrade

A step by step guide to upgrade an [[Odoo Community Edition]]

## Upgrade from 13.0 to 14.0

* Start local development environment

```bash
task start db
task start src
```

* Clear the local filestore and database

```bash
task drop-db mint-system
task clear-filestore mint-system
```

* Export remote database to local folder and restore it

```bash
odoo-backup ...
odoo-restore ...
```

* Install openupgrade dependencies

```bash

. ./scripts/lib
locale
activate-venv
pip install git+https://github.com/OCA/openupgradelib.git@master#egg=openupgradelib
```

* Install openupgrade scripts

```
task install-module mint-system openupgrade_scripts
```

* Run the openupgrade scripts

```
odoo-bin -d mint-system --config 'config/odoo-src.conf' --update=all --stop-after-init --load=base,web,openupgrade_framework 
```

* Restart the development server
