---
tags:
  - Prozess
responsible: Controller
kind:
  - howto
section: process
---
# Prozesse Finanzen - Ausgangsrechnungen

Rechnungen erstellen und versenden.

## Arbeitsrapport validieren

Arbeitsrapport werden jeweils am Ende des Monats validiert, daraus werden die Ausgangsrechnungen generiert.

Arbeitsschritte:

* Ansicht *Zeiterfassung > Alle Zeiterfassungen* öffnen
* Filtern nach *Meine Projekte*, *Entwurf* und letzter Monat
* Gruppieren nach Projekt und abrechenbarer Typ (Preis)
* Sortieren nach aufgewendete Stunden
* Aufgewendete Stunden pro Projekt prüfen
* Einträge bei Bedarf korrigieren und validieren

## Verkaufsaufträge abrechnen

Arbeitsschritte:

* Aufrufen abzurechnende Aufträge
* Gruppieren nach Vertriebsmitarbeiter
* Einen oder mehrere Aufträge eines Kunden markieren
* *Aktion > Rechnungen erstellen* ausführen
* Auf der Rechnung den Bericht *Zeitnachweis-Einträge* drucken
* Im Bericht den Zeitraum kopieren
* Auf der Rechnung *Senden & Drucken* ausühren
* Den Zeitnachweis anhängen und den Zeitraum einfügen
* Die Anrede- und Grusszeile anpassen
* Die Rechnung verschicken

## Abonnements abrechnen

Die Abonnments erzeugen automatisch eine Rechnung.

Arbeitsschritte:

* Aufrufen Abonnements-Rechnungen unter Ausgangsrechnungen
* Rechnung bestätigen und versenden
* Als Mail-Vorlage *Abonnement: Abonnementrechnung* auswählen
* Die Anrede- und Grusszeile anpassen
* Die Rechnung verschicken

## Odoo Kommissionen verrechnen

Arbeitsschritte:
* Bestellungen im Odoo Portal herunterladen unter [Portal - Bestellungen](https://www.odoo.com/de_DE/my/purchase)
* Neue Rechnung erstellen *Finanzen > Ausgangsrechnungen > Neue Rechnung* und als Kunde die Rechnungsadresse von Odoo S.A. mit Mail 	
commissions@odoo.com auswählen
* Produkt *Odoo Lizenzen* mit Bestellnummer als Buchungstext erfassen
* Den *Purchase Order* als Anhang hinzufügenh
* In der Rechnungsnotiz die Zahlungsinformationen speichern

```
Bankkonto: Mint System GmbH
Bank: Raiffeisenbank Urnerland
SWIFT-BIC: RAIFCH22
IBAN: CH40 8080 8008 9197 0092 6
MWST: CHE-150.248.608
UID: CHE-150.248.608
```