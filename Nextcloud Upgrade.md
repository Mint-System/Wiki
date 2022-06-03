# Nextcloud Upgrade

Description of the Nextcloud upgrade process.

## Upgrade major release

* Define config.

```bash
export NEXTCLOUD_CONTAINER=nextcloud02
export DATABASE_CONTAINER=postgres07
```

* Backup volumes and database.

```bash
docker-volume-backup -a -c $NEXTCLOUD_CONTAINER
docker-postgres-backup -a -c $DATABASE_CONTAINER
```

* Update Nextcloud image tag.

```yml
nextcloud_image: nextcloud:21.0.5-apache
```

* Deploy the new container

* Tail the log while the upgrade is performed

```bash
docker logs -f $NEXTCLOUD_CONTAINER
```

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
