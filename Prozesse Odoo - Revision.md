---
kind: howto
section: section
---

Bereitstellung einer Odoo Revision.

## Odoo Revision erstellen

Arbeitsschritte:

- Aufrufen Docker Tag <https://hub.docker.com/_/odoo/tags> mit ausgewählter Odoo Version
- Neuster Release-Tag notieren
- Neue Revisionen mit Odoo Build erstellen

```bash
revision="20261102"

# Create revisions
while IFS= read -r version; do
    [[ -z "$version" ]] && continue
    echo "Create revision: $version.$revision"
    task checkout "$version"
    task create-revision "$version.$revision"
    git add --all
    task commit-and-push-revision "$version.$revision"
done < <(task list-versions | sed '/13.0/d' | sed '/14.0/d')
```

- Dokumentationen mit Odoo Revisionen aktualisieren

```bash
OLD="20261015"
NEW="20261102"

sed -i "s/$OLD/$NEW/g" ~/Odoo-Build/images/odoo/README.md
sed -i "s/$OLD/$NEW/g" ~/Kubernetes-Build/task
sed -i "s/$OLD/$NEW/g" ~/Kubernetes-Build/test_values/knd/odoo.yaml
```

- Dokumentation der Odoo Revisionen mit `task update-revisions-doc` generieren

## Odoo Revision installieren

Arbeitsschritte:

- Öffnen aktuelles Worklog _Odoo Revision Update_
- Ein Odoo-Host auswählen
- In Ansible-Inventar die Informationen zur Odoo Revision aktualisieren
- Den Odoo-Container deployment `task play -i inventories/mint_system plays/odoo.yml -l ${ALIAS}_odoo`
- Optional: Nach erfolgreichem Deployment die Aktion _Apps > Auto-Upgrade Modules_ ausführen

!!! warning
    Damit diese Aktion verfügbar ist, muss das Modul `module_auto_update` installiert werden.


- Mitteilung an Kunde via Aufgabe "Projektadministration"

```
Betreff: Odoo Revision Update

Guten Tag

Die Revision dieser Odoo Installation wurde aktualisiert.

Mit dem Update wurde neuer Odoo Code bereitgestellt. Wenn dies zu Problemen und Fehlermeldungen führt, empfehlen wir als erstes den Browser-Cache zu löschen:

Firefox: https://www.odoo-wiki.org/development.html#browser-cache-in-firefox-loschen
Chrome: https://www.odoo-wiki.org/development.html#browser-cache-in-chrome-loschen

Falls danach immer noch Probleme bestehen, bitten wir Sie mit uns Kontakt aufzunehmen.

Freundliche Grüsse
```
