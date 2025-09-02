---
tags:
  - Prozess
kind:
  - howto
section: process
---
# Prozesse Wiki - Mitarbeit

Technische Konfigurationen damit Sie an der Wissensdatenbank mitarbeiten können.

## Initialisierung

Arbeitsschritte:
1. Erstellen Sie einen Account auf <https://github.com/>
2. Werden Sie Mitglied bei <https://github.com/Mint-System/> (optional)
3. Installieren Sie <https://obsidian.md/>
4. Installieren Sie <https://git-scm.com/>
5. Verwenden Sie ihren bestehenden SSH-Schlüssel oder erstellen Sie ein neues SSH-Schlüsselpaar <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent>
6. Forken Sie das *Wiki Mint System* Repository (optional)
7. Klonen Sie das *Wiki Mint System* Repository

```bash
git clone git@github.com:Mint-System/Wiki.git
```

8. Öffnen Sie den Ordner mit Obsidian

Beachten Sie dabei die [[Richtlinie - Obsidian]].

## Synchronisierung

Der Obsidian Vault und das Git Repository werden mit dem Obisidian Git Plugin synchronisiert.

![[Obsidian Git Plugin.png]]
## Publizierung

Die Inhalte die auf GitHub unter <https://github.com/Mint-System/Wiki> vorhanden sind, werden automatisch von [[Vercel]] unter <https://wiki.mint-system.ch> publiziert.

Damit man die Inhalte auf GitHub stellen kann benötigt man:
* Einen GitHub-Account
* Zugriff auf die [Mint System Organisation](https://github.com/Mint-System)
* Einen [[Git#Client|Git Client]]

::: warning
Wenn man mit Git direkt auf der Nextcloud-Ablage nutzen möchte, muss man die [[Nextcloud - Configure ignored files|Standard-Dateifilter festlegen]].
:::

## Artikel übersetzen

Aktuell ist die Knowledge-Base nur in Deutsch verfügbar.

Erstellt man eine Übersetzung eines ganzen Artikels, so verlinkt man diesen unterhalb des Titel `Übersetzung: [[Policy Project Management]]` und fügt im übersetzten Artikel den tag `lang: en` ein.

Ein Beispiel ist [[Richtlinie - Projektmanagement]].

## Tags

Siehe [[Tags]] für Details.
## Metadaten

Alle Wiki-Einträge können im Frontmatter Metadaten enthalten. Folgende Metadaten sind definiert:

* `tags`: Auswahl aus der Liste von [[Tags]].
* `responsible`: Person oder Rolle Verantwortlich für den Prozess.
* `responsibilities`: Bereiche in der Verwantwortung der Person.
* `title`: Alternativer Name für den Artikel.
* `type`: Zuordnung Bereich Dokumentationssytem.