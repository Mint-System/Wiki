# Backup

## Vorschlag

Die Daten der Applikations-Container werden täglich gesichert. Container, die Nutzdaten verarbeiten, speichern diese auf dem Filesystem des Docker Hosts. Diese Daten-Ordner sollen fortlauend gesichert werden.

### Backup Management

Das Backup Management wird mit [Restic](https://restic.net/) ausgeführt. Restic ist ein Kommandozeilen-Tool um dient der automatisierten Ausführung von Backups. Es werden verschiedene Storage-Endpoints unterstützt.

Als Teil des [Infrastruktur-Codes](https://github.com/Mint-System/Ansible-Playbooks) wird ein automatisierter Backupzyklus konfiguriert. Neue Server und Container können so ohne erheblichen Aufwand gesichert werden.

### Backup Storage

Backups werden auf einem remote Backup-Server gesichert. Dieser Server hat ein externe Disk gemounted, die flexibel vergrössert werden kann.

### Backup Replication

Damit die Backups auch bei einem Ausfall des Backup Servers zur Verfügung stehen, werden die Backup-Daten auf einem [[Storage Bucket]] gespiegelt. Mehr dazu unter [[Backup Replication]].

## Architektur

![[Backup Architektur.png]]

## Anwendung

[[Wiederherstellung von Backups]]\
[[Disaster Recovery Plan]]