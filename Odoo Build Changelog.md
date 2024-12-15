# Odoo Build Changelog

## Undefined

### Added

* New commands `task lint-module-repo` and `task test-module-repo`.
* New test commands `task test-k8s` and `task test-docker`.
* Run test commands on every push  and PR.
* Show GitHub action badge in readme.
* Odoo Build images load ssh private and public key to Odoo config. They can be used with `git_base`.
* Added command `task show-revision`

### Updated

* All function in `task` have been sorted and grouped.
* `checkout-reivision` updates var in `.env` file.
* Replaced [[Mailhog]] with [[Mailpit]].
* Refactored Odoo revision scripts.

## 2024-11-27

### Added

There are new commands in the Odoo Build project:

- `task create-revision` ⁠David Denicolò I use this command to define a new Odoo Revision. Here is the latest: [https://github.com/Mint-System/Odoo-Build/blob/16.0/scripts/odoo_revision_16.0.20241125](https://github.com/Mint-System/Odoo-Build/blob/16.0/scripts/odoo_revision_16.0.20241125 "https://github.com/mint-system/odoo-build/blob/16.0/scripts/odoo_revision_16.0.20241125")
- `task start-kind` / `task start-minikube` to deploy a local Kubernetes cluster
- `task k8s-apply` to deploy Odoo to the Kubernetes cluster
- `task create-module` / `task generate-module-model` / `generate-module-security` for bootstraping new modules
- `task list-revisions` to list the available revisions.
- The config folder has been removed. When starting Odoo with `task start native` the `odoo.conf.template` will be templated with env vars.
- `task test-json-rpc` has now a model parameter.

## 2024-11-13

### Added

- Boostrap modules with `task create-module|generate-module-model|generate-module-security`
- Updated module templates in `templates`
- Start and deploy to Minikube (Kubernetes) `task start-minikube|init-minikube` see `k8s` folder for details
- Removed `docker-compose` in favor of `docker compose` plugin
- Updated troubleshooting section