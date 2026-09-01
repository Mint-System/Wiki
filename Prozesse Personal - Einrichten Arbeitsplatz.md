---
section: process
kind: howto
---
### Desktop einrichten

Arbeitsschritte:

- Installation [[Nextcloud]] Desktop-Client [[Nextcloud Desktop Client Installation]] 
- Nextcloud: Einrichten Synchronisation [[Nextcloud - Desktop Client Synchronisation einrichten]] 
- Nextcloud: Ignore Files konfigurieren [[Nextcloud - Configure ignored files]].
- Installation [[Obsidian]] und Einrichten Zugriff auf Wikis
- Installation [[KeePassXC]] und Einrichten Zugriff auf Passwörter: [[Prozesse Infrastruktur - Passwörter verwalten]]
- Installation [[Element]] und Login auf [[Chat Mint System]]
- Installation [[Thunderbird]] und Einrichten Infomaniak Mail und Kalender

### Smartphone einrichten

Arbeitsschritte:

- Installation Nextcloud-App
- Einrichten Infomaniak Mail und Kalender

### Entwicklungsumgebung einrichten

Arbeitsschritte:

- Installation [[Mint System Dotfiles]]
- SSH Schlüssel [erstellen](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) und hinterlegen
- Ausführen Befehl `task setup-mint-system`
- Software-Pakete mit `task list` auflisten und mit `task install` installieren

### E-Mail Signatur festlegen

Arbeitsschritte:

- Speichere deine [[E-Mail Signaturen#Html|Html-Signatur]] in einer .html Datei.
- Ändere die nötige Angaben.
- Kontrolliere ob der Link zum Logo noch funktioniert im Browser.
- In Thunderbird-Einstellungen -> Konten-Einstellungen -> Unter "Stattdessen eine Datei als Signatur anhängen (Text, HTML oder Grafik):" Der gespeicherte html-Datei angeben.
- In Thunderbird-Einstellungen -> Algemein -> Konfiguration bearbeiten -> nach "mail.identity.default.suppress_signature_separator" suchen -> auf True setzen.
