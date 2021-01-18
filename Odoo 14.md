# Odoo 14

## Insight

- MRP has been refactored
- Accounting has changed

## Bugs

### Chatter aside class missing

Module: mail  
Issue: Chatter is too wide on full screen.  

### Editor not wide enough

Module: website  
Issue: Editor top bar is not wide enought.  
Fix: Inject html/css into body.

```html
<style>
.o_we_website_top_actions {
	width: 350px;
}
</style>
```

### Cannot open links in forecasted report

The browser console says:

```
Failed to execute ‘postMessage’ on ‘DOMWindow’: The target origin provided (‘http://odoo14.mintsys.ch’) does not match the recipient window’s origin (‘https://odoo14.mintsys.ch’).
```

Ensure that the `web.base.url` starts with https.