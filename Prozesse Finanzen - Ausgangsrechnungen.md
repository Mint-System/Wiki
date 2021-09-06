# Prozess Ausgangsrechnungen
Rechnungen erstellen und versenden.

## Arbeitsrapport validieren
Verantwortlich: [[Rollen#Controller]]

Arbeitsrapport werden jeweils am Ende des Monats validiert, daraus werden die Ausgangsrechnungen generiert.

Arbeitsschritte:
* App Zeiterfassung  öffnen
* Einträge auf den letzten Tag im Monat validieren


## Zeitrapport erstellen

Mit der Rechnung wird immer der dazugehörige Arbeitsrapport verschickt.

Arbeitsschritte:

* Projekt-Übersicht anzeigen und Zeiterfassung öffnen
* Anzeigen Einträge zur Verrechnung
* Erstellen und Ablagen Bericht *Zeitnachweis-Eintrage*

## Ausgangsrechnung erstellen
Verantwortlich: [[Rollen#Projektleiter]]

Arbeitsschritte:
* Projekt-Übersich öffnen und Rechnung erzeugen
* Konten, [[Mehrwertssteuersatz]] und Kostenstelle prüfen
* Verlinken Zeitrapport
* Rechnung als Entwurf bereitstellen.

## Odoo Lizenzkostenertrag verrechnen

Vorbereitung:
* Neues Produkt erstellen *Kommission Odoo Lizenzen*
* Als Erlöskonto 3200 Handelserlöse angeben.
* Unter *Verkäufe > Produkte > Preislisten* eine Preisliste *Euro Preisliste* erstellen
* Dem Produkt die Preisliste hinzufügen
* Odoo Rechnungsadresse mit VAT erfassen

Arbeitsschritte:
* Bestellungen im Odoo Portal herunterladen unter [Portal - Bestellungen](https://www.odoo.com/de_DE/my/purchase)
* Neue Rechnung erstellen *Finanzen > Ausgangsrechnungen > Neue Rechnung* und als Kunde die Rechnungsadresse von Odoo S.A. mit Mail 	
commissions@odoo.com auswählen
* Produkt *Odoo Lizenzen* mit Bestellnummer als Buchungstext erfassen
* In der Rechnungsnotiz die Zahlungsinformationen speichern

```
Bankkonto: Mint System GmbH
Bank: Raiffeisenbank Urnerland
SWIFT-BIC: RAIFCH22
IBAN: CH40 8080 8008 9197 0092 6
MWST: CHE-150.248.608
UID: CHE-150.248.608
```