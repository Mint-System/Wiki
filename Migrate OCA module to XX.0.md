# Migrate OCA module to XX.0

See migration guide for details:

- [Migration to version 16.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-16.0)
- [Migration to version 17.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-17.0)
- [Migration to version 18.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-18.0)

## Prepare

Set env vars.

```bash
export ODOO_CURRENT_VERSION=16.0
export ODOO_TARGET_VERSION=17.0
export REPO=purchase-workflow
export MODULE=purchase_order_owner
export USER_ORG=Mint-System
```

Fork the original repo to the user/org by opening the url:

```bash
echo "https://github.com/OCA/$REPO/fork"
```

Make sure to fork all branches.

Prepare repo for migration.

```bash
cd ~/Odoo-Build
task checkout "$ODOO_TARGET_VERSION"
```

Das OCA-Repo als Submodule hinzufügen.

```bash
task add-git-submodule "git@github.com:OCA/$REPO.git" "oca/$REPO"
```

Activate venv and navigate into the repo.

```bash
source task source
cd "oca/$REPO"
```

## Migrate

Create the migration branch.

```bash
git checkout -b "$ODOO_TARGET_VERSION-mig-$MODULE" "origin/$ODOO_TARGET_VERSION"
git format-patch --keep-subject --stdout origin/$ODOO_TARGET_VERSION..origin/$ODOO_CURRENT_VERSION -- $MODULE | git am -3 --keep
```

Run pre commit checks.

```bash
pre-commit run -a
```

Resolve the pre-commit issues.

Commit the pre commit checks.

```bash
git add -A
git commit -m "[IMP] $MODULE: pre-commit stuff"  --no-verify
```

Start the Odoo environment and install the module.

```bash
task init-module "oca/$REPO/$MODULE"
```

Follow migation guide to update the module:

- [Migration to verison 16.0 - Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-16.0#tasks-to-do-in-the-migration)
- [Migration to verison 17.0 - Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-17.0#tasks-to-do-in-the-migration)
- [Migration to verison 18.0 - Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-18.0#tasks-to-do-in-the-migration)

## Submit

Finalize the migration.

```bash
git add --all
git commit -m "[MIG] $MODULE: Migration to $ODOO_TARGET_VERSION"
```

Set remote and push.

```bash
git remote add "$USER_ORG" "git@github.com:$USER_ORG/$REPO.git"
git push "$USER_ORG" "$ODOO_TARGET_VERSION-mig-$MODULE" --set-upstream
```

Follow the link on the command line and submit the pull request.

```bash
echo -e "Title:\n[$ODOO_TARGET_VERSION][MIG] $MODULE: Migration to $ODOO_TARGET_VERSION"
echo -e "Description:\nStandard migration from $ODOO_CURRENT_VERSION to $ODOO_TARGET_VERSION."
```

Once submitted check the runboat checks.
