---
kind: howto
section: process
---

## Go-Live durchführen

Es wird angenommen, dass die Odoo-Instanz unter `odoo.example.com` läuft und für `www.example.com` verfügbar gemacht werden soll. Im Weiteren wird davon ausgegangen dass der [Datenbank-Filter den Hostname verwendet](https://odoo-development.readthedocs.io/en/latest/admin/dbfilter.html#database-names-equal-to-hostname).

Arbeitsschritte:

- DNS `example.com` A-Eintrag und der `www.example.com` CNAME-Eintrag anpassen
- DNS AAAA-Einträge entfernen
- Datenbank von `odoo` auf `example` mit `docker-odoo-rename` umbennen
- Datenbankname im Ansible Backup-Job anpassen
- Datenbankname in Ansible Reset-Skript anpassen
- Ansible Nginx Proxy-Eintrag von `odoo.example.com` auf `www.example.com` umbennen
- Ansible Nginx Umleitung von `example.com` auf `www.example.com` erstellen
- Ansible-Playbook Nginx und Odoo ausführen
