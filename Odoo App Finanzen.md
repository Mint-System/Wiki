---
tags:
  - Definition
section: communication
kind:
  - reference
---
# Odoo App Finanzen

Finanzen sind in Odoo über verschiedene Module abgebildet.

## Rechnungsdigitalisierung

Mit Odoo Finanzen können Rechnung einfach analysiert und importiert werden.

Die folgenden Apps müssen dazu installiert sein:
* `account_invoice_extract`

## Kostenstellen

Kosten können über Kostenstellen-Tags getrackt werden. Mehr dazu unter [[Odoo App Kostenrechnung]]

## Kontenplan

Der schweizerische Kontenplan KMU von Sterchi/Mattle/Helbling ist in der Schweiz weit verbreitet.

Eine neuer Mandant in odoo hat bei Ländereinstellung "Schweiz" automatisch einen Kontenplan der schweiz. KMU. Dieser muss jedoch noch angepasst werde, da diverse Konten enthalten sind, die nicht verwendet werden.

## Budget planen

Mehr dazu unter [[Odoo App Budget]].

## Mehrere Währungen

Odoo Dokumentation: [Odoo’s multi-currency system ](https://www.odoo.com/documentation/user/13.0/accounting/others/multicurrencies/how_it_works.html)

Das Finanz-Modul von Odoo unterstützt mehrere Währungen.

### Automatische Wechselkurse

Wechselkurse können automatisch mit Anbietern synchronisiert werden.
