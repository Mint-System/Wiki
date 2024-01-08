---
tags:
- Asset
---
# Odoo 15.0.2022.0321

```bash
ODOO_REVISION=15.0.2022.0321

# Checkout enterprise repo
cd enterprise && git checkout 790bfea68d370b77dca3a628503e197cc5db6511

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout odoo repo
cd odoo && git checkout e0b26496196bd4ee39fa06e1a3274982d2c7fb12

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 16bff642598cd595f386d3fb58d08a616c0db8f9

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:b0f192017179f7ddcba260f0a47bf146b509c4b561c551ef23c4f1ea9206f294

# Tag the docker image
docker tag 0e10f87fbc34 odoo:$ODOO_REVISION
```
