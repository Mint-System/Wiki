---
kind: howto
section: process
---

Update Odoo-Umgebung

## Mehrere Odoo Revisionen aktualisieren

Arbeitsschritte:

- Öffnen aktuelles Worklog _Odoo Revision Update_
- Ein Odoo-Host auswählen
- In Ansible-Inventar die Informationen zur Odoo Revision aktualisieren
- Den Odoo-Container deployment `task play -i inventories/mint_system plays/odoo.yml -l ${ALIAS}_odoo`
- Optional: Nach erfolgreichem Deployment die Aktion _Apps > Auto-Upgrade Modules_ ausführen

!!! warning
    Damit diese Aktion verfügbar ist, muss das Modul `module_auto_update` installiert werden.

- Mitteilung an Kunde und Projektleiter via Aufgabe "Projektadministration" (Follower vorher bereinigen)

Mail-Vorlage: Odoo Revision Update

```
Guten Tag

Die Revision Ihrer Odoo Installation wurde aktualisiert.

Mit dem Update wurde neuer Odoo Code bereitgestellt. Wenn dies zu Problemen und Fehlermeldungen führt, empfehlen wir, als erstes den Browser-Cache zu löschen:

Firefox: https://www.odoo-wiki.org/development/#browser-cache-in-firefox-loschen

Chrome: https://www.odoo-wiki.org/development/#browser-cache-in-chrome-loschen

Falls danach immer noch Probleme bestehen, bitten wir Sie, mit uns Kontakt aufzunehmen.

Freundliche Grüsse
```


## Einzelne Odoo Revisionen aktualisieren

Arbeitsschritte:

- Aktuelle Revision auf <https://odoo.build/revisions/> nachschlagen
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

!!! warning
    Es gibt Odoo Umgebungen ohne separate Staging-Container. In diesem Falls muss ein Update angekündigt werden. Es besteht das Risiko dass der Odoo-Prozess nach dem Deployment nicht korrekt startet.

