---
kind: howto
section: process
---
## Module prüfen

Arbeitsschritte:

- Lokale Entwicklungssumgebung bereitstellen ([[Odoo Build]])
- Jedes Modul anhand [[Prozesse Odoo - Upgrade Angebot#Modulliste erstellen]] prüfen.
- Bei Bedarf das Modul migrieren
- Bereitstellen Modul auf Upgrade-Umgebung

## Snippets prüfen

Arbeitsschritte:

- Auf der Testumgebung Ansichten und Berichte mit Snippets anzeigen
- Bei Bedarf Snippet anpassen und Befehl in Drehbuch festhalten

## Testfälle entwickeln

Arbeitsschritte:

- Ausführen Drehbuch
- Testfälle anhand Vorlage [[Testing Upgrade Odoo XX.0]] entwickeln
- Nachricht an die TesterIn schicken:

```markdown
Hallo _VORNAME_

Die Upgrade-Umgebung _ODOO_LINK_ steht zum Testen bereit. Das Login ist das gleiche wie bis anhin.

Für das Testing arbeiten wir mit diesem Dokument: _TESTING_FILE_LINK_
Im Abschnitt "Testfälle" halten wir die Prüfschritte der wichtigsten Odoo-Prozesse fest. Gleich dartuner im Abschnitt "Feedback" notieren und behandeln wir die Probleme.

Ich habe eine erstes Beispiel für einen Testfall und Feedback erstellt. Meine Absicht ist dass wir gemeinsam neue Testfälle entwickeln und ausführen.

Ist das in deinem Sinn?
```
