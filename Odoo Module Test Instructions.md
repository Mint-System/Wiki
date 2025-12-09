---
title: Odoo Module Test Instructions
---

As an alternative to add demo data and writing actual tests, a developer or business analyst can add a file `tests/TEST_INSTRUCTIONS.rst` to the module.

> The test instructions should be written in manner so that they could be translated to actual code.

> The test instructions are meant to be a functional verification and not a user manual nor a feature description of the module.

Here is an example for the module `mrp_production_assign_lot`:

```
Assign lot:

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

You can define multiple tests like this:

```
New Legal Request:

- Open the legal advice app and create a new Request "Legal Question"
- Select "Labor Law" as legal domain and "Colleen Diaz" as contact
- Save the record
- Check in chatter if email has been sent to "Kurt Pärli" and "Andreas Petrik"
- Duplicate the record and check if email has been sent again
- Click on the link in the mail, the request should be shown in the portal view

Update for your Legal Request:

- Open the request "Legal Question"
- Create a new interaction "Your answer." with author "Andreas Petrik"
- Check if a mail has been sent to "Colleen Diaz"
```
