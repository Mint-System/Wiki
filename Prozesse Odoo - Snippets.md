---
tags:
- Prozess
---
# Prozesse Odoo: Snippets

## Snippet einfügen

Arbeitsschritte:
* Parent-Ansicht aufrufen
* Ein neuen Eintrag für eine vererbte Ansicht erstellen
* Name mit `mint_system.` und Snippet-Dateiname ohne `.xml`-Endung einfügen
* Als Sequence `50` eintragn
* Unter Architektur den Snippet-Inhalt einfügen
* Vererbte Ansicht und Parent-Ansicht speichern

## Snippet publizieren

Arbeitsschritte:
* Stellen Sie sicher, dass Sie auf dem korrekten Git-Branch sind (git checkout)
* Synchronisieren Sie das lokale Repository (git pull)
* Stagen Sie ihr Odoo Snippet (git add)
* Erstellen Sie den Commit mit einer Nachricht (git commit -m)
* Laden Sie Änderungen hoch (git push)

![[Odoo Snippet publizieren.gif]]