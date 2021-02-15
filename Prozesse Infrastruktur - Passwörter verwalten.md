# Prozess Passwörter verwalten

## Passwortspeicher anlegen

Arbeitsschritte:
* [[KeePassXC]] öffnen und Datenbank erstellen
* Keyfile generieren und auf Nextcloud abspeichern
* Passwort festlegen und in Master-Keystore speichern
* Datenbank auf [[Cloud Mint System]] speichern

## Passwortmanager einrichten

Arbeitsschritte:
* Installation [[KeePassXC]] auf dem lokalen Computer
* Bei [[Team Infrastruktur]] nach dem Master-Passwort und Pfad zum Keyfile fragen
* Die Passwort-Datei `Mint-System/Data/Infrastructure.kdbx` von der [[Cloud Mint System]] öffnen
* Als erstes das Keyfile `Mint-System/Secrets/KeePass.key` angeben und anschliessend das Passwort eingeben

## Passwörter speichern

Arbeitsschritte:
* Die Mint System Passwort-Datei öffnen
* Bei einer längeren Bearbeitung die Datenbank sperren
* Ein neue Eintrag gemäss [[Richtlinie - Passwörter]] erstellen
* Speichern und Datenbank entsperren