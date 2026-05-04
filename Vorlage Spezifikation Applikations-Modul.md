---
kind: reference
section: template
---

Die Entwicklung von Odoo Modulen erfordert eine exakte Spezifikation. Die folgenden Bereiche müssen in der Spezifikation berücksichtigt werden:

- **[[#Beschreibung]]**: Beschreibung der Modul-Funktion.
- **[[#Rahmenbedingungen]]**: Allgemeine Bestimmungen für die Entwicklung
- **[[#Abhängigkeiten]]**: Liste der Modul-Abhängigkeiten

Wenn das Modul bestehende Definition erweitert, fügen Sie diese Abschnitte hinzu:

- **[[#Bestehende Felder]]**: Spezifikation für bestehende Odoo Ansichten
- **[[#Bestehende Ansichten]]**: Anpassungen auf Ansichten
- **[[#Bestehende Aktionen]]**: Spezifikation zur Anpassung einer bestehenden Odoo Aktion
- **[[#Bestehende Klassen]]**: Vererbung und Erweiterung von Odoo Modellen

Falls das Modul neue Definitionen macht, dann verwenden Sie diese Vorlagen:

- **[[#Neue Felder]]**: Spezifikation für neue Felder auf Odoo Ansichten
- **[[#Neue Aktionen]]**: Spezifikation für eine neue Odoo Aktion
- **[[#Neue Suchfelder und Filter]]**: Spezifikation für neue Filter auf Odoo Ansichten
- **[[#Neue Konfiguration]]**: Spezifikation für neues Feld in Einstellungen

## Beschreibung

Titel: Account Currency Communication
Name: `account_currency_communication`\
Beschreibung: Dieses Odoo Modul erlaubt die Konfiguration des Kommunikations-Standards auf der Währung. Abhängig davon welche Währung für die Rechnung verwendet wird.

## Rahmenbedingungen

Auswahl an Rahmenbedingungen, die bei der Entwicklung berücksichtigt werden müssen:

### Open Source

Entwicklung wird auf <https://github.com/mint-System/odoo-apps-account-Invoicing/> publiziert.

### Übersetzung

Die Entwicklung des Moduls erfolgt auf Englisch. Es muss eine Deutsch Übersetzung (de) angelegt werden.

## Abhängigkeiten

Das Modul hängt von den folgenden Modulen ab:

| Titel                | Name                 | Beschreibung                                            |
| -------------------- | -------------------- | ------------------------------------------------------- |
| Sale Start End Dates | sale_start_end_dates | Fügt dem Verkaufsauftrag ein Start- und Enddatum hinzu. |

## Bestehende Felder

### Zustand

| Label   | Name  | Typ       | Modell             |
| ------- | ----- | --------- | ------------------ |
| Zustand | state | selection | sale.blanket.order |

Der Zustand des Rahmenauftrags soll auf vier Stufen umgesetzt werden:

- Entwurf -> Angebot
- -> Angebot gesendet
- Offen -> Angebot gesendet
- Abgelaufen

Der Zustand _Angebot gesendet_ verwendet die Aktion _Angebot versenden_.
## Bestehende Aktionen

### Buchen

Name: `action_post`\
Modell: account.move

Beim Buchen soll die Zahlungsreferenz einer Kundenrechnung anhand dem festgelegt Kommunkations-Standard auf der Währung der Rechnung generiert werden.

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
| StockBarcodeController | `main_menu`   | Die Funktion soll auch den Arbeitsauftrag anzeigen können. |
## Neue Felder

| Label            | Name               | Typ                  | Modell             | Beschreibung                         |
| ---------------- | ------------------ | -------------------- | ------------------ | ------------------------------------ |
| Rechnungsadresse | partner_invoice_id | many2one res.partern | sale.blanket.order | Rechnungsadresse für Rahmenaufträge. |

### Rechnungsadresse

Wird die Aktion _Verkaufsauftrag Erstellen_ ausgewählt, wird die Rechnungsadresse an den Verkaufsauftrag auf das Feld `partner_invoice_id` übertragen.

## Neue Aktionen

### Per E-Mail Versenden

Name: `action_order_send`\
Modell: sale.blanket.order

Beim wählen der Aktion wird der E-Mail-Versenden-Dialog geöffnet. Der Rahmenauftrag ist als PDF im Anhang verfügbar. Das E-Mail kann an den Kunden verschickt werden.

## Neue Ansichten

### Formular Lot Rental

Das ist die Formular-Ansicht von "Stock Lot Rental". Die Felder können bearbeitet und gespeichert werden.

## Neue Suchfelder und Filter

### Rechnungsadresse

| Label            | Ansicht                    | Beschreibung                      |
| ---------------- | -------------------------- | --------------------------------- |
| Rechnungsadresse | `sale.view_quotation_tree` | Feld steht in Suche zur Verfügung |

## Neue Konfigurationen

### Skonto-Produkt

| Label          | Technischer Name      | Beschreibung                                  |
| -------------- | --------------------- | --------------------------------------------- |
| Skonto-Produkt | `discount_product_id` | Standardprodukt für die Skonto-Buchungszeile. |

Auf dem Produkt kann der Benutzer das Aufwandskonto für die Skontobuchung festlegen. Dieses Konto wird beim Erstellen der Skonto-Buchungszeile übernommen.

