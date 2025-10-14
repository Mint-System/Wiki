---
tags:
  - Prozess
kind:
  - howto
section: process
---

# Prozesse Finanzen - Buchhaltung

Führung der Buchhaltung der Mint System.

## Darlehenskonto einrichten

Als GmbH können Gesellschafter von Privatvermögen einzahlen und verzinsen lassen. Die ESTV legt den Zinsatz fest.

Für jeder Mitarbeiter muss ein Darlehenskonto erfasst werden.

Vorher:

- 2160 Gesellschaftsverbindlichkeiten

Nachher:

- 2160 Darlehen Kurt GIsler\
- 2161 Darlehen Janik von Rotz\
- 2162 Darlehen Marco Roeleven

## Buchungen erstellen

Wichtige Buchungssätze kurz und knapp beschrieben.

#### Gutschriften Lieferant

Konto: 6500 Verwaltungsaufwand

#### Gebührenbelastung Zahlungsverkehr

Habenkonto: Verbindlichkeiten aus Lieferungen und Leistungen (Kreditoren)\
Sollkonto: 6910 Bankspesen

#### Gebührenbelastung Kontoführung

Sollkonto: 6910 Bankspesen

#### Lastschriftverfahren VISECA

Kunde: VISECA\
Konto: 4410 Hostingaufwand\
MWST: 0.0%

#### Rechnung UVG

![[UVG Mobiliar.png]]

Konto: 2271 UVG (Mobiliar)\
MWST: 0.0%

#### Fördergelder

Bank an ausserordentlicher Ertrag.

Konto: 8510 Ausserordentlicher, einmaliger oder periodenfremder Ertrag

#### Einzahlung Darlehen

Habenkonto: 2160 Darlehen\
Sollkonto: 1022 Kontokorrent\
Betrag: 2500 CHF

#### Auszahlung Darlehen

Bank in Haben ist immer eine Auszahlung.

Habenkonto: 1022 Kontokorrent\
Sollkonto: 2160 Darlehen\
Betrag: 1234.53 CHF

#### Lohnabrechnung

Die Lohnbuchhaltung ist [[Prozesse Finanzen - Personalabrechnung#Buchhaltung|hier]] beschrieben.

#### Rückzahlung / Rückleitung

Einzahlung und Gutschrift auf das gleiche Konto buchen.

Konto: 1092 Zahlungsdifferenzen

#### Reisespesen

Konto: 6640 Reisespesen

#### Sollzins Bank

Konto: 6900 Zinsaufwand

### Kreditkartengebühren

Konto: 6910 Bankspesen

## Rechnung korrigieren

Angenommen es wurde eine Rechnung ohne MWST erstellt und verbucht.

Gutschrift für Rechnung erfassen:

Konto: Bestehendes Konto\
Journal: Ausgangsrechnungen (CHF)

Neue Rechnung erfassen:

Konto: 3400 Dienstleistungserlöse\
MWST: MwSt. 7,7% ink. NRZ

## Mehrwersteuer abrechnen

Allgemeine Informationen zur gibt es [[Mehrwertsteuer|hier]].
