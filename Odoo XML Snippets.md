# Odoo XML Snippets

Ad-hoc view extensions to apply specific changes.

Every name must be prefixed with `Mint System: ` and Priority is set to 99 by default.

## View

### Remove brand promotion

Name: `Remove brand promotion message`  
Key: `web.brand_promotion_message_remove`  
Inherited Key: `web.brand_promotion_message`  

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

Code:
```xml
<?xml version="1.0"?>
<data>
  <xpath expr="//li[@t-if='company.website']" position="replace">
  	<li t-if="company.website" class="list-inline-item d-inline">www.example.ch</li>
  </xpath>
</data>
```

### Remove contact info in footer

Name: `Remove footer contact info`  
Key: `web.external_layout_standard_remove_contact`  
Inherited Key: `web.external_layout_standard`  

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

Name: `Taxes align right`  
Key: `account.report_invoice_document_custom_taxes`  
Inherited Key: `account.report_invoice_document`  

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

### Remove payment reference

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
		 <attribute name="style">padding-top: 2rem</attribute>
	</xpath>
</data>
```

### Append delivery document description

Name: `Append description to delivery document`  
Key: `stock.report_delivery_document_description`  
Inherited Key: `stock.report_delivery_document`  

```xml
<?xml version="1.0"?>
<data>
	<xpath expr="/t/t/t/div/table[1]" position="after">
		<p>Retouren:<br/>
		KEG:             ___________  Anzahl<br/>
		Harassen:  ___________  Anzahl<br/>
		<br/>
		Waren erhalten:  Datum:  ___________  Unterschrift:  ______________________
		</p>
	</xpath>
</data>
```

### Show stock on mrp order

Name: `Show stock on mrp order`  
Key: `mrp.report_mrporder_show_stock`  
Inherited Key: `mrp.report_mrporder`  

```xml
<?xml version="1.0"?>
<data>
	<xpath expr="/t/t/t/t/div/table/thead/tr/th[2]" position="after">
        <th>
            <span>Lagerort</span>
        </th>
    </xpath>
    <xpath expr="/t/t/t/t/div/table/tbody/t/tr/td[2]" position="after">
        <td>
            <span t-field="raw_line.location_id.display_name"/>
        </td>
    </xpath>
</data>
```

### Remove barcode from mrp order

Name: `Remove barcode from mrp order`  
Key: `mrp.report_mrporder_remove_barcode`  
Inherited Key: `mrp.report_mrporder`  

```xml
<?xml version="1.0"?>
<data>
 	<xpath expr="/t/t/t/t/div/table/thead/tr/th[3]" position="replace"/>
	<xpath expr="/t/t/t/t/div/table/tbody/t/tr/td[3]" position="replace"/>
</data>
```

### Show stock on mrp order

Name: `Show stock on mrp order`  
Key: `mrp.report_mrporder_show_stock`  
Inherited Key: `mrp.report_mrporder`  

```xml
<?xml version="1.0"?>
<data>
	<xpath expr="/t/t/t/t/div/table/thead/tr/th[2]" position="after">
        <th>
            <span>Lagerort</span>
        </th>
    </xpath>
    <xpath expr="/t/t/t/t/div/table/tbody/t/tr/td[2]" position="after">
        <td>
            <span t-field="raw_line.location_id.display_name"/>
        </td>
    </xpath>
</data>
```

### List quality points in mrp order

![[Odoo XML Snippet - List quality points in mrp order.png]]

Name: `List quality points in mrp order`  
Key: `mrp.report_mrporder_quality_points`  
Inherited Key: `mrp.report_mrporder`  

```xml
<?xml version="1.0"?>
<data>
	<xpath expr="/t/t/t/t/div/div[5]/table/tr[2]/td[1]/span" position="after">
		<ul>
		  <li t-foreach="line2.operation_id.quality_point_ids" t-as="quality_point"><span t-field="quality_point.title"/></li>
	  </ul>
    </xpath>
</data>
```

### Show lot in mrp order

If lot is not available show forecasted days.

Key: `mrp.report_mrporder_show_lot`  
Inherited Key: `mrp.report_mrporder`

```xml
<?xml version="1.0"?>
<data>
	<xpath expr="/t/t/t/t/div/table/tbody/t/tr/td[1]/span" position="after">
		<t t-if="raw_line.forecast_expected_date">
			<br/><span>Expected date: </span><span t-field="raw_line.forecast_expected_date" t-options='{"widget": "date"}'/><br/>
		</t>
		
    	<!-- 
		<span>Qty: </span><span t-field="raw_line.product_uom_qty"/><br/>
    	<span>Forecast: </span><span t-field="raw_line.forecast_availability"/><br/>
    	<span>Available: </span><span t-field="raw_line.availability"/><br/>
		-->

		<t t-if="len(raw_line.move_line_ids) > 0 and raw_line.move_line_ids[0].lot_id">
			<br/><span>Lot(s): </span><span t-foreach="raw_line.move_line_ids" t-as="move_line"><span t-field="move_line.lot_id"/> </span>
		</t>
	</xpath>
</data>
```

### Add space to mrp order

Name: `Add space to mrp order`  
Key: `mrp.report_mrporder_add_space`  
Inherited Key: `mrp.report_mrporder`

```xml
<?xml version="1.0"?>
<data>
	<!-- First row -->
  	<xpath expr="/t/t/t/t/div/div[2]" position="attributes">
		<attribute name="style" add="padding-bottom: 2rem"/>
  	</xpath>
	
	<!-- Header level 3 -->
	<xpath expr="/t/t/t/t/div/div[3]/div[2]" position="attributes">
		<attribute name="class">col-5</attribute>
	</xpath>
	<xpath expr="/t/t/t/t/div/div[3]/div[1]" position="attributes">
		<attribute name="class">col-5</attribute>
	</xpath>
	<xpath expr="/t/t/t/t/div/div[4]/div[1]" position="attributes">
		<attribute name="class">col-5</attribute>
	</xpath>
	<xpath expr="/t/t/t/t/div/div[4]/div[3]" position="attributes">
		<attribute name="class">col-5</attribute>
	</xpath>
	
	<!-- Header level 3 -->
	<xpath expr="/t/t/t/t/div/div[5]/h3" position="attributes">
		 <attribute name="style">padding-top: 2rem</attribute>
	</xpath>
	<xpath expr="/t/t/t/t/div/h3" position="attributes">
		 <attribute name="style">padding-top: 2rem</attribute>
	</xpath>
</data>
```

### Single user timesheet report

Name: `mint_system.hr_timesheet.report_timesheet_user_report.xml`\
Inherited Key: `hr_timesheet.report_timesheet`

## Website

### Remove header navigation for a page

Name: `remove header navigation`  
Key: `website.home`  

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

Name: `Add product name`  
Key: `sale.sale_order_portal_content_product_name`  
Inherited Key: `sale.sale_order_portal_content`  

Code:
```xml
<?xml version="1.0"?>
<data>
  <xpath expr="//td[@id='product_name']" position="replace">
  	<td id="product_name"><span t-field="line.product_id.name"/><br/><span class="font-italic" t-field="line.name"/></td>
  </xpath>
</data>
```

### Add class to button

Name: `Add class to categories button`  
Key: `website_sale.products_categories_mobile_button`  
Inherited Key: `website_sale.products_categories`  

```xml
<data>
	<xpath expr="//button" position="replace">
	  <button type="button" class="btn btn-secondary d-lg-none mb-2"
		  data-target="#wsale_products_categories_collapse" data-toggle="collapse">
		  Show categories
	  </button>
	</xpath>
</data>
```

## Portal

### Show billable field for timesheet entries

Name: `Show billable on timesheet table`   
Key: `portal_my_timesheets_show_billable`  
Inherited Key: `portal_my_timesheets`  
Priority: 99

Code:
```xml
<?xml version="1.0"?>
<data>

  <xpath expr="//thead/tr/th[4]" position="after">
  	<th>Invoice Type</th>
  </xpath>
	
  <xpath expr="//tbody/t/tr/td[3]" position="after">
  	<td><span t-field="timesheet.timesheet_invoice_type"/></td>
  </xpath>
	
</data>
```

## Mail

### Remove logo top right

Name: `Remove logo top right`   
Key: `mail.mail_notification_{border,light,paynow}_remove_logo`  

Inherited Key: `mail.message_notification_email`

```xml
<?xml version="1.0"?>
<data>

  <xpath expr="//div[@summary='o_mail_notification']/table/tbody/tr/td[2]/img" position="replace">
  </xpath>
	
</data>
```

Inherited Key: `mail.mail_notification_borders`

```xml
<?xml version="1.0"?>
<data>

  <xpath expr="//table[@summary='o_mail_notification']//table/tr/td[2]/img" position="replace">
  </xpath>
	
</data>
```

Inherited Key: `mail.mail_notification_light` and `mail.mail_notification_paynow`

```xml
<?xml version="1.0"?>
<data>

  <xpath expr="//tbody/tr/td/table/tr/td[2]/img" position="replace">
  </xpath>
	
</data>
```

### Remove signature

Name: `Remove signature`   
Key: `mail.mail_notification_remove_signature`  
Inherited Key: `mail.mail_notification_paynow`  

```xml
<?xml version="1.0"?>
<data>

  <xpath expr="//tbody/tr[2]/td/t[2]" position="replace">
  </xpath>
	
</data>
```

### Replace footer links

Name: `Replace footer links`   
Key: `mail.mail_notification_{light,paynow}_replace_footer`  
Inherited Key: `mail.mail_notification_light` and `mail.mail_notification_paynow`  

```xml
<?xml version="1.0"?>
<data>

  <xpath expr="//tbody/tr[3]/td/div" position="replace">
	  <div style="color: #999999">
			<a t-att-href="'%s' % company.website" style="text-decoration:none; color: #999999;">
				example.ch
			</a>
		</div>
  </xpath>
	
</data>
```