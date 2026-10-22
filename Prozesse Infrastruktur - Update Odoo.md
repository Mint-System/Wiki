---
kind: howto
section: process
---

Update Odoo-Umgebung

## Odoo mit Ansible aktualisieren

Arbeitsschritte:

- Aktuelle Revision auf <https://odoo.build/revisions.html> nachschlagen
- Ansible-Inventory öffnen
- Anzeigen Odoo Staging-Umgebung `$ALIAS_odoo_staging`
- Bei den Host-Variablen das Datum und die Commit-Referenzen aktualisieren

```yaml
odoo_revision: "19.0.20260409"
odoo_image: mintsystem/odoo:19.0.20260409
odoo_repos:
  - path: enterprise
    url: git@github.com:odoo/enterprise.git
    commit: 1b3fc196ee3c1f33be6a4dd43b3274f182a990dd
```

- Den Container und Repos deployen

```bash
task play -i inventories/mint_system plays/odoo.yml -l ${ALIAS}_odoo_staging
```

- Auf den Server einloggen und die Module aktualisieren

```bash
task connect-host $ALIAS
docker-odoo-list -c "$CONTAINER"
docker exec "$CONTAINER" update-modules "$DATABASE"
```

- Wenn das Update sauber läuft auf der Staging-Umgebung einloggen
- Wenn das Update fehlerfrei lief kann die produktive Umgebung aktualisiert werden

::: warning
Es gibt Odoo Umgebungen ohne separate Staging-Container. In diesem Falls muss ein Update angekündigt werden. Es besteht das Risiko dass der Odoo-Prozess nach dem Deployment nicht korrekt startet.
:::
