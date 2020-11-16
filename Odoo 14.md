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