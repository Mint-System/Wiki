# Migrating data via pg_dump

Step by step tutorial to migrate data from postgres 10 to 12.

Set env vars.

```bash
VOLUME=postgres_data08
APP_CONTAINER=odoo04
DB_CONTAINER=postgres08
DB_USER=odoo
```

Backup all databases and db volumes

```bash
docker exec $DB_CONTAINER pg_dumpall --username=$DB_USER > backup.sql
docker-volume-backup -a -c $APP_CONTAINER
docker-volume-backup -a -c $DB_CONTAINER
```

Stop datatabase and kill volume.

```bash
docker rm -f $DB_CONTAINER
docker volume rm $VOLUME
```

Deploy container with version 12 and restore data.

```bash
cat backup.sql | docker exec -i $DB_CONTAINER psql -U $DB_USER
```