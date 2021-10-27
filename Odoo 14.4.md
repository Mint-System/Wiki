# Odoo 14.4

## Bugs

### Forecasted report for products cannot be opened.

On upgrade:

```
Fehler:


Zurückverfolgung
Error: scope.device is undefined
anonymous@https://erp.trimada.ch/web/content/1120-959706b/web.assets_common.js line 971 > Function:20:5
fn@https://erp.trimada.ch/web/content/1120-959706b/web.assets_common.js:953:173
render@https://erp.trimada.ch/web/content/1120-959706b/web.assets_common.js:960:20
useModel/__owl__.renderFn@https://erp.trimada.ch/web/content/1121-115a3fa/web.assets_backend.js:1330:147
__render@https://erp.trimada.ch/web/content/1120-959706b/web.assets_common.js:1277:33
__prepareAndRender@https://erp.trimada.ch/web/content/1120-959706b/web.assets_common.js:1275:29
```

Workaround: Rollback

### Cron job exits

At some point the cron jobs exits.

```
2021-10-27 16:33:31,229 1 INFO erp-dev odoo.addons.base.models.ir_cron: Job `Publisher: Update Notification` done.  
Exception in thread odoo.service.cron.cron0:  
Traceback (most recent call last):  
  File "/usr/lib/python3.7/threading.py", line 917, in _bootstrap_inner  
    self.run()  
  File "/usr/lib/python3.7/threading.py", line 865, in run  
    self._target(*self._args, **self._kwargs)  
  File "/usr/lib/python3/dist-packages/odoo/service/server.py", line 431, in target  
    self.cron_thread(i)  
  File "/usr/lib/python3/dist-packages/odoo/service/server.py", line 407, in cron_thread  
    for db_name, registry in registries.d.items():  
RuntimeError: OrderedDict mutated during iteration
```