---
tags:
- Prozess
---
# Prozesse Finanzen - Personalabrechnung
Prozesse zur Personalabrechung der Mint System.
## Lohnabrechnung erstellen

Arbeitsschritte:
* Navigieren nach *Personalabrechnung  > Arbeitseinträge > Arbeitseinträge*
* Aktion *Gehaltsabrechnungen Generieren* ausführen
* Navigieren mit Smart-Link *X Gehaltsabrechnung* und einzelne Lohnabrechnungen auswählen
	* *Andere Einträge* erstellen 
	* Spesen erfassen
	* Gehaltsabrechnung prüfen
* In Stapel auf *Entwurfseintrag Erstellen* drücken
* Zahlungsdatei mit *Erfasse Zahlung* generieren
* Zahlungsdatei herunterladen, ablegen und in E-Banking hochladen

## Lohnabrechnung verbuchen

Arbeitsschritte:
* Review Buchhaltungssätze *Tab Buchungsinformationen > Buchung*
* Buchung bestätigen

## Lohnstruktur kopieren

Arbeitsschritte:
* Export Lohnarten
* Anpassen Spalte Vergütungsstruktur
* Import Lohnarten
* Anpassen Betrag Darlehen
* Darlehenskonto auswählen
* Anpassen PK/BVG-Beitrag für AG und AN gemäss Vertrag
## Konten einrichten

Zur korrekten Abrechnung müssen die folgenden Konten vorhanden sein:

| Code | Bezeichnung               | Typ                            | Währung |
| ---- | ------------------------- | ------------------------------ | ------- |
| 2270 | AHV/ALV (Ausgleichskasse) | Kurzfristige Verbindlichkeiten | CHF     |
| 2271 | UVG (Mobiliar)            | Kurzfristige Verbindlichkeiten | CHF     |
| 2272 | KTG (Mobiliar)            | Kurzfristige Verbindlichkeiten | CHF     |
| 2273 | BVG                       | Kurzfristige Verbindlichkeiten | CHF     |
| 5701 | AHV/ALV (Ausgleichskasse) | Kurzfristige Verbindlichkeiten | CHF     |
| 5702 | UVG (Mobiliar)            | Kurzfristige Verbindlichkeiten | CHF     |
| 5703 | KTG (Mobiliar)            | Kurzfristige Verbindlichkeiten | CHF     |
| 5074 | BVG                       | Kurzfristige Verbindlichkeiten | CHF     |

Die Aufwandskonten sind ohne Steuern.