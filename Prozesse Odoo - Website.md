---
kind: howto
section: process
---

## Go-Live durchführen

Es wird angenommen, dass die Odoo-Instanz unter `odoo.example.com` läuft und für `www.example.com` verfügbar gemacht werden soll. Im Weiteren wird davon ausgegangen dass der [Datenbank-Filter den Hostname verwendet](https://odoo-development.readthedocs.io/en/latest/admin/dbfilter.html#database-names-equal-to-hostname).

Arbeitsschritte:

- der DNS `example.com` A-Eintrag und der `www.example.com` CNAME-Eintrag anpassen
- die Datenbank von odoo auf `example` umbenannen
- der Datenbankname im Backup-Job anpassen
- der Ansible Ninginx Proxy-Eintrag von `odoo.example.com` auf `www.example.com` umbennen
- eine Ansible Nginx Umleitung von `example.com` auf `www.example.com` erstellen
- Ansible-Playbook Nginx und Odoo ausführen
- 