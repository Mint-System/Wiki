# Maintained Odoo Apps

Das sind Odoo Apps für die ein [[Odoo Maintenance]]-Vertrag erstellt werden muss.

## Apps

### Timesheet details invoice

Repo: <https://github.com/OCA/account-invoicing/tree/13.0/sale_timesheet_invoice_description>

Nicht für Odoo 14 verfügbar. PR für Migration ist erstellt.

```bash
cd oca/account-invoicing
gh pr checkout 901
../..
```

### Theoretical vs Attended Time Analysis

Repo: <https://github.com/OCA/hr-attendance/tree/13.0/hr_attendance_report_theoretical_time>

Nicht für Odoo 14 verfügbar. PR für Migration ist erstellt: `gh pr checkout 37`.

### Sale Blanket Orders

Repo: <https://github.com/OCA/sale-workflow/tree/13.0/sale_blanket_order>

Nicht für Odoo 14 verfügbar. PR für Migration ist erstellt.

```bash
git remote set-url origin git@github.com:Mint-System/sale-workflow.git
git fetch origin
git switch 14.0-mig-sale_blanket_order
```

Depends on [[#Web Action Conditionable]].

### ~~Web Action Conditionable~~

Repo: <https://github.com/OCA/web/tree/13.0/web_action_conditionable>

Nicht für Odoo 14 verfügbar. PR für Migration ist erstellt.

```bash
cd oca/web
gh pr checkout 1947
../..
```