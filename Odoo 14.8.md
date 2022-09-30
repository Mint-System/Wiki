---
tags:
- Asset
---
# Odoo 14.8

```bash
ODOO_REVISION=14.8

# Checkout enterprise repo
cd enterprise && git checkout 4c32c8b7e5206b2106aace6987222c0458ddc86f

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout odoo repo
cd odoo && git checkout 1ff58be8f19becb3436348ed6b44fe69247cd057

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 26a4dad4d22bb18854efcebf52cb8eceb2153871

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:d576569741c92cadceeac55631fb1c0d5809eb12c7b9e45753c40916270ce91d

# Tag the docker image
docker tag 89152df6e5b4 odoo:$ODOO_REVISION
```

## Bugs

### Bilanz rechnet Betrags aus ER Vorjahre nicht

Bilanz im neuen Jahr rechnet Verluste aus vergangenen Jahren nicht ein.

Fix: <https://github.com/odoo/enterprise/commit/7eb1769c6c6f9f2b6d0832e3e7b6cbed3f76ecc6>