# Wiederherstellung von Backup

In diesem Dokument wird das Vorgehen zur Wiederherstellung aus einem Backup beschrieben.

## Voraussetzung

Auf dem Host ist Restic installiert und der Zugriff auf die Snapshots funktioniert.

Alle Dienste sind installiert und bereit zur Wiederherstellung.

## Restic Restore

Als erstes gilt es mit Restic die Backups vom Restic-Server herunterzuladen.

Angenommen man möchte das folgende Backup wiederherstellen:

```bash
restic snapshots a1dd23e2
# repository b7435fcd opened successfully, password is correct
# ID        Time                 Host        Tags         Paths
# ------------------------------------------------------------------------
# a1dd23e2  2020-09-30 01:00:05  apollo      odoo,odoo03  /var/tmp/erp.zip
# ------------------------------------------------------------------------
# 1 snapshots
```

Gibt man den folgenden Befehl ein:

```bash
restic restore a1dd23e2 --target /var/tmp
# repository b7435fcd opened successfully, password is correct
# restoring <Snapshot a1dd23e2 of [/var/tmp/erp.zip] at 2020-09-30 01:00:05.957738501 +0200 CEST by root@apollo> to /var/tmp
```

## Odoo Backup

Hat man das Odoo Backup wiederhergestellt, kann man die Daten einfach importieren.

```bash
~ odoo odoo-restore -d erp -r -f /var/tmp/erp.zip
# No errors detected in compressed data of /var/tmp/erp.zip.
# Deleting Odoo database erp ...
# Requesting restore for Odoo database erp ...
# The restore for Odoo database erp has finished.
```

## Docker Volumes

Der Container `nextcloud03` hat ein Volume `nextcloud_data03` und wiederhergestellter Export unter `/var/tmp/nextcloud03/nextcloud_data03.tar`.

Dieser Export kann ganz einfach importiert werden.

```bash
docker run --rm -v nextcloud_data03:/_data -v /var/tmp:/var/tmp ubuntu bash -c "cd /_data && tar xvf /var/tmp/nextcloud03/nextcloud_data03.tar --strip 1"
```

## Postgres Dump

Der Datenbank-Export `/var/tmp/postgres11/nextcloud.sql` soll für den Container `postgres11`  wiederhergestellt werden.

Bestehende Datenbank anzeigen und löschen.

```bash
docker exec -i postgres11 psql -U nextcloud -l
#                                   List of databases
#    Name    |   Owner   | Encoding |  Collate   |   Ctype    |    Access privileges
# -----------+-----------+----------+------------+------------+-------------------------
#  nextcloud | nextcloud | UTF8     | en_US.utf8 | en_US.utf8 | nextcloud=CTc/nextcloud+
           |           |          |            |            | oc_admint=c/nextcloud
# ...
docker exec -i postgres11 psql -U nextcloud -d template1 -c "DROP DATABASE \"nextcloud\";"
```

Datenbank wieder erstellen und Export importieren.

```bash
docker exec -i postgres11 psql -U nextcloud -d template1 -c "CREATE DATABASE \"nextcloud\";"

cat /var/tmp/postgres11/nextcloud.sql | docker exec -i postgres11 psql -U nextcloud

docker exec -i postgres11 psql -U nextcloud -d template1 -c "GRANT ALL PRIVILEGES ON DATABASE nextcloud TO nextcloud;"
```