---
tags:
  - Definition
kind: howto
---
# Odoo Transfer - Worklog

### Worklog

#### Prepare

Read [https://docs.docker.com/storage/volumes/#backup-restore-or-migrate-data-volumes](https://docs.docker.com/storage/volumes/#backup-restore-or-migrate-data-volumes)

#### Move Hades Postgres Data to Volume

Migrate postgres database folder to volume

`docker cp /usr/share/postgres03/data/ postgres03:/var/lib/postgresql/data`

Did not work. Reinstall Odoo.

#### Backup Zeus

Snapshot zeus server in Hetner console: zeus.mint-system.com-1583837819

Wait until snapshoting has finished.

Stop odoo and postgres container.

```
docker stop odoo01
docker stop postgres01
```

Backup odoo volume.

`docker run --rm --volumes-from odoo01 -v $(pwd):/backup ubuntu tar cvf /backup/odoo_backup.tar /var/lib/odoo`

Backup postgres data.

`docker run --rm --volumes-from postres01 -v $(pwd):/backup ubuntu tar cvf /backup/postgres_backup.tar /var/lib/postgresql/data`

Copy tar files to local machine.

`scp root@zeus.mint-system.com:~/*.tar ./backup`

#### Restore Hades

Copy tar files to hades.

`scp ~/*.tar [root@hades.mint-system.com:](mailto:root@hades.mint-system.com:)~/backup`

Stop odoo and postgres container.

```
docker stop odoo02
docker stop postgres03
```

Restore odoo volume data.

`docker run --rm --volumes-from odoo02 -v $(pwd):/backup ubuntu bash -c "cd /var/lib/odoo tar xvf /backup/odoo_backup.tar --strip 1"`

Restore postgres volume data.

`docker run --rm --volumes-from postgres03 -v $(pwd):/backup ubuntu bash -c "cd /var/lib/postgresql/data && tar xvf /backup/postgres_backup.tar --strip 1"`

Start postgres container.

`docker start postgres03`

Verify container is up and running.

Start odoo container.

`docker start odoo02`

Verify container is up and running.

ERR: Data has not been changed!

INS: Command has been false.

`docker run --rm --volumes-from odoo02 -v $(pwd)/backup:/backup ubuntu bash -c "cd / && tar xvf /backup/odoo_backup.tar"`

`docker run --rm --volumes-from postgres03 -v $(pwd)/backup:/backup ubuntu bash -c "cd / && tar xvf /backup/postgres_backup.tar --strip-components=1"`

Start containers again.

Odoo did not start.

ERR: Database connection failure: FATAL: password authentication failed for user "odoo".

Login into database and set password.

Validate data.

ERR: Cannot login into database. Postgres data has not been restored properly.

```
docker stop odoo02
docker stop postgres03
mv /var/lib/docker/volumes/postgres_data03/_data/ ./_data
 mkdir /var/lib/docker/volumes/postgres_data03/_data
docker run --rm --volumes-from postgres03 -v $(pwd)/backup:/backup ubuntu bash -c "cd / && tar xvf /backuP/postgres_backup.tar"
ls /var/lib/docker/volumes/postgres_data03/_data/
docker start postgres03
docker logs postgres03
docker start odoo02
docker logs odoo02
```

ERR: Database connection failure: FATAL: password authentication failed for user "odoo".

#### Restore odoo.mint-system.ch

Somehow the database has been corrupted.

#### Next

Try with psdump to save and restore database.

[https://stackoverflow.com/questions/24718706/backup-restore-a-dockerized-postgresql-database](https://stackoverflow.com/questions/24718706/backup-restore-a-dockerized-postgresql-database)

* * *

[Version #15  
](https://wiki.mint-system.ch/books/entwicklung/page/odoo-migration/revisions)Erstellt: Tue, Mar 10, 2020 10:55 AM von [Janik von Rotz](https://wiki.mint-system.ch/user/1)  
Zuletzt aktualisiert: Tue, Mar 10, 2020 3:59 PM von [Janik von Rotz](https://wiki.mint-system.ch/user/1)