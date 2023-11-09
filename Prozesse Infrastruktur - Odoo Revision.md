---
tags:
- Prozess
---
# Prozesse Infrastruktur: Odoo Revision
Bereitstellung einer Odoo Revision.
## Odoo Revision erstellen

Arbeitsschritte:
* Aufrufen Docker Tag <https://hub.docker.com/_/odoo/tags> mit ausgewählter Odoo Version
* Datum von `ODOO_RELEASE` notieren und *DIGEST* kopieren
* Neuer Eintrag in [[Odoo Revisions]] mit Datum von Docker Tag erstellen
* Anpassen Revision-Nummer
* Anzeigen letzter Odoo Commits <https://github.com/odoo/odoo/commits/15.0> an oder vor Datum und kopieren SHA-Hash
* Anzeigen letzter Odoo Enterprise Commits <https://github.com/odoo/enterprise/commits/15.0> an oder vor Datum und kopieren SHA-Hash
* Anzeigen letzter Odoo Themes Commit <https://github.com/odoo/design-themes/commits/15.0> an oder vor Datum und kopieren SHA-Hash
* Einfügen der SHA-Hashes in Revisions-Skript
* Ausführen Skript in Entwicklungsumgebung