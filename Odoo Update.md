---
tags:
  - Definition
section: communication
kind:
  - explain
---

# Odoo Update

Notizen zum Update von Odoo.

## Vorgang

Im Grunde ist die Aktualisierung von Odoo in den Minor Versions trivial. Einfach Docker Image und Git Repository aktualisieren.

Je nach dem wie viel in den Modulen geändert wurden, müssen diese aktualisiert werden oder der Assets-Cache geleert werden.

### Module aktualisieren

Mit dem Befehl `docker-odoo-update` müssen Odoo-Module aktualisiert werden.

### Clear Assets

Meistens gibt es nach einem Upgrade Probleme mit der Assets Table. Odoo Cached CSS/JS in der Assets-Tabelle. Diese wird nach einem Update nicht zurückgesetzt. Das muss jeweils manuell gemacht werden. Siehe dazu [[Odoo Scripts]].
