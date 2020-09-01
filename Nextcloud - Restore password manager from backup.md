# Restore password manager from backup
Source: https://git.mdns.eu/nextcloud/passwords/wikis/Administrators/Backups

Copy the latest autobackup:

```ls /var/lib/docker/volumes/nextcloud_data01/_data/data/appdata_oce3obfs0hqu/passwords/autoBackups/
```

List backups:

`docker exec -u www-data nextcloud01 php occ passwords:backup:list`

The following backups are available:

```
2020-04-16_14-35-40   199 KB compressed
2020-04-21_07-17-35   201 KB compressed
...
```

Restore selected backup:

`docker exec -u www-data nextcloud01 php occ passwords:backup:restore 2020-06-22_06-55-07`