# Odoo Update

Notizen zum Update von Odoo.

## Vorgang

Im Grunde ist die Aktualisierung von Odoo in den Minor Versions trivial. Einfach Docker Image und Git Repository aktualisieren.

## Clear Assets

Meistens gibt es nach einem Upgrade Probleme mit der Assets Table. Odoo Cached CSS/JS in der Assets Table. Diese wird nach einem Update nicht zurückgesetzt. Das muss jeweils manuell gemacht werden. Siehe dazu [[Odoo Scripts]].
