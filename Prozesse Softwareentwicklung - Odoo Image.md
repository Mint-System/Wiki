---
tags:
  - Prozess
kind:
  - howto
section: process
---

# Prozesse Softwareentwicklung - Odoo Image

## Odoo Image bauen

Arbeitsschritte:

- Öffne die [[Odoo Build]] Entwicklungsumgebung
- Checke die aktuelle Odoo Revision aus `task checkout-revision $ODOO_VERSION.$ODOO_DATE`
- Erstelle das Container Image `task build`
- Teste das Container Image mit `task test-container`
- Publiziere das Image `task publish`
