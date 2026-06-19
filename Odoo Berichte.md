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

Ausgewählte Elemente wie Titel werden auf dem Dokument festgelegt und in der Vorlage Dokument-Layout ausgegeben. 

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

## Anpassungen

Die beschriebene Struktur wird oft ergänzt durch Anpassungen, die sich aus dem Einsatz weiterer Module ergeben oder aus spezifischen Anwenderanforderungen (Customizing). Solche Anpassungen werden mit vererbten Ansichten implementiert. In diesen wird per `<xpath>`-Tag die jeweilige Änderung mit der Stelle in der zu ändernden Ansicht referenziert.
### Module

Module können mit vererbten Ansichten die Berichte anderer Module verändern. Am Beispiel der _Rechnung_ verändern die Ansichten `l10n_din5008.report_invoice_document` (Bericht-Layout nach DIN 5008) und `l10n_ch.l10n_ch_report_invoice_document` (Schweizer Lokalisierung) gezielt das ursprüngliche Layout.

::: tip
Die in Odoo angezeigte Ansichtsbezeichnung kann Grund für Verwechslungen bieten. Im Beispiel _Rechnung_ ist die Ansichtsbezeichnung von `account.report_invoice_document` (Dokument-Layout) identisch mit jener von `l10n_din5008.report_invoice_document` (Layout-Anpassungen): `report_invoice_document`.
:::

### Customizing

Sollen Berichte an die Anforderungen eines Unternehmens angepasst werden, lohnt es sich dies ebenfalls mit vererbten Ansichten umzusetzen. Diese sind in sich abgeschlossen und können getrennt vom Original-Code verwaltet werden. So wird die Wartbarkeit verbessert und der Aufwand bei Upgrades reduziert.
