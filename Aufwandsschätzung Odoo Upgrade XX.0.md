---
tags:
  - Vorlagen
---
# Aufwandsschätzung Odoo Upgrade XX.0

Mit diesem Angebot offerieren wir ein Upgrade für die Odoo-Installation von ==KUNDE==. Das Upgrade umfasst zwei Versionssprünge von Version XX.0 auf XX.0. Das Odoo Upgrade ist in unserem Wiki im Detail beschrieben: <https://wiki.mint-system.ch/odoo-upgrade.html>.

Die Kalkulation basiert auf folgender Aufwandsschätzung:

| Phase                   | Faktor               | Berechnung                                                                        | Aufwand \[h\]             |
| ----------------------- | -------------------- | :-------------------------------------------------------------------------------- | ------------------------- |
| Bereitstellung Umgebung | Mint Cloud / Odoo.sh | 2h Managed Server<br>3h Unmanaged Server                                          | 3                         |
| Modul-Migration         | Anzahl Module        | 15min pro Modul (OCA, bereits migriert)<br>1h pro Modul (Dritte, Migration offen) | (7 x 0.15 / 4) + 5 = 6.05 |
| Upgrade Datenbank       | Versions-Sprünge     | 2h x Version (Odoo 14, 15, 16, 17, 18)                                            | 4                         |
| Bereinigung Anpassungen | Snippets / Studio    | Anzahl Snippets x 5min (ohne Studio)<br>Anzahl Snippets x 15min (mit Studio)      | 15 x 5 / 60 = 1.15        |
| Koordination Support    | Enterprise / Dritte  | Ticket x 2h (Odoo Support)<br>Tickets x 3h (Support Dritte)                       | 3                         |
|                         |                      | **Summe:**                                                                        | **17.2**                  |

Liste der installierten Module von Dritten:

* account_followup_email_from
* account_general_ledger_contra_accounts
* account_move_line_contra_accounts
* base_recursion_limit
* bocco-custom
* contract
* contract_format_date_marker
* gds_import
* gds_import_custom
* gds_invoice
* l10n_ch_invoice_reports
* odoo/studio