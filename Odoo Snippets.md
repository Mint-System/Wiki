# Odoo Snippets

Ad-hoc view extensions to apply specific changes.

## View

### Remove brand promotion

Name: `remove brand promotion message`  
Key: `web.brand_promotion_message_remove`  
Inherited Key: `web.brand_promotion_message`  
Priority: 99  

Code:
```xml
<?xml version="1.0"?>
<data>
  <xpath expr="//t[@name='Brand Promotion Message']" position="replace">
  	<t name="Brand Promotion Message" t-name="web.brand_promotion_message"></t>
  </xpath>
</data>
```

## Reports

### Replace website url in document footer

Name: `Override footer website url`  
Key: `web.external_layout_standard_company_website`  
Inherited Key: `web.external_layout_standard`  
Priority: 99  

Code:
```xml
<?xml version="1.0"?>
<data>
  <xpath expr="//li[@t-if='company.website']" position="replace">
  	<li t-if="company.website" class="list-inline-item d-inline">www.stiärbiär.ch</li>
  </xpath>
</data>
```

### Remove contact info in footer

Name: `Remove footer contact info`  
Key: `web.external_layout_standard_remove_contact`  
Inherited Key: `web.external_layout_standard`  
Priority: 99  

Code:
```xml
<?xml version="1.0"?>
<data>
  <xpath expr="//li[@t-if='company.phone']" position="replace">
  </xpath>
  <xpath expr="//li[@t-if='company.email']" position="replace">
  </xpath>
</data>
```

### Align invoice tax row right

Name: `taxes align right`  
Key: `account.report_invoice_document_custom_taxes`  
Inherited Key: `account.report_invoice_document`  
Priority: 99  

Code:
```xml
<?xml version="1.0"?>
<data>
  <xpath expr="//th[@name='th_taxes']" position="replace">
  	<th name="th_taxes" t-attf-class="text-right {{ 'd-none d-md-table-cell' if report_type == 'html' else '' }}"><span>Steuern</span></th>
  </xpath>
  <xpath expr="//t[@name='account_invoice_line_accountable']/td[5]" position="replace">
  	<td t-attf-class="text-right {{ 'd-none d-md-table-cell' if report_type == 'html' else '' }}">
  		<span t-esc="', '.join(map(lambda x: (x.description or x.name), line.tax_ids))" id="line_tax_ids"/>
  	</td>
  </xpath>
</data>
```

### Change unit precision

Name: `Change unit precision`  
Key: `account.report_invoice_document_unit_precision`  
Inherited Key: `account.report_invoice_document`  

```xml
<?xml version="1.0"?>
<data>
	  <xpath expr="//tbody[1]/t[3]/tr[1]/t[1]/td[2]/span[1]" position="attributes">
		<attribute name="t-options-widget">"integer"</attribute>
	  </xpath>
</data>
```

### Zahlungsreferenz entfernen

Name: `Remove payment reference`  
Key: `account.report_invoice_document_remove_pay_ref`  
Inherited Key: `account.report_invoice_document`  

```xml
<?xml version="1.0"?>
<data>
  <xpath expr="//p[@name='payment_communication']" position="replace">
  </xpath>
</data>
```

### Change default font size

Name: `Change default font size`  
Key: `account.report_invoice_document_font_size`  
Inherited Key: `account.report_invoice_document`  

```xml
<?xml version="1.0"?>
<data>
	<xpath expr="//div[hasclass('page')]" position="inside">
		<style>
			body {
				font-size: 0.9rem;
			}
		</style>
	</xpath>
</data>
```

### Add header space

Name: `Add space before header`  
Key: `account.report_invoice_document_header_space`  
Inherited Key: `account.report_invoice_document`  

```xml
<?xml version="1.0"?>
<data>
	<xpath expr="//h2" position="attributes">
		 <attribute name="style">padding-top: 1rem</attribute>
	</xpath>
</data>
```

## Website

### Remove header navigation for a page

Key: `website.home`  
Priority: 99  

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

### Add product name to quote

sale_order_portal_content

Name: `add product name`  
Key: `sale.sale_order_portal_content_product_name`  
Inherited Key: `sale.sale_order_portal_content`  
Priority: 99  

Code:
```xml
<?xml version="1.0"?>
<data>
  <xpath expr="//td[@id='product_name']" position="replace">
  	<td id="product_name"><span t-field="line.product_id.name"/><br/><span class="font-italic" t-field="line.name"/></td>
  </xpath>
</data>
```

