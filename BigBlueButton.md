# BigBlueButton
BigBlueButton ist eine zuverlässige und umfangreiche Konferenzlösung.

## Guide

### Benutzer löschen

Einloggen auf den BBB-Server und ausführen der folgenden Befehle:

```
docker exec -it greenlight_db_1 /bin/bash
psql -U postgres
\l
\c greenlight_production;
\dt
select email from users;
delete from users where users.email = 'info@mint-system.ch';
```

### Mikrofon auswählen

BigBlueButton fragt einmalig nach dem Mikrofon-Zugriff.

![[BigBlueButton Mikrofon-Zugriff.png]]