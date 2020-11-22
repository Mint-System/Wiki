# Entwicklung

## Benutzer aktivieren oder deaktivieren

Arbeitsschritte:
* Mit SSH auf den Server zugreifen `ssh ALIAS.mint-system.com`
	* Bei Frage, ob der *fingerprint* gespeichert werden soll, mit `yes` beantworten
* Einen Benutzer deaktivieren `docker-odoo-user -c CONTAINER -d DATABASE -a disable -i VORNAME.NACHNAME@mint-system.ch`
* Einen Benutzer aktivieren `docker-odoo-user -c CONTAINER -d DATABASE -a enable -i VORNAME.NACHNAME@mint-system.ch`
* Die SSH-Verbindung trennen `exit`

## Partner-Synchronisation auf täglich umstellen

Arbeitsschritte:
* Einstellungen im Entwicklermodus öffnen *Einstellungen > Technisch > Automation > Geplante Aktionen > Partner Autovervollständigung ...*
* Umstellen Ausführung auf *alle 1 Tage*
* Nächse Ausführung auf `01:00` festlegen