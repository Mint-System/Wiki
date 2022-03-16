# Odoo Upgrade from 13.0 to 14.0

## Run Upgrade

::: tip
The main challenge of the upgrade process is having the filestore at the right location.
:::

**Test**

Steps to upgrade a databse.

* Set env vars

```bash
export PGHOST=localhost
export PGUSER=odoo
export PGPASSWORD=odoo
export DATABASE=erp
alias odoo-upgrade="python <(curl -s https://upgrade.odoo.com/upgrade)"
```

* Start local development environment

```bash
task start db,native
```

* Clear the local filestore and database

```bash
task drop-db erp
task clear-filestore erp
```

* Export remote database to local folder and restore it

```bash
odoo-backup -d $DATABASE ...
odoo-restore -f ...
```

* Run the upgrade script, options are `test` and `production`

```bash
odoo-upgrade production -d $DATABASE -t 14.0
```

It should automatically restore the database.

* Switch local development environment to targeted version

```bash
task checkout 14.0
task start db,native
```

* Open <http://localhost:8069/web/database/manager> to get the new db name
* Test and remove unsupported modules

```bash
export DATABASE=erp_backup_2021_11_10_18_16
task remove-module $DATABASE web_diagram
task remove-module $DATABASE auth_oauth_multi_token
```

* Check custom modules

```
task odoo-cloc $DATABASE
```

* Export database

```
odoo-backup -d $DATABASE -o tmp/.../erp-14.0.zip
```

* Upload database to test environment

```
odoo-restore -d erp-dev -f tmp/.../erp-14.0.zip -r -h https://erp-dev...
```

**Production**

Execute the same steps as for *Tests* except for these changes:

`odoo-upgrade production -d $DATABASE -t 14.0`

* Upload database to production environment

In addition you must:
* Reconnect the [[Odoo Subscription]]

## Test after upgrade

Check the following Odoo features:
* Accounting QR-Code
* Dashboards
* Accounting Reconciliation
* Project Invoicing

If necessary update all modules: `docker-odoo-update -c odooN -d $DATABASE`

Make at least sure to upgrade localization apps such as `l10n_ch`.

## Troubleshooting

### Assets not loaded

After the upgrade the filestore assets are not available.

```bash
FileNotFoundError: [Errno 2] No such file or directory: '/var/lib/odoo/filestore/erp/93/93132f7c7b7174981e27eeea893a1b5f860df9de'
```

**Resolution**

Check filestore `root@server:/mnt/server-disk2/docker/volumes/odooN/_data/filestore`

### Modules missing

Remove specific modules that are not supported.

```bash
task remove-module erp_test_14.0_2021_04_27_09_02 auth_oauth_multi_token
task remove-module erp_test_14.0_2021_04_27_09_02 web_company_color
```

### Connection lost

If the connection is lost during the upgrade process, the database won't be restored.

**Resolution**

```
export TOKEN=PcLKAKFELD15Eel56EbhbSwEHa9DCKTjLsoTCDZeBxgrzVb1DfW8of_Jcw
odoo-upgrade status -t $TOKEN
odoo-upgrade restore -d erp -r erp-14.0 -t $TOKEN
odoo-upgrade log -t $TOKEN
```

### Studio customizations missing

After the restore the console show this error:

```
Some dependencies may be missing: ['studio_customization']
```

**Resolution**

Manually export the customizations.

### Prognostizierter Bestand ist nicht aktualisiert

Der Bericht Prognostizierter Bestand ist nicht aktuell.

**Resolution**

Install `stock_enterprise`.

### Filters are missing

After an upgrade Odoo-Filters are missing.

**Resolution**

Check *Dev Tool > Manage Filters* and remove the *My filters* filter. See if the filter still exists. If yes, create a new filter and copy the *Domain* value.

### Project overview error

The profability overivew of a project cannot be opened as the following error occurs:

```
KeyError: 'expense_amount_untaxed_to_invoice'

Error to render compiling AST
KeyError: 'expense_amount_untaxed_to_invoice'
Template: unknown
Path: /qweb/div/div/div/div/div[1]/div[3]/div[2]/div/table/tbody/tr[7]
Node: <tr t-if="display_cost &amp; (dashboard['profit']['expense_amount_untaxed_to_invoice'] != 0)">
                                                    <td class="o_timesheet_plan_dashboard_cell">
                                                        <t t-esc="dashboard['profit']['expense_amount_untaxed_to_invoice']" t-options="{&quot;widget&quot;: &quot;monetary&quot;, &quot;display_currency&quot;: currency}"/>
                                                    </td>
                                                    <td title="Costs from expenses that still need to be reinvoiced to your customer (provided that the Analytic Account of the Project was set on the Expense).">
                                                        To re-invoice costs
                                                    </td>
                                                </tr>
                                                
```

**Resolution**

Update the `sale_timesheet` module.