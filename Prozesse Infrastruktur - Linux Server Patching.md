---
title: Prozesse Infrastruktur - Linux Sever Patching
kind: howto
section: process
---

Konfiguration Linux Server Patching.

## Neuer Server hinzufügen

Arbeitsschritte:

- Auf neuem Server mit SSH einloggen
- Public Key von Benutzer ansible hinzufügen
- Testen Passwordless Sudo
- Verbinden mit SSH-Key
- Einrichten Server in `hosts.yml` und `hosts_var`
- Test mit Playbook-Run

## Linux Server Patching ausführen

The patching of server software has the risk of default configurations being applied that make server no longer working. Example is AppArmor blocking Docker service from starting. To avoid this issue at scale the servers are being patched in groups.

Arbeitsschritte:

- Run the Ansible update command for a limited selection of hosts. Select hosts non-customer servers for the first run.

```bash
aplaybook -i inventories/setup plays/setup.yml -l kronos,atlas,hades,hermes,cratos -t update
```

- Check if the servers and services recover after a reboot.
- Check the monitoring alert rules.
- Run the same command for for Mint System servers.

```bash
aplaybook -i inventories/setup plays/setup.yml -l apollo,zeus,hyperion,nyx -t update
```

- If the the patching is successful, add customer servers.
- Check the monitoring alert rules.
