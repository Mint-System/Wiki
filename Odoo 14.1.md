---
tags:
- Asset
---
# Odoo 14.1

```bash
# Checkout enterprise repo
cd enterprise && git checkout 307b2a78ccd8fb3d4350327b0352152694029976
..

# Checkout odoo repo
cd odoo && git checkout 2d31892081a48c521357cef974ea23fc9228a39e
..

# Pull docker image
docker pull odoo@sha256:335d31e83074a79e1ad8be65587558d24a1ea90c0d2b3b7e65cc91b9f170a97f

# Tag the docker image
docker tag 70de954aa8a5 odoo:70de954aa8a5
```