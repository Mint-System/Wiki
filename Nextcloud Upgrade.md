---
title: Nextcloud Upgrade
kind: tutorial
section: dev
---

Description of the Nextcloud upgrade process.

## Upgrade major release

- Define config.

```bash
export ALIAS=eos
```

- Backup database.

```bash
cd Ansible-Build
task connect-host $ALIAS
sudo cron-job-run -n "Backup job postgres dump nextcloud"
```

- Update Nextcloud image tag.

```yml
nextcloud_image: nextcloud:29-apache
```

- Deploy the new container.

```bash
task play -i inventories/nextcloud plays/nextcloud.yml -l eos
```

- Abort when Ansible is waiting for the database.
- Re-run the plabyook once the upgrade has finished.

## Troubleshooting

### Update fails - major versions unsupported

**Problem**

While upgrading this error occurs.

```bash
Configuring Redis as session handler
Initializing nextcloud 22.1.0.1 ...
Upgrading nextcloud from 20.0.8.1 ...
Initializing finished
Nextcloud or one of the apps require upgrade - only a limited number of commands are available
You may use your browser or the occ upgrade command to do the upgrade
Setting log level to debug
Turned on maintenance mode
Exception: Updates between multiple major versions and downgrades are unsupported.
Update failed
Maintenance mode is kept active
Resetting log level
```

**Solution**

You are not allowed to skip a major version while upgrading. Make sure to upgrade incrementally.

Further you have to restore the inital state as the config has been changed. Use `docker-volume-restore` to perform this action.
