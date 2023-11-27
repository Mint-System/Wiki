---
tags:
- Asset
---
# Odoo 14.10

Revision: 14.0.2022.0912

```bash
ODOO_REVISION=14.10

# Checkout odoo repo
cd odoo && git checkout 522b744aa0f3f5047ce906fbabe6eab693714871

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout 3c0bdc587d2b6f55e0808dedcbd0be8b1da36d8c

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout f2f117e9b659b6dba99eee456f4a17f730afc930

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:32e5ce2fce6f7d956733c2009bac044ecb8f8c4beb3c548da482a930a5fed25e

# Tag the docker image
docker tag 70b3ef89255a odoo:$ODOO_REVISION
```