# Upgrade from 13.0 to 14.0

## Native Production

* Define settings

```bash
DATABASE=odoo
FROM=13.0
TARGET=14.0
```

* Start local development environment

```bash
task checkout $FROM

# with docker
task start

# or native
task start db,native
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
odoo-backup -d $DATABASE -o tmp/$DATABASE.zip ...

# with docker
docker-odoo-restore -r -f tmp/$DATABASE.zip

# or native
odoo-restore -r -f tmp/$DATABASE.zip
```

* Stop the server, checkout target and clone the openupgrade scripts

```bash
task checkout $TARGET

git clone git@github.com:OCA/OpenUpgrade.git tmp/openupgrade
cd tmp/openupgrade && git checkout $TARGET && git pull && ../..

echo "\ntmp/openupgrade" >> config/addons_path && task update-config
```

* Run the upgrade scripts

```bash
# WIP: with docker
docker exec odoo odoo-bin -d $DATABASE --config /etc/odoo/odoo.conf --update=all --stop-after-init --load=base,web,openupgrade_framework

# or native
source task source
./odoo/odoo-bin -d $DATABASE --config config/odoo-native.conf --update=all --stop-after-init --load=base,web,openupgrade_framework 
```

* Clear the assets, run the server and check the log

```
docker-odoo-clear-assets -c db -d $DATABASE
task start db,native
```

* Remove unsupported modules

```bash
# WIP: with docker

# or native
task remove-module $DATABASE web_diagram
task remove-module $DATABASE auth_oauth_multi_token
task remove-module $DATABASE account_edi_facturx
```

* Remove unsupported views

```bash
task start-shell $DATABASE
```

See [[Odoo Shell Scripts]] for details

* Update all modules

```
# WIP: with docker

# or native
task update-module $DATABASE all
```

* Backup the new database

```bash
odoo-backup -d $DATABASE -o tmp/$DATABASE-$TARGET.zip
```

* Deploy the Odoo 14 instance
* Drop the current database, restore the new dabase and tail the server log

```bash
odoo-drop -d $DATABASE ...
odoo-restore -f tmp/$DATABASE-$TARGET.zip -r -d $DATABASE ...
```

## Troubleshooting

### Style error

**Problem**

After restoring the database, the assets cannot be loaded.

```
Style error

The style compilation failed, see the error below. Your recent actions may be the cause, please try reverting the changes you made.

Could not get content for /web_responsive/static/src/css/search_view_mobile.scss defined in bundle 'web.assets_backend'.
Could not get content for /web_responsive/static/src/css/kanban_view_mobile.scss defined in bundle 'web.assets_backend'.
Error: no mixin named o-search-options-dropdown-custom-item
        on line 18239 of /stdin
>>             @include o-search-options-dropdown-custom-item;

   ---------------------^
This error occured while compiling the bundle 'web.assets_backend' containing:
    - /web/static/lib/bootstrap/scss/_functions.scss
    - /web/static/lib/bootstrap/scss/_mixins.scss
    - /web/static/src/scss/bs_mixins_overrides.scss
```

**Solution**

Make sure the same version of `web_responsive` is deployed as locally.

### footer canot be located in parent view

**Problem**

When updating all modules.

```
2021-11-29 08:32:44,937 45730 INFO mint-system odoo.addons.base.models.ir_ui_view: Element '<footer>' cannot be located in parent view

View name: res.users.preferences.form.inherit
Error context:
 view: ir.ui.view(1271,)
 xmlid: res_users_view_form_simple_modif
 view.model: res.users
 view.parent: ir.ui.view(1269,)
 file: /home/janikvonrotz/Odoo-Development/odoo/addons/hr/views/res_users.xml

odoo.tools.convert.ParseError: while parsing /home/janikvonrotz/Odoo-Development/odoo/addons/hr/views/res_users.xml:9, near
<record id="res_users_view_form_simple_modif" model="ir.ui.view">
            <field name="name">res.users.preferences.form.simplified.inherit</field>
            <field name="model">res.users</field>
            <field name="inherit_id" ref="base.view_users_form_simple_modif"/>
            <field name="mode">primary</field>
            <field name="arch" type="xml">
                <data><footer position="replace"/>
                <h1 position="replace"/>
                <xpath expr="//field[@name='image_1920']" position="replace"/>
                <xpath expr="//field[@name='company_id']" position="attributes">
                    <attribute name="invisible">1</attribute>
                </xpath>
            </data></field>
        </record>
```

**Solution**

Remove the problematic edit `<footer position="replace"/>` temporarily.
