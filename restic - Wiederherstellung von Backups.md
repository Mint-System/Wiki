---
tags:
  - restic
kind:
  - howto
---
# restic - Wiederherstellung von Backups

In diesem Dokument wird das Vorgehen zur Wiederherstellung aus einem Backup beschrieben.

## Voraussetzung

Auf dem Host ist restic installiert und der Zugriff auf die Snapshots funktioniert.

Alle Dienste sind installiert und bereit zur Wiederherstellung.

## Wiederherstellung
### Restic Restore

Als erstes gilt es mit restic die Backups vom restic-Server herunterzuladen.

Angenommen man möchte das folgende Backup wiederherstellen:

```bash
restic-main snapshots
# 5e7325b4  2025-05-23 01:28:23  ov-c23f26   odoo,odoo-main       /mnt/sdb/backup/odoo-main.zip
```

Gibt man den folgenden Befehl ein:

```bash
restic-main restore 5e7325b4 --target /
# repository 5e7325b4 opened successfully, password is correct
# restoring <Snapshot 5e7325b4 of [/mnt/sdb/backup/odoo-main.zip] at 2025-05-23 01:28:23.496308871 +0200 CEST by root@ov-c23f26> to /
```

### Odoo Datenbank

Handelt es sich beim Backup um eine Odoo Datenbank Backup, kann man diese wie folgt wiederherstellen:

```bash
docker-odoo-restore -c odoo-cd-odoo-dev-103 -d odoo-dev -f /mnt/sdb/backup/odoo-main.zip -r
```

### Docker Volumes

Wenn es sich beim Backup um ein Docker-Volume handelt kann dieses mit einem Helper-Script oder ohne wiederhergestellt werden.

#### Mit Helper-Scripts

Bestehendes Volume ersetzen.

```bash
docker-postgres-restore -c postgres11 -f /var/tmp/postgres11/nextcloud.sql -r
```

#### Ohne Helper-Scripts

Der Docker-Befehl um ein Volume zu entpacken.

```bash
docker run --rm -v nextcloud_data03:/_data -v /var/tmp:/var/tmp ubuntu bash -c "cd /_data && tar xvf /var/tmp/nextcloud03/nextcloud_data03.tar --strip 1"
```

### Postgres Dump

Bei einem Postgres-Dump kann ebenfalls ein Helper-Script verwendet werden.

#### Mit Helper-Scripts

Bestehende Datenbank erstetzen.

```bash
docker-postgres-restore -c postgres11 -f /var/tmp/postgres11/nextcloud.sql -r
```

#### Ohne Helper-Scripts

Bestehende Datenbank anzeigen und löschen.

```bash
docker exec -i postgres11 psql -U nextcloud -l
docker exec -i postgres11 psql -U nextcloud -d template1 -c "DROP DATABASE \"nextcloud\";"
```

Datenbank erstellen und Dump importieren.

```bash
docker exec -i postgres11 psql -U nextcloud -d template1 -c "CREATE DATABASE \"nextcloud\";"

cat /var/tmp/postgres11/nextcloud.sql | docker exec -i postgres11 psql -U nextcloud

docker exec -i postgres11 psql -U nextcloud -d template1 -c "GRANT ALL PRIVILEGES ON DATABASE nextcloud TO nextcloud;"
```