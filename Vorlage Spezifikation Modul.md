---
title: Vorlage Spezifikation Modul
kind: reference
repository: '`Odoo-Apps-Account-Invoicing`'
section: template
---

Die Entwicklung von Odoo Modulen erfordert eine exakte Spezifikation. Die folgenden Bereich müssen in der Spezifikation berücksichtigt werden:

- **[[#Beschreibung]]**: Beschreibung der Modul-Funktion.
- **[[#User Stories]]**: Handlungen aus Sicht des Benutzers
- **[[#Rahmenbedingungen]]**: Allgemeine Bestimmungen für die Entwicklung
- **[[#Neue Felder]]**: Spezifikation für neue Felder auf Odoo Ansichten
- **[[#Bestehende Felder]]**: Spezifikation für bestehende Odoo Ansichten
- **[[#Neue Aktionen]]**: Spezifikation für eine neue Odoo Aktion
- **[[#Bestehende Aktionen]]**: Spezifikation zur Anpassung einer bestehenden Odoo Aktion
- **[[#Neue Suchfelder und Filter]]**: Spezifikation für neue Filter auf Odoo Ansichten
- **[[#Neue Konfiguration]]**: Spezifkation für neues Feld in Einstellungen
- **[[#Bestehende Klassen]]**: Vererbung und Erweiterung von Odoo Modellen
- **[[#Bestehende Ansichten]]**: Anpassungen auf Ansichten

## Beschreibung

Technischer Name: `account_currency_communication`\

Dieses Odoo Modul erlaubt die Konfiguration des Kommunikations-Standards auf der Währung. Abhäning davon welche Währung für die Rechnung verwendet wird.

## User Stories

Die User Stories erläutern den Anwendungsfall aus Sicht des Benutzers. Dazu zwei Beispiele:

### Skonto auf Rechnung erfassen

1. Der Benutzer erstellen eine Lieferantenrechnung und wählt im Feld _Zahlungsbediungen Skonto_ den Eintrag "10 Tage / 10%" aus.
2. Er sieht dass das Feld _Fälligkeit Skonto_ entsprechend angepasst wurde (Rechnungsdatum + 10 Tage). Nun überschreibt er das Feld mit -1 Tag.
3. Nun wählt der Benutzer _Aktion > Skonto aktualiseren_.
4. Der Benutzer sieht, dass eine neue Rechnungszeile gemäss Einstellungen und Zahlungsbedingung hinzugefügt wurde und der Rechnungsbetrag korrekt angepasst wurde.

### Lieferantenzahlungen mit Skonto bezahlen

1. Am Donnerstag zeigt der Benutzer die Lieferantezahlungen an und sortiert nach Fälligkeit Skonto.
2. Er wählt den Filter _Rechnungen ohne Skontozeile_, markiert die aufgelistet Rechungen und wählt Aktion > Skonto aktualisieren.
3. Er entfernt den Filter und markiert alle Lieferantenrechnungen zur Zahlung.
4. Der Benutzer wählt _Aktion > Zahlung erfassen_.

## Rahmenbedingungen

Auswahl an Rahmenbedigungen, die bei der Entwicklung berücksichtigt werden müssen:

### Open Source

Entwicklung wird auf <https://github.com/mint-System/odoo-apps-account-Invoicing/> publiziert.

### Übersetzung

Die Entwicklung des Moduls erfolgt auf Englisch. Es soll eine Übersetzung für die Sprache Deutsch (de_CH) angelegt werden.

## Neue Felder

| Name             | Technischer Name                             | Modell             | Beschreibung                        |
| ---------------- | -------------------------------------------- | ------------------ | ----------------------------------- |
| Rechnungsadresse | `partner_invoice_id = many2one: res.partner` | sale.blanket.order | Rechnungsadresse für Rahmenaufträge |

### Rechnungsadresse

Wird die Aktion _Verkaufsauftrag Erstellen_ ausgewählt, wird die Rechnungsadresse an den Verkaufsauftrag auf das Feld `partner_invoice_id` übertragen.

## Bestehende Felder

### Zustand

| Name    | Technischer Name    | Modell             |
| ------- | ------------------- | ------------------ |
| Zustand | `state (selection)` | sale.blanket.order |

Der Zustand des Rahmenauftrags soll auf vier Stufen umgesetzt werden:

- Entwurf -> Angebot
- -> Angebot gesendet
- Offen -> Angebot gesendet
- Abgelaufen

Der Zustand _Angebot gesendet_ verwendet die Aktion _Angebot versenden_.

## Neue Aktionen

### Per E-Mail Versenden

| Name                 | Technischer Name    | Modell             | Beschreibung                         |
| -------------------- | ------------------- | ------------------ | ------------------------------------ |
| Per E-Mail Versenden | `action_order_send` | sale.blanket.order | Rahmenauftrag als Angebot versenden. |

Beim wählen der Aktion wird der E-Mail-Versenden-Dialog geöffnet. Der Rahmenauftrag ist als PDF im Anhang verfügbar. Das E-Mail kann an den Kunden verschickt werden.

## Bestehende Aktion

### Buchen

| Name   | Technischer Name | Modell       |
| ------ | ---------------- | ------------ |
| Buchen | `action_post`    | account.move |

Beim Buchen soll die Zahlungsreferenz einer Kundenrechnung anhand dem festgelegt Kommunkations-Standard auf der Währung der Rechnung generiert werden.

## Neue Suchfelder und Filter

### Rechnungsadresse

| Name             | Ansicht                    | Beschreibung                      |
| ---------------- | -------------------------- | --------------------------------- |
| Rechnungsadresse | `sale.view_quotation_tree` | Feld steht in Suche zur Verfügung |

## Neue Konfigurationen

### Skonto-Produkt

| Name           | Technischer Name      | Beschreibung                                  |
| -------------- | --------------------- | --------------------------------------------- |
| Skonto-Produkt | `discount_product_id` | Standardprodukt für die Skonto-Buchungszeile. |

Auf dem Produkt kann der Benutzer das Aufwandskonto für die Skontobuchung festlegen. Dieses Konto wird beim Erstellen der Skonto-Buchungszeile übernommen.

## Bestehende Ansichten

### Formular Ticket mit Tab Aufgaben

Auf der Formularansicht des Ticket gibt es einen neuen Tab _Aufgaben_. Hier können Aufgaben verlinkt oder erstellt werden.

Zusätzlich werden die verknüpften Aufgaben als Smart-Button angezeigt.

### Formular Aufgabe mit Smart-Button

Die Formularansicht der Projektaufgabe zeigt einen Smart-Button mit Anzahl der verlinkten Tickets.

## Bestehende Klassen

### StockBarcodeController

| Klasse                 | Funktionsname | Beschreibung                                               |
| ---------------------- | ------------- | ---------------------------------------------------------- |
| StockBarcodeController | main_menu     | Die Funktion soll auch den Arbeitsauftrag anzeigen können. |
