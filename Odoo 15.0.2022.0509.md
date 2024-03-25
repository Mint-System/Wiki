---
tags:
- Asset
---
# Odoo 15.0.2022.0509

```bash
ODOO_REVISION=15.0.2022.0509

# Checkout enterprise repo
cd enterprise && git checkout 45a59f9b335c85eaec4ba7d06f88fd2ababb0a4f

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout odoo repo
cd odoo && git checkout 5553f551d5627a53d3881dba80fcc96f0c9ffb4d

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout f403f252bc709d8ec76312eb6e7ff75ff30aad11

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:485313b5cc47c3b1c1212b68b4275b1324b908df03ac6d0b3b8f833b611b7d8f

# Tag the docker image
docker tag c7a469d18da9 odoo:$ODOO_REVISION
```