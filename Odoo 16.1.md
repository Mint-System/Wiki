---
tags:
- Asset
---

# Odoo 16.1

Revision: 16.0.2022.1117

```bash
ODOO_REVISION=16.1

# Checkout odoo repo
cd odoo && git checkout fa8fc5b26b948a9da4013874fb5af2d84ddb98c6

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout enterprise repo
cd enterprise && git checkout 0ef6a5f5f54703b7681d72257f3279ed0b70cfae

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 6e285922a1e93f4f03c4a83d5da6bebd1fee00f9

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:162a6a9191afa716a63046aeae6f9a0f92a4ee1a543527b29339726cd01f825d

# Tag the docker image
docker tag b8138ed2d218 odoo:$ODOO_REVISION
```