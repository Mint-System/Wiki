---
tags:
  - Asset
---

# Odoo 16.0.2024.0405

```bash
ODOO_REVISION=16.0.2024.0405

# Checkout odoo repo
cd odoo && git checkout 391a427620b6aec690481fe7c7d0b0326b95ee8c

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout 47cc8bbed4f326d2eff14f072f62259a82a12d08

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 1d0f0fc2caacd7f69b303fea6f5f0630db377f4b

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
DIGEST=odoo@sha256:sha256:12779b212405571c41b5a87dcf898730f4d26c4497e9b234efaf367cdb2a5dd7
docker pull "$DIGEST"
IMAGE_ID=$(docker image inspect "$DIGEST" --format "{{ .ID }}")

# Tag the docker image
docker tag ${IMAGE_ID:7:12} odoo:$ODOO_REVISION
```
