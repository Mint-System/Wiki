---
tags:
- HowTos
---

# Odoo - Migrate an OCA module

Guide has been updated to meet the [[Odoo Development Workflow]].

## From 13.0 to 14.0

See <https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-14.0#howto> for details.

Set configurations:

```bash
REPO=sale-workflow
MODULE=sale_blanket_order
USER_ORG=Mint-System
```

Fork the original repo to the user/org.

`https://github.com/OCA/$REPO`

Prepare repo for migration:

```bash
# Clone the repo
cd ~/Odoo-Development
git clone https://github.com/OCA/$REPO -b 14.0 oca/$REPO

# Create migration branch
cd oca/$REPO
git checkout -b 14.0-mig-$MODULE origin/14.0
git format-patch --keep-subject --stdout origin/14.0..origin/13.0 -- $MODULE | git am -3 --keep

# Run pre commit checks
pre-commit run -a
```

Commit the pre commit checks.

```bash
# Commit the pre commit changes
git add -A
git commit -m "[IMP] $MODULE: black, isort, prettier" --no-verify
```

Follow migration tasks: <https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-14.0#tasks-to-do-in-the-migration>

Finalize the migration:

```bash
git add --all
git commit -m "[MIG] $MODULE: Migration to 14.0"

git remote add $USER_ORG git@github.com:$USER_ORG/$REPO.git
git push $USER_ORG 14.0-mig-$MODULE --set-upstream
```

Submit a pull request:

Title: `[14.0][MIG] $MODULE: Migration to 14.0`\
Description: `Standard migration from 13.0 to 14.0.`

## Troubleshooting

### pre-commit not found

This error occurs:

```bash
pyenv: pre-commit: command not found

The `pre-commit' command exists in these Python versions:
  3.7.2

Note: See 'pyenv help global' for tips on allowing both
      python2 and python3 to be found.
```

**Solution**

Source the python env.

```bash
source task source
```