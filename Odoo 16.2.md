---
tags:
- Asset
---

# Odoo 16.2

Revision: 16.0.2022.1226

```bash
ODOO_REVISION=16.2

# Checkout odoo repo
cd odoo && git checkout f0e8d30ac425241f42cbf7412b072502696d09c2

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout f6b02c035759a9364028b3bd2e248e864df950b6

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 1f0929f76d0a7daa17a1dc81e388d4d0b8010e47

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:3934899d8b1d4cc0ff058dca355eb6632e61f21d251e9bd325c67ec3dcd2ccb1

# Tag the docker image
docker tag b8138ed2d218 odoo:$ODOO_REVISION
```