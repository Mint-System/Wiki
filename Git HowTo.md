---
tags:
- HowTo
---
# Git HowTo

## Fork aktualisieren

In diesem Beispiel haben wir einen Fork:

* Upstream: https://github.com/Mint-System/Odoo-Build/
* Origin: https://github.com/sozialinfo/Odoo-Build

Repo öffnen.

```
cd Sozialinfo-Odoo-Build
git switch 16.0
```

Mit `git remote -v` im Repo die Remotes anzeigen. Wenn nötig den Upsream hinzufügen:

```
git remote add upstream git@github.com:Mint-System/Odoo-Build.git
```

 Mit `git switch Mint-System-16.0` den Upstream-Branch wechseln. Wenn nötig erstellen:

```
git switch --oprhan Mint-System-16.0 
```

Von dort den Upstream-Branch pullen.

```
git pull upstream
```

Dann in den Main-Branch wechseln.

```
git switch 16.0
```

Und den Upstream-Branch mergen.

```
git merge Mint-System-16.0
```

Alle Konflikte beheben und unnötige Submodule entfernen.

```
task git-submodule-remove addons/manufacture
task git-submodule-remove addons/odoo_apps_thirdparty
task git-submodule-remove addons/product_attribute
task git-submodule-remove addons/social
task git-submodule-remove addons/stock_logistics_workflow
task git-submodule-remove addons/vertical_saas
task git-submodule-remove oca/account-closing
task git-submodule-remove oca/account-financial-reporting
task git-submodule-remove oca/account-financial-tools
task git-submodule-remove oca/account-reconcile
task git-submodule-remove oca/bank-statement-import
task git-submodule-remove oca/brand
task git-submodule-remove oca/business-requirement
task git-submodule-remove oca/community-data-files
task git-submodule-remove oca/connector
task git-submodule-remove oca/contract
task git-submodule-remove oca/credit-control
task git-submodule-remove oca/crm
task git-submodule-remove oca/e-commerce
task git-submodule-remove oca/edi
task git-submodule-remove oca/helpdesk
task git-submodule-remove oca/hr
task git-submodule-remove oca/hr-attendance
task git-submodule-remove oca/hr-holidays
task git-submodule-remove oca/iot
task git-submodule-remove oca/knowledge
task git-submodule-remove oca/management-system
task git-submodule-remove oca/manufacture
task git-submodule-remove oca/product-attribute
task git-submodule-remove oca/project
task git-submodule-remove oca/queue
task git-submodule-remove oca/reporting-engine
task git-submodule-remove oca/sale-reporting
task git-submodule-remove oca/server-ux
task git-submodule-remove oca/stock-logistics-warehouse
task git-submodule-remove oca/timesheet
task git-submodule-remove oca/website
task git-submodule-remove oca/dms
task git-submodule-remove oca/l10n-switzerland
task git-submodule-remove oca/maintenance
```

Referenzen der Submodule aktualisieren.

```
task checkout 16.0
task git-submodule-pull
```