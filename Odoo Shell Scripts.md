# Odoo Shell

## Basics

List all fields

```python
record = env['res.config.settings'].browse(1)
for field in record.fields_get():
    print(field)
```

List all products

```python
	for product in env['product.template'].search([]):
		print(product.name)
```

## Commands

Log into Docker Container.  
```
CONTAINER=odoo04
docker exec -it $CONTAINER bin/bash
```

Start Odoo Shell.  
```bash
DATABASE=odoo14
odoo shell -d $DATABASE --db_host $HOST -r $USER -w $PASSWORD
```

Clear assets.  
```python
domain = [('res_model', '=', 'ir.ui.view'), ('name', 'like', 'assets_')]
env['ir.attachment'].search(domain).unlink()
env.cr.commit()
```

Uninstall app.
```python
env['ir.module.module'].search([('name', '=', 'certificate_planer')]).button_immediate_uninstall()
```

List all inactive users.
```python
users=self.env['res.users'].search([('active', '=', False)])
for user in users:
	print(user.name, user.login, user.active)
```

Enable user.
```python
user = self.env['res.users'].search([('active', '=', False),('login', '=', 'janik.vonrotz@mint-system.ch')])
user.active = True
self.env.cr.commit()
```

Disable mail server

```python
record = env['res.config.settings'].browse(1)
print(record.external_email_server_default)
record.external_email_server_default = False
env.cr.commit()
```

List all quality alerts.
```python
alerts=self.env['quality.alert'].search([])
for alert in alerts:
	print(alert.id, alert.name, alert.title)
```

Set name of alert.
```python
record = env['quality.alert'].browse(57)
record.name = "QA0005X"
env.cr.commit()
```

Remove view.
```python
self.env['ir.ui.view'].browse(888).unlink()
env.cr.commit()
```

Get sale order info.
```
sale_order = self.env['sale.order'].browse(60)
sale_order.procurement_group_id.stock_move_ids.created_production_id.procurement_group_id.mrp_production_ids
```