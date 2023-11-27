---
tags:
- Asset
---
# Odoo 15.3

Revision: 15.0.2022.0620

```bash
ODOO_REVISION=15.3

# Checkout odoo repo
cd odoo && git checkout 6c8008b2e9ba0e58b940d8f0e6ad7b13d6b8c9bd

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout b21475610f4cb81c901eb1ae6d6a1e8d0e271cbd

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout cf5300f70793ef2796d86fac456c7ecacaaf2ff0

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:40b49d7cad11ff5b765352db6572d62120ea2d007e76cb76ad9b12966f0f198e

# Tag the docker image
docker tag ade1ded6b4c8 odoo:$ODOO_REVISION
```
