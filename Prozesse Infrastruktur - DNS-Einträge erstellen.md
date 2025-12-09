---
title: Prozesse Infrastruktur - DNS-Einträge erstellen
kind: howto
section: process
---

## DNS-Einträge für Server erstellen

- Name gemäss Liste [[Servers#Liste]] definieren
- DNS-Eintrag in Ansible im `setup` Inventory erstellen

## DNS-Einträge für Nextcloud erstellen

- Erstellen Sie einen Eintrag für Nextcloud und Services. Beispiel:

```
hub.example.com CNAME $NAME.mint-system.com
doc.example.com CNAME $NAME.mint-system.com
```

## DNS-Einträge für Mail erstellen

Für die Mail-Domain führen Sie diese Schritte aus:

- Erstellen Sie einen MX-Eintrag
- Erstellen Sie einen DKIM-Eintrag
- Erstellen Sie einen SPF-Eintrag
