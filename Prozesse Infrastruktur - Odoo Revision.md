---
tags:
- Prozess
---
# Prozesse Infrastruktur - Odoo Revision
Bereitstellung einer Odoo Revision.
## Odoo Revision erstellen

Arbeitsschritte:
* Aufrufen Docker Tag <https://hub.docker.com/_/odoo/tags> mit ausgewählter Odoo Version
* Datum von `ODOO_RELEASE` notieren und *DIGEST* kopieren
* Neuer Eintrag in [[Odoo Build]] mit Datum von Docker Tag erstellen
* Anpassen Revision-Nummer
* Anzeigen letzter Odoo Commits <https://github.com/odoo/odoo/commits/17.0> an oder vor Datum und kopieren SHA-Hash
* Anzeigen letzter Odoo Enterprise Commits <https://github.com/odoo/enterprise/commits/17.0> an oder vor Datum und kopieren SHA-Hash
* Anzeigen letzter Odoo Themes Commit <https://github.com/odoo/design-themes/commits/17.0> an oder vor Datum und kopieren SHA-Hash
* Einfügen der SHA-Hashes in Revisions-Skript
* Ausführen Skript in Entwicklungsumgebung

## Odoo Revision installieren

Arbeitsschritte:

* Mitteilung an Kunde via Odoo Dialog

```
Guten Tag  
  
Die Revision dieser Odoo Installation wird innerhalb der nächsten halben Stunde aktualisiert.  
  
Bei der Aktualisierung kann es zu einem kurzen Unterbruch (< 1 Min) kommen.  
  
Mit freundlichen Grüssen  
  
Das Mint System Team
```

* In Ansible-Inventar die Informationen zur Odoo Revision aktualisieren

```yml
odoo_revision: "17.0.2023.1120"
odoo_image: odoo@sha256:9f57fa8946d9301694a786aa4bd0f4ecc934118e82ea410bd082348e1dc42d5e
odoo_enterprise_commit: f5b91a7edc19d91a1a7ec9b9b63e8a315aa82a3f
```

* Auf Server einloggen und ein Odoo-Backup triggern `run-cron-job -n "Backup job odoo backup $DATENBANK"`
* Den Odoo-Container neu deployment `ansible-playbook -i inventories/odoo play_odoo.yml -t odoo -l $ALIAS`
* Nach erfolgreichem Deployment die Assets neu erstellen `docker-odoo-clear-assets -c $CONTAINER -d $DATENBANK`
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

Das Mint System Team

P.S. Bitte nicht auf diese Nachricht im Chatter antworten. Wir erhalten keine Benachrichtigungen.
```
