---
tags:
  - Prozess
kind:
  - howto
section: process
---

# Prozesse Finanzen - Personalabrechnung

Prozesse zur Personalabrechung der Mint System.

## Lohnabrechnung erstellen

Arbeitsschritte:

- Navigieren nach _Personalabrechnung > Arbeitseinträge > Arbeitseinträge_
- Aktion _Gehaltsabrechnungen Generieren_ ausführen
- Navigieren mit Smart-Link _X Gehaltsabrechnung_ und einzelne Lohnabrechnungen auswählen
  - _Andere Einträge_ erstellen
  - Spesen erfassen
  - Gehaltsabrechnung prüfen
- In Stapel auf _Entwurfseintrag Erstellen_ drücken
- Zahlungsdatei mit _Erfasse Zahlung_ generieren
- Zahlungsdatei herunterladen, ablegen und in E-Banking hochladen

## Lohnabrechnung verbuchen

Arbeitsschritte:

- Review Buchhaltungssätze _Tab Buchungsinformationen > Buchung_
- Buchung bestätigen

## Lohnstruktur kopieren

Arbeitsschritte:

- Export Lohnarten
- Anpassen Spalte Vergütungsstruktur
- Import Lohnarten
- Anpassen Betrag Darlehen
- Darlehenskonto auswählen
- Anpassen PK/BVG-Beitrag für AG und AN gemäss Vertrag

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
