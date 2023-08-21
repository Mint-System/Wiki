---
tags:
- HowTo
---

# Migrate OCA module to 14.0

See [Migration to version 14.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-14.0#howto) for details.

### Preparation

Set configurations:

```bash
REPO=manufacture
MODULE=mrp_production_note
USER_ORG=Mint-System
```

Fork the original repo to the user/org by opening <https://github.com/OCA/$REPO>.

Prepare repo for migration. Clone the repo.

```bash
cd ~/Odoo-Development
git submodule add -f -b 14.0 git@github.com:OCA/$REPO.git oca/$REPO
cd oca/$REPO
```

### Migration 

Create the migration branch.

```bash
git checkout -b 14.0-mig-$MODULE origin/14.0
git format-patch --keep-subject --stdout origin/14.0..origin/13.0 -- $MODULE | git am -3 --keep
```

Run pre commit checks.

```bash 
pre-commit run -a
```

Commit the pre commit checks.

```bash
# Commit the pre commit changes
git add -A
git commit -m "[IMP] $MODULE: black, isort, prettier" --no-verify
```

Follow [Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-14.0#tasks-to-do-in-the-migration) to update the module.

### Submit

Finalize the migration:

```bash
git add --all
git commit -m "[MIG] $MODULE: Migration to 14.0"
```

Set remote and push:

```bash
git remote add $USER_ORG git@github.com:$USER_ORG/$REPO.git
git push $USER_ORG 14.0-mig-$MODULE --set-upstream
```

Open <https://github.com/$USER_ORG/$REPO> and submit a pull request:

Title: `echo "[14.0][MIG] $MODULE: Migration to 14.0"`\
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

