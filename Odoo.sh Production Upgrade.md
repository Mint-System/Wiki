---
lang: en
tags:
- HowTo
---
# Odoo.sh Production Upgrade

## Prepare

Disable upgrade mode on `upgrade` branch
## Restore

Create a backup on `main` branch
## Upgrade

Enter upgrade mode on `main` branch.

Upgrade from Odoo `14.0` to `16.0`.

Merge `upgrade` branch into `main` branch once database upgrade is done.

## Configure

After the upgrade restore execute these steps:

* Install `sale_order_line_position`
* Remove `sale_order_line_pos`
* Upgrade `base`

Activate views (XML-ID, **name**):

* partner_type_order.partner_type_order, **partner_type_order.view_partner_form**

Update server actions:

Update snippets (XML-ID, **name**):

* studio_customization.odoo_studio_product__cd8b9256-5b26-49cb-a852-49f7836ea517, **Odoo Studio: product.template.product.form customization**

Remove views ((XML-ID, **name**):

* **mint_system.mrp_workorder.mrp_workorder_view_form_tablet.remove_button_action_continue**

Install snippets:

* account.view_move_form.x_sale_order_id

New fields:

* ir_model.account_move_line.x_sale_order_id

## Verify

Customer executes test cases.