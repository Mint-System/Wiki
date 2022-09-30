---
tags:
- Asset
---
# Odoo 13.1

```bash
# Checkout enterprise repo
cd enterprise && git checkout 98c1c323b4

# Create tag on the enterprise repo
git tag -a 13.1 -m "13.1"
..

# Checkout odoo repo
cd odoo && git checkout 10dd2f0ae14

# Create tag on the odoo repo
git tag -a 13.1 -m "13.1"
..

# Pull docker image
docker pull odoo@sha256:bfc01dbb6a49576ac88aca664bf59fe2afc0a1bba94743699c49a11acf0a4cd8

# Tag the docker image
docker tag f20ab9613812 odoo:f20ab9613812
```