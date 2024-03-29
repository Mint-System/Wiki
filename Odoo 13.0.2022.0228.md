---
tags:
- Asset
---
# Odoo 13.0.2022.0228

```bash
ODOO_REVISION=13.0.2022.0228
# Checkout enterprise repo
cd enterprise && git checkout 5f89ea34af741d159d30e41a12fa94db95234d2a

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout odoo repo
cd odoo && git checkout b84d9597df1be89ba418c7969a2cf8c632eb8316

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 17a711b1040eb0df7ffafcdf93e20484501dd9d1

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
DIGEST=odoo@sha256:9ea449cce3bbbb92bb8ec3568ecd501822d470ace07a264d4f68918256f4e6c3
docker pull "$DIGEST"
IMAGE_ID=$(docker image inspect "$DIGEST" --format "{{ .ID }}")

# Tag the docker image
docker tag ${IMAGE_ID:7:12} odoo:$ODOO_REVISION
```