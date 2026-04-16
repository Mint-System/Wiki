---
title: Migrate OCA module to XX.0
section: template
kind: reference
lang: en
---

The OCA has a migration guide for every major version.

- [Migration to version 16.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-16.0)
- [Migration to version 17.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-17.0)
- [Migration to version 18.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-18.0)
- [Migration to version 19.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0)

This document show how to a module migration happens with the help of [[Odoo Build]].
## Prepare

Set env vars.

```bash
source_version=18.0
target_version=19.0
repo=oca/account-analytic
module=product_analytic
user_org=Mint-System
```
## Migrate

Prepare the migration branch for the moduel.

```bash
task prepare-migration-brach "$repo" "$module" "$source_version"
```

Migrate the module.

```bash
task migrate-module "$repo/$module"
```

Follow migration guide to update the module:

- [Migration to verison 16.0 - Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-16.0#tasks-to-do-in-the-migration)
- [Migration to verison 17.0 - Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-17.0#tasks-to-do-in-the-migration)
- [Migration to verison 18.0 - Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-18.0#tasks-to-do-in-the-migration)
- [Migration to verison 19.0 - Tasks to do in the migration](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0#tasks-to-do-in-the-migration)

Start the Odoo environment and install the module.

```bash
task init-module "$repo/$module"
```

Run the module tests.

```bash
task test-module "$repo/$module"
```

Commit the migration.

```bash
task run-pre-commit "$repo"
task status-git-folder "$repo"
task stage-git-folder "$repo"
task comit-git-folder "[MIG] $module: Migration to $target_version" "$repo"
```

## Submit

Push to remote.

```bash
git push "$user_org" "$target_version-mig-$module" --set-upstream
```

Create a pull request

```bash
gh pr create \
  --repo "${user}/Odoo-Apps-$repo" \
  --head "$target_version-mig-$module" \
  --base "$target_version" \
  --title "[$target_version][MIG] $module: Migration to $target_version" \
  --body "Standard migration from $source_version to $target_version."
```

Once submitted check the runboat checks.
