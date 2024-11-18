---
tags:
- Prozess
---
# Prozesse Infrastruktur - Server-Zugriff verwalten
Zugriff der Benutzer auf Server verwalten.

## Schlüsselpaar erstellen

Arbeitsschritte:
* Die Kommandozeile öffnen
* SSH-Schlüsselpaar generieren mit Befehl `ssh-keygen -t ed25519 -C "VORNAME.NACHNAME@mint-system.ch"`
	* Der Speicherort belassen (Enter drücken)
	* Bei der Passwort-Eingabe leer lassen und zweimal Enter drücken
* Den privaten Schlüssel sicher aufbewahren

## Server-Benutzer bestellen

Arbeitsschritte:
* Die Kommandozeile öffnen
* Den öffentlichen SSH-Schlüssel ausgeben  `cat ~/.ssh/id_ed25519.pub`
* Eintrag von [[Servers#Liste]] auswählen
* Den Benutzernamen ausgeben `whoami`
* Aufgabe mit diesen Informationen in Infrastuktur-Projekt erstellen

## Server-Benutzer erfassen

Arbeitsschritte:
* Öffnen Ansible Infrastraktur-Projekt
* Benutzer mit Berechtigungen im Setup-Inventory erfassen
* Konfiguration verteilen
