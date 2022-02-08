# Vorlage Technische Spezifikation

Die Entwicklung von Odoo Apps erfordert eine exakte Spezifikation.

* **[[#Neue Felder]]**: Spezifikation für neue Felder auf Odoo Ansichten
* **[[#Bestehende Felder]]**: Spezifikation für bestehende Odoo Ansichten
* **[[#Neue Aktionen]]**: Spezifikation für eine neue Odoo Aktion
* **[[#Neue Suchfelder und Filter]]**: Spezifikation für neue Filter auf Odoo Ansichten
* **[[#Neue Konfiguration]]**: Spezifkation für neues Feld in Einstellungen

## Neue Felder

| Name             | Technischer Name     | Modell             | Beschreibung                        |
| ---------------- | -------------------- | ------------------ | ----------------------------------- |
| Rechnungsadresse | `partner_invoice_id` | sale.blanket.order | Rechnungsadresse für Rahmenaufträge |

### Rechnungsadresse
Abhängigkeit: <https://www.odoo-wiki.org/sale-blanket-order.html>

**Aktion: Verkaufsauftrag Erstellen**

Wird die Aktion *Verkaufsauftrag Erstellen* ausgewählt, wird die Rechnungsadresse an den Verkaufsauftrag auf das Feld `partner_invoice_id` übertragen.

## Bestehende Felder

| Name    | Technischer Name | Modell             | Beschreibung                    |
| ------- | ---------------- | ------------------ | ------------------------------- |
| Zustand | `state`          | sale.blanket.order | Bestehende Stufen überschreiben |

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

## Neue Konfiguration

| Name         | Beschrebung                             |
| ------------ | --------------------------------------- |
| Skonto-Konto | Standardkonto für Skonto-Buchungszeile. |

### Skonto-Konto

Dieses Feld wird in den produ *Finanzen > Zahlungen des Lieferanten* unterhalb von *Kontrollen* angezeigt. Die Einstellung ist automatisch aktiviert.