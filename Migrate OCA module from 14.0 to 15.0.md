---
tags:
- HowTo
---

# Migrate OCA module from 14.0 to 15.0

See [Migration to version 15.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-15.0) for details.

### Preparation

Set configurations:

```bash
REPO=stock-logistics-workflow
MODULE=stock_delivery_note
USER_ORG=Mint-System
```

Fork the original repo to the user/org by opening <https://github.com/OCA/$REPO>.

Prepare repo for migration. Clone the repo.

```bash
cd ~/Odoo-Development
git submodule add -f -b 15.0 git@github.com:OCA/$REPO.git oca/$REPO
```

Activate venv and navigate into the repo.

```bash
source task source
cd oca/$REPO
```

### Migration 

Create the migration branch.

```bash
git checkout -b 15.0-mig-$MODULE origin/15.0
git format-patch --keep-subject --stdout origin/15.0..origin/14.0 -- $MODULE | git am -3 --keep
```

Run pre commit checks.

```bash 
pre-commit run -a
```

Commit the pre commit checks.

```bash
git add -A
git commit -m "[IMP] $MODULE: black, isort, prettier"  --no-verify
```

Follow [Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-15.0#tasks-to-do-in-the-migration) to update the module.

### Submission

Finalize the migration:

```bash
git add --all
git commit -m "[MIG] $MODULE: Migration to 15.0"
```

Set remote and push:

```bash
git remote add $USER_ORG git@github.com:$USER_ORG/$REPO.git
git push $USER_ORG 15.0-mig-$MODULE --set-upstream
```

Follow the link on the command line and submit the pull request:

Title: `echo "[15.0][MIG] $MODULE: Migration to 15.0"`\
Description: `Standard migration from 14.0 to 15.0.`

Once submitted check the runboat checks.