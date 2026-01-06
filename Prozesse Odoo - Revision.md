---
title: Prozesse Odoo - Revision
kind: howto
section: process
---

Bereitstellung einer Odoo Revision.

## Odoo Revision erstellen

Arbeitsschritte:

- Aufrufen Docker Tag <https://hub.docker.com/_/odoo/tags> mit ausgewählter Odoo Version
- Neuster Release-Tag notieren
- Neue Revision in Odoo Build erstellen

```bash
revision="20251121"

while IFS= read -r version; do
    [[ -z "$version" ]] && continue
    echo "Create revision: $version.$revision"
    task checkout "$version"
    task create-revision "$version.$revision"
    git add --all
    task commit-and-push-revision
done < <(task list-versions | sed '/13.0/d' | sed '/14.0/d')
```

- Dokumentationen mit Odoo Revisionen aktualisieren
	- [[Odoo Build]] `README.md`
	- [[Kubernetes Build]] ``

## Odoo Revision installieren

Arbeitsschritte:

- Mitteilung an Kunde via Odoo Dialog

```
Guten Tag

Die Revision dieser Odoo Installation wird innerhalb der nächsten halben Stunde aktualisiert.

Bei der Aktualisierung kann es zu einem kurzen Unterbruch (maximal 5 Minuten) kommen.

Mit freundlichen Grüssen

Mint System Team
```

- In Ansible-Inventar die Informationen zur Odoo Revision aktualisieren
- Den Odoo-Container neu deployment `ansible-playbook -i inventories/odoo plays/odoo.yml -l $ALIAS`
- Nach erfolgreichem Deployment die Aktion *Apps > Auto-Upgrade Modules* ausführen

::: warning
Damit diese Aktion verfügbar ist, muss das Modul `module_auto_update` installiert werden.
:::

- Mitteilung an Kunde via Odoo Dialog

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
