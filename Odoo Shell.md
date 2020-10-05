# Odoo Shell

## Commands

Log into Docker Container.  
`docker exec -it odoo01 bin/bash`

Start Odoo Shell.  
`odoo shell -d $DATABASE --db_host $HOST -r $USER -w $PASSWORD`

Clear assets.  
```python
domain = [('res_model', '=', 'ir.ui.view'), ('name', 'like', 'assets_')]
env['ir.attachment'].search(domain).unlink()
env.cr.commit()
```