---
tags:
- HowTo
---
# Odoo Upgrade from 16.0 to 17.0

## Prepare

Set env vars.

```bash
export ODOO_CURRENT_VERSION=16.0
export ODOO_TARGET_VERSION=17.0
export MODE=test # Options: test, production
export PGHOST=localhost
export PGUSER=odoo
export PGPASSWORD=odoo
export DATABASE=erp
export NEW_DATABASE=${DATABASE}_${ODOO_TARGET_VERSION}
export COMPANY=mint-system
alias odoo-upgrade="python <(curl -s https://upgrade.odoo.com/upgrade)"
```

Download the database.

```bash
odoo-backup -d $DATABASE -o tmp/$COMPANY/$DATABASE.zip ...
```

Checkout current Odoo environment.

```bash
task checkout $ODOO_CURRENT_VERSION
```

Start local development environment.

```bash
task start db,native
```

## Restore

Clear filestore and restore database.

```bash
task drop-db $DATABASE
task clear-filestore $DATABASE
odoo-restore -f tmp/$COMPANY/$DATABASE.zip
```

Remove or replace [[Unsupported Modules]].

```bash
task remove-module $DATABASE ...
task install-module $DATABASE ...
```

Login and check the Odoo log.
## Upgrade

Run the upgrade scripts.

```bash
task clear-filestore $NEW_DATABASE
task drop-db  $NEW_DATABASE
odoo-upgrade $MODE -d $DATABASE -t $ODOO_TARGET_VERSION -r $NEW_DATABASE
```

Checkout target Odoo environment.

```bash
task checkout $ODOO_TARGET_VERSION
```

Upgrade all modules.

```bash
task update-module $NEW_DATABASE base
```

Clear the browser cache and Odoo assets, then start the server.

```bash
task clear-assets $NEW_DATABASE
task start native
```

Login and check the Upgrade report.
## Configure

Install new modules.

```bash
task install-module $NEW_DATABASE ...
```

Make new Odoo configurations.

Update selected snippets.
## Verify

Test the upgraded system.

Run the test cases.

Note any regressions.

## Deploy

Export the new database.

```bash
odoo-backup -d $NEW_DATABASE -o tmp/$COMPANY/$NEW_DATABASE.zip
```

Deploy the upgraded database.

Restore the upgraded database. 

## Troubleshooting

### Cannot change data type from numeric to double precision

**Problem**

After the upgrade the restore to the local postgres instance fails with this error message:

```
2024-01-23 05:05:41 INFO: Restore the dump file 'upgraded.dump' as the database 'erp_17.0'
2024-01-23 05:06:36 ERROR: Error: The 'pg_restore' command has failed with the following output:
 pg_restore: while PROCESSING TOC:
pg_restore: from TOC entry 14650; 2618 472738965 RULE report_project_task_user _RETURN db_1222611
pg_restore: error: could not execute query: ERROR:  cannot change data type of view column "delay_endings_days" from numeric to double precision
Command was: CREATE OR REPLACE VIEW public.report_project_task_user AS
 SELECT ( SELECT 1) AS nbr,
    t.id,
    t.id AS task_id,
    t.active,
    t.create_date,
    t.date_assign,
    t.date_end,
    t.date_last_stage_update,
    t.date_deadline,
    t.project_id,
    t.priority,
    t.name,
    t.company_id,
    t.partner_id,
    t.parent_id,
    t.stage_id,
    t.state,
    t.milestone_id,
        CASE
            WHEN (pm.id IS NOT NULL) THEN true
            ELSE false
        END AS has_late_and_unreached_milestone,
    t.description,
    NULLIF(t.rating_last_value, (0)::double precision) AS rating_last_value,
    avg(rt.rating) AS rating_avg,
    t.working_days_close,
    t.working_days_open,
    t.working_hours_open,
    t.working_hours_close,
    (EXTRACT(epoch FROM (t.date_deadline - (now() AT TIME ZONE 'UTC'::text))) / ((3600 * 24))::numeric) AS delay_endings_days,
    count(td.task_id) AS dependent_ids_count,
        CASE
            WHEN (COALESCE(t.allocated_hours, (0)::double precision) = (0)::double precision) THEN (0.0)::double precision
            ELSE LEAST(((t.effective_hours * (100)::double precision) / t.allocated_hours), (100)::double precision)
        END AS progress,
    t.effective_hours,
    ((t.allocated_hours - t.effective_hours) - t.subtask_effective_hours) AS remaining_hours,
        CASE
            WHEN (t.allocated_hours > (0)::double precision) THEN (t.remaining_hours / t.allocated_hours)
            ELSE (0)::double precision
        END AS remaining_hours_percentage,
    t.allocated_hours,
    t.overtime,
    t.total_hours_spent,
    t.planned_date_begin,
    t.sale_line_id,
    t.sale_order_id,
    sol.remaining_hours AS remaining_hours_so
   FROM ((((public.project_task t
     LEFT JOIN public.rating_rating rt ON (((rt.res_id = t.id) AND ((rt.res_model)::text = 'project.task'::text) AND (rt.consumed = true) AND (rt.rating >= (1)::double precision))))
     LEFT JOIN public.project_milestone pm ON (((pm.id = t.milestone_id) AND (pm.is_reached = false) AND (pm.deadline <= (now())::date))))
     LEFT JOIN public.task_dependencies_rel td ON ((td.depends_on_id = t.id)))
     LEFT JOIN public.sale_order_line sol ON ((t.id = sol.task_id)))
  WHERE (t.project_id IS NOT NULL)
  GROUP BY t.id, t.active, t.create_date, t.date_assign, t.date_end, t.date_last_stage_update, t.date_deadline, t.project_id, t.priority, t.name, t.company_id, t.partner_id, t.parent_id, t.stage_id, t.state, t.rating_last_value, t.working_days_close, t.working_days_open, t.working_hours_open, t.working_hours_close, t.milestone_id, pm.id, td.depends_on_id, t.effective_hours, t.subtask_effective_hours, t.allocated_hours, t.overtime, t.total_hours_spent, t.planned_date_begin, t.sale_line_id, t.sale_order_id, sol.remaining_hours;


pg_restore: warning: errors ignored on restore: 2
```

**Cause**

This error is mostly likely connect with the wrong psql version.

This versions have been confirmed to work:

```
➜  Odoo-Build git:(16.0) ✗ pg_restore -V
pg_restore (PostgreSQL) 13.6 (Ubuntu 13.6-0ubuntu0.21.10.1)
➜  Odoo-Build git:(16.0) ✗ pg_dump -V
pg_dump (PostgreSQL) 13.6 (Ubuntu 13.6-0ubuntu0.21.10.1)
```

And these versions did not:

```bash
laszlokr@mintsystem:~/work/mintsystem/Odoo-Build$ pg_restore -V
pg_restore (PostgreSQL) 14.10 (Ubuntu 14.10-0ubuntu0.22.04.1)
laszlokr@mintsystem:~/work/mintsystem/Odoo-Build$ pg_dump -V
pg_dump (PostgreSQL) 14.10 (Ubuntu 14.10-0ubuntu0.22.04.1)
```

**Solution**

If required downgrade the psql tools.
