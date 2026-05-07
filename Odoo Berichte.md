---
section: dev
kind: reference
---

## Aufbau

Odoo Berichte bestehen aus mehreren Komponenten und Vorlagen. Hier ein Überblick über die Struktur:

Bericht
- Bericht-Container
	- Bericht-Layout
		- Ausgabe Inhalt
- Dokument
	- Dokument-Layout
		- Vorlage Dokument-Layout
			- Header
				- Logo
				- Unternehmensangaben
			- Vorlage Adresse
				- Ausgabe Adresse
				- Ausgabe Infoblock
			- Ausgabe Titel
			- Ausgabe Inhalt
			- Footer
				- Seitenzahlen
	- Festlegen Adresse
	- Festlegen Infoblock
	- Festlegen Titel
	- Festlegen Inhalt

Ausgewählte Elemente wie Titel werden auf dem Dokument festelegt und in der Vorlage Dokument-Layout ausgegeben. 

Und hier die Gliederung mit Namen der Ansichten und Variablen anhand des Bericht _Rechnung_:

account.report_invoice
- t-call web.html_container
	- t-call web.report_layout
		- t-out 0
- t-foreach docs
	- t-call account.report_invoice_document
		- t-call web.external_layout
			- t-call web.external_layout_standard
				- header
					- company.logo
					- company.company_details
				- t-call web.address_layout
					- t-out information_block
					- t-esc address
				- t-out layout_document_title
				- t-out 0
				- footer
		- t-set address
		- t-set information_block
		- t-set layout_document_title
		- 0

Der `t-call` ruf ein anderes Template auf. Der `t-out` macht einen Output eines Wertes und `t-set` legt einen Wert fest. Der Wert `0` bezieht sich auf den Inhalt des Berichts selbst.