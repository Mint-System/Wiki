# Server-Zugriff verwalten
Zugriff der Benutzer auf Server verwalten.

## Schlüsselpaar erstellen

Arbeitsschritte:
* Kommandozeile öffnen
* SSH-Schlüsselpaar generieren mit Befehl `ssh-keygen -t ed25519 -C "VORNAME.NACHNAME@mint-system.ch"`
* Den privaten Schlüssel sicher aufbewahren

## Server-Benutzer bestellen

Arbeitsschritte:
* Den öffentlichen SSH-Schlüssel kopieren `cat ~/.ssh/id_ed25519.pub`
* Liste der [[Server]] auf die der Benutzer Zugriff haben soll
* Den Benutzernamen ausgeben `whoami`
* Erstellen Aufgabe mit diesen Informationen in Infrastuktur-Projekt

## Server-Benutzer erfassen

Arbeitsschritte:
* Öffnen Ansible Infrastraktur-Projekt
* Benutzer mit Berechtigungen im Setup-Inventory erfassen
* Konfiguration verteilen
