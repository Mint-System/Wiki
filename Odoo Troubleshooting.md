---
tags:
  - Troubleshooting
kind: howto
---
# Odoo Troubleshooting

## Client

### Odoo client error

**Problem**

After restoring an Odoo instance the following error occurs

```
Fehler:
Zurückverfolgung
_generateActionViews/<@https://metallprojekt.mintsys.ch/web/content/625-ed50555/web.assets_backend.js:447:298
_.forEach@https://metallprojekt.mintsys.ch/web/content/606-2d12e2f/web.assets_common.js:108:566
_generateActionViews@https://metallprojekt.mintsys.ch/web/content/625-ed50555/web.assets_backend.js:447:229
_executeWindowAction/<@https://metallprojekt.mintsys.ch/web/content/625-ed50555/web.assets_backend.js:442:497
```

**Solution**

Reassemble all assets. Alternative delete assets entries.

## Modules

### Cannot unreserve product in stock

**Problem**

```
It is not possible to unreserve more products of $PRODUCT_NAME than you have in stock.
Es ist nicht möglich, die Reservierung für mehr Produkte von $PRODUKTNAME auzuheben als im Lager vorhanden sind.
```

**Solution**

First run "Report Unreserved Qty" and then run "Fix Unreserved Qty".

See here for details: <https://www.odoo.com/de_DE/forum/hilfe-1/it-is-not-possible-to-unreserve-more-products-of-than-you-have-in-stock-138783>

The original script <https://gist.github.com/amoyaux/279aee13eaddacbddb435dafbc0a6295>.

### Wrong translation

When opening the sale report it fails.

**Problem**

```
Fehler:
Odoo Server Error

Traceback (most recent call last):
  File "/usr/lib/python3/dist-packages/odoo/addons/web/controllers/main.py", line 2137, in report_download
    report_name = safe_eval(report.print_report_name, {'object': obj, 'time': time})
  File "/usr/lib/python3/dist-packages/odoo/tools/safe_eval.py", line 328, in safe_eval
    c = test_expr(expr, _SAFE_OPCODES, mode=mode)
  File "/usr/lib/python3/dist-packages/odoo/tools/safe_eval.py", line 184, in test_expr
    code_obj = compile(expr, "", mode)
  File "<string>", line 1
    (object.state in ('draft', 'sent') und 'Angebot - %s' % (object.name)) oder 'Auftrag - %s' % (object.name)
                                         ^
SyntaxError: invalid syntax
```

**Solution**

Reset the translated name of the report.

![[Odoo troubleshooting - wrong translation.png]]

###  Python OSError

**Problem**

When generating a report with p3yo this error occurs:

```
OSError: [Errno 8] Exec format error: '/usr/local/bin/libreoffice'
```

**Solution**

Apply shebang line `#!/bin/sh` in shell script.

## Server
### wkhtmlpdf unpatched

**Problem**

```
wkhtmltopdf: b'The switch --header-spacing, is not support using unpatched qt, and will be ignored.The switch --header-html, is not support using unpatched qt, and will be ignored.The switch --footer-html, is not support using unpatched qt, and will be ignored.'  
```

**Solution**

```bash
cd ~

# Select an appropriate link for your system (32 or 64 bit) from the page https://wkhtmltopdf.org/downloads.html and past to the next line

wget https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.4/wkhtmltox-0.12.4\_linux-generic-amd64.tar.xz

tar xvf wkhtmltox\*.tar.xz

sudo mv wkhtmltox/bin/wkhtmlto\* /usr/bin

sudo apt-get install -y openssl build-essential libssl-dev libxrender-dev git-core libx11-dev libxext-dev libfontconfig1-dev libfreetype6-dev fontconfig
```

## Session directory not writable

**Problem**

```
AssertionError: /var/lib/odoo/sessions: directory is not writable
```

**Solution**

```
docker exec -i -u root $CONTAINER chown -R odoo:odoo /var/lib/odoo
docker restart $CONTAINER
```

## Development

### Watch limit reached

**Problem**

```
OSError(errno.ENOSPC, "inotify watch limit reached")
```

**Solution**

Temporary:

```bash
sudo sysctl fs.inotify.max_user_watches=524288
```


## Upgrade
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
