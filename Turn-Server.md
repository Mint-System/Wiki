---
tags:
  - Definition
---

## Turn-Server

## Nextcloud Talk

Nextcloud hat das gut erklärt: [https://nextcloud-talk.readthedocs.io/en/latest/TURN/](https://nextcloud-talk.readthedocs.io/en/latest/TURN/)  
Und auch eine Installations-Anleitung für den Turn-Server geschrieben: [https://nextcloud-talk.readthedocs.io/en/latest/coturn/](https://nextcloud-talk.readthedocs.io/en/latest/coturn/)

Der Turn-Server muss auf Port 443 erreichbar sein und deshalb braucht es einen separaten Server/IP.  
Mit der korrekten Reverse-Proxy-Konfiguration wäre es möglich beides auf dem gleichen Server zu betreiben.

Aktuell haben wir keine fertige Lösung. Eine Alternative wäre die Verwendung eines Turn-Server von Dritten: [https://www.metered.ca/tools/openrelay/#turn-server-for-nextcloud-talk](https://www.metered.ca/tools/openrelay/#turn-server-for-nextcloud-talk)
