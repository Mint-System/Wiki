# Mitarbeit
Wie können Dritte und Mitarbeiter der [[Mint System GmbH]] diese Wissensdatenbank bearbeiten?

## Verwendung

Technische Konfigurationen damit sie an der Wissensdatenbank mitarbeiten können.

### Initialisierung

1. Erstellen sie einen Account auf <https://github.com/>
2. Werden sie Mitgleid bei <https://github.com/Mint-System/> (optional)
3. Installieren sie <https://obsidian.md/>
4. Installieren sie <https://git-scm.com/>
5. Erstellen sie ein SSH-Schlüsselpaar <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent>
6. Forken sie das *Wiki Mint System* Repository (optional)
7. Klonen sie das *Wiki Mint System* Repository

```bash
git clone git@github.com:Mint-System/Wiki.git
```

7. Öffnen sie den Ordner mit Obsidian

### Synchronisierung

Der Obsidian Vault und das Git Repository werden mit dem Obisidian Git plugin synchronisiert.

**Pull**

Aktualisieren sie das lokale Git Repository.
* <kbd>ctrl + p</kbd> drücken
* Befehl `Obisdian Git: Pull from remote repository` ausführen

**Push**

Ihre Änderungen werden gespeichert und auf <https://github.com/Mint-System/Wiki> mitgeteilt.
* <kbd>ctrl + p</kbd> drücken
* Befehl `Obisdian Git: Create backup` ausführen

## Nextcloud-Ablage

Der Ordner *Wiki Mint Systen* auf der Nextcloud-Ablage enthält eine Kopie von <https://github.com/Mint-System/Wiki>.

Diese Ablage kann mit [[Obsidian]] geöffnet und bearbeitet werden. Möchte man die Inhalte publizieren braucht es eine Git-Synchronisation.

## Obsidian

Für eine konfliktfreie Bearbeitung der Inhalte mit Obsidian müssen die folgenden Einstellungen vorgenommen werden:
* Editor - Strict line breaks: On
* Plugin - Slides: On
* Plugin - Tag pane: On

## Publizierung

Die Inhalte die auf GitHub unter <https://github.com/Mint-System/Wiki> vorhanden sind, werden automatisch von [[Vercel]] unter <https://wiki.mint-system.ch> publiziert.

Damit man die Inhalte auf GitHub stellen kann benötigt man:
* Einen GitHub-Account
* Zugriff auf die [Mint System Organisation](https://github.com/Mint-System)
* Einen [[Git#Client|Git Client]]

!> Wenn man mit Git direkt auf der Nextcloud-Ablage nutzen möchte, muss man die [[Nextcloud - Configure ignored files|Standard-Dateifilter festlegen]].

## Übersetzungen

Aktuell ist die Knowlege-Base nur in Deutsch verfügbar.

Möchte man für bestimmte Wörter Übersetzungen anlegen, so erstellt man einen Artikel mit dem gleichen Namen und für eine englische Übersetzung `.en` an.

Für mehrsprachige Angaben innerhalb eines Artikels verwendet man diese Form:

Das ist eine Notiz (*This is a note*).\
Notiz(*Note*)

### Artikel übersetzen

Erstellt man eine Überersetzung eines ganzen Artikels, so fügt man unter dem Titel der Notiz die folgende Definition ein: `Übersetzung: [[Titel.en]]`.

Ein Beispiel dazu ist [[Richtlinie - Projektmanagement]].

## Metadaten

Für Markdown-Dateien können nach dem Frontmatter-Schema Metadaten definiert werden.

```yaml
---
publish: false
tags:
- Nextcloud
---

# Titel
...
```