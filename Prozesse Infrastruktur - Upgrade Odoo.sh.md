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
* Upgrade-Porzess starten
* Upgrade-Prozess auslösen indem man den `upgrade` Branch auf den `main` Branch pusht

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

Alterntaiv kann auch den `main` gepusht werden um das Upgrade auslösen:

```bash
cd $ODOO_SH_GIT_PROJECT
git switch main
git commit -m "Trigger Upgrade" --allow-empty
git push origin +upgrade:main
```

* Gemäss Drehbuch das Upgrade fertigstellen
* Den `backup-main` Branch löschen