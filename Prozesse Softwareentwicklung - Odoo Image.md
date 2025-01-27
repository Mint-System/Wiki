---
tags:
  - Prozess
---
# Prozesse Softwareentwicklung - Odoo Image

## Odoo Image bauen

Arbeitsschritte:

* Öffne die [[Odoo Build]] Entwicklungsumgebung
* Checke die aktuelle Odoo Revision aus `task checkout-revision $ODOO_VERSION.$ODOO_DATE`
* Erstelle das Container Image `task build`
* Teste das Container Image
	* Für die Hauptversion test mit `task test-container`
	* Für andere Versionen `task start odoo`, `docker-odoo-init -d $ODOO_VERISON -i web`, `task test-xmlrpc`
* Publiziere das Image `task publish`
