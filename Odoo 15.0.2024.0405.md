---
tags:
  - Asset
---

# Odoo 15.0.2024.0405

```bash
ODOO_REVISION=15.0.2024.0405

# Checkout odoo repo
cd odoo && git checkout e2a684018d7f92994aa5d30ded8f64703254f0fb

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout 8638ccc9cc26b997caee852e266b7ecc6f7c632a

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 7f2414c9bf2495895d0e384d74accc04479c9d30

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
DIGEST=odoo@sha256:8d387526d7b3bdb0a43841a3daffdc74f0cb705c1734fb5bc31851b055faeff6
docker pull "$DIGEST"
IMAGE_ID=$(docker image inspect "$DIGEST" --format "{{ .ID }}")

# Tag the docker image
docker tag ${IMAGE_ID:7:12} odoo:$ODOO_REVISION
```