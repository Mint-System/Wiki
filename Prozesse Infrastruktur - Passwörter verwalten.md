---
tags:
  - Prozess
kind:
  - howto
---
# Prozesse Infrastruktur - Passwörter verwalten

## Passwort-Speicher anlegen

Arbeitsschritte:

* [[KeePassXC]] öffnen und Datenbank erstellen
* Keyfile generieren und auf Nextcloud abspeichern
* Passwort festlegen und in Master-Keystore speichern
* Datenbank auf [[Cloud Mint System]] speichern

## Passwortmanager einrichten

Arbeitsschritte:

* Installation [[KeePassXC]] auf dem lokalen Computer
* Bei [[Kreis Infrastruktur]] nach dem Infrastruktur-Passwort fragen
* Die KeePass-Datei `Mint-System/Data/Infrastructure.kdbx` auf der [[Cloud Mint System]] öffnen
* Die Schlüsseldatei `Mint-System/Secrets/KeePass.key` angeben und anschliessend das Infrastruktur-Passwort eingeben
* Mit *Unlock* die KeePass-Datei entschlüsseln

## Passwörter speichern

Arbeitsschritte:

* Die Mint System Passwort-Datei öffnen
* Ein neue Eintrag gemäss [[Richtlinie - Passwortmanager]] erstellen
* Speichern und Datenbank synchronisieren