---
tags:
  - HowTo
lang: en
---
# Exoscale - Extend disk space

## Create block storage

* Login into Exoscale
* Got to *Compute > Block Storage*
* Create a new entry in the same zone as the server
* Attach it to the server
* Get disk path from `/dev/disk/by-id/$DISK_ID`
* Format the disk `sudo mkfs.ext4 /dev/disk/by-id/$DISK_ID`

### Mount block storage

```bash
sudo mount -t ext4 -o discard,nofail,defaults /dev/disk/by-id/virtio-aa92737a-d415-4b14-8 /mnt/sdb
```

## Mount block storage with Ansible

* In Ansible create a fstab entry:

```yml
fstab_mounts:
  - path: /mnt/sdb
    src: /dev/disk/by-id/$DISK_ID
    opts: discard,nofail,defaults
    state: mounted
    fstype: ext4
```

* Mount the fstab:

```bash
aplaybook -i inventories/setup/ plays/setup.yml -t fstab -l $ALIAS
```
