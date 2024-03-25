---
tags:
- Asset
---
# Odoo 14.0.2023.0327

```bash
ODOO_REVISION=14.0.2023.0327

# Checkout odoo repo
cd odoo && git checkout ace8da2ad493b30e6f57c74a0bf665b237b1a5de

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout aa7b5d1c5cb637a43932f4d08dfd564facb951f9

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout d130f5861821e9be2d2b82f72553825e93fbb2c5

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:a27b2c82c63866aa9d57bc844b5bab53a1ff2dc85e275cda7bb61257044e9c92

# Tag the docker image
docker tag 53b699a64cda odoo:$ODOO_REVISION
```