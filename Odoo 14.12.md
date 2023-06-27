---
tags:
- Asset
---
# Odoo 14.12

Version: 14.0\
Revision: 14.0.2023.0612

```bash
ODOO_REVISION=14.12

# Checkout odoo repo
cd odoo && git checkout 336565eccbb80f8841ebf9a1e4b295634519a3b8

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout 1b024643d63180ed22e2614aefff68159bdb8bdb

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout da21189bbb3a2256171206380b7b09b2dfd7923d

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:657019990b26a8c7c6db13a8667767b08e0e25f4a956bac637e55fb9faccc78f

# Tag the docker image
docker tag c9cf6e394d9d odoo:$ODOO_REVISION
```