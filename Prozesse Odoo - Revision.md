---
tags:
  - Prozess
kind: reference
---
# Prozesse Odoo - Revision

Bereitstellung einer Odoo Revision.

## Odoo Revision erstellen

Arbeitsschritte:

* Aufrufen Docker Tag <https://hub.docker.com/_/odoo/tags> mit ausgewählter Odoo Version
* Neuster Release-Tag notieren
* Neuer Eintrag in [[Odoo Build]] mit Release-Tag erstellen `task create-revision 18.0.20250819`
* Release commiten `task commit-revision`
* Mit tags pushen `git push --tags`

## Odoo Revision installieren

Arbeitsschritte:

* Mitteilung an Kunde via Odoo Dialog

```
Guten Tag

Die Revision dieser Odoo Installation wird innerhalb der nächsten halben Stunde aktualisiert.

Bei der Aktualisierung kann es zu einem kurzen Unterbruch (< 5 Min) kommen.

Mit freundlichen Grüssen

Mint System Team
```

* In Ansible-Inventar die Informationen zur Odoo Revision aktualisieren
* Auf Server einloggen und ein Odoo-Backup triggern `run-cron-job -n "Backup job odoo backup $DATENBANK"`
* Den Odoo-Container neu deployment `ansible-playbook -i inventories/odoo plays/odoo.yml -t odoo -l $ALIAS`
* Nach erfolgreichem Deployment das Base-Modul aktualisieren `docker-odoo-update -c $CONTAINER -d $DATABASE -u base`
* Auf Odoo einloggen und auf Fehlermeldungen prüfen
* Mitteilung an Kunde via Odoo Dialog

```
Guten Tag

Die Revision dieser Odoo Installation wurde aktualisiert.

Mit dem Update wurde neuer Odoo Code bereitgestellt. Wenn dies zu Problemen und Fehlermeldungen führt, empfehlen wir als erstes den Browser-Cache zu löschen:

Firefox: https://www.odoo-wiki.org/development.html#browser-cache-in-firefox-loschen
Chrome: https://www.odoo-wiki.org/development.html#browser-cache-in-chrome-loschen

Falls danach immer noch Probleme bestehen, bitten wir Sie mit uns Kontakt aufzunehmen.

Mit freundlichen Grüssen

Mint System Team

P.S. Bitte nicht auf diese Nachricht im Chatter antworten. Wir erhalten keine Benachrichtigungen.
```
