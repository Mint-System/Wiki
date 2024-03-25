---
tags:
- Asset
---

# Odoo 16.0.2022.1017

```bash
ODOO_REVISION=16.0.2022.1017

# Checkout odoo repo
cd odoo && git checkout 4218428bd03e4427aa17cefc4724d46d9079c6df

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout 5e55219e4a97f9c5a8a953e54422daefb9cfc385

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 7d193e0560a71b200409e1b71c58b3af84dc3aff

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:b0eb4010bef8bfab2e430755f62504c4f4b1d97da377411a5dfc07a276737aa5

# Tag the docker image
docker tag b8138ed2d218 odoo:$ODOO_REVISION
```