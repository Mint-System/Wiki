# Odoo 13 Revisions

### Odoo 13.0

State: Inactive\
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

### Odoo 13.1

State: Inactive\
Version: 13.0\
Revision: 13.0.2020.1123

```
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

### Odoo 13.2

State: Active\
Version: 13.0\
Revision: 13.0.2021.0412

```
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

### Odoo 13.3

State: Active\
Version: 13.0\
Revision: 13.0.2022.0228

```
ODOO_REVISION=13.3

# Checkout enterprise repo
cd enterprise && git checkout 5f89ea34af741d159d30e41a12fa94db95234d2a

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout odoo repo
cd odoo && git checkout b84d9597df1be89ba418c7969a2cf8c632eb8316

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 17a711b1040eb0df7ffafcdf93e20484501dd9d1

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:9ea449cce3bbbb92bb8ec3568ecd501822d470ace07a264d4f68918256f4e6c3

# Tag the docker image
docker tag a957ee8392eb odoo:$ODOO_REVISION
```
