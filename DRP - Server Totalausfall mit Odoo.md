---
tags:
- HowTo
---
# DRP - Server Totalausfall mit Odoo

Der Managed Server eines Kunden ist nicht mehr verfügbar und kann nicht wiederhergestellt werden. Auf dem Server ist Odoo installiert und somit kann der Kunde nicht mehr Arbeiten.

## Situation

Odoo steht nicht mehr zur Verfügung, der Kunde kann nicht mehr arbeiten. Es muss möglichst schnell ein Server hochgezogen und installiert werden.

In diesem Szenario ist der Dienst `erp.aersolution.com` nicht mehr erreichbar.

## Vorgehen

Schrittweise wird der Server und dessen Dienste wiederhergestellt. Als Abschluss wird das Odoo-Backup wieder eingespielt.

Aus Tests dauert diese Ausführung ca. 1 Stunde.

### Neuer Server bereitstellen

Beim [[Hosting Provider]] einen neuen Server bereitstellen. Dabei sicherstellen, dass dasselbe [[Betriebssystem]] ausgewählt wird.

Einen temporären Namen mit der korrekten Subdomain wählen `erp.janikv.dev`. Die Domain sollte bereits bei [[Vercel]] registriert sein.  DNS-Eintrag erstellen und Verbindung testen.

### Host-Konfigurationen umleiten

Die Konfiguration des ausgefallenen Server soll nicht kopiert, sondern einfach umgeleitet werden. Sprich der Alias bleibt der gleiche.

Im allen `hosts.yml`-Dateien den Host mit `erp.janikv.dev` ersetzen.

### Server installieren

Den Befehl `aplaybook -i inventories/setup setup.yml -l helios -u root` ausführen.

### Odoo installieren

Den Befehl `aplaybook -i inventories/odoo odoo.yml -l helios` ausführen.

### Proxy konfigurieren und installieren

Da nicht alle Dienste auf dem Server wiederhergestellt werden, muss die Proxy-Konfiguration angepasst werden. In unserem Szenario gibt es nur noch diese Konfiguration:

```yml
nginx_proxies:
  - src_hostname: erp.janikv.dev
    dest_hostname: odoo09
    dest_port: 8069
    ssl: true
    options: |
      client_max_body_size 256M;
      proxy_read_timeout 300;
```

Den Befehl `aplaybook -i inventories/proxy proxy.yml -l helios` ausführen.

### Backup wiederherstellen

Nun muss nur noch das Odoo-Backup vom Backup-Server wiederhergestellt werden. Details zum Vorgang sind zu finden unter [[Wiederherstellung von Backups]].

`restic restore 70c0071d --target /`

Steht die Datei zur Verfügung kann Sie mit `docker-odoo-restore` wiederhergestellt werden. Aber zuerst muss die Odoo-Datenbank installiert werden, damit der Filestore zur Verfügung steht.

`docker-odoo-install 0c odoo09`

`docker-odoo-restore -c odoo09 -f /var/tmp/erp.zip`

### Test

Öffne <https://erp.janikv.dev> Im Browser und melde dich mit dem Standardlogin an. Auf dem Server sollte das Container-Log mitverfolgt werden.

`docker logs odoo09 -f`