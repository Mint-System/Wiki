---
tags:
- Asset
---
# Odoo 14.0.2021.1108

```bash
ODOO_REVISION=14.0.2021.1108

# Checkout enterprise repo
cd enterprise && git checkout 7a12fcefeb70d69eca60850f636398cb8773714a

# Create tag on the enterprise repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout odoo repo
cd odoo && git checkout 2ebb1b854905cde04060301deb0394221429d421

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Checkout theme repo
cd themes && git checkout d90399677b0ea52eec3ceed63760af79529ef62a

# Create tag on the odoo repo
git tag -a $ODOO_REVISION -m "$ODOO_REVISION"
..

# Pull docker image
docker pull odoo@sha256:61d6f63d4f5e0037e0ddf0cf505bea4c0c916da7e98a78aedf99e61f2f2a269f

# Tag the docker image
docker tag 30ee4d265b81 odoo:$ODOO_REVISION
```

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