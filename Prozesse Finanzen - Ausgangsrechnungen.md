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

- Ansicht _Zeiterfassung > Alle Zeiterfassungen_ öffnen
- Filtern nach _Meine Projekte_, _Entwurf_ und letzter Monat
- Gruppieren nach *Projekt* und *Abrechenbarer Typ (Preis)*
- Sortieren nach aufgewendeten Stunden
- Aufgewendete Stunden pro Projekt prüfen
- Einträge bei Bedarf korrigieren und validieren

::: tip
Das Projekt *Support* enthält alle Zeiterfassungen aus dem Kundendienst. Der Projektmanager validiert Einträge aus allen Kundendienst-Tickets.
:::

## Verkaufsaufträge abrechnen

Arbeitsschritte:

- Aufrufen *Abzurechnende Aufträge*
- Gruppieren nach *Vertriebsmitarbeiter* und *Projekt*
- Alle Aufträge eines Projekts markieren
- _Aktion > Rechnungen erstellen_ ausführen
- Rechnung prüfen und bestätigen
- Auf der Rechnung _Senden & Drucken_ aufsühren
- Das E-Mail prüfen und versenden

## Abonnements abrechnen

Die Abonnments erzeugen automatisch eine Rechnung.

Arbeitsschritte:

- Aufrufen Abonnements-Rechnungen unter Ausgangsrechnungen
- Rechnung bestätigen und versenden
- Als Mail-Vorlage _Abonnement: Abonnementrechnung_ auswählen
- Die Anrede- und Grusszeile anpassen
- Die Rechnung verschicken

## Odoo Kommissionen verrechnen

Arbeitsschritte:

- Bestellungen im Odoo Portal herunterladen unter [Portal - Bestellungen](https://www.odoo.com/de_DE/my/purchase)
- Neue Rechnung erstellen _Finanzen > Ausgangsrechnungen > Neue Rechnung_ und als Kunde die Rechnungsadresse von Odoo S.A. mit Mail
  commissions@odoo.com auswählen
- Produkt _Odoo Lizenzen_ mit Bestellnummer als Buchungstext erfassen
- Den _Purchase Order_ als Anhang hinzufügenh
- In der Rechnungsnotiz die Zahlungsinformationen speichern

```
Bankkonto: Mint System GmbH
Bank: Raiffeisenbank Urnerland
SWIFT-BIC: RAIFCH22
IBAN: CH40 8080 8008 9197 0092 6
MWST: CHE-150.248.608
UID: CHE-150.248.608
```
