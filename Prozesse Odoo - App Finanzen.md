# App Finanzen
Installation Modul Finanzen (account_accountant).

## 1. Erweiterungen installieren

Auswahl:
* Import CAMT Bank Statement (account_bank_statement_import_camt)
* SEPA Kreditübertragung (account_sepa)
* Auszug aus der Kontorechnung (account_invoice_extract)
* Accounting Reports (account_reports)
* Analytische Konten (analytic_enterprise)
* Budgetverwaltung (account_budget)
* Schweizer Buchhaltungsauswertungen (l10n_ch_reports)
* Lieferanten-Rechnung: Freigegeben zu zahlen (account_3way_match)

### Optionen aktivieren
Navigation nach *Einstellungen > Finanzen* und Auswahl:
* Print Swiss QR Code #Odoo13 
* QR Codes #Odoo14
* Rechnungsdigitalisierung
* Kostenrechnung
* Kostenstellen-Tags

## 2. Initialisierung

Arbeitsschritte:
*  Unternehmensdaten eintragen
*  Bankkonto erfassen, zum Beispiel
	*  IBAN: CH3989144871696181962
	*  Name: UBS
*  Buchungsperiode eröffnen
*  Kontenplan übernehmen

## 3. Customizing
Auswahl:
* Journale und Sequenzen festlegen (siehe Odoo Handbuch)

#Odoo14  
Die Sequenz in Odoo 14 wird über *Finanzen > Kunden > Rechungen* festgelegt. Dazu erstellen Sie eine erste Proformarechnung und wählen diese links zum Bearbeiten aus. Über das Menü *Aktion > Resequence* kann der nächste Wert (Rechnungsnummer) festgelegt werden. Dasselbe gilt auch für Eingangsrechnungen *Finanzen > Lieferanten > Rechnungen*

### Kontenplan

Arbeitsschritte:
* Kontennamen übersetzen

Name | Übersetzung
-|-
Outstanding Receipts | Ausstehende Belege
Outstanding Payments | Ausstehende Zahlungen

### Steuern

Arbeitsschritte:
* Steuergruppen festlegen *Einstellungen > Finanzen > Steuern > configure your tax accounts*
* Steuern deaktivieren und neue Sätze erfassen *Finanzen > Konfiguration > Steuern*
* Taxgrid deaktiveren