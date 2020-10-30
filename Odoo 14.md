# Odoo 14

## Insight

- MRP has been refactored
- Accounting has changed

## Bugs

### Account permissions removed

Die Rollen zur Vergabe von Rechten im Finanzen App wurde entfernt.

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