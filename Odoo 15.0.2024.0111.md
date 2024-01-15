---
tags:
- Asset
---
# Odoo 15.0.2024.0111

```bash
ODOO_REVISION=15.0.2024.0111

# Checkout odoo repo
cd odoo && git checkout 02d5c04e85e0bc1b9c0edf66969066ba4f2d769c

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout 02d5c04e85e0bc1b9c0edf66969066ba4f2d769c

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 97b0d12cda45f7dba2b7316b4ae24fdc37902d6f

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
DIGEST=sha256:24d7463086e88729f4a978e622cb483048609d236ace6e2ee7e8feea31e27dbb
docker pull "$DIGEST"
IMAGE_ID=$(docker image inspect "$DIGEST" --format "{{ .ID }}")

# Tag the docker image
docker tag ${IMAGE_ID:7:12} odoo:$ODOO_REVISION
```
