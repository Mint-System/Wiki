---
tags:
- Definition
---
# Maintained Odoo Apps

Das sind Odoo Apps für die ein [[Odoo Maintenance]]-Vertrag erstellt werden muss.

## Apps

### # web_ir_actions_act_view_reload

Repo: <https://github.com/OCA/web/pull/2240>

Nicht für Odoo 15 verfügbar. PR für Migration ist erstellt.

```bash
cd oca/web
gh pr checkout 2240
../..
```

### hr_timesheet_task_stage

Repo: <https://github.com/OCA/timesheet/pull/500>

Nicht für Odoo 15 verfügbar. PR für Migration ist erstellt.

```bash
cd oca/timesheet
gh pr checkout 500
../..
```

### project_timesheet_time_control

Repo: <https://github.com/OCA/project/pull/939>

Nicht für Odoo 15 verfügbar. PR für Migration ist erstellt.

```bash
cd oca/project
gh pr checkout 939
../..
```

### l10n_ch_qr_bill_scan

Repo: <https://github.com/OCA/l10n-switzerland/pull/649>

Nicht für Odoo 14 verfügbar. PR für Migration ist erstellt.

```bash
cd oca/l10n-switzerland
gh pr checkout 649
../..
```

### hr_holidays_public

Repo: <https://github.com/OCA/hr-holidays/pull/38>

Nicht für Odoo 15 verfügbar. PR für Migration ist erstellt.

```bash
cd oca/hr-holidays
gh pr checkout 38
../..
```


### ~~Timesheet details invoice~~

Repo: <https://github.com/OCA/account-invoicing/tree/13.0/sale_timesheet_invoice_description>

Nicht für Odoo 14 verfügbar. PR für Migration ist erstellt.

```bash
cd oca/account-invoicing
gh pr checkout 901
../..
```

### ~~Theoretical vs Attended Time Analysis~~

Repo: <https://github.com/OCA/hr-attendance/tree/13.0/hr_attendance_report_theoretical_time>

Nicht für Odoo 14 verfügbar. PR für Migration ist erstellt: `gh pr checkout 37`.

### ~~Sale Blanket Orders~~

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