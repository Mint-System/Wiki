# Odoo Revisions

Odoo Revsions sind Snapshots der Entwicklungshistory zu einem bestimmten Zeitpunkt. Mit einem [[Git]]- und [[Docker]]-Hash wird der Snapshot festghealten.

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

## Odoo 13.2

Version: 13.0  
Revision: 13.0.2021.0412

```
# Checkout enterprise repo
cd enterprise && git checkout 71aa7b935a983d2904b6586aebaadb66987d4f0e

# Create tag on the enterprise repo
git tag -a 13.2 -m "13.2"

# Checkout odoo repo
cd odoo && git checkout acaca80f0ce544d1c9a738a5aac992a8ac9c75b2

# Create tag on the odoo repo
git tag -a 13.2 -m "13.2"

# Pull docker image
docker pull odoo@sha256:578a20a0b50c5f146fc395d53ab9d205ade1f2dadfe675648e09700798ad6734

# Tag the docker image
docker tag e13c9ce400b0 odoo:e13c9ce400b0
```

## Odoo 14.0

Version: 14.0  
Revision: 14.0.20201019

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

## Odoo 14.3

Version: 14.0  
Revision: 14.0.2021.0111

```bash
# Checkout enterprise repo
cd enterprise && git checkout 2bf86b6e66635abb957ba471700f9d3ea271ff05

# Create tag on the enterprise repo
git tag -a 14.3 -m "14.3"

# Checkout odoo repo
cd odoo && git checkout e6ccdb397792db62c3b08d96435b3c1667c1aa9d

# Create tag on the odoo repo
git tag -a 14.3 -m "14.3"

# Pull docker image
docker pull odoo@sha256:23ccd7deac2664336b94543e3f2653631f0c8e2a562ffa15812805c7ef899827

# Tag the docker image
docker tag 3863e3e905e5 odoo:3863e3e905e5
```

##  [[Odoo 14.4]]

Version: 14.0  
Revision: 14.0.2021.0510

```bash
# Checkout enterprise repo
cd enterprise && git checkout 4df76691f8bb742caae39298f19e808581beae07

# Create tag on the enterprise repo
git tag -a 14.5 -m "14.5"

# Checkout odoo repo
cd odoo && git checkout 811f429707c75b84d7f1da9611dac3c355e828f1

# Create tag on the odoo repo
git tag -a 14.5 -m "14.5"

# Pull docker image
docker pull odoo@sha256:26479e1c9294862e5efc226b116cccab437da0b895c94a84b0165f7a6c892a55

# Tag the docker image
docker tag c4370cddec27 odoo:c4370cddec27
```

##  [[Odoo 14.5]]

Version: 14.0  
Revision: 14.0.2021.0524

```bash
# Checkout enterprise repo
cd enterprise && git checkout 8e14e2a401ff4aef6855fa6fff2cee569f8b1fdd

# Create tag on the enterprise repo
git tag -a 14.5 -m "14.5"

# Checkout odoo repo
cd odoo && git checkout c49bcce249b9ffcbc98dded17b6dbe71a1c22552

# Create tag on the odoo repo
git tag -a 14.5 -m "14.5"

# Pull docker image
docker pull odoo@sha256:542e36dfc7ad121ea51813e8f6526b5417983cbf490c6702512d5ffcfa7efb8e

# Tag the docker image
docker tag 5ca003a231ac odoo:5ca003a231ac
```