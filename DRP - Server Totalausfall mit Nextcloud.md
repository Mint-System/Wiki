---
kind:
  - howto
section: infrastructure
---

# DRP - Server Totalausfall mit Nextcloud

Der Managed Server eines Kunden ist nicht mehr verfügbar und kann nicht wiederhergestellt werden. Auf dem Server ist Nextcloud installiert und somit kann der Kunde nicht mehr Arbeiten.

## Situation

Nextcloud steht nicht mehr zur Verfügung, der Kunde kann nicht mehr arbeiten. Es muss möglichst schnell ein Server hochgezogen und installiert werden.

In diesem Szenario ist der Dienst `cloud.digital-cluster-uri.ch` nicht mehr erreichbar.

## Vorgehen

Schrittweise wird der Server und dessen Dienste wiederhergestellt. Als Abschluss wird das Odoo-Backup wieder eingespielt.

Aus Tests dauert diese Ausführung ca. 1 Stunde.

### Neuer Server bereitstellen

Beim [[Hosting Provider]] einen neuen Server bereitstellen. Dabei sicherstellen, dass dasselbe [[Betriebssystem]] ausgewählt wird.

### Server installieren

Den Befehl `aplaybook -i inventories/setup setup.yml -l hyperion -u root` ausführen. Nach Bedarf manuelle Konfigurationen vornehmen.

### Nextcloud installieren

Den Befehl `aplaybook -i inventories/nextcloud nextcloud.yml -l hyperion` ausführen.

### Proxy installieren

Den Befehl `aplaybook -i inventories/proxy proxy.yml -l hyperion` ausführen.

### Backup wiederherstellen

Nun muss nur noch das Nextcloud-Backup vom Backup-Server wiederhergestellt werden. Details zum Vorgang sind zu finden unter [[Restic - Wiederherstellung von Backups]].
