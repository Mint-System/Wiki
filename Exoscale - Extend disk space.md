---
tags:
  - HowTo
lang: en
kind: explain
---

# Exoscale - Extend disk space

## Create block storage

- Login into Exoscale
- Got to _Compute > Block Storage_
- Create a new entry in the same zone as the server
- Add a label `name` with value `$ALIAS.mint-system.com`
- Attach it to the server
- Get disk path from `/dev/disk/by-id/$DISK_ID`
- Format the disk `sudo mkfs.ext4 /dev/vdb`

### Mount block storage

- Create a mount point

```bash
sudo mkdir -p /mnt/sdb
```

- Mount the disk

```bash
sudo mount /dev/vdb /mnt/sdb
```

- Add `/etc/fstab` entry:

```
/dev/vdb /mnt/sdb ext4 discard,nofail,defaults 0 0
```

## Mount block storage with Ansible

- In Ansible create a fstab entry:

```yml
fstab_mounts:
  - path: /mnt/sdb
    src: /dev/disk/by-id/$DISK_ID
    opts: discard,nofail,defaults
    state: mounted
    fstype: ext4
```

- Mount the fstab:

```bash
aplaybook -i inventories/setup/ plays/setup.yml -t fstab -l $ALIAS
```
