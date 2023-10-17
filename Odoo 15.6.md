---
tags:
- Asset
---
# Odoo 15.6

Version: 15.0\
Revision: 15.0.2023.1012

```bash
ODOO_REVISION=15.6

# Checkout odoo repo
cd odoo && git checkout 6a47980364e4ceeb5a77b4f7e2f2a9475872275e

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout 5e94fb66019821e077c970670b4572d0523547f4

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout a26fec876148133195071ed9f94961f6bbb4b5a7

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
DIGEST=odoo@sha256:0478a0f3ee305515067afbc234b00e8602f2e990ff36ab07855da4d7bfd9955c
docker pull "$DIGEST"
IMAGE_ID=$(docker image inspect "$DIGEST" --format "{{ .ID }}")

# Tag the docker image
docker tag ${IMAGE_ID:7:12} odoo:$ODOO_REVISION
```
