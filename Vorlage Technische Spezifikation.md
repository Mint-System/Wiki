# Vorlage Technische Spezifikation

Version: 2022-03-07

**Inhaltsverzeichnis**

Die Entwicklung von Odoo Apps erfordert eine exakte Spezifikation.

* **[[#Neue Felder]]**: Spezifikation für neue Felder auf Odoo Ansichten
* **[[#Bestehende Felder]]**: Spezifikation für bestehende Odoo Ansichten
* **[[#Neue Aktionen]]**: Spezifikation für eine neue Odoo Aktion\
* **[[#Bestehende Aktionen]]**: Spezifikation zur Anpassung einer bestehenden Odoo Aktion
* **[[#Neue Suchfelder und Filter]]**: Spezifikation für neue Filter auf Odoo Ansichten
* **[[#Neue Konfiguration]]**: Spezifkation für neues Feld in Einstellungen
* **[[#Bestehende Klassen]]**: Vererbung und Eweiterung von Odoo Modellen
* **[[#User Stories]]**: Handlungen aus Sicht des Benutzers
* **[[#Rahmenbedingungen]]**: Allgemeine Bestimmungen für die Entwicklung

## Neue Felder


| Name             | Technischer Name     | Modell             | Beschreibung                        |
| ---------------- | -------------------- | ------------------ | ----------------------------------- |
| Rechnungsadresse | `partner_invoice_id (many2one: res.partner)` | sale.blanket.order | Rechnungsadresse für Rahmenaufträge |

### Rechnungsadresse
Abhängigkeit: <https://www.odoo-wiki.org/sale-blanket-order.html>

**Aktion: Verkaufsauftrag Erstellen**

Wird die Aktion *Verkaufsauftrag Erstellen* ausgewählt, wird die Rechnungsadresse an den Verkaufsauftrag auf das Feld `partner_invoice_id` übertragen.

## Bestehende Felder

| Name    | Technischer Name | Modell             | Beschreibung                    |
| ------- | ---------------- | ------------------ | ------------------------------- |
| Zustand | `state (selection)`          | sale.blanket.order | Bestehende Stufen überschreiben |

### Zustand
Abhängigkeit: <https://www.odoo-wiki.org/sale-blanket-order.html>

**Definition**

Der Zustand des Rahmenauftrags soll auf vier Stufen umgesetzt werden:
*	Entwurf -> Angebot
*	-> Angebot gesendet
*	Offen -> Angebot gesendet
*	Abgelaufen

Der Zustand *Angebot gesendet* verwendet die Aktion *Angebot versenden*.

## Neue Aktionen

| Name                 | Technischer Name    | Modell             | Beschreibung                         |
| -------------------- | ------------------- | ------------------ | ------------------------------------ |
| Per E-Mail Versenden | `action_order_send` | sale.blanket.order | Rahmenauftrag als Angebot versenden. |

### Per E-Mail Versenden
Abhängigkeit: <https://www.odoo-wiki.org/sale-blanket-order.html>

**Definition**

Beim wählen der Aktion wird der E-Mail-Versenden-Dialog geöffnet. Der Rahmenauftrag ist als PDF im Anhang verfügbar. Das E-Mail kann an den Kunden verschickt werden.

## Neue Suchfelder und Filter

| Name             | Ansicht                    | Beschreibung                      |
| ---------------- | -------------------------- | --------------------------------- |
| Rechnungsadresse | `sale.view_quotation_tree` | Feld steht in Suche zur Verfügung |

## Neue Konfigurationen

| Name           | Technischer Name      | Beschreibung                                  |
| -------------- | --------------------- | --------------------------------------------- |
| Skonto-Produkt | `discount_product_id` | Standardprodukt für die Skonto-Buchungszeile. |

### Skonto-Produkt

Auf dem Produkt kann der Benutzer das Aufwandskonto für die Skontobuchung festlegen. Dieses Konto wird beim Erstellen der Skonto-Buchungszeile übernommen.

## Bestehende Klassen

| Klasse                 | Funktionsname | Beschreibung                                               |
| ---------------------- | ------------- | ---------------------------------------------------------- |
| StockBarcodeController | main_menu     | Die Funktion soll auch den Arbeitsauftrag anzeigen können. |

## User Stories

Die User Stories erläutern den Anwendungsfall aus Sicht des Benutzers.

### Skonto auf Rechnung erfassen

1. Der Benutzer erstellen eine Lieferantenrechnung und wählt im Feld *Zahlungsbediungen Skonto* den Eintrag "10 Tage / 10%" aus.
2. Er sieht dass das Feld *Fälligkeit Skonto* entsprechend angepasst wurde (Rechnungsdatum + 10 Tage). Nun überschreibt er das Feld mit -1 Tag.
3. Nun wählt der Benutzer *Aktion > Skonto aktualiseren*.
4. Der Benutzer sieht, dass eine neue Rechnungszeile gemäss Einstellungen und Zahlungsbedingung hinzugefügt wurde und der Rechnungsbetrag korrekt angepasst wurde.

### Lieferantenzahlungen mit Skonto bezahlen

1. Am Donnerstag zeigt der Benutzer die Lieferantezahlungen an und sortiert nach Fälligkeit Skonto.
2. Er wählt den Filter *Rechnungen ohne Skontozeile*, markiert die aufgelistet Rechungen und wählt Aktion > Skonto aktualisieren.
3. Er entfernt den Filter und markiert alle Lieferantenrechnungen zur Zahlung.
4. Der Benutzer wählt *Aktion > Zahlung erfassen*.

## Rahmenbedingungen

**Open Source**

Entwicklung wird auf <https://github.com/mint-System/odoo-apps-account-Invoicing/> publiziert.

**Übersetzung**

Die Entwicklung des Moduls erfolgt auf Englisch. Es soll eine Übersetzung für die Sprache Deutsch (de_CH) angelegt werden.
