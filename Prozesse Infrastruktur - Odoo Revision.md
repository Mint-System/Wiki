---
tags:
- Prozess
---
# Prozesse Infrastruktur: Odoo Revision
Bereitstellung einer Odoo Revision.
## Odoo Revision erstellen

Arbeitsschritte:
* Aufrufen Docker Tag <https://hub.docker.com/_/odoo/tags> mit ausgewählter Odoo Version
* Tag anwählen und *DIGEST* kopieren
* Erstellen neuer Eintrag in [[Odoo Revisions]] mit Datum von Docker Tag
* Anpassen Revisions-Nummer
* Anzeigen Odoo Commits <https://github.com/odoo/odoo/commits/15.0> und kopieren SHA-Hash des letzten Commits am Datum
* Anzeigen Odoo Enterprise Commits <https://github.com/odoo/enterprise/commits/15.0> und kopieren SHA-Hash des letzten Commits am Datum
* Anzeigen Odoo Themes <https://github.com/odoo/design-themes/commits/15.0> und kopieren SHA-Hash des letzten Commits am Datum
* Einfügen der SHA-Hashes in Revisions-Skript
* Ausführen Skript in Entwicklungsumgebung