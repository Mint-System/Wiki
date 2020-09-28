# App Einstellungen

## Benutzer aktivieren oder deaktivieren

Arbeitsschritte:
* Mit SSH auf den Server zugreifen `ssh ALIAS.mint-system.com`
* Einen Benutzer deaktivieren `docker-odoo-user -c CONTAINER -d DATABASE -a disable -i VORNAME.NACHNAME@mint-system.ch`
* Einen Benutzer aktivieren `docker-odoo-user -c CONTAINER -d DATABASE -a enable -i VORNAME.NACHNAME@mint-system.ch`
* Die SSH-Verbindung trennen `exit`