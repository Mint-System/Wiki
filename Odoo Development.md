---
tags:
- Definition
---
# Odoo Development

See [[Odoo Build]].

## HowTos

Related:
* [[Update custom Odoo module]]
* [[Odoo - Import data from csv]]
* [[Odoo - Migrate an OCA module]]

### Write xpath selectors

```xml
<!-- Attribute contains string(s) -->
<xpath expr="//div[contains(@class, 'oe_right oe_button_box')]" position="inside">...</xpath>

<!-- Last element -->
<xpath expr="//ul/li[last()]" position="after">...</xpath>
<xpath expr="//ul/li[@class='nav'][last()]" position="after">...</xpath>

<!-- First element -->
<xpath expr="//ul[1]]" position="after">...</xpath>

<!-- Last li of first ul -->
<xpath expr="//ul[1]/li[last()]]" position="after">...</xpath>
```

### Log message

Use the snippet below to log a message.

```py
import logging

logging.info(res)
```

### Translate Odoo apps

We use [[Transifex]] for automated translations. Manual translations are done directly in the .po file.

Translations are collected [[Odoo Translations|here]].

### Edit Odoo source in Docker container

Navigate to `/usr/lib/python3/dist-packages/odoo/addons/` and edit source files.

### Extend database expiration

Navigate to *Settings > Technical > System Parameters* and update the expiration date for the database.

### Odoo Migration

See the [[Odoo Migration - Worklog]]

### Datenbankmanager deaktivieren

Der Datenbankmanager kann nach Bedarf deaktiviert werden. Möchte man beispielsweise eine Odoo Installation für mehrere Kunden bereitstellen und vermeiden, dass diese die Datenbank des jeweils anderen im Login-Fenster sehen, kann man die Auflistung der Datenbank deaktivieren.

Dazu muss in der `odoo.conf` Datei der foglende Eintrag gemacht werden: `list_db = False`

Ist diese Option eingeschaltet, kann eine Datenbank-Auswahl nur noch über Url erfolgten. Beispielsweise ruft der folgende Link die Odoo Login-Maske auf (sofern ausgeloggt) und selektiert die Datebank "Test": https://odoo.example.com/web/?db=Test. Ist der Datenbankmanager deaktiviert, sieht der Benutzer nur das Benutzername- und Passwortfeld.

## Troubleshooting

### ERROR: relation "ir_module_module" does not exist

**Problem**

When initalizing a database this error occurs:

```
2021-10-28 06:40:29,512 134944 INFO ? odoo.modules.loading: init db
2021-10-28 06:40:30,394 134944 ERROR ? odoo.sql_db: bad query: UPDATE ir_module_module SET state='installed' WHERE state IN ('to remove', 'to upgrade')
ERROR: relation "ir_module_module" does not exist
LINE 1: UPDATE ir_module_module SET state='installed' WHERE state IN...
               ^

2021-10-28 06:40:30,394 134944 ERROR ? odoo.modules.registry: Failed to load registry
2021-10-28 06:40:30,394 134944 CRITICAL ? odoo.service.server: Failed to initialize database `odoo`.
Traceback (most recent call last):
  File "/home/janikvonrotz/Odoo-Development/odoo/odoo/modules/registry.py", line 89, in new
    odoo.modules.load_modules(registry._db, force_demo, status, update_module)
  File "/home/janikvonrotz/Odoo-Development/odoo/odoo/modules/loading.py", line 377, in load_modules
    odoo.modules.db.initialize(cr)
  File "/home/janikvonrotz/Odoo-Development/odoo/odoo/modules/db.py", line 57, in initialize
    info['website'], i, info['name'],
KeyError: 'name'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/home/janikvonrotz/Odoo-Development/odoo/odoo/service/server.py", line 1199, in preload_registries
    registry = Registry.new(dbname, update_module=update_module)
  File "/home/janikvonrotz/Odoo-Development/odoo/odoo/modules/registry.py", line 91, in new
    odoo.modules.reset_modules_state(db_name)
  File "/home/janikvonrotz/Odoo-Development/odoo/odoo/modules/loading.py", line 590, in reset_modules_state
    "UPDATE ir_module_module SET state='installed' WHERE state IN ('to remove', 'to upgrade')"
  File "<decorator-gen-3>", line 2, in execute
  File "/home/janikvonrotz/Odoo-Development/odoo/odoo/sql_db.py", line 101, in check
    return f(self, *args, **kwargs)
  File "/home/janikvonrotz/Odoo-Development/odoo/odoo/sql_db.py", line 298, in execute
    res = self._obj.execute(query, params)
psycopg2.ProgrammingError: relation "ir_module_module" does not exist
LINE 1: UPDATE ir_module_module SET state='installed' WHERE state IN...
               ^
```

**Workaround**

See the `init-db` function and switch the install strategy.

### sqlite3 module not found

**Problem**

```
ModuleNotFoundError: No module named '_sqlite3'
```

**Solution**

Install library and reinstall python.

```
sudo apt install libsqlite3-dev
pyenv install 3.7.2
```