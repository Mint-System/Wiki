---
tags:
  - HowTo
kind:
  - tutorial
section: dev
lang: en
---

# Tutorial: Extend the Odoo product model

Let's add a new field to the product model step by step.

## Steps

### Step 0: Install manufacturing app

- Navigate to _Apps_
- Install the `mrp` app

### Step 1: Start developer mode

- Navigate to _Settings_
- Click _Activate the developer mode_ on the bottom

### Step 2: Update model

- Navigate to _Settings > Technical > Datbase structure > Models_
- Open _product.template_
- Add a line

Field Name: `x_images`\
Field Type: `many2many`\
Field Label: `Images`\
Related Model: `ir.attachment`

### Step 3: Update the view

- Navigate to _Settings > Technical > User Interface > Views_
- Search for `product.template.common.form`
- Open _Interhited Views_
- Add new line

View Name: `Mint System: Add images field`
Architecture:

```xml
<?xml version="1.0"?>
<data>
	<xpath expr="//field[@name='categ_id']" position="after">
		<field name="x_images" widget="many2many_binary" />
	</xpath>
</data>
```

- Return to the product view

## Next steps

[[Tutorial - Install Odoo Studio]]
