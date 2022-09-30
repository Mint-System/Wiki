---
tags:
- Asset
---
# Odoo 14.9

```bash
ODOO_REVISION=14.9

# Checkout enterprise repo
cd enterprise && git checkout 106d842a00a70da2b2eca95e14aa289c2a823fde

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout odoo repo
cd odoo && git checkout 6d4d12d7c0a7db3a5d925b5cdf02daf29b24ac92

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 8972a46df8d50cf14306d0fbf7781feb263cd66b

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:2d00ef7811e4b9dc0910e25f0d84c502bd936eb807b27a4d3d5289d85917cb05

# Tag the docker image
docker tag e471ef753894 odoo:$ODOO_REVISION
```

## Bugs

### Timeline view on time off report

```
psycopg2.ProgrammingError: column hr_leave_report_calendar.duration does not exist
LINE 1: ...tetime", "hr_leave_report_calendar"."tz" as "tz", "hr_leave_...
```