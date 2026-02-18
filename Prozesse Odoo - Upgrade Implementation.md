---
title: Prozesse Odoo - Upgrade Implementation
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
- Entwickeln Testfälle anhand Vorlage [[Testing Upgrade Odoo XX.0]]
- Erstellen Dokument Feedback [[Feedback Upgrade Odoo XX.0]]
- Nachricht an die TesterIn schicken:

```
Hallo $VORNAME

Die Upgrade-Umgebung $ODOO_LINK steht zum Testen bereit. Das Login ist das gleiche wie bisher.

Die Testfälle sind in diesem Dokument festgehalten: $TESTING_FILE_LINK
Du kannst die Testfälle weiter ausformulieren oder umformulieren.
Das Feedback zum Testing wird hier gesammelt: $FEEDBACK_FILE_LINK

Kannst du beschrieben Testfälle ausführen und bei Problemen eine Beschreibung im Feedback-Dokument festhalten.

Bei Fragen zu den Test-Fällen oder Struktur der Feedbacks, bitte melden.

Viele Grüsse
```
