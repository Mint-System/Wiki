---
tags:
  - Definition
lang: en
---
# Odoo Build

Website: <https://odoo.build>\
Repository: <https://github.com/Mint-System/Odoo-Development>

Domains:

- odoo.build
- odoo-build.ch
- doo-build.org
- odoo-build.com

## HowTos

Related:

* [[Update custom Odoo module]]
* [[Odoo - Import data from csv]]
* [[Odoo - Migrate an OCA module]]
* [[Develope an Odoo module]]
* [[Odoo Build Troubleshooting]]

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

```python
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

### Odoo Transfer

See the [[Odoo Transfer - Worklog]]

### Datenbankmanager deaktivieren

Der Datenbankmanager kann nach Bedarf deaktiviert werden. Möchte man beispielsweise eine Odoo Installation für mehrere Kunden bereitstellen und vermeiden, dass diese die Datenbank des jeweils anderen im Login-Fenster sehen, kann man die Auflistung der Datenbank deaktivieren.

Dazu muss in der `odoo.conf` Datei der foglende Eintrag gemacht werden: `list_db = False`

Ist diese Option eingeschaltet, kann eine Datenbank-Auswahl nur noch über Url erfolgten. Beispielsweise ruft der folgende Link die Odoo Login-Maske auf (sofern ausgeloggt) und selektiert die Datebank "Test": https://odoo.example.com/web/?db=Test. Ist der Datenbankmanager deaktiviert, sieht der Benutzer nur das Benutzername- und Passwortfeld.
