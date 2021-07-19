# Migrating docker postgres databases with pg_dump

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
