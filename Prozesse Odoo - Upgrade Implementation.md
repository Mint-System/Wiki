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
- Vorlage [[Testing Upgrade Odoo XX.0]] koieren
- Entlang den wichtigsten Workflows des Kunden erste Testfälle erfassen
- Gleichzeitig die Testfälle validieren

## Testing freigeben

Arbeitsschritte:

- Sicherstellen dass Upgrade-Umgebung erreichbar ist
- Nachricht an die TesterIn schicken:

```markdown
Hallo _VORNAME_

Die Upgrade-Umgebung _ODOO_LINK_ steht zum Testen bereit. Das Login ist das gleiche wie auf der produktiven Umgebung.

Für das Testen arbeiten wir mit diesem Dokument: _TESTING_FILE_LINK_

Im Abschnitt "Testfälle" halten wir die Prüfschritte der wichtigsten Abläufe fest. Im darauffolgenden Abschnitt "Feedback" notieren und behandeln wir die festgestellten Probleme. Wir haben bereits einige Testfälle und auch erste Feedbacks erfasst.

Nun brauchen wir deine Unterstützung. Kannst du ...

- Die Testfälle nachvollziehen
- Prüfschritten ausführen
- Neue Probleme bei Feedback festhalten

Danke für eine kurze Rückmeldung. Bei Bedarf können wir das gerne auch in einem Online-Meeting besprechen.
```
