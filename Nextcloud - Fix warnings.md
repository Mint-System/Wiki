---
tags:
- HowTo
---
# Nextcloud: Fix warnings

Some warnings need to be fixed manually

**Add primary keys**

Warning: "In der Datenbank fehlen einige Primärschlüssel. ..."

Run this command on the server: `docker exec -u www-data nextcloud01 php occ db:add-missing-primary-keys`

**Add indicies**

Warning: "In der Datenbank fehlen einige Indizes. ..."

Run this command: `docker exec -u www-data nextcloud01 php occ db:add-missing-indices`

**Missing columns**

Warning: "In der Datenbank fehlen einige optionale Spalten. ..."

Run this command: `docker exec -u www-data nextcloud01 php occ db:add-missing-columns`

**Convert bigint**

Warning: "Einige Spalten in der Datenbank können zu big int konvertiert werden. ..."

Take instance offline and run this command: `docker exec -u www-data nextcloud01 php occ db:convert-filecache-bigint`

