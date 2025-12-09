---
kind:
  - howto
section: process
---

# Prozesse Odoo - Upgrade Angebot

## Modulliste erstellen

Arbeitsschritte:

- Auf Server einloggen `ssh $ALIAS.mint-system.com`
- Modulliste generieren `docker-odoo-cloc -c $CONTAINER -d $DATABASE`
- Modulname aus Konsole kopieren und filtern
- Vorlage [[Migrate modules to Odoo XX.0]] kopieren
- Modulnamen einfügen

## Upgrade Angebot erstellen

Arbeitsschritte:

- In Projektordner Markdown-Dokument [[Aufwandsschätzung Odoo Upgrade XX.0]] kopieren
- Aufwandsschätzung gemäss Kalkulation erstellen
- App Verkäufe öffnen und neues Angebot erstellen
- Vorlage "Odoo Upgrade" auswählen
- Text aus Aufwandsschätzung kopieren
