---
tags:
- Prozess
---
# Prozesse Infrastruktur - Server bereitstellen
Bereitstellung eines neuen Server.

## Server mit Ansible bereitstellen

Arbeitsschritte:
* Alias und Hostname in `setup/hosts.yml`  Inventory erfassen
* Sicherheitsregeln für SSH-Port prüfen
* Bereitstellung mit `play_setup.yml` Playbook
* Erstellen Nginx-Konfiguration für Monitoring in `setup/host_vars/$ALIAS.yml`
* Bereitstellung mit `play_proxy.yml` Playbook
* Aktualisieren Prometheus-Konfiguration
* Verifizieren Server erscheint in Monitoring

## Passwordless Sudo einrichten

Arbeitsschritte:
* Einloggen auf Server mit Benutzername und Login
* Erstellen Eintrag `$USERNAME ALL=(ALL) NOPASSWD: ALL` in `/etc/sudoers`
* Session neustarten und Passwordless Sudo testen
