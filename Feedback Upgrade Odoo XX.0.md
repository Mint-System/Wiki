---
title: Feedback Upgrade Odoo XX.0
kind: reference
section: template
---

| Bereich | Titel                                    | Beschreibung                                                                                                                                                                                                                     | Status |
| ------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Verkauf | Verkauf lässt sich nicht öffnen          | Wenn ich versuche die App _Verkauf_ zu öffnen, erscheint dieser Fehler:<br><br>```<br>Caused by: Error: "sale.order"."partner_sale_id" field is undefined.<br>```<br><br>jvr: Die App `sale_invoice_policy` hat gefehlt.         | 🟩     |
| Verkauf | Produktset kann nicht hinzugefügt werden | Bei Klick auf "Produkset hinzufügen" erscheint dieser Fehler:<br><br>```<br>RPC_ERROR<br>Odoo Server Error<br>Traceback (most recent call last):<br><br>           ~~~~~~~~~~~^^^^^^^^^^^^<br>KeyError: 'product.set.add'<br>``` | 🟥     |
