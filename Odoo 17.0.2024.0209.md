---
tags:
  - Asset
---

# Odoo 17.0.2024.0209


```bash
ODOO_REVISION=17.0.2024.0209

# Checkout odoo repo
cd odoo && git checkout 5956786c346b63c92a191b008812376cb88e9cb6

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout 04e4ca7f0acd8d5309801230685880910b6f9bc5

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 4cdd1db20c021ebd369b46c739591def9732eec5

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
DIGEST=odoo@sha256:71867bbac71b87148822fabe5b6b6d4f057ba52abecfdb9828540f2cb7c986a9
docker pull "$DIGEST"
IMAGE_ID=$(docker image inspect "$DIGEST" --format "{{ .ID }}")

# Tag the docker image
docker tag ${IMAGE_ID:7:12} odoo:$ODOO_REVISION
```
