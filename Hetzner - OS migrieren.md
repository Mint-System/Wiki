---
tags:
- HowTo
---
# Hetzner - OS migrieren

## Vorbereiten

* Anzeige Server in Hetzner-Cloud-Konsole
* Sicherstellen, dass Server eine zweiten Disk hat
* Sicherstellen, dass Docker-Daten auf der zweiten Disk sind

```yml
docker_data_dir: /mnt/sdb/docker
fstab_mounts:
  - path: /mnt/sdb
    src: /dev/disk/by-id/scsi-0HC_Volume_101440565
    opts: discard,nofail,defaults
    state: mounted
    fstype: ext4
```

## Ausführen

* Docker-Dienst auf Server stoppen

```bash
sudo service docker stop
```

* Anzeige Server in Hetzner-Cloud-Konsole
* Server herunterfahren
* Server mit aktuellem Debian Image rebuilden

::: warning
Nach einem Rebuild rebuild, wird der originale SSH-Public-Key für den Root-Benutzer bereitgestellt.
:::

* Server in Ansible Inventory aktualisieren und installieren

```bash
ansible-playbook -i inventories/setup plays/setup.yml -l $ALIAS -u root
```

* Anschliessend den Docker-Dienst neustarten

```bash
sudo service docker start
```

* Alle Container mit Ansible deployen:

```bash
ansible-playbook -i inventories/setup play_all.yml -l $ALIAS
ansible-playbook -i inventories/nextcloud play_nextcloud.yml -l $ALIAS
ansible-playbook -i inventories/odoo play_odoo.yml -l $ALIAS
```

* Un am Ende den Nginx starten

```bash
ansible-playbook -i inventories/nextcloud -i inventories/odoo -i inventories/setup play_nginx.yml -l $ALIAS --skip-tags check
```