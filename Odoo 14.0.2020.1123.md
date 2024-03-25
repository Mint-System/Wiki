---
tags:
- Asset
---
# Odoo 14.0.2020.1123

```bash
# Checkout enterprise repo
cd enterprise && git checkout ad68b67e525341807c416e95ea2db2dda75da9d2

# Create tag on the enterprise repo
git tag -a 14.2 -m "14.2"
..

# Checkout odoo repo
cd odoo && git checkout 87ea687169c9a0047b41b11ab143544142c82aae

# Create tag on the odoo repo
git tag -a 14.2 -m "14.2"
..

# Pull docker image
docker pull odoo@sha256:ac884a5f7166600a3cecf7fd95aa6ffbacd989e98a0483ff59f0e542c6a84f76

# Tag the docker image
docker tag 8363e01420b1 odoo:8363e01420b1
```