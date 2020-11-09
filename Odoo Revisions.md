# Odoo Revisions

Manage Odoo Revisions with git and docker tags.

## Odoo 13.0

```bash
# Checkout enterprise repo
cd enterprise && git checkout b2bef9525f

# Create tag on the enterprise repo
git tag -a 13.0 -m "13.0"

# Checkout odoo repo
cd odoo && git checkout bd2d4a55136

# Create tag on the odoo repo
git tag -a 13.0 -m "13.0"

# Pull docker image
docker pull odoo@sha256:27098953285743cdf4152b0c6f3678d573327b7d9acb61a2dffeb3224bcaa852 

# Tag the docker image
docker tag b073a2f2d68c odoo:b073a2f2d68c
```

## Odoo 14.0

Version: 14.0  
Revision: 14.0.2020.1019

```bash
# Checkout enterprise repo
cd enterprise && git checkout 264e7bb9e1420fc9384352eb9c1f210c1c4ac8e7

# Create tag on the enterprise repo
git tag -a 14.0 -m "14.0"

# Checkout odoo repo
cd odoo && git checkout 86423e2da90e1d023bd616cbc719c80f087a4206

# Create tag on the odoo repo
git tag -a 14.0 -m "14.0"

# Pull docker image
docker pull odoo@sha256:ed98410e34aa509a9ac15e0b3b70e72f20af71cddcf9da8b72aa27771bc3410a 

# Tag the docker image
docker tag 6640ab6622b9 odoo:6640ab6622b9
```

## Odoo 14.1

Version: 14.0  
Revision: 14.0.20201109

```bash
# Checkout enterprise repo
cd enterprise && git checkout 8339a837c94693f9281a2e9208c99c824cceb183

# Checkout odoo repo
cd odoo && git checkout

# Pull docker image
docker pull odoo@sha256:335d31e83074a79e1ad8be65587558d24a1ea90c0d2b3b7e65cc91b9f170a97f

# Tag the docker image
docker tag 70de954aa8a5 odoo:70de954aa8a5
```