---
tags:
- Asset
---
# Odoo 13.0

Version: 13.0\
Revision: 13.0.2020.0629

```bash
# Checkout enterprise repo
cd enterprise && git checkout b2bef9525f

# Create tag on the enterprise repo
git tag -a 13.0 -m "13.0"
..

# Checkout odoo repo
cd odoo && git checkout bd2d4a55136

# Create tag on the odoo repo
git tag -a 13.0 -m "13.0"
..

# Pull docker image
docker pull odoo@sha256:27098953285743cdf4152b0c6f3678d573327b7d9acb61a2dffeb3224bcaa852 

# Tag the docker image
docker tag b073a2f2d68c odoo:b073a2f2d68c
```