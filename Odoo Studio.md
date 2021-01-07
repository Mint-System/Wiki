# Odoo Studio

## Berichtsvorlagen anpassen

Im Dokument `odoo/addons/web/views/report_templates.xml` findet man alle Berichtsvorlagen von Odoo.

Die `templates` können als Vorlagen für eigene Anpassungen verwendet werden.

Um einfach neue Berichtsvorlagen anzupassen. Öffnet man den Bericht *Vorschau externer Bericht* mit Odoo Studio, fügt eine Anpassung ein und öffnet die XML-Ansicht des Berichts. Nun kann im Live-Code-Modus Anpassungen einfügen und erhält dazu die Vorschau.

Am Ende muss man die Anpassung als Odoo-Modul speichern und zur Installation bereitstellen.

## Snippets

**Custom Header**

```xml
<div class="row">
	<div class="col-3">
		<img t-if="company.logo" t-att-src="image_data_uri(company.logo)" style="max-height: 150px;" alt="Logo"/>
	</div>
	<div class="col-9" name="company_address">
		<style>
			#header-info {
				border-top: black 3px solid;
				border-bottom: black 3px solid;
				font-size: 0.9rem;
				margin-right: 15px;
			}
		</style>
		<div class="row" style="height: 50px">
		</div>
		<div id="header-info" class="row">
			<div class="col-3" style="text-transform: uppercase;">
				<span class="o_bold" t-field="company.name"/>
			</div>
			<div class="col-1"/>
			<div class="col-4">
				<span t-field="company.street"/><br/>
				<span t-field="company.zip"/> <span t-field="company.city"/>
			</div>
			<div class="col-4">
				<span t-field="company.phone"/><br/>
				<span t-field="company.email"/>
			</div>
		</div>
	</div>
</div>
```

Dieses Snippet ergibt:

![[Odoo Studio snippet custom header.png]]