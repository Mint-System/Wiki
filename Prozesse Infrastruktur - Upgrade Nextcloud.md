---
section: process
kind: howto
---

## Produktives Upgrade ausführen

Arbeitsschritte:

- Hopst-Alias festlegen

```bash
export ALIAS=eos
```

- Aktuelle Datenbank sichern

```bash
cd Ansible-Build
task connect-host $ALIAS
sudo cron-job-run -n "Backup Nextcloud database"
```

- Docker-Image-Tag im Inventory aktualisieren

```yml
nextcloud_image: nextcloud:32-apache
```

- Den Nextcloud-Container deployen

```bash
task play -i inventories/mint_sytem plays/nextcloud.yml -l eos_nextcloud
```

- Deployment abbrechen sobald das Upgrade läuft
- Nach Ausführung des Upgrade das Playbook erneut ausführen

