---
tags:
- HowTo
---
# Hetzner - Festplattenspeicher erweitern

## Volume erstellen

Arbeitsschritte:

* In Hetzner Cloud Console den Server anzeigen
* Im Register *Volumes* ein neus Volume erstellen
* Bennen nach schema `$ALIAS-disk$N`, beispielsweise `zeus-disk2`
* Aktion *Volume Anhängen* ausführen
* Das Volume mit Ansible mounten
* Mit [[Docker - Move Docker data directory to new location]] weiterfahren.

## Volume erweitern

Arbeitsschritte:

* In Hetzner Cloud Console den Server anzeigen
* Unter Volumes das bestehende Volume bearbeiten und Speicherplatz hinzufügen
* `lsblk` auf Server ausführen um die Disk anzuzeigen
* Das entsprechende Volume erweitern mit `resize2fs /dev/sdb`
* Mit `df -h` den neuen Speicherplatz anzeigen

## Troubleshooting

### Volume kann nicht angehängt werden

**Problem**

```
Cannot attach volume automatically nor manually.  
   
 Trying to attach a volume automatically results in an error in web console without  
 details.  
   
 Trying to attach the volume manuall results in this error:  
   
 janikvonrotz@apollo ➜  ~ sudo mkfs.ext4 -F /dev/disk/by-id/scsi-0HC_Volume_10321808  
 mke2fs 1.45.5 (07-Jan-2020)  
 The file /dev/disk/by-id/scsi-0HC_Volume_10321808 does not exist and no size was  
 specified.  
   
 Rebooting the sever did not help in both cases.
```

**Lösung**

Server muss ganz heruntergefahren werden.

```
If a cloud server is active for a longer period of time, it is possible that a volume cannot be fully attached.  
  
Please shut down the cloud server completely for a few seconds and then start it again.   
Unfortunately, a restart is not sufficient here.

Then please check whether you can attach the desired volume to your cloud server.
```