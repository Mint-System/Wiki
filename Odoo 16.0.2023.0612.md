---
tags:
- Asset
---

# Odoo 16.0.2023.0612

```bash
ODOO_REVISION=16.0.2023.0612

# Checkout odoo repo
cd odoo && git checkout 999451e6ea0b2b1591a3644725b5313c6e062b39

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout b4fa384f45dfd86e6796990d522a0fe8689a2d98

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout f4d818e772c50fd557d30221e05a72ac891b7636

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:df0276cdb0ff8bb7883058071daf898d90fdbf13045ae96d131584660878da84

# Tag the docker image
docker tag 7751cf537987 odoo:$ODOO_REVISION
```