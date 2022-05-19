# Odoo 15 Revisions

## Odoo 15.0

State: Active\
Version: 15.0\
Revision: 15.0.2022.0321

```bash
ODOO_REVISION=15.0

# Checkout enterprise repo
cd enterprise && git checkout 790bfea68d370b77dca3a628503e197cc5db6511

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout odoo repo
cd odoo && git checkout e0b26496196bd4ee39fa06e1a3274982d2c7fb12

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 16bff642598cd595f386d3fb58d08a616c0db8f9

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:b0f192017179f7ddcba260f0a47bf146b509c4b561c551ef23c4f1ea9206f294

# Tag the docker image
docker tag 0e10f87fbc34 odoo:$ODOO_REVISION
```

## [[Odoo 15.1]]

State: Active\
Version: 15.0\
Revision: 15.0.2022.0404

```bash
ODOO_REVISION=15.1

# Checkout enterprise repo
cd enterprise && git checkout f54180e54262334e655a8a0c461cfbea5754c4a1

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout odoo repo
cd odoo && git checkout c9f08119a506dbb4c86092408cf17905ea62ab5a

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout 16bff642598cd595f386d3fb58d08a616c0db8f9

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:26958007f204a5e5123945bdf2cca8b2032ccd21658f33736d6e1a301f786c7f

# Tag the docker image
docker tag e2f13e89de7a odoo:$ODOO_REVISION
```