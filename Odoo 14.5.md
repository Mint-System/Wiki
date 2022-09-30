---
tags:
- Asset
---
# Odoo 14.5

```bash
# Checkout enterprise repo
cd enterprise && git checkout 8e14e2a401ff4aef6855fa6fff2cee569f8b1fdd

# Create tag on the enterprise repo
git tag -a 14.5 -m "14.5"
..

# Checkout odoo repo
cd odoo && git checkout c49bcce249b9ffcbc98dded17b6dbe71a1c22552

# Create tag on the odoo repo
git tag -a 14.5 -m "14.5"
..

# Pull docker image
docker pull odoo@sha256:542e36dfc7ad121ea51813e8f6526b5417983cbf490c6702512d5ffcfa7efb8e

# Tag the docker image
docker tag 5ca003a231ac odoo:5ca003a231ac
```