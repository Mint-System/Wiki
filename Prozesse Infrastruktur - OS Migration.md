---
tags:
  - Prozess
kind:
  - howto
section: process
---
# Prozesse Infrastruktur - OS Migration
## Vorbereiten

* Anzeige Server in Cloud-Konsole
* Sicherstellen, dass Server eine zweiten Disk hat
* Sicherstellen, dass Docker-Daten auf der zweiten Disk sind

```yml
docker_data_dir: /mnt/sdb/docker
fstab_mounts:
  - path: /mnt/sdb
    src: /dev/vdb
    opts: discard,nofail,defaults
    state: mounted
    fstype: ext4
```

## Ausführen

* Umgebungsvariable festlegen:

```bash
export ALIAS=
```

* Docker-Dienst auf Server stoppen

```bash
ssh $ALIAS.mint-system.com sudo service docker stop
```

* Anzeige Server in Cloud-Konsole
* Server herunterfahren
* Server mit aktuellem Debian Image neu erstellen

::: warning
Nach einem Rebuild rebuild, wird der originale SSH-Public-Key für den Root-Benutzer bereitgestellt.
:::

* Server in Ansible Inventory in Debian Gruppe verschieben
* Server mit Ansible installieren: 

```bash
ansible-playbook -i inventories/setup plays/setup.yml -l $ALIAS -u root
```

* Anschliessend den Server neustarten.

```bash
ssh $ALIAS.mint-system.com sudo reboot
```

* Alle Container mit Ansible neu deployen:

```bash
ansible-playbook -i inventories/setup plays/all.yml -l $ALIAS
ansible-playbook -i inventories/nextcloud plays/nextcloud.yml -l $ALIAS
ansible-playbook -i inventories/odoo plays/odoo.yml -l $ALIAS
```

* Und am Ende den Nginx starten

```bash
ansible-playbook -i inventories/nextcloud -i inventories/odoo -i inventories/setup plays/nginx.yml -l $ALIAS --skip-tags check
```

### Troubleshooting

### Error mounting to rootfs

**Problem**

```
Bad Request ("failed to create task for container: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: error during container init: error mounting "/usr/share/prom01/prometheus.yml" to rootfs at "/etc/prometheus/prometheus.yml": create mountpoint for /etc/prometheus/prometheus.yml mount: cannot create subdirectories in "
```

**Ursache**

Wenn Docker-Container ohne die Mount-Verzeichnisse gestartet wird, werden die Pfade als Verzeichnisse angelegt.

**Lösung**

Entferne die Verzeichnisse.

```bash
sudo rm -rf /usr/share/prom01/prometheus.yml
```