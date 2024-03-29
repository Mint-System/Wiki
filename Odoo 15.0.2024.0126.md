---
tags:
  - Asset
---

# Odoo 15.0.2024.0126

```bash
ODOO_REVISION=15.0.2024.0126

# Checkout odoo repo
cd odoo && git checkout 8032eef38399e540e289ec8a6a4bf83858f87061

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout e9be46ac4b71ffc2d7814fbe6ce0979372207884

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 97b0d12cda45f7dba2b7316b4ae24fdc37902d6f

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
DIGEST=odoo@sha256:81ce93ac3a2d7c24f1818eaa351ead1a2180cb48ebbf7f428ff340de3d7e7240
docker pull "$DIGEST"
IMAGE_ID=$(docker image inspect "$DIGEST" --format "{{ .ID }}")

# Tag the docker image
docker tag ${IMAGE_ID:7:12} odoo:$ODOO_REVISION
```
