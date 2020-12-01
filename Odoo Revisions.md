# Odoo Revisions

Manage Odoo Revisions with git and docker tags.

## Odoo 13.0

Version: 13.0  
Revision: 13.0.2020.0629

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

## Odoo 13.1

Version: 13.0  
Revision: 13.0.2020.1123

```
# Checkout enterprise repo
cd enterprise && git checkout 98c1c323b4

# Create tag on the enterprise repo
git tag -a 13.1 -m "13.1"

# Checkout odoo repo
cd odoo && git checkout 10dd2f0ae14

# Create tag on the odoo repo
git tag -a 13.1 -m "13.1"

# Pull docker image
docker pull odoo@sha256:bfc01dbb6a49576ac88aca664bf59fe2afc0a1bba94743699c49a11acf0a4cd8

# Tag the docker image
docker tag f20ab9613812 odoo:f20ab9613812
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
Revision: 14.0.2020.1026

```bash
# Checkout enterprise repo
cd enterprise && git checkout 307b2a78ccd8fb3d4350327b0352152694029976

# Checkout odoo repo
cd odoo && git checkout 2d31892081a48c521357cef974ea23fc9228a39e

# Pull docker image
docker pull odoo@sha256:335d31e83074a79e1ad8be65587558d24a1ea90c0d2b3b7e65cc91b9f170a97f

# Tag the docker image
docker tag 70de954aa8a5 odoo:70de954aa8a5
```

## Odoo 14.2

Version: 14.0  
Revision: 14.0.2020.1123

```bash
# Checkout enterprise repo
cd enterprise && git checkout ad68b67e525341807c416e95ea2db2dda75da9d2

# Create tag on the enterprise repo
git tag -a 14.2 -m "14.2"

# Checkout odoo repo
cd odoo && git checkout 87ea687169c9a0047b41b11ab143544142c82aae

# Create tag on the odoo repo
git tag -a 14.2 -m "14.2"

# Pull docker image
docker pull odoo@sha256:ac884a5f7166600a3cecf7fd95aa6ffbacd989e98a0483ff59f0e542c6a84f76

# Tag the docker image
docker tag 8363e01420b1 odoo:8363e01420b1
```