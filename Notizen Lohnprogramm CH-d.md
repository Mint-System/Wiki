# Notizen Lohnprogramm CH-d

Notizen aus Interive mit Mitarbeiter von [[giordano.ch ag]].

## Einführung

Payroll Customizaions Giordano -> Installiert die Lohnarten

Neues Form: Anteile Arbeitger / Arbeitnehmer

## Technisches

Bestehendes Feld für Lohn wird nicht verwendet.

Odoo lädt BASIC, GROSS und NET. Diese können archiviert werden.

## Konfiguration

1. Anteile Arbeitger / Arbeitnehmer

Zwei Typen für Mitarbeiter und Lehrlinge.

2. Anteile Arbeitnehmer festlegen.

Monatslohngrenze: Relevant für ALV 2.

3. Basis bei Lohnarten festlegen.
4. FiBu-Konten hinterlegen
5. Mitarbeiter einrichten
	- Geschlecht für Krankentaggeld
	- Kinder

6. Arbeitsvertrag konfigurieren
7. Lohnjournal einrichten

## Lohnabrechnung erstellen

Verschiedene Wege um die Abrechnung zu generieren.

Batch > Lohnabrechnung erzeugen

Wenn SEPA -> Erfasse Zahlung bei Batch-Asicht

## Py3o Reports

Erweiterung überschreibt das Template.

## Fragen

- Wie verhält sich das Modul mit Auslagen?

> Noch nicht getestet

- Odoo 14 Kompatibilität?

> Ohne grossen Aufwand. Ist in Abklärung.

- Vergleich Vertragsfelder Arbeitszeit?

> Arbeitszeiten ist das gleiche Feld wie im Vertrag und für Mitarbeiter

- Quellensteuer-Import?

> Keine Funktion

- Dreizehnter Monatslohn

> Ist Enhalten

## Todo

- Vorlagen Konten und Basis

## Notes

Payroll SEPA-Problem wurde mit einer neueren Version gefixed.

https://www.moneytoday.ch/iso20022/movers-shakers/unternehmen-institutionen/testplattformen-iso20022/