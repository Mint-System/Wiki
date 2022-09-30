---
tags:
- Asset
---
# Odoo 13.2

```bash
# Checkout enterprise repo
cd enterprise && git checkout 71aa7b935a983d2904b6586aebaadb66987d4f0e

# Create tag on the enterprise repo
git tag -a 13.2 -m "13.2"
..

# Checkout odoo repo
cd odoo && git checkout acaca80f0ce544d1c9a738a5aac992a8ac9c75b2

# Create tag on the odoo repo
git tag -a 13.2 -m "13.2"
..

# Pull docker image
docker pull odoo@sha256:578a20a0b50c5f146fc395d53ab9d205ade1f2dadfe675648e09700798ad6734

# Tag the docker image
docker tag e13c9ce400b0 odoo:e13c9ce400b0
```