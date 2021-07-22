# Odoo 14.4

## Bugs

* Forecasted report for products cannot be opened.

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