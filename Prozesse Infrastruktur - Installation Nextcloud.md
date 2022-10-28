---
tags:
- Prozess
---
# Prozesse Infrastruktur: Installation Nextcloud
Bereistellung Nextcloud-Umgebung.

## Nextcloud-Umgebung bereitstellen

Arbeitsschritte:
* Nextcloud-Konfiguration in [[Ansible Inventory]] erstellen
* Nextcloud-Playbook deployen
* Einloggen mit Administrator und folgende Einstellungen vornehmen:
	* Hintergrund-Aufgaben: Cron
	* Design: Name, Internet-Link, Slogan, Farbe

## Nextcloud aktualisieren

Arbeitsschritte:
* Image-Variable für Nextcloud in [[Ansible Inventory]] anpassen
* Deployment für Host  ausführen
* Überwachen des Update-Prozess