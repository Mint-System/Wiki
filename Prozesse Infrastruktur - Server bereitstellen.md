# Prozess Server bereitstellen
Bereitstellung eines neuen Server.

## Server mit Ansible bereitstellen

Arbeitsschritte:
* Konfiguration im *setup* Inventory erfassen
* Festlegen Zugriffsberechtigungen
* Bereitstellung mit `play-setup.yml` Playbook
* Sicherheitsregeln für Ports prüfen

## Passwordless Sudo einrichten

Arbeitsschritte:
* Einloggen auf Server mit Benutzername und Login
* Erstellen Eintrag `$USERNAME ALL=(ALL) NOPASSWD: ALL` in `/etc/sudoers`
* Session neustarten und Passwordless Sudo testen