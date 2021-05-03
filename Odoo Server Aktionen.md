# Odoo Server Aktionen

Create server action:

1. Enable debug mode
2. Open *settings > technical > server actions*
3. Click create
4. Set  action name: e.g. *Report Unreserved Qty*
5. Select model `ir.actions.server`
6. Set action to to *execute python code*
7. Copy/paste the fix underneath the pre-existing code  
8. Click *save*
10. Start the action
11. Wait for log message

## Mint System: Archive Stock Production Lot

Archives stock lots if they have a quantity of zero and unarchives them if they have a quantity greater than 0.

```py
# search for all lots
all_lots = env['stock.production.lot'].with_context(active_test=False).search([])
#len(all_lots)

# search for lots with product qty 0 or less
filtered_lots = all_lots.filtered(lambda lot : lot.active is True and lot.product_qty < 1)
#len(filtered_lots)

# archive the filtered lots
if len(filtered_lots) > 0:
    log('About to archive %s: %s' % (filtered_lots._name, filtered_lots.ids))
    filtered_lots.write({'active': False})

# search for archived lots with product qty 1 or greater
filtered_lots = all_lots.filtered(lambda lot : lot.active is False and lot.product_qty > 0)
#len(filtered_lots)

# unarchive the filtered lots
if len(filtered_lots) > 0:
    log('About to unarchive %s: %s' % (filtered_lots._name, filtered_lots.ids))
    filtered_lots.write({'active': True})
env.cr.commit()

raise Warning('The "Archive Stock Production Lot" job was executed successfully.')
```

## Mint System: Report Unreserved Qty

Reports stock movements with problematic definitions.

```py
quants = env['stock.quant'].search([])
move_line_ids = []

warning = ''
for quant in quants:
    move_lines = env["stock.move.line"].search([
        ('product_id', '=', quant.product_id.id),
        ('location_id', '=', quant.location_id.id),
        ('lot_id', '=', quant.lot_id.id),
        ('package_id', '=', quant.package_id.id),
        ('owner_id', '=', quant.owner_id.id),
        ('product_qty', '!=', 0)
    ])
    move_line_ids += move_lines.ids
    reserved_on_move_lines = sum(move_lines.mapped('product_qty'))
    move_line_str = str.join(', ', [str(move_line_id) for move_line_id in move_lines.ids])

    if quant.location_id.should_bypass_reservation():
        # If a quant is in a location that should bypass the reservation, its `reserved_quantity` field
        # should be 0.
        if quant.reserved_quantity != 0:
            warning += "Problematic quant found: %s (quantity: %s, reserved_quantity: %s)\n" % (quant.id, quant.quantity, quant.reserved_quantity)
            warning += "its `reserved_quantity` field is not 0 while its location should bypass the reservation\n"
            if move_lines:
                warning += "These move lines are reserved on it: %s (sum of the reservation: %s)\n" % (move_line_str, reserved_on_move_lines)
            else:
                warning += "no move lines are reserved on it, you can safely reset its `reserved_quantity` to 0\n"
            warning += '******************\n'
    else:
        # If a quant is in a reservable location, its `reserved_quantity` should be exactly the sum
        # of the `product_qty` of all the partially_available / assigned move lines with the same
        # characteristics.
        if quant.reserved_quantity == 0:
            if move_lines:
                warning += "Problematic quant found: %s (quantity: %s, reserved_quantity: %s)\n" % (quant.id, quant.quantity, quant.reserved_quantity)
                warning += "its `reserved_quantity` field is 0 while these move lines are reserved on it: %s (sum of the reservation: %s)\n" % (move_line_str, reserved_on_move_lines)
                warning += '******************\n'
        elif quant.reserved_quantity < 0:
            warning += "Problematic quant found: %s (quantity: %s, reserved_quantity: %s)\n" % (quant.id, quant.quantity, quant.reserved_quantity)
            warning += "its `reserved_quantity` field is negative while it should not happen\n"
            if move_lines:
                warning += "These move lines are reserved on it: %s (sum of the reservation: %s)\n" % (move_line_str, reserved_on_move_lines)
            warning += '******************\n'
        else:
            if reserved_on_move_lines != quant.reserved_quantity:
                warning += "Problematic quant found: %s (quantity: %s, reserved_quantity: %s)\n" % (quant.id, quant.quantity, quant.reserved_quantity)
                warning += "its `reserved_quantity` does not reflect the move lines reservation\n"
                warning += "These move lines are reserved on it: %s (sum of the reservation: %s)\n" % (move_line_str, reserved_on_move_lines)
                warning += '******************\n'
            else:
              if any(move_line.product_qty < 0 for move_line in move_lines):
                warning += "Problematic quant found: %s (quantity: %s, reserved_quantity: %s)\n" % (quant.id, quant.quantity, quant.reserved_quantity)
                warning += "its `reserved_quantity` correctly reflects the move lines reservation but some are negatives\n"
                warning += "These move lines are reserved on it: %s (sum of the reservation: %s)\n" % (move_line_str, reserved_on_move_lines)
                warning += '******************\n'

move_lines = env['stock.move.line'].search([('product_id.type', '=', 'product'), ('product_qty', '!=', 0), ('id', 'not in', move_line_ids)])

for move_line in move_lines:
    if not move_line.location_id.should_bypass_reservation():
       warning += "Problematic move line found: %s (reserved_quantity: %s)\n" % (move_line.id, move_line.product_qty)
       warning += "There is no exiting quants despite its `reserved_quantity`\n"
       warning += '******************\n'

if warning == '':
    warning = 'nothing seems wrong'
raise Warning(warning)
```

## Mint System: Fix Unreserved Qty

Fixes problematic stock movement by resetting the reserved quantity.

Must be run as superuser.

```py
quants = env['stock.quant'].search([])
move_line_ids = []
warning = ''

for quant in quants:

    move_lines = env['stock.move.line'].search([
        ('product_id', '=', quant.product_id.id),
        ('location_id', '=', quant.location_id.id),
        ('lot_id', '=', quant.lot_id.id),
        ('package_id', '=', quant.package_id.id),
        ('owner_id', '=', quant.owner_id.id),
        ('product_qty', '!=', 0),
    ])

    move_line_ids += move_lines.ids
    reserved_on_move_lines = sum(move_lines.mapped('product_qty'))
    move_line_str = str.join(', ', [str(move_line_id) for move_line_id in move_lines.ids])

    if quant.location_id.should_bypass_reservation():
        # If a quant is in a location that should bypass the reservation, its `reserved_quantity` field
        # should be 0.
        if quant.reserved_quantity != 0:
            quant.write({'reserved_quantity': 0})
    else:
        # If a quant is in a reservable location, its `reserved_quantity` should be exactly the sum
        # of the `product_qty` of all the partially_available / assigned move lines with the same
        # characteristics.
        if quant.reserved_quantity == 0:
            if move_lines:
                move_lines.with_context(bypass_reservation_update=True).write({'product_uom_qty': 0})
        elif quant.reserved_quantity < 0:
            quant.write({'reserved_quantity': 0})
            if move_lines:
                move_lines.with_context(bypass_reservation_update=True).write({'product_uom_qty': 0})
        else:
            if reserved_on_move_lines != quant.reserved_quantity:
                move_lines.with_context(bypass_reservation_update=True).write({'product_uom_qty': 0})
                quant.write({'reserved_quantity': 0})
            else:
                if any(move_line.product_qty < 0 for move_line in move_lines):
                    move_lines.with_context(bypass_reservation_update=True).write({'product_uom_qty': 0})
                    quant.write({'reserved_quantity': 0})

move_lines = env['stock.move.line'].search([('product_id.type', '=', 'product'), ('product_qty', '!=', 0), ('id', 'not in', move_line_ids)])
move_lines_to_unreserve = []
for move_line in move_lines:
    if not move_line.location_id.should_bypass_reservation():
        move_lines_to_unreserve.append(move_line.id)

if len(move_lines_to_unreserve) > 1:
    env.cr.execute(""" 
            UPDATE stock_move_line SET product_uom_qty = 0, product_qty = 0 WHERE id in %s ;
        """ % (tuple(move_lines_to_unreserve), ))
elif len(move_lines_to_unreserve) == 1:
    env.cr.execute(""" 
        UPDATE stock_move_line SET product_uom_qty = 0, product_qty = 0 WHERE id = %s ;
        """ % move_lines_to_unreserve[0])
```