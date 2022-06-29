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

## [[Odoo 15.2]]

State: Active\
Version: 15.0\
Revision: 15.0.2022.0509

```bash
ODOO_REVISION=15.2

# Checkout enterprise repo
cd enterprise && git checkout 45a59f9b335c85eaec4ba7d06f88fd2ababb0a4f

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout odoo repo
cd odoo && git checkout 5553f551d5627a53d3881dba80fcc96f0c9ffb4d

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout f403f252bc709d8ec76312eb6e7ff75ff30aad11

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:485313b5cc47c3b1c1212b68b4275b1324b908df03ac6d0b3b8f833b611b7d8f

# Tag the docker image
docker tag c7a469d18da9 odoo:$ODOO_REVISION
```

## [[Odoo 15.3]]

State: Active\
Version: 15.0\
Revision: 15.0.2022.0620

```bash
ODOO_REVISION=15.3

# Checkout enterprise repo
cd enterprise && git checkout b21475610f4cb81c901eb1ae6d6a1e8d0e271cbd

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout odoo repo
cd odoo && git checkout 6c8008b2e9ba0e58b940d8f0e6ad7b13d6b8c9bd

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout cf5300f70793ef2796d86fac456c7ecacaaf2ff0

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:40b49d7cad11ff5b765352db6572d62120ea2d007e76cb76ad9b12966f0f198e

# Tag the docker image
docker tag ade1ded6b4c8 odoo:$ODOO_REVISION
```