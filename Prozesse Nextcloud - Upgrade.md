---
tags:
  - Prozess
---
# Prozesse Nextcloud - Upgrade

## Upgrade Nextcloud durchführen

Arbeitsschritte:

* In Ansible-Inventory die `nextcloud_image` Variable anzeigen,
* Nächste höhrere Major-Version eingeben,
* Deployment mit Ansible ausführen: `task play -i inventories/nextcloud plays/nextcloud.yml -l $ALIAS`,
* Sobald neuer Container gestartet wird, das Ansible-Depoloyment mit <kbd>ctrl</kbd>+<kbd>c</kbd> und <kbd>A</kbd> abbrechen,

Nextcloud führt beim Start bei einer neueren Version die etnsprechenden Upgrade-Skripte aus.

* Container-Log prüfen.
* Ansible-Deployment erneut ausführen: `task play -i inventories/nextcloud plays/nextcloud.yml -l $ALIAS`.
* Browser-Zugriff und ggf. Synchronisation mit Desktop-Client prüfen.