---
title: Input - Arbeit mit Obsidian
section: training
kind:
  - tutorial
---
Dieses Tutorial erläutert die Arbeit mit [[Obsidian]]. Es ist in Abschnitten mit Leitfragen unterteilt.

## Über

> Was ist Obsidian?

Mit Obsidian kannst du Text-Dateien bearbeiten und miteinander verlinken. Es eignet sich für Verwaltung von persönlichen Notizen, Journalen und Wissensdatenbanken.

> Wie nutzen wir Obsidian?

Projekt- und Unternehmensdokumente werden als Text-Dateien mit Obsidian verwaltet. Obsidian ersetzt den Datei-Explorer und Suchfunktion.

Im Weiteren haben wir mehrere Wissensdatenbanken (Wiki Mint System, Odoo Wiki), welche mit Obsidian bearbeitet werden.

## Setup

> Wie installiere ich Obsidian?

Du kannst Obsidian von <https://obsidian.md/> herunterladen und installieren.
## Vault

> Was ist ein Obsidian Vault?

Wenn du Obsidian das erste Mal öffnest, wirst aufgeordert einen sog. Vault zu erstellen oder zu öffnen. Der Vault ist ausgewählter Ordner, der mit Obsidian verwaltet werden soll 

wir nehmen an, dass der Nextcloud-Ordner in das Verzeichnis `/home/janikvonrotz/cloud.mint-system.ch/` synchronisiert ist.

Dann kannst du mit Obsidian diesen Vault öffnen: `/home/janikvonrotz/cloud.mint-system.ch/Mint System/`. Obsidian fragt, wenn der Vault das erste Mal geöffnet wird, ob man die Plugins aktivieren soll. Bestätige den Dialog. 

Wenn ein Ordner als Vault festgelegt wird, dann legt Obsidian im Ordner einen versteckten Datenordner `.obsidian` an. In unserem Fall ist das `/home/janikvonrotz/cloud.mint-system.ch/Mint System/.obisidian/`.

### Einstellungen

> Wo finde ich die Obsidian bzw. Vault-Einstellungen?

Wenn du in der Leiste unten links auf das Einstellungs-Icon klickst, gelangst du in die Obsidian-Einstellungen. Alle Einstellungen werden für den aktiven Vault gemacht.

::: warning
Alle Einstellungen werden mit anderen Teilnehmer geteilt. Bitte bearbeite die Einstellungen wenn du dies mit anderen Teilnehmer abgesprochen wurde.
:::

## Navigation

> Wie navigiert man in Obsidian?

Du hast einen Vault geöffnet und siehst drei Panels:

![[Arbeit mit Obsidian - Panels.png]]

Auf der linken Seite navigierst und durchsucht du den Vault/Ordner. In der Mitte bearbeitest du Notizen, Tabellen und Diagramme und auf rechten Seite findest du Detail-Informationen zur Notiz.

### Suchen

> Wie suche ich nach einer Notiz?

Oben links nehmen dem Order-Icon ist das Such-Icon. Klick darauf und gibt `Mint Cloud` ein. Die Such-Resultate enthalten entweder `Mint` oder `Cloud`. Stelle nun ein Anführungszeichen davor `"Mint Cloud`. Nun sucht Obsidian nach dem ganzen Ausdurck.

### Befehle

> Wie kann ich Befehle ausführen?

Wie dir vermutlich aufgefallen ist, gibt es in Obsidian keine Menü-Leiste, wo du Befehle ausführen kannst. Jedoch gibt es in Obsidian sehr viele Befehle zur Auswahl. Drücke `ctrl` + `p` und es erscheint eine Befehlspalette.

## Notizen

> Wie bearbeite ich Notizen?

Wenn du den `Mint System` Vault geöffnet hast, drückst du `ctrl` + `o` um eine Datei zu suchen und zu öffnen. Gib in der Suche `Mint Cloud` ein. Der erste Vorschlag sollte `Projekte/Mint Cloud Private/README.md` sein. Drücke `Enter` um diese Datei zu öffnen.

Nun bist du direkt Bearbeitsungs-Modus und kannst den Inhalt der Datei bearbeiten.

::: tip
Es gibt keinen Speichern-Befehl in Obsidian. Alle Bearbeitungen werden direkt gespeichert.
:::

### Markdown

> Was ist Markdown?

Wenn du die Notizen-Dateien im Datei-Explorer anzeigt, siehst du, dass diese die Dateiendung `.md` haben. Das Kürzel steht für Markdown. Markdown ist nicht ein Dateiformat, sondern eine sog. Markup-Language.

Gib in der Datei `README.md` den Text `Dieser Text einhält eine **Fettformatierung**.`. Wie du siehst, wird der Text innerhalb der `**` Zeichen fett formatiert. Mit Markdown kann man Text mit Text formatieren.

Um mehr über Markdown zu lernen besuche <https://www.markdownguide.org/>.
### Frontmatter

> Was ist das Frontmatter?

Für jede Markdown-Datei kannst du Metadaten festlegen. Wenn du Markdown-Datei mit `---` beginnt, wird dies als Abschnitt für Metadaten interpretiert. Hier ein Beispiel für Metadataten:

```
---
projekt: Mint Cloud
---
```

::: tip
Drücke `ctrl` + `e` um eine Vorschau der Markdown-Datei zu erhalten. Die Metadaten können in der Vorschau in Text-Boxen bearbeitet werden.
:::

## Vorlagen

> Welche Vorlagen gibt es?



## Plugins

> Welche Plugins gibt es?


### Tabellen

> Wie erstelle und bearbeite ich Tabellen in Obsidian?



### Excalidraw

> Wie erstelle ich Zeichnungen mit Excalidraw?



### Bases

> Was sind Obsidian Bases?



### Canvas

> Wie nutze ich den Obsidian Canvas?


