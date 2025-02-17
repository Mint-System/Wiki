---
tags:
  - Prozess
---
# Prozesse Infrastruktur - Update Nextcloud

## Update Nextcloud durchführen

Arbeitsschritte:

* In Ansible-Inventory die `nextcloud_image` Variable anzeigen
* Nächst höhrere Major-Version eingeben
* Deployment mit Ansible ausführen
* Sobald neuer Container gestartet wird, das Ansible-Depoloyment mit <kbd>ctrl</kbd>+<kbd>c</kbd> und <kbd>A</kbd> abbrechen
* Container-Log prüfen
* Ansible-Deployment erneut ausführen
* Browser-Zugriff und Synchronisation mit Desktop-Client prüfen