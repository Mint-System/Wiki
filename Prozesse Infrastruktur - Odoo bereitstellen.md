---
kind: howto
section: process
---

Bereitstellung Odoo-Umgebung.

## Odoo mit Ansible bereitstellen

Arbeitsschritte:

- Odoo-Konfiguration im [[Ansible Inventory]] erstellen

Mit dem Befehl `task get-last-hostname odoo` gibt es Vorschläge für Hostnames.

- Odoo-Umgebung deployen

```bash
task play -i inventories/mint_system plays/odoo.yml -l ${ALIAS}_odoo
```

- Proxy-Konfiguration für Odoo bereitstellen

```bash
task play -i inventories/mint_system plays/nginx.yml -l $ALIAS
```

- Monitoring aktualisieren

```bash
task play -i inventories/mint_system plays/all.yml -t prometheus -l atlas
```

- Auf Server einloggen und Odoo-Datenbank initialisieren

Die Datenbank kann mit `docker-odoo-init` initalisiert werden.

- Den Reset-Staging-Job auf dem Server ausführen

## Odoo mit Helm bereitstellen

Arbeitsschritte:

* Auf [[Mint Cloud]] einloggen
* Das Odoo Chart anzeigen
* Einen neuen Release erstellen
	* Als "Release Name" den Name des Kunden verwenden
	* Als Namespace den Domainnamen verwenden
* Den Output von _Values.yaml_ kopieren
* Im [[Helm Values]] repo eine Datei erstellen
* Deployment mit Kuberentes Build ausführen:
	* Namespace erstellen
	* Secrets gemäss Odoo Chart erstellen
	* Odoo Release installieren
