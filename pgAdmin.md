---
kind: reference
section: dev
tags:
- Definition
website: https://www.pgadmin.org/
---
# pgAdmin

## HowTo

### Unlock account

Install sqlite3 on how machine.

```bash
sudo apt-get install sqlite3
```

Navigate to the volume.

```bash
cd /mnt/sdb/docker/volumes/pgadmin04/_data
```

And run this query:

```sql
sqlite3 pgadmin4.db "UPDATE USER SET LOCKED = false, LOGIN_ATTEMPTS = 0 WHERE USERNAME = 'admin@example.com';" ".exit"
```
