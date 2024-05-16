---
tags:
- HowTo
---
# Odoo Module Test Instructions

As an alternative to add demo data and writing actual tests, a developer or business analyst can add a file `tests/TEST_INSTRUCTIONS.rst` to the module. Here is an example for the module `mrp_production_assign_lot`:

```
- Install mrp_workorder
- Enable use of existing lot numbers on incoming operation type
- Create receipt (incmoing picking) for a new "Product A"
- Product A is tracked
- Set date of receipt to +1 week
- Add lot with qty 2
- Create production order for a new "Product B"
- Product B is trackend and has BoM with Product A
- Set producing and consuming qty to 2
- Update production order with bill of material
- Click on "assign lot"
- Check if lot of Product A is assigned to the stock move line
- Start the production order and open the tablet view
- Produce and consume 1 qty
- Create new lot and validate the production order
- Check if a new backorder is created and the lot number for Product A is the same as before
```