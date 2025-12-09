---
section: communication
kind:
  - explain
---

# Odoo App Projekt

Odoo Projekt verbindet Projektmanagement mit Verkauf, Einkauf, Plannung und Finanzen.

## Zeiterfassung

Die Odoo Zeiterfassung kann mit Projektaufgaben verbunden werden.

Folgende Apps müssen installiert sein:

- Aufgabenprotokolle (`hr_timesheet`)

Ist eine Aufgabe geplant und Zeit darauf gebucht, erhält man in der Listenansicht der Projektaufgaben eine Auswertung zum Fortschritt.

### Timer Aufgaben

Die Zeiterfassung kann mittels Timer in der Aufgabe gestartet werden.

Die folgenden Apps müssen installiert sein:

- Sales Timesheet: Grid Support (`sale_timesheet_enterprise`)

## Finanzen

Die Projektaufwände könne über Kostenstellen-Tags getrackt werden. Siehe [[Odoo App Kostenrechnung]].

## Verkauf

Aus einem bestehenden Projekt kann ein Verkaufsauftrag erstellt werden.

Die folgenden Apps müssen installiert sein:

- `sale_timesheet`

Um einen Verkaufsauftrag zu erstellen muss ein Produkt vom Typ Dienstleistung und Abrechnung anhand Stundenzettel für Aufgaben abgrechnet vorhanden sein.

### Verkauf nach Aufgabe

Anstatt aus einem ganzen Projekt kann aus Aufgaben Verkaufsaufträge erstellt werden.

Die folgenden Apps müssen installiert sein:

- `sale_timesheet_enterprise`

## Berichtswesen

**Project Costs and Revenues**

Dieser Bericht stellt die folgenden Erlöse und Kosten dar:

- Stundenaufwand Arbeitsrapportierung
- Ertrag aus Verrechnung
- Produktkosten aus Kostenstelle
- Unverrechneter Rechnungsbetrag
