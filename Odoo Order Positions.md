# Odoo Order Positions

Eine Sammlung von mehreren Modulen und Snippets.

## Installation

* Odoo Erweiterungen installieren.

```bash
task install-module odoo sale_order_line_position
task install-module odoo purchase_order_line_position
task install-module odoo account_move_line_position
task install-module odoo stock_move_line_position
```

* Odoo Snippets installieren

```bash
ODOO_ENV=local-odoo

task install-snippet $ODOO_ENV snippets/sale.report_saleorder_document.get_position.xml
task install-snippet $ODOO_ENV snippets/purchase.report_purchaseorder_document.get_position.xml
task install-snippet $ODOO_ENV snippets/purchase.report_purchasequotation_document.get_position.xml


task install-snippet $ODOO_ENV snippets/stock.report_delivery_document.get_position.xml  
task install-snippet $ODOO_ENV snippets/stock.report_picking.get_position.xml
task install-snippet $ODOO_ENV snippets/stock.stock_report_delivery_aggregated_move_lines.get_position.xml
task install-snippet $ODOO_ENV snippets/stock.report_delivery_document.sort_by_position.xml

task install-snippet $ODOO_ENV snippets/account.report_invoice_document.get_position.xml
```