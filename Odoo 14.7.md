# Odoo 14.7

## Troubleshooting

### The quota has been exceeded

**Problem**

```
Zurückverfolgung
Error: The quota has been exceeded.
setItem@https://erp.mint-system.ch/web/content/8791-602f9bd/web.assets_common.js:4601:385
_trigger_up@https://erp.mint-system.ch/web/content/8841-40c7a6f/web.assets_backend.js:3376:87
trigger_up@https://erp.mint-system.ch/web/content/8791-602f9bd/web.assets_common.js:4802:280
call@https://erp.mint-system.ch/web/content/8791-602f9bd/web.assets_common.js:4864:372
_callLocalStorage@https://erp.mint-system.ch/web/content/8841-40c7a6f/web.assets_backend.js:3360:235
_onPoll@https://erp.mint-system.ch/web/content/8841-40c7a6f/web.assets_backend.js:3367:676
OdooClass.extend/</prototype[name]<@https://erp.mint-system.ch/web/content/8791-602f9bd/web.assets_common.js:4655:488
_poll/<@https://erp.mint-system.ch/web/content/8841-40c7a6f/web.assets_backend.js:3351:292
```

**Solution**

In Firefox do:

* Open tab and navigate to about:config
* Accept warning
* Search for `dom.storage.default_quota`
* Increase its value (by default its 5120, check for example with 51200)