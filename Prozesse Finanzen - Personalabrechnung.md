---
tags:
- Prozess
---
# Prozesse Finanzen: Personalabrechnung
Prozesse zur Personalabrechung der Mint System.

## Konten einrichten

Zur korrekten Abrechnung müssen die folgenden Konten vorhanden sein:

| Code | Bezeichnung               | Typ                               | Währung    |
| ---- | ------------------------- | ------------------------------ | --- |
| 2270 | AHV/ALV (Ausgleichskasse) | Kurzfristige Verbindlichkeiten | CHF |
| 2271 | UVG (Mobiliar)            | Kurzfristige Verbindlichkeiten | CHF |
| 2272 | KTG (Mobiliar)            | Kurzfristige Verbindlichkeiten | CHF |
| 2273 | BVG                       | Kurzfristige Verbindlichkeiten | CHF |
| 5701 | AHV/ALV (Ausgleichskasse) | Kurzfristige Verbindlichkeiten | CHF |
| 5702 | UVG (Mobiliar)            | Kurzfristige Verbindlichkeiten | CHF |
| 5703 | KTG (Mobiliar)            | Kurzfristige Verbindlichkeiten | CHF |
| 5074 | BVG                       | Kurzfristige Verbindlichkeiten | CHF |

Die Aufwandskonten sind ohne Steuern.

## Lohnstruktur kopieren

Arbeitsschritte:
* Export Lohnarten
* Anpassen Spalte Vergütungsstruktur
* Import Lohnarten
* Anpassen Betrag Darlehen
* Darlehenskonto auswählen
* Anpassen PK/BVG-Beitrag für AG und AN gemäss Vertrag

## Lohnabrechnung erstellen

Arbeitsschritte:
* Navigieren nach *Personalabrechnung  > Arbeitseinträge > Arbeitseinträge*
* Lohnabrechnung erzeugen
* Navigieren mit Smart-Link *X Payslips* und einzelne Payslip auswählen
	* Lohnstruktur anpassen
	* Spesen eintragen
* In Batch auf *Create Draft Entry* drücken
* Zahlungsdatei mit *Erfasse Zahlung* generieren

## Lohnabrechnung verbuchen

* Review Buchhalungssätze *Tab Buchungsinformationen > Buchung*
* Buchung bestätigen
