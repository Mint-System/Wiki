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
revision="20261112"

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
OLD="20261102"
NEW="20261112"

sed -i "s/$OLD/$NEW/g" ~/Odoo-Build/images/odoo/README.md
sed -i "s/$OLD/$NEW/g" ~/Kubernetes-Build/task
sed -i "s/$OLD/$NEW/g" ~/Kubernetes-Build/test_values/knd/odoo.yaml
```

- Dokumentation der Odoo Revisionen mit `task update-revisions-doc` generieren
