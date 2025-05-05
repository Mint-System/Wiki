---
tags:
- Prozess
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
* Bei [[Kreis Infrastruktur]] nach dem Master-Passwort fragen
* Die Passwort-Datei `Mint-System/Data/Infrastructure.kdbx` auf der [[Cloud Mint System]] öffnen
* Als erstes das Keyfile `Mint-System/Secrets/KeePass.key` angeben und anschliessend das Passwort eingeben

## Passwörter speichern

Arbeitsschritte:

* Die Mint System Passwort-Datei öffnen
* Ein neue Eintrag gemäss [[Richtlinie - Passwortmanager]] erstellen
* Speichern und Datenbank synchronisieren