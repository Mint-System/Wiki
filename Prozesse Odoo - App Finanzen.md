---
tags:
  - Prozess
kind:
  - howto
section: process
---
# Prozesse Odoo - App Finanzen
Installation Modul Finanzen `account_accountant`.

## Installation

Auswahl:
* Import CAMT Bank Statement `account_bank_statement_import_camt`
* SEPA Kreditübertragung `account_sepa`
* Auszug aus der Kontorechnung `account_invoice_extract`
* Account Invoice Extract Purchase `account_invoice_extract_purchase`
* Analytische Konten `analytic_enterprise`
* Budgetverwaltung `account_budget`
* Schweizer Buchhaltungsauswertungen `l10n_ch_reports`
	* Accounting Reports `account_reports`
* Lieferanten-Rechnung: Freigegeben zu zahlen `account_3way_match`
*  Management der Zahlungserinnerungen `account_followup`
*  Online Bank Statement Synchronization `account_online_synchronization`

### Optionen aktivieren

Navigation nach *Einstellungen > Finanzen* und Auswahl:
* Digitalisierung Dokumente
* Konten für Lieferantenrechnungen vorhersagen (gilt ab #Odoo16)
* Kostenrechnung
* Budgetverwaltung

## Initialisierung

Arbeitsschritte:
*  Unternehmensdaten eintragen
*  Bankkonto erfassen
*  Buchungsperiode eröffnen
*  Kontenplan übernehmen

## Implementation

### Eröffnungsbuchungen erstellen

Voraussetzungen:
* Buchhaltung in bisherigen `alten` System ist abgeschlossen
* Kontenplan in Odoo steht zur Verfügung

Arbeitsschritte:
* Festelegen Datum der Übernahme, üblich ist der 31.12. gemäss Statuten der Gesellschaft `Geschäftsjahr`
* Die Bestände der Konten 1000 Kassa, 1020 Bank, 1200 Vorrat Material, 1530 Fahrzeuge etc werden über das Konto 2990 Durchlaufkonto Eröffnungsbilanz erfasst
