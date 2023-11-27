---
tags:
- Asset
---
# Odoo 14.0

Revision: 14.0.2020.1019

```bash
# Checkout enterprise repo
cd enterprise && git checkout 264e7bb9e1420fc9384352eb9c1f210c1c4ac8e7

# Create tag on the enterprise repo
git tag -a 14.0 -m "14.0"
..

# Checkout odoo repo
cd odoo && git checkout 86423e2da90e1d023bd616cbc719c80f087a4206

# Create tag on the odoo repo
git tag -a 14.0 -m "14.0"
..

# Pull docker image
docker pull odoo@sha256:ed98410e34aa509a9ac15e0b3b70e72f20af71cddcf9da8b72aa27771bc3410a 

# Tag the docker image
docker tag 6640ab6622b9 odoo:6640ab6622b9
```