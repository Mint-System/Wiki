---
title: Prozesse Infrastruktur - Nextcloud bereitstellen
kind: howto
section: process
---

Bereistellung Nextcloud-Umgebung.

## DNS-Einträge für Nextcloud erstellen

- Erstellen Sie einen Eintrag für Nextcloud und Collabora. Beispiel:

```
hub.example.com CNAME $NAME.mint-system.com
doc.example.com CNAME $NAME.mint-system.com
```

## Nextcloud-Umgebung bereitstellen

Arbeitsschritte:

- Nextcloud-Konfiguration in [[Ansible Inventory]] erstellen
- Nextcloud-Playbook ausführen