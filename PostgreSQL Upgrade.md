---
tags:
- HowTo
---
# PostgreSQL Upgrade

These instructions are based on [docker-postgres-upgrade](https://github.com/tianon/docker-postgres-upgrade).

For PostgreSQL upgrade with `pg_dump` see [[Migrating docker postgres databases with pg_dump]]
.

## Scenario

We have Docker environment containing a postgres 10 database and want to upgrade it to version 12. We use another docker image to update the postgres volume.

The environment has an Odoo database:

**Odoo-Development/docker-compose.yml**

```yml
...
  db:
    container_name: db
    image: postgres:10
    ports:
      - "127.0.0.1:5432:5432"
    environment:
      POSTGRES_DB: odoo
      POSTGRES_USER: odoo
      POSTGRES_PASSWORD: odoo
      PGDATA: /var/lib/postgresql/data/pgdata
    volumes:
      - odoo-db-data:/var/lib/postgresql/data/pgdata
volumes:
  odoo-db-data:
...
```

## Instructions

Start the environment.

`task start`

Set env vars and create directory.

```bash
OLD='10'
NEW='12'
POSTGRES_USER=odoo
mkdir -p "$PWD/$NEW"
```

Stop the running container.

`docker stop db`

Upgrade the volume.

```bash
sudo rm -rf "$PWD/$NEW"
docker run --rm \
 -v odoo-development_odoo-db-data:/var/lib/postgresql/10/data \
 -v "$PWD/$NEW/data":/var/lib/postgresql/12/data \
 -e PGUSER=$POSTGRES_USER\
 -e POSTGRES_INITDB_ARGS="-U $POSTGRES_USER"\
 "tianon/postgres-upgrade:$OLD-to-$NEW"
```

Show current version.

`sudo cat /var/lib/docker/volumes/odoo-development_odoo-db-data/_data/PG_VERSION`

Move the directory.

```
sudo rm -rf /var/lib/docker/volumes/odoo-development_odoo-db-data/_data
sudo mv 12/data /var/lib/docker/volumes/odoo-development_odoo-db-data/_data
```

Change postgres version.

`image: postgres:12`

Start the container.

```
task start-db
```

Check logs.

```
docker logs db
```

## Troubleshooting

### No entry host

**Problem**

```
2021-04-16 12:07:49.121 UTC [35] FATAL:  no pg_hba.conf entry for host "172.28.0.5", user "odoo", database "postgres", SSL off
```

**Solution**

```
docker exec db /bin/bash -c 'echo "host all all all trust" >> /var/lib/postgresql/data/pg_hba.conf'
task start
```