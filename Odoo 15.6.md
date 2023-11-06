---
tags:
- Asset
---
# Odoo 15.6

Version: 15.0\
Revision: 15.0.2023.1101

```bash
ODOO_REVISION=15.6

# Checkout odoo repo
cd odoo && git checkout 5fb9825384895fd303bd15c3e4f8dbc55d35904f

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout 6d672fdd82e1f3a565112400d8923ae1994a7889

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 820561e5925e18cf8e82d19596842fc579a12eb9

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
DIGEST=odoo@sha256:5914c7794e2b287d274c65b25a96bdebf396b591e436b15958bd7f6bd29905b4
docker pull "$DIGEST"
IMAGE_ID=$(docker image inspect "$DIGEST" --format "{{ .ID }}")

# Tag the docker image
docker tag ${IMAGE_ID:7:12} odoo:$ODOO_REVISION
```
