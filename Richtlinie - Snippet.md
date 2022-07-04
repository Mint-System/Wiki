# Richtlinie - Snippet

## Reservierte Bezeichnungen

* `get_position`: Hinzufügen Positionsnummer
* `set_ids`:  Erstellen eindeutige Referenzen

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


