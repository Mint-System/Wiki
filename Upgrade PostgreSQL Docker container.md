# Upgrade PostgreSQL Docker container

These instructions are based on [docker-postgres-upgrade](https://github.com/tianon/docker-postgres-upgrade).

## Scenario

We have Docker environment containing a postgres 10 database and want to upgrade it to version 12. We use another docker image to update the postgres volume.

The environment has an Odoo database:

**docker-compose.yml**

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

`docker-compose up`

Set env vars.

```bash
OLD='10'
NEW='12'
```

Stop the running container.

`docker stop db`

Upgrade the volume

```bash
docker run --rm \
 -v odoo-db-data:/var/lib/postgresql \
 "tianon/postgres-upgrade:$OLD-to-$NEW" \
 --link

```