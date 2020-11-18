# Odoo Shell

## Commands

Log into Docker Container.  
`docker exec -it odoo01 bin/bash`

Start Odoo Shell.  
```bash
DATABASE=odoo14
./odoo-bin shell -d $DATABASE --db_host $HOST -r $USER -w $PASSWORD
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