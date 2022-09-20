---
tags:
- Prozess
---
# Prozess Linux Sever Patching
Konfiguration Linux Server Patching.

## Neuer Server hinzufügen
Arbeitsschritte:
* Auf neuem Server mit SSH einloggen
* Public Key von Benutzer ansible hinzufügen
* Testen Passwordless Sudo
* Verbinden mit SSH-Key
* Einrichten Server in `hosts.yml` und `hosts_var`
* Test mit Playbook-Run
