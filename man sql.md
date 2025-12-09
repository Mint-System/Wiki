---
title: sql
kind: reference
section: dev
---

Constraints entfernen.\

```sql
ALTER TABLE public.product_template
DROP CONSTRAINT product_template_name_unique;
```

Aktive PostgreSQL Sessions anzeigen.\

```sql
SELECT * FROM pg_stat_activity;
```
