# App Finanzen
## Initialisierung
*  Unternehmensdaten eintragen
*  Bankkonto erfassen
	*  IBAN: CH3989144871696181962
	*  Name: UBS
*  Buchungsperiode eröffnen
*  Kontenplan übernehmen

## Erweiterungen installieren
* Import CAMT Bank Statement (account_bank_statement_import_camt)
* SEPA Credit Transfer (account_sepa)
* Account Invoice Extract (account_invoice_extract)
* Accounting Reports (account_reports)
* Analytic Accounting Enterprise (analytic_enterprise)
* Budget Management (account_budget)
* Switzerland - Accounting Reports (l10n_ch_reports)

## Customizing
* Journale und Sequenzen anhand [[Odoo Journal-Bezeichnung]] festlegen

## Optionen aktivieren
*Einstellungen > Finanzen*
* Print Swiss QR Code
* Rechnungsdigitalisierung
* Kostenrechnung
* Kostenstellen-Tags

## Import Kontoauszug
* Kontoauszug als XML-Datei ISO-20022 camt.053 exportieren
* Die Datei in Odoo importieren
* Für jede Zahlung  eine offene Rechnung auswählen