---
tags:
  - Manpage
kind: howto
---
# Odoo SQL Scripts

Log into Odoo psql.

```bash
docker exec -it odoo17 bin/bash -c "psql postgresql://\$USER:\$PASSWORD@\$HOST/erp"
```

Disable online signature for quotes.

```sql
UPDATE public.res_company
	SET portal_confirmation_sign=False
	WHERE id=1;
```

Kill all sessions

```sql
SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '$DATABSE';
```

Remove a sale_order_line.

```sql
SELECT id,name FROM sale_order_line WHERE id=154;
DELETE FROM sale_order_line WHERE id=154;
```

Remove disabled views

```sql
SELECT id,name FROM ir_ui_view WHERE active='f';
ALTER TABLE ir_ui_view DISABLE TRIGGER ALL;
DELETE FROM ir_ui_view WHERE active='f';
ALTER TABLE ir_ui_view ENABLE TRIGGER ALL;
```

Remove SQL constraint.

```sql
ALTER TABLE google_shop 
  DROP google_shop_field_mapping_id_fkey;
```

Reset user password to `odoo`.

```sql
UPDATE res_users SET password='', password_crypt='$pbkdf2-sha512$25000$C8F47z3HmNP6P8f4P4ewFg$/Sf3kh7fks2MsoJGWotj/IJNiatILPyPrVlKc/rrVCX5y0bC/8fpCYvRKJE132YgJf1UJchqNHPS5fGt.b65qQ'
 WHERE login='admin';
```