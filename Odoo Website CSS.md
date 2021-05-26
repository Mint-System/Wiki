# Odoo Website CSS
Website customizations with CSS.

## Hide product prices

Remove from carousel.

```css
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
div#o_cart_summary {
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

Hide calculation on checkout.

```

```