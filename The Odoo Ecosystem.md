# The Odoo Ecosystem

A short introduction into the ecosystem of Odoo, its communities and how it is developed.

---
### What is Odoo

* Open Source ERP and CRM
* Business Management Software
* Framwork for Business Application

---
### History[^1]

Fabien Pinckaers - Odoo Founder & CEO

* 2005: TinyERP
* 2008: Rename to OpenERP
* 2010: 100+ employees
* 2014: Funding and rename to Odoo (product and company)
* 2015: Transition to open core model (v9.0)
* 2020: Release Odoo v14.0

---
### Odoo S.A.

* Based in Belgium
* Coordinates Odoo development
* Offers SaaS (Odoo Cloud) and PaaS (Odoo.sh)
* Publishes certificates, learning material and more
* Maintains the partner network

---
### Odoo Community Association[^4]

* Nonprofit orgnisation
* Promotes the widespread use of Odoo
* Coordinates Odoo Open Source community
* Maintains OSS Apps

---
### Odoo Overview

![[Odoo Projekt.svg]]

---

### Odoo Community Edition

The core of Odoo.

Managed on GitHub: <https://github.com/odoo/odoo>

---
### Odoo Enterprise Edition

Licensed version of Odoo.

* Supported by Odoo S.A.
* Enterprise upgrade eligible
* Enterprise apps and themes

Private repo on GitHub: <https://github.com/odoo/enterprise>

---
### Odoo licensing

![[Odoo licensing.png]]

---
### Odoo coats

Coats for the Odoo core.

* Myodoo: <https://github.com/equitania/myodoo-docker>
* OpenHRMS: <https://github.com/CybroOdoo/OpenHRMS>

---
### Everything is a module

The Odoo business layer consists of various modules. Example: [Product Model](https://github.com/odoo/odoo/tree/14.0/addons/product)

* `__manifest__.py`:  Module manifest
* `models/product.py`: Model definition
* `views/product_views.xml`: View definition
* `i18n/de.po`: German translation
* `security/ir.mode.access.csv`: Access groups and permissions

---
### Odoo Architecture

* Powered by Python and PostgreSQL
* Model-View-Controller
* API: XML-RPC

---
### Logical Architecture

![[Odoo Logical Architecture.png]]

---
###  Odoo's ORM[^2]

* Manages models and business logic
* Internal registry loads module definitions
* Methods to interact with data

---
### Everything is XML

Every view is defined as XML.

> Forms, lists, pages, filters, fields, menus, records, ...

---
### Extending Odoo

Odoo can be extended easily

* Inherit a model and change business logic
* Change XML-structure and update views

---
### Inherit a Model

```py
from odoo import models

class ProductProduct(models.Model):
    _inherit = "product.product"

    _sql_constraints = [
        (
            "default_code_uniq",
            "unique(default_code)",
            "Internal Reference must be unique across the database!",
        )
    ]
```

Source: [OCA Product Attribute - product.py](https://github.com/OCA/product-attribute/blob/14.0/product_code_unique/models/product.py)

---
### XPath Edits

```xml
<template id="website_product_description.product" inherit_id="website_sale.product">
	<xpath expr="//div[@id='product_details']/div/p" position="replace">
		<p t-field="product.web_description" class="text-muted mt-3" />
	</xpath>
</template>
```

Source: [Mint System Odoo App: Website Product Description - website_sale_product.xml](https://github.com/Mint-System/Odoo-App-Website-Product-Description/blob/14.0/views/website_sale_product.xml)

---
### Odoo Framework

Odoo is a framework for developing business applications [^3].

* Access to all Odoo entities
* User and access management
* Defined views: lists, chart, kanban, gantt, pivot
* Security and performance

---
### Example

**Certificate Planner**

Repo: <https://github.com/Mint-System/Certificate-Planner>\
Manual: <https://odoo-erp.ch/certificate-planner.html>

---
### Demo

<https://binaryone.mintsys.ch>

Script: [[Tutorial - Extend the Odoo product model]]

---
### Links

Helpful resources:

Documentation: <https://www.odoo.com/documentation/14.0/>\
Odoo CI/CD: <https://runbot.odoo.com/>\
GitHub OCA: <https://github.com/OCA/>\
Odoo Connector: <https://odoo-connector.com/>

---
### References

[^1]: <https://www.odoo.com/de_DE/blog/unser-blog-5/the-odoo-story-56>
[^2]: <https://www.youtube.com/watch?v=EBvuvyIJ1d0>
[^3]: [[Applikation mit Odoo entwickeln]]
[^4]: <https://odoo-community.org/>