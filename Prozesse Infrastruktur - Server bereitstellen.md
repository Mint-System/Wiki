---
title: Prozesse Infrastruktur - Server bereitstellen
kind: howto
section: process
---

Bereitstellung eines neuen Server.

## Server bei Hetzner erstellen

Arbeitsschritte:

- Im Portal von [[Hetzner]] einloggen
- Server gemäss Verkaufsauftrag erstellen
- Volume mit Name `$ALIAS.mint-system.com` erstellen
- SSH-Key auswählen
- Als Name `$ALIAS.mint-system.com` eingeben
- Sobal die IP-Adresse zugewiesen wird, kann der DNS-Eintrag erstellt werden

## DNS-Einträge für Server erstellen

- Name gemäss [[Richtlinie - Namenskonventionen#Servers]] festlegen
- DNS-Eintrag in Ansible im `setup` Inventory erstellen

Mit `task list-hosts inventories | grep $ALIAS` sicherstellen, dass Name noch nicht verwendet wurde.

- Mit dem entsprechenden Ansible-Befehl den Eintrag erstellen

## Server mit Ansible bereitstellen

Arbeitsschritte:

- Alias und Hostname in `setup/hosts.yml` Inventory erfassen
- Sicherheitsregeln für SSH-Port prüfen
- Bereitstellung mit `plays/setup.yml` Playbook
- Erstellen Fstab- und Nginx-Konfiguration in `setup/host_vars/$ALIAS.yml`

Prüfe mit diesem Befehl die freien Host-Nummern:

```bash
task get-last-hostname nginx
```

- Bereitstellung mit `plays/proxy.yml` Playbook
- Aktualisieren Prometheus-Konfiguration
- Verifizieren Server erscheint in Monitoring
