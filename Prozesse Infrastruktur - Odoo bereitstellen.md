---
tags:
  - Prozess
kind:
  - howto
section: process
---

# Prozesse Infrastruktur - Odoo bereitstellen

Bereitstellung Odoo-Umgebung.

## Odoo mit Ansible bereitstellen

Arbeitsschritte:

- Odoo-Konfiguration in [[Ansible Inventory]] erstellen
- Odoo-Umgebung deployen
- Proxy-Konfiguration in [[Ansible Inventory]] erstellen
- Odoo-Datenbank initialisieren

## Odoo mit Helm bereitstellen

Arbeitsschritte:

* Auf [[Mint Cloud]] einloggen
* Das Odoo Chart anzeigen
* Einen neuen Release erstellen
	* Als "Release Name" den Name des Kunden verwenden
	* Als Namespace den Domainnamen verwenden
* Den Output von "Values.yaml" kopieren
* Im [[Kubernetes Build]] repo unter `values` eine Datei erstellen
