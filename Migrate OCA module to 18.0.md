# Migrate OCA module to 18.0

See [Migration to version 18.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-18.0) for details.

### Prepare

Set env vars.

```bash
export ODOO_CURRENT_VERSION=16.0
export ODOO_TARGET_VERSION=18.0
export REPO=stock-logistics-workflow
export MODULE=stock_production_lot_active
export USER_ORG=Mint-System
```

Fork the original repo to the user/org by opening `https://github.com/OCA/$REPO/fork`.

Prepare repo for migration.

```bash
cd ~/Odoo-Build
task checkout $ODOO_TARGET_VERSION
task git-submodule-add git@github.com:OCA/$REPO.git oca/$REPO
```

Activate venv and navigate into the repo.

```bash
source task source
cd oca/$REPO
```

## Migrate

Create the migration branch.

```bash
git checkout -b $ODOO_TARGET_VERSION-mig-$MODULE origin/$ODOO_TARGET_VERSION
git format-patch --keep-subject --stdout origin/$ODOO_TARGET_VERSION..origin/$ODOO_CURRENT_VERSION -- $MODULE | git am -3 --keep
```

Run upgrade module task.

```bash
task upgrade-module oca/$REPO/$MODULE $ODOO_CURRENT_VERSION
```

Run pre commit checks.

```bash 
pre-commit run -a
```

Resolve the issues.

Commit the pre commit checks.

```bash
git add -A
git commit -m "[IMP] $MODULE:  pre-commit auto fixes"  --no-verify
```

Follow [Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-18.0#tasks-to-do-in-the-migration) to update the module.

## Verify

Install the module.

```bash
task init-module $MODULE
```

### Submit

Finalize the migration.

```bash
git add --all
git commit -m "[MIG] $MODULE: Migration to $ODOO_TARGET_VERSION"
```

Set remote and push.

```bash
git remote add $USER_ORG git@github.com:$USER_ORG/$REPO.git
git push $USER_ORG $ODOO_TARGET_VERSION-mig-$MODULE --set-upstream
```

Generate the PR title:

```bash
echo "Title: [$ODOO_TARGET_VERSION][MIG] $MODULE: Migration to $ODOO_TARGET_VERSION"
```

Create a pull request with the title.

```bash
gh pr create
```