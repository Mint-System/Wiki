---
tags:
- Asset
---
# Odoo 14.13

Version: 14.0\
Revision: 14.0.2023.1106

```bash
ODOO_REVISION=14.6

# Checkout odoo repo
cd odoo && git checkout 4c8d544c8c50bbc1ff646edcc4b130c0ccf0ef91

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout e29f36a71e7e462c8b16d2d87063e9419a6b74af

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout xxx

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
DIGEST=odoo@sha256:6a10fa60b29b7a27adcd138957e0df7190345552
docker pull "$DIGEST"
IMAGE_ID=$(docker image inspect "$DIGEST" --format "{{ .ID }}")

# Tag the docker image
docker tag ${IMAGE_ID:7:12} odoo:$ODOO_REVISION
```