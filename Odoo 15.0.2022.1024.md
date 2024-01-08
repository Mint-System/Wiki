---
tags:
- Asset
---
# Odoo 15.0.2022.1024

```bash
ODOO_REVISION=15.0.2022.1024

# Checkout odoo repo
cd odoo && git checkout 1c6c6255dd0ff0ed5ed1275e18d1681664289e90

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout dfcdf2607181a106c2d89e1a62e61956ce9162cd

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout d9bb32b273bc6eeb4b1de44e5da41ad092bcc112

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:b46fd82879e17ed06391d44e69fb2a13f10ced4c9451e42a2ae49fae82bb11c5

# Tag the docker image
docker tag ade1ded6b4c8 odoo:$ODOO_REVISION
```
