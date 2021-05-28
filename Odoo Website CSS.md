# Odoo Website CSS
Website customizations with CSS.

## Hide product prices

Remove from carousel.

```css
section.s_wsale_products_recently_viewed div.o_carousel_product_card_footer,
section.s_dynamic_snippet_products div.card-footer {
	display: none !important;
}
```

Remove from product details.

```css
div.product_price {
	display: none;
}
```

Hide prices from cart table.

```css
table#cart_products th.td-price,
table#cart_products td.td-price {
	display: none;
}
```

Hide cart summary.

```css
div#o_cart_summary div.js_cart_summary {
	display: none
}
```

Hide cart total.

```css
div#cart_total {
	display: none
}
```

Hide form fields.

```
form.checkout_autoformat div.checkbox {
	display: none
}
```

Hide portal sidebar

```
div.o_portal_sidebar div.d-print-none {
	display: none
}
```

Hide portal total prices and payment terms

```
div#portal_sale_content section.mt-5,
div.o_portal_sidebar div#total {
	display: none
}
```

## Remove header navigation for a page

Name: `remove header navigation`  
Key: `website.home`  

Code:
```xml
<div id="wrap" class="oe_structure oe_empty">
	<style>
	header nav.navbar {  
		display: none;  
	}
	</style>
	...
```
