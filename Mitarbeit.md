# Mitarbeit
Wie können Dritte und Mitarbeiter der [[Mint System GmbH]] diese Wissensdatenbank bearbeiten?

## Nextcloud-Ablage

Der Ordner *Wiki Mint Systen* auf der Nextcloud-Ablage enthält eine Kopie von <https://github.com/Mint-System/Wiki>.

Diese Ablage kann mit [[Obsidian]] geöffnet und bearbeitet werden. Möchte man die Inhalte publizieren braucht es eine Git-Synchronisation.

## Obsidian

Für eine konfliktfreie Bearbeitung der Inhalte mit Obsidian müssen die folgenden Einstellungen vorgenommen werden:
* Editor - Strict line breaks: On
* Plugin - Slides: On
* Plugin - Tag pane: On

## Git-Synchronisation

Die Inhalte die auf GitHub unter <https://github.com/Mint-System/Wiki> vorhanden sind, werden automatisch von [[Vercel]] unter <https://wiki.mint-system.ch> publiziert.

Damit man die Inhalte auf GitHub stellen kann benötigt man:
* Einen GitHub-Account
* Zugriff auf die [Mint System Organisatin](https://github.com/Mint-System)
* Einen [[Git#Client|Git Client]]

!> Wenn man mit Git direkt auf der Nextcloud-Ablage nutzen möchte, muss man die [[Nextcloud - Configure ignored files|Standard-Dateifilter festlegen]].

## Übersetzungen

Aktuell ist die Knowlege-Base nur in Deutsch verfügbar.

Möchte man für bestimmte Wörter Übersetzungen anlegen, so erstellt man einen Artikel mit dem gleichen Namen und für eine englische Übersetzung `.en` an.

Für mehrsprachige Angaben innerhalb eines Artikels verwendet man diese Form:

Das ist eine Notiz (*This is a note*).\
Notiz(*Note*)

### Artikel übersetzen

Erstellt man eine Überersetzung eines ganzen Artikels, so fügt man unter dem Titel der Notiz die folgende Definition ein: `Übersetzung en_GB: [[Link to translated note]]`.

Ein Beispiel dazu ist [[Richtlinie - Projektmanagement]].