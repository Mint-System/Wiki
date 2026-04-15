---
title: Migrate OCA module to XX.0
section: template
kind: reference
lang: en
---

See migration guide for details:

- [Migration to version 16.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-16.0)
- [Migration to version 17.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-17.0)
- [Migration to version 18.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-18.0)
- [Migration to version 19.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0)

## Prepare

Set env vars.

```bash
export current_version=16.0
export target_version=17.0
export repo=purchase-workflow
export module=purchase_order_owner
export user_org=Mint-System
```
## Migrate

Navigate into the OCA repo.

```bash
cd oca/$repo
```

Create the migration branch.

```bash
git checkout -b "$target_version-mig-$module" "origin/$target_version"
git format-patch --keep-subject --stdout origin/$target_version..origin/$current_version -- $module | git am -3 --keep
```

Migrate the module.

```bash
task migrate-module "oca/$repo/$module"
```

Resolve the pre-commit issues.

Follow migration guide to update the module:

- [Migration to verison 16.0 - Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-16.0#tasks-to-do-in-the-migration)
- [Migration to verison 17.0 - Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-17.0#tasks-to-do-in-the-migration)
- [Migration to verison 18.0 - Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-18.0#tasks-to-do-in-the-migration)
- [Migration to verison 19.0 - Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0#tasks-to-do-in-the-migration)

Start the Odoo environment and install the module.

```bash
task init-module "oca/$repo/$module"
```

Run pre-commit.

```bash
pre-commit run -a
```

Commit the migration.

```bash
git add --all
git commit -m "[MIG] $module: Migration to $target_version"
```

## Submit

Push to remote.

```bash
git push "$user_org" "$target_version-mig-$module" --set-upstream
```

Follow the link on the command line and submit the pull request.

```bash
echo -e "Title:\n[$target_version][MIG] $module: Migration to $target_version"
echo -e "Description:\nStandard migration from $current_version to $target_Version."
```

Once submitted check the runboat checks.
