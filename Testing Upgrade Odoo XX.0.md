---
kind: reference
section: template
---

````markdown
---
project: Odoo Acme Corporation
tags:
  - upgrade-document
---
# Testing Upgrade Odoo XX.0

## Abgrenzung 🔭

Die folgenden Aspekte sind für as Testing "out-of-scope":

- Übersetzungen
- Odoo Benutzeroberfläche
- Layout der Berichte

## Testfälle 🔬

Öffnen Testumgebung: https://upgrade.odoo.aerolite.ch/

### Verkauf - Angebot erstellen 🟩

Prüfschritte:
- Öffnen App _Verkauf_
- Erstellen neues Angebot

## Geplante Aktion - Reminder Verlängerung versenden 🟥

Prüfschritte:
- Anzeige geplante Aktionen
- Suche nach _Verkaufsabonnement: Reminder Verlängerung versenden_
- Aktion manuell asuführen
- Prüfen ob E-Mails versendet wurden

### Automatische Aktionen - Standard-Zahlungsbedingung festlegen 🟧

Prüfschritte:
- Anzeige automatische Aktionen
- Prüfen ob Aktion aktiv ist.
  
## Feedback 📢

### Verkauf - Verkauf lässt sich nicht öffnen 🟩

Wenn ich versuche die App _Verkauf_ zu öffnen, erscheint dieser Fehler:

```<br>Caused by: Error: "sale.order"."partner_sale_id" field is undefined.<br>```

jvr: Die App `sale_invoice_policy` hat gefehlt.

### Verkauf - Produktset kann nicht hinzugefügt werden 🟥

Bei Klick auf "Produkset hinzufügen" erscheint dieser Fehler:

```
<br>RPC_ERROR<br>Odoo Server Error<br>Traceback (most recent call last):<br><br>           ~~~~~~~~~~~^^^^^^^^^^^^<br>KeyError: 'product.set.add'<br>
```
````

