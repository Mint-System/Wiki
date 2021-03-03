# Odoo SQL Scripts

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