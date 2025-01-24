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

* Umgebungsvariable festlegen:
```bash
export ALIAS=kronos
```

* Anzeige Server in Hetzner-Cloud-Konsole
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

* Alle Container mit Ansible deployen:

```bash
ansible-playbook -i inventories/setup plays/all.yml -l $ALIAS
ansible-playbook -i inventories/nextcloud plays/nextcloud.yml -l $ALIAS
ansible-playbook -i inventories/odoo plays/odoo.yml -l $ALIAS
```

* Und am Ende den Nginx starten

```bash
ansible-playbook -i inventories/nextcloud -i inventories/odoo -i inventories/setup plays/nginx.yml -l $ALIAS --skip-tags check
```