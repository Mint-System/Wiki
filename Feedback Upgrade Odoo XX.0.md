---
tags:
  - Templates
kind:
  - reference
---
# Feedback Upgrade Odoo XX.0

## Verkauf

### Verkauf lässt sich nicht öffnen ✅

Wenn ich versuche die App *Verkauf* zu öffnen, erscheint dieser Fehler:

```
Caused by: Error: "sale.order"."partner_sale_id" field is undefined.
```

jvr: Die App `sale_invoice_policy` hat gefehlt.

### Produktset kann nicht hinzugefügt werden 🟥

Bei Klick auf "Produkset hinzufügen" erscheint dieser Fehler:

```
RPC_ERROR
Odoo Server Error
Traceback (most recent call last):

           ~~~~~~~~~~~^^^^^^^^^^^^
KeyError: 'product.set.add'
```
