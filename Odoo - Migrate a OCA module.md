---
tags:
- HowTos
---

# Odoo - Migrate a OCA module

See <https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-14.0> for details.

Guide has been updated to meet the [[Odoo Development Workflow]].

Set configurations:

```bash
REPO=stock-logistics-workflow
MODULE=stock_production_lot_active
USER_ORG=Mint-System
```

Fork the original repo to the user/org.

Prepare repo for migration:

```bash
cd ~/Odoo-Development
git clone https://github.com/OCA/$REPO -b 14.0 oca/$REPO
cd oca/$REPO
git checkout -b 14.0-mig-$MODULE origin/14.0git format-patch --keep-subject --stdout origin/14.0..origin/13.0 -- $MODULE | git am -3 --keep
pre-commit run -a
git add -A
git commit -m "[IMP] $MODULE: black, isort, prettier" --no-verify
```

Follow migration tasks: <https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-14.0#tasks-to-do-in-the-migration>

Finalize the migration:

```
git add --all
git commit -m "[MIG] $MODULE: Migration to 14.0"
git remote add $USER_ORG git@github.com:$USER_ORG/$REPO.git
git push $USER_ORG 14.0-mig-$MODULE --set-upstream
```

Submit a pull request:

Title: `[14.0][MIG] $MODULE: Migration to 14.0`
Descriptino: `Standard migration from 13.0 to 14.0.`