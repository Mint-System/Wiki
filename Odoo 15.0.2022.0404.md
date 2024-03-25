---
tags:
- Asset
---
# Odoo 15.0.2022.0404

```bash
ODOO_REVISION=15.0.2022.0404

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

## Troubleshooting

### PDF reports without css and images