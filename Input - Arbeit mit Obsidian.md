---
title: Input - Arbeit mit Obsidian
section: training
kind:
  - tutorial
---
Dieses Tutorial erläutert die Arbeit mit [[Obsidian]]. Es ist in Abschnitten mit Leitfragen unterteilt.

## Über

> Was ist Obsidian?

Mit Obsidian kannst du Text-Dateien bearbeiten und miteinander verlinken. Es eignet sich zur Verwaltung von persönlichen Notizen, Journalen und Wissensdatenbanken.

> Wie nutzen wir Obsidian?

Projekt- und Unternehmensdokumente werden als Text-Dateien mit Obsidian verwaltet. Obsidian ersetzt den Datei-Explorer und die Suchfunktion auf der Benutzeroberfläche des Betriebssystems.

Im Weiteren haben bearbeiten wir mehrere Wissensdatenbanken (Wiki Mint System, Odoo Wiki) und Git-Projekte (Ansible Build, Odoo Build) mit Obsidian.

## Setup

> Wie installiere ich Obsidian?

Du kannst Obsidian von <https://obsidian.md/> herunterladen und installieren.
## Vault

> Was ist ein Obsidian Vault?

Wenn du Obsidian das erste Mal öffnest, wirst aufgeordert einen Vault zu erstellen oder zu öffnen. Der Vault ist ausgewählter Ordner, der mit Obsidian verwaltet werden soll 

Wir nehmen an, dass der Nextcloud-Ordner in das Verzeichnis `/home/janikvonrotz/cloud.mint-system.ch/` synchronisiert wurde.

Du kannst mit Obsidian diesen Vault/Ordner öffnen: `/home/janikvonrotz/cloud.mint-system.ch/Mint System/`. Beim ersten Mal fragt OBsidian, ob man dem Author vertrauen möchte. Bestätige den Dialog mit Ja. 

Wenn ein Ordner als Vault festgelegt wird, dann legt Obsidian im Ordner einen versteckten Datenordner `.obsidian` an. In unserem Fall ist das `/home/janikvonrotz/cloud.mint-system.ch/Mint System/.obisidian/`.

### Einstellungen

> Wo finde ich die Obsidian bzw. Vault-Einstellungen?

Wenn du in der Leiste unten links auf das Einstellung-Icon klickst, gelangst du in die Obsidian bzw. Vault-Einstellungen. Alle Einstellungen werden immer für den aktiven Vault gemacht.

::: warning
Die Einstellungen werden mit anderen Teilnehmer / Vault-Benutzern geteilt. Bitte bearbeite die Einstellungen nur in Absprache mit anderen Teilnehmern.
:::

## Navigation

> Wie navigiert man in Obsidian?

Du hast den `Mint System` Vault geöffnet und siehst nun drei Panels:

![[Arbeit mit Obsidian - Panels.png]]

Auf der linken Seite navigierst und durchsucht du den Vault/Ordner. In der Mitte bearbeitest du Notizen, Tabellen, Zeichnungen und Diagramme und auf rechten Seite findest du Detail-Informationen zur geöffneten Notiz.

### Suchen

> Wie suche ich nach einer Notiz?

Oben links neben dem Order-Icon ist das Such-Icon. Klick darauf und gibt `Mint Cloud` ein. Die Such-Resultate enthalten entweder `Mint` oder `Cloud`. Stelle nun ein Anführungszeichen davor `"Mint Cloud`. Nun sucht Obsidian nach dem ganzen Ausdurck.

### Befehle

> Wie kann ich Befehle ausführen?

Wie dir vermutlich aufgefallen ist, gibt es in Obsidian keine Menüleiste um Befehle auszuführen. Drücke `ctrl` + `p` und es erscheint eine Befehlspalette mit allen verfügbaren Befehlen.

## Notizen

> Wie bearbeite ich Notizen?

Wenn du den `Mint System` Vault geöffnet hast, drückst du `ctrl` + `o` um nach einer Datei zu suchen. Gib in der Suchmaske `Mint Cloud` ein. Der erste Vorschlag sollte `Projekte/Mint Cloud Private/README.md` sein. Drücke `Enter` um diese Datei zu öffnen.

Nun bist du direkt Bearbeitungs-Modus und kannst den Inhalt der Datei anpassen.

::: tip
Es gibt keinen Speichern-Befehl in Obsidian. Alle Bearbeitungen werden direkt gespeichert.
:::

::: tip
Drücke `ctrl` + `shift` + `R` um die geöffnete Datei in der Ordnerstruktur anzuzeigen. 
:::

### Markdown

> Was ist Markdown?

Wenn du die Notizen-Dateien im Datei-Explorer anzeigt, siehst du, dass diese die Dateiendung `.md` haben. Das Kürzel steht für Markdown. Markdown ist ken Dateiformat, sondern eine sog. Auszeichnungssprache.

Gib in der Datei `README.md` den Text `Dieser Text einhält eine **Fettformatierung**.`. Wie du siehst, wird der Text innerhalb der `**` Zeichen fett formatiert. Mit Markdown kann man Texte mit Text formatieren.

Um mehr über Markdown zu lernen besuche <https://www.markdownguide.org/>.

### Frontmatter

> Was ist das Frontmatter?

Für jede Markdown-Datei kannst du Metadaten festlegen. Wenn die Markdown-Datei mit `---` beginnt, wird dies als Abschnitt für Metadaten interpretiert. Hier ein Beispiel für Metadataten:

```
---
projekt: Mint Cloud
---
```

::: tip
Drücke `ctrl` + `e` um eine Vorschau der Markdown-Datei zu erhalten. Die Metadaten können in der Vorschau in Text-Boxen bearbeitet werden.
:::

### Verlinkung

> Wie können Notizen miteinander verlinkt werden.

Obsidian arbeitet mit Wikilinks `[[]]`. Um in einer Notiz eine andere Notiz zu verlinken, schreibst du `[[` und kannst nach der Datei suchen. Sobald du eine Auswahl hast und `Enter` drückst, wird der Linkt mit `]]` abgeschlossen.

::: tip
Du kannst auch Überschriften innerhalb einer Notiz verlinken. Wenn du in der Suche die gewünschte Datei in der Auswahl hast, gibst `#` ein und es erscheint eine Auswahl der Überschriften.
:::

::: tip
Wenn die Option _Wikilinks_ für den Vault deaktiviert ist, dann konvertiert Obsidian den Wikilink `[[]]` in das gewöhnliche Markdown-Format `[]()`.
:::

## Plugins

> Welche Plugins gibt es?

Der Funktionsumfang von Obsidian kann mit einer Vielzahl an Plugins erweitert werden. Hier die wichtigsten und of meist-verwendeten Plugins:

### QuickAdd

Mit QuickAdd werden Vorlagen für Notizen definiert.

> Welche Vorlagen gibt es?

Im `Mint System` Vault findet man einen Ordner `templates`. Hier sind alle verfügbaren Vorlagen definiert.

> Wie erstelle ich eine Datei aus einer Vorlage?

Um eine Datei aus einer Vorlage zu erstellen, musst du zuerst eine Datei im Ordner, wo die neue Datei erstellt werden soll, auswählen. Rufe die Befehlspalette auf und führen den Befehl `QuickAdd: Run QuickAdd` aus. Wähle eine Vorlage aus und gib Werte für die Platzhalter ein. 

### Tabellen

In Markdown gibt es eine Syntax für Tabellen<https://www.markdownguide.org/extended-syntax/#tables>. Dieses Plugin unterstützt die Bearbeitung von Tabellen.

> Wie erstelle und bearbeite ich Tabellen in Obsidian?

Um eine Tabelle zu Erstellen gibst du den folgenden Text ein:

```
| Name |
|---|
```

Klicke auf *Name* und drück `Enter`. Du hast nun eine Tabelle mit einer Zelle und einer Überschrift. Klicke in der linken Leiste auf das Tabellen-Icon und im rechten Panel erscheinen Befehle zur Bearbeitung der Tabellen.

### Excalidraw

Dieses Plugin intergriert <https://excalidraw.com/> in Obsidian. Es ist ein ausgezeichnetes Werkzeug für Flipcharts, Zeichnungen und Diagramme.

> Wie erstelle ich Zeichnungen mit Excalidraw?

Wähle eine Notiz im Ordner aus, wo die Excalidraw-Zeichnung erstellt werden soll. Rufe den Befehl `Excalidraw: Create new drawing` auf.

### Active User and Participants

Obsidian kennt keine Benutzer. Mit diesem Plugin kann man Teilnehmer eines Vaults definierten und den eigenen Benutzer festlegen.

> Wie tagge ich ein Teilnehmer?

Geben Sie `@` und den Namen des Teilnehmers ein. Drücken Sie bei der Auswahl `Enter` und Obsidian fügt einen Mention-Link ein.

::: tip
Wenn die Option _Wikilinks_ deaktiviert ist, haben die Mention-Links das gleiche Format wie die aus der Nextcloud generierten Mentions-Links. 
:::
### Bases

Ist eine Obidian Core-Plugin. Mit Bases können die Frontmatter-Metadaten als Liste oder Kachel angezeigt werden.

> Wie nutze ich Obsidian Bases?

Im `Mint System` Vault findest du einen Ordner `bases`. Ruf die `Meetings.base` Datei auf. Du erhlältst eine Aufstellung aller Meeting-Notizen dieses Vault.

### Canvas

Ist eine Obidian Core-Plugin. Mit Canvas önnen einfache Diagramme erstellt werden. Im Vergleich zu Excalidraw sind die Visualisierungs-Möglichkeiten limitiert. Jedoch können in den Diagrammen auch Notizen verlinkt werden.

> Wie nutze ich den Obsidian Canvas?

Du kann in der linken Leiste auf das Canvas-Icon klicken und erstellt so im aktuellen Verzeichnis eine `Unbenannt.canvas` Datei.

