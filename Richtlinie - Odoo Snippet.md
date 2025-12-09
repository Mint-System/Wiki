---
kind:
  - explain
section: policy
---

# Richtlinie - Odoo Snippet

## Reservierte Bezeichnungen

- `get_position`: Hinzufügen Positionsnummer
- `set_ids`: Erstellen eindeutige Referenzen

## Bezeichnung Beispiele

Jedes Snippet wird nach dem Schema `$COMPANY.$MODULE.$XML_ID.$DESCRIPTION` benannt. Dazu empfehlungen für die _Description_:

❌ set_page_style.tissa  
✅ set_page_style_tissa

-> Keine Punkte erlaubt

❌ font_size  
✅ set_page_font_size

-> Die Verrichtung zuerst

❌ delete_table  
✅ remove_table

-> Immer _remove_ verwenden

❌ add_padding  
✅ add_header_space

-> Präzisierung

❌ product_hs_code_and_origin  
✅ show_product_hs_code_and_origin

-> Zusätzlicher Felder immer mit _show_

❌ show_x_picking_list  
✅ x_picking_list

-> Benutzerdefinierte Felder ohne Verrichtung

## Tabellenspalten eindeutig referenzieren

Mit den `set_ids`-Snippets werden Tabellenspalten mit `id`-Attributen ergänzt. Dieses Attribut wird immer auf Ebene `td` oder `th` gesetzt und hat als Wert den ersten technischen Feldnamen.

Beispiel:

```xml
<td id="product_uom_qty">
	<span t-if="o.state != 'done'" t-field="ml.product_uom_qty" />
	<span t-if="o.state == 'done'" t-field="ml.qty_done" />
	<span t-field="ml.product_uom_id" groups="uom.group_uom" />
</td>
```
