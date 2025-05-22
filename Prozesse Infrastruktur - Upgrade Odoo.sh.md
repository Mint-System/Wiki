---
tags:
  - Prozess
kind:
  - howto
---
# Prozesse Infrastruktur - Upgrade Odoo.sh

## Produktives Upgrade durchführen

* Im Tab *Upgrade* die Ziel-Version wählen
* Upgrade starten
* Upgrade-Branch auf main-Branch mergen

Wenn upgrade-Branch von main-Branch verzweigt wurde:

```bash
cd $ODOO_SH_GIT_PROJECT
git switch main
git merge upgrade
```

Wenn upgrade-Branch ein Orphan ist dann:

```bash
cd $ODOO_SH_GIT_PROJECT

git switch main
git switch -c backup-main
git push --set-upstream origin backup-main

git switch upgrade
git push origin +upgrade:main
```

Um ein Upgrade auszulösen:

```bash
git commit -m "Trigger Upgrade" --allow-empty
git push origin +upgrade:main
```

