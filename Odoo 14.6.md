---
tags:
- Asset
---
# Odoo 14.6

Version: 14.0\
Revision: 14.0.2021.0817

```bash
ODOO_REVISION=14.6 

# Checkout enterprise repo
cd enterprise && git checkout 7a5c7d84e8d2f12a45269f1c5aba5e1598e2f809

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout odoo repo
cd odoo && git checkout d470f2b4fbc7440d19d07268980394909c47ee22

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 4f8139719e8d1aac58894d23bf4a0e4e16640997

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:3533f9075153f8c31d716eb79ac291a20bd6ba612ee90a7511a994c618c7e70e

# Tag the docker image
docker tag 423b0096eedd odoo:$ODOO_REVISION
```