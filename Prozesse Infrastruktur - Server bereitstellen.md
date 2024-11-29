---
tags:
- Prozess
---
# Prozesse Infrastruktur - Server bereitstellen
Bereitstellung eines neuen Server.

## Server bei Hetzner erstellen

Arbeitsschritte:
* Im Portal von [[Hetzner]] einloggen
* Server an Standort in nähe Schweiz gemäss [[Managed Server Kalkulation]] auswählen
* Volume mit Name `$ALIAS.mint-system.com` erstellen
* SSH-Key auswählen
* Als Name `$ALIAS.mint-system.com` eingeben

## Server mit Ansible bereitstellen

Arbeitsschritte:
* Alias und Hostname in `setup/hosts.yml` Inventory erfassen
* Sicherheitsregeln für SSH-Port prüfen
* Bereitstellung mit `plays/setup.yml` Playbook
* Erstellen Fstab- und Nginx-Konfiguration in `setup/host_vars/$ALIAS.yml`

Prüfe mit diesem Befehl die freien Host-Nummern:

```bash
rg -I "^nginx_hostname: nginx" inventories  | sort -h
```

* Bereitstellung mit `plays/proxy.yml` Playbook
* Aktualisieren Prometheus-Konfiguration
* Verifizieren Server erscheint in Monitoring

## Passwordless Sudo einrichten

Arbeitsschritte:
* Einloggen auf Server mit Benutzername und Login
* Erstellen Eintrag `$USERNAME ALL=(ALL) NOPASSWD: ALL` in `/etc/sudoers`
* Session neustarten und Passwordless Sudo testen
