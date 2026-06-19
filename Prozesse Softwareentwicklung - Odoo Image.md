---
title: Prozesse Softwareentwicklung - Odoo Image
kind: howto
section: process
---

## Odoo Image bauen

Arbeitsschritte:

- Öffne die [[Odoo Build]] Entwicklungsumgebung
- Checke die aktuelle Odoo Revision aus `task checkout-revision $ODOO_VERSION.$ODOO_DATE`
- Erstelle das Container Image `task build-odoo`