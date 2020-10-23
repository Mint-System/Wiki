# Odoo Development Environment

[[Odoo Shell]]  
[[Odoo Scripts]]
[[Odoo Revisions]]

## Recipies

### Extend database expiration

Navigate to *Settings > Technical > System Parameters* and update the expiration date for the database.

### Uninstall apps from the command line

Inside the docker container run this command to uninstall the web_enterprise module for database odoo:

`"self.env['ir.module.module'].search([('name', '=', 'web_enterprise')]).button_immediate_uninstall()" | 
odoo shell -d odoo --db_host=$HOST -r $USER -w $PASSWORD`

### Enable/disable Odoo Enterprise

**Enable**

Download Odoo enterprise source code from https://www.odoo.com/de_DE/page/download.

Unzip the archive and extract the odoo/addons/web_enterprise folder.

Copy this folder to the remote machine.

Login into the Odoo docker container.

`docker exec -it odoo01 /bin/bash`

Then install the web_enterprise module.

```
MODULE=web_enterprise
DATABASE=erp
odoo -i $MODULE -c /etc/odoo/odoo.conf -d $DATABASE --db_host $HOST -r $USER -w $PASSWORD --stop-after-init
```

Restart the Odoo container: `docker restart odoo01`

If the following line appears the installation has been successful:

`INFO erp odoo.modules.registry: module web_enterprise: creating or updating database tables`

**Disable**

Uninstall the web_enterprise module.

### Hide brand promotion message

In developer mode open the views overview via settings. Search for web.brand_promotion_message, open it and click on edit.

Comment the code that is showing the brand promotion message.

![[Odoo Brand Promotion Message.png]]

Note: This change will be lost, once the view is updated.

### Odoo Migration

See the [[Odoo Migration - Worklog]]

### Datenbankmanager deaktivieren

Der Datenbankmanager kann nach Bedarf deaktiviert werden. Möchte man beispielsweise eine Odoo Installation für mehrere Kunden bereitstellen und vermeiden, dass diese die Datenbank des jeweils anderen im Login-Fenster sehen, kann man die Auflistung der Datenbank deaktivieren.

Dazu muss in der `odoo.conf` Datei der foglende Eintrag gemacht werden: `list_db = False`

Ist diese Option eingeschaltet, kann eine Datenbank-Auswahl nur noch über Url erfolgten. Beispielsweise ruft der folgende Link die Odoo Login-Maske auf (sofern ausgeloggt) und selektiert die Datebank "Test": https://odoo.example.com/web/?db=Test. Ist der Datenbankmanager deaktiviert, sieht der Benutzer nur das Benutzername- und Passwortfeld.

### Install apps from the commandline

Assuming that the development environment is up and running, proceed as followed.

Ensure that your module is available in the Odoo addon paths: `/usr/lib/python3/dist-packages/odoo/addons/ and /mnt/extra-addons`.

Access the host machine and set environment variables.

```
MODULES=web_mobile,mail_enterprise,account_accountant
DATABASE=erp
CONTAINER=odoo01
```

Inall the modules with this command:

`docker exec -it $CONTAINER bin/bash -c "odoo -i $MODULES -c /etc/odoo/odoo.conf -d $DATABASE --db_host \$HOST -r \$USER -w \$PASSWORD --stop-after-init" && docker restart $CONTAINER`

## Regenerate assets from psql

Log into database with psql:

```bash
psql postgres://$USER:$PASSWORD@$HOST/$DATABASE
```

Run this query for the database:

```sql
select id,name from ir_attachment where res_model='ir.ui.view' and name like '%assets_%';

delete from ir_attachment where res_model='ir.ui.view' and name like %assets_%;
```