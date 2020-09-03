# Backup

## Vorschlag

Die Daten der Applikations-Container werden täglich gesichert. Container, die Nutzdaten verarbeiten, speichern diese auf dem Filesystem des Docker Hosts. Siehe Spalte Daten in [Tabelle Übersicht Container](https://wiki.mint-system.ch/books/infrastruktur/page/container "Container"). Diese Daten-Ordner sollen fortlauend gesichert werden.

### Backup Management

Das Backup Management wird mit [Restic](https://restic.net/) ausgeführt. Restic ist ein Kommandozeilen-Tool um dient der automatisierten Ausführung von Backups. Es werden verschiedene Storage-Endpoints unterstützt.

Als Teil des [Infrastruktur-Codes](https://github.com/Mint-System/Ansible-Playbooks) wird ein automatisierter Backupzyklus konfiguriert. Neue Server und Container können so ohne erheblichen Aufwand gesichert werden.

### Backup Storage

Das Backup soll auf einer separaten Disk gespeichert werden. Eine örtliche Trennung ist noch nicht nötig. Daher kann der Storage vom gleichen Hosting Partner bezogen werden. Hetzner bietet dedizierte Storage Server an: [https://www.hetzner.com/storage/storage-box](https://www.hetzner.com/storage/storage-box).

Konkret würde die folgende Option ausreichen: [https://www.hetzner.de/storage/storage-box/bx10](https://www.hetzner.de/storage/storage-box/bx10)

## Architektur

atlas.mint-system.com 100 GB

![[Backup Architektur.png]]