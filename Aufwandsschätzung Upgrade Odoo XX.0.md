---
tags:
  - Vorlagen
---
# Aufwandsschätzung Upgrade Odoo XX.0

| Phase                   | Faktor               | Berechnung                                                                                  | Min \[h\] | Max \[h\]  | Aufwand |
| ----------------------- | -------------------- | ------------------------------------------------------------------------------------------- | --------- | ---------- | ------- |
| Bereitstellung Umgebung | Mint Cloud / Odoo.sh | Min: 2h Managed Server<br>Max: 3h Unmanaged Server                                          |           |            |         |
| Modul-Migration         | Anzahl Module        | Min: 15min pro Modul (OCA, bereits migriert)<br>Max: 1h pro Modul (Dritte, Migration offen) |           |            |         |
| Upgrade Datenbank       | Versions-Sprünge     | Min: 2h x Version (Odoo 12, 13, 14, 15)<br>Max: 4h x Version (Odoo 16, 17)                  |           |            |         |
| Bereinigung Anpassungen | Snippets / Studio    | Min: Anzahl Snippets x 6min (ohne Studio)<br>Max: Anzahl Snippets x 15min (mit Studio)      |           |            |         |
| Koordination Support    | Enterprise / Dritte  | Min: Ticket x 2h (Odoo Support)<br>Max: Tickets x 3h (Support Dritte)                       |           |            |         |
|                         |                      |                                                                                             |           | **Summe:** |         |

