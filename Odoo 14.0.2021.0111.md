---
tags:
- Asset
---
# Odoo 14.0.2021.0111

```bash
# Checkout enterprise repo
cd enterprise && git checkout 2bf86b6e66635abb957ba471700f9d3ea271ff05

# Create tag on the enterprise repo
git tag -a 14.3 -m "14.3"
..

# Checkout odoo repo
cd odoo && git checkout e6ccdb397792db62c3b08d96435b3c1667c1aa9d

# Create tag on the odoo repo
git tag -a 14.3 -m "14.3"
..

# Pull docker image
docker pull odoo@sha256:23ccd7deac2664336b94543e3f2653631f0c8e2a562ffa15812805c7ef899827

# Tag the docker image
docker tag 3863e3e905e5 odoo:3863e3e905e5
```