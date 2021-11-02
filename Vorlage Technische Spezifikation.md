# Vorlage Technische Spezifikation

Die Entwicklung von Odoo Apps erfordert eine exakte Spezifikation.

* **Neue Felder**: Spezifikation für neue Felder auf Odoo Ansichten
* **Bestehende Felder**: Spezifikation für bestehende Odoo Ansichten
* **Neue Aktion**: Spezifikation für eine neue Odoo Aktion

## Neue Felder

| Name             | Technischer Name     | Modell             | Beschreibung                        |
| ---------------- | -------------------- | ------------------ | ----------------------------------- |
| Rechnungsadresse | `partner_invoice_id` | sale.blanket.order | Rechnungsadresse für Rahmenaufträge |
|                  |                      |                    |                                     |

### Rechnungsadresse
Abhängigkeit: <https://www.odoo-wiki.org/sale-blanket-order.html>

**Aktion: Verkaufsauftrag Erstellen**

Wird die Aktion *Verkaufsauftrag Erstellen* ausgewählt, wird die Rechnungsadresse an den Verkaufsauftrag übertragen.

## Bestehende Felder

| Name    | Technischer Name | Modell             | Beschreibung                    |
| ------- | ---------------- | ------------------ | ------------------------------- |
| Zustand | `state`          | sale.blanket.order | Bestehende Stufen überschreiben |
|         |                  |                    |                                 |


### Zustand
Abhängigkeit: <https://www.odoo-wiki.org/sale-blanket-order.html>

**Definition**

Der Zustand des Rahmenauftrags soll auf vier Stufen umgesetzt werden:
*	Entwurf -> Angebot
*	-> Angebot gesendet
*	Offen -> Angebot gesendet
*	Abgelaufen

Der Zustand *Angebot gesendet* verwendet die Aktion *Angebot versenden*.

## Neue Aktion

| Name                 | Technischer Name    | Modell             | Beschreibung                         |
| -------------------- | ------------------- | ------------------ | ------------------------------------ |
| Per E-Mail Versenden | `action_order_send` | sale.blanket.order | Rahmenauftrag als Angebot versenden. |
|                      |                     |                    |                                      |

### Per E-Mail Versenden
Abhängigkeit: <https://www.odoo-wiki.org/sale-blanket-order.html>

**Definition**

Beim wählen der Aktion wird der E-Mail-Versenden-Dialog geöffnet. Der Rahmenauftrag ist als PDF im Anhang verfügbar. Das E-Mail kann an den Kunden verschickt werden.
