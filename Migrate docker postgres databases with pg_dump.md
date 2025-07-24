---
tags:
  - HowTo
archive: true
kind:
  - howto
---
# Migrate docker postgres databases with pg_dump

## The secure way

Step by step tutorial to migrate database from postgres 10 to 12 using docker.

Start by setting env vars.

```bash
VOLUME=postgres_data04
APP_CONTAINER=odoo03
DB_CONTAINER=postgres04
DB_USER=odoo
```

Backup all databases and db volumes

```bash
docker exec $DB_CONTAINER pg_dumpall --username=$DB_USER > backup.sql
docker-volume-backup -a -c $APP_CONTAINER
docker-volume-backup -a -c $DB_CONTAINER
```

Stop datatabase and kill volume (if volume name is the same).

```bash
docker rm -f $DB_CONTAINER
docker volume rm $VOLUME
```

Update the image tag and rename volume if necessary.

```yml
postgres_image: postgres:12-alpine
```

Deploy database container with version 12.

```bash
aplaybook -i inventories/odoo odoo.yml -l apollo -t postgres  
```

Restore the data.

```bash
cat backup.sql | docker exec -i $DB_CONTAINER psql -U $DB_USER
```

This may take a while as all statements are executed.

Restart the application container.

```bash
docker restart $APP_CONTAINER
```


## The insecure way

Start by setting env vars.

```bash
APP_CONTAINER=login01
DB_CONTAINER=postgres06
DB_USER=keycloak
HOST=zeus
```

Stop app container.

```bash
docker stop $APP_CONTAINER
```

Dump all databases.

```
docker exec $DB_CONTAINER pg_dumpall --username=$DB_USER > /var/tmp/$DB_CONTAINER/dump.sql
```

Update the image tag and rename volume if necessary.

```yml
postgres_image: postgres:12-alpine
```

Deploy database container with the new version.

```bash
aplaybook -i inventories/setup play-all.yml -l $HOST -t postgres --skip-tags depends
```

Restore the data.

```bash
cat /var/tmp/$DB_CONTAINER/dump.sql | docker exec -i $DB_CONTAINER psql -U $DB_USER
```

Start app container.

```
docker start $APP_CONTAINER
```

Test, cleanup and remove obsolete volume.

```
rm /var/tmp/dump.sql
```
