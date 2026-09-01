---
section: template
kind: reference
---

Mit diesem Angebot offerieren wir ein Upgrade für die Odoo-Installation von ==KUNDE==. Das Upgrade umfasst ==zwei== Versionssprünge von Version ==XX==.0 auf ==XX==.0. Das Odoo Upgrade ist in unserem Wiki im Detail beschrieben: <https://wiki.mint-system.ch/odoo-upgrade.html>.

Die Kalkulation des Angebots basiert auf folgender Aufwandsschätzung:

| Phase                       | Faktor                          | Berechnung                                                         | Aufwand \[h\] |
| --------------------------- | ------------------------------- |:------------------------------------------------------------------ | ------------- |
| Bereitstellung Umgebung     | Managed oder Unmanaged Hosting  | 2h Managed Hosting<br>4h Unmanaged Hosting                         | 2             |
| Modul-Prüfung               | Module von bekannten Dritten.   | 15min pro Modul von bekannten Providern (OCA, Mint System, Cetmix) | 47x0.25~=12   |
| Modul-Migration             | Module von unbekannten Dritten. | 1h pro Modul von unbekannten Providern                             | 27            |
| Upgrade Datenbank           | Versions-Sprünge                | 2h x Version (Odoo 14, 15, 16, 17, 18, 19)                         | 6             |
| Bereinigung Anpassungen     | Snippets / Studio-Edits         | Anzahl Snippets/Edits x 3min<br>                                   | 0             |
| Bereinigung Website         | Website-Customizing             | 4h zur Bereinigung und Prüfung der Seiten                          | 4             |
| Re-Implementation Workflows | Odoo-Prozesse                   | 4h für Re-Implementation Prozesse                                  | 4             |
| Prüfen Aktionen             | Aktionen                        | 15min pro Aktion                                                   | 2             |
|                             |                                 | **Summe:**                                                         | **38**        |

Liste der installierten Module von Dritten:

- account_followup_hide_communication
- account_invoice_description
- account_move_mail_thread
- account_move_unsubscribe
- auth_impersonate_user
- l10n_ch_invoice_reports
- mail_composer_default_template
- mail_unsubscribe
- module_auto_update
- prometheus_exporter
- report_qweb_pdf_watermark
- sale_force_invoiced
- stock_delivery_note
- stock_picking_invoice_link
- website_date_of_birth
- website_product_description
- website_sale_default_country_ch
