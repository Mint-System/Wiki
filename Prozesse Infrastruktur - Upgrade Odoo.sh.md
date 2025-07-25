---
tags:
  - Prozess
kind:
  - howto
---
# Prozesse Infrastruktur - Upgrade Odoo.sh

## Produktives Upgrade durchführen

* Drehbuch bis zum Abschnitt "Upgrade" ausführen
* Im Tab *Upgrade* die Ziel-Version wählen
* Upgrade starten
* `upgrade` Branch auf `main` Branch pushen

Wenn `upgrade` Branch von `main` Branch verzweigt wurde:

```bash
cd $ODOO_SH_GIT_PROJECT
git switch main
git merge upgrade
```

Wenn `upgrade` Branch ein Orphan ist dann:

```bash
cd $ODOO_SH_GIT_PROJECT

# Create backup branch
git switch main
git switch -c backup-main
git push --set-upstream origin backup-main

# Push upgrade branch to main
git switch upgrade
git push origin +upgrade:main
```

Um ein Upgrade auszulösen:

```bash
git commit -m "Trigger Upgrade" --allow-empty
git push origin +upgrade:main
```

* Gemäss Drehbuch das Upgrade fertigstellen
* Den `backup-main` Branch löschen