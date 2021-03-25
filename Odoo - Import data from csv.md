# Odoo: Import data from csv

There are few ways using which we can load demo data from csv file.
1) load it using post_init_hook, where you read the lines from CSV file and insert the data directly into related table. You can get the idea from here, https://github.com/odoo/enterprise/blob/14.0/product_unspsc/hooks.py#L19 and mention it in __manifest__.py like https://github.com/odoo/enterprise/blob/14.0/product_unspsc/__manifest__.py#L15
2) the best way: define the records in CSV file with externalIDs and mention them in __manifest__.py in "data" element over there. See for example, https://github.com/odoo/odoo/blob/14.0/addons/l10n_generic_coa/data/account.account.template.csv
And mention it like, https://github.com/odoo/odoo/blob/14.0/addons/l10n_generic_coa/__manifest__.py#L19

FYI, if you already have these data configured in some databases, you can use Odoo's export feature and export them with "import-compatible export" option(see attached screenshot) checked. This will automatically generate externalIDs for the exported records.