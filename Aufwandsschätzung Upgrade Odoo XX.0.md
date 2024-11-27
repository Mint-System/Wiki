---
tags:
  - Vorlagen
---
# Aufwandsschätzung Upgrade Odoo XX.0

| Phase                   | Faktor               | Berechnung                                                                        | Aufwand \[h\]       |
| ----------------------- | -------------------- |:--------------------------------------------------------------------------------- | ------------------- |
| Bereitstellung Umgebung | Mint Cloud / Odoo.sh | 2h Managed Server<br>3h Unmanaged Server                                          | 3                   |
| Modul-Migration         | Anzahl Module        | 15min pro Modul (OCA, bereits migriert)<br>1h pro Modul (Dritte, Migration offen) | 5 + 7 x 0.15 = 6.05 |
| Upgrade Datenbank       | Versions-Sprünge     | 2h x Version (Odoo 14, 15, 16, 17, 18)                                            | 4                   |
| Bereinigung Anpassungen | Snippets / Studio    | Anzahl Snippets x 5min (ohne Studio)<br>Anzahl Snippets x 15min (mit Studio)      | 15 x 5 = 1.15       |
| Koordination Support    | Enterprise / Dritte  | Ticket x 2h (Odoo Support)<br>Tickets x 3h (Support Dritte)                       | 3                   |
|                         |                      | **Summe:**                                                                        | **17.2**            |
