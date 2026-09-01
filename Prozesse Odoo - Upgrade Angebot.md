---
kind: howto
section: process
---

## Modulliste erstellen

Arbeitsschritte:

- Auf Server einloggen `task connect-host $ALIAS`
- Modulliste generieren `docker-odoo-cloc -c $CONTAINER -d $DATABASE`
- Modulname aus Konsole kopieren und filtern
- Vorlage [[Migrate modules to Odoo XX.0]] kopieren
- Modulnamen einfügen

## Upgrade Angebot erstellen

Arbeitsschritte:

- App Verkäufe öffnen und neues Angebot erstellen
- Vorlage "Odoo Upgrade" auswählen
- [[Aufwandsschätzung Odoo Upgrade XX.0|Aufwandsschätzung]] gemäss Tabelle erstellen
- Platzhalter in Text ersetzen
