---
tags:
- Prozess
---
# Prozesse Odoo - Upgrade Angebot

## Upgrade Angebot erstellen

Arbeitsschritte:
* Modulliste auf produktive Datenbank erstellen
* In Projektordner Markdown-Dokument "Aufwandsschätzung Upgrade Odoo XX.0"
* Aufwandsschätzung gemäss folgender Kalkulation erstellen:

| Phase                   | Faktor                  | Berechnung                                                                             | Min \[h\] | Max \[h\] |
| ----------------------- | ----------------------- | -------------------------------------------------------------------------------------- | --------- | --------- |
| Bereitstellung Umgebung | Mintsys Cloud / Odoo.sh | Min: 2h (Managed Server)<br>Max: 3h (Unmanaged Server)                                 |           |           |
| Modul-Migration         | Anzahl Module           | Min: 15min pro Modul<br>Max: 1h pro Modul                                              |           |           |
| Upgrade Datenbank       | Versions-Sprünge        | Min: 2h x Version<br>Max: 4h x Version                                                 |           |           |
| Bereinigung Anpassungen | Snippets / Studio       | Min: Anzahl Snippets x 5min (ohne Studio)<br>Max: Anzahl Snippets x 10min (mit Studio) |           |           |
| Koordination Support    | Enterprise / Dritte     | Min: 1 Ticket x 2h<br>Max: 3 Tickets x 2h                                              |           |           |
|                         |                         | Summe:                                                                                 |           |           |

**Best Case** Aufwand: Xh x 160.00 CHf = **XX.XX CHF**
**Worst Case** Aufwand: Xh x 160.00 CHf = **XX.XX CHF**

* App Verkäufe öffnen und neues Angebot erstellen
* Vorlage "Odoo Upgrade" auswählen
