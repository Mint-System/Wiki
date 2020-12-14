## Link zu Odoo
Odoo nennt den OnlineShop "eCommerce". 

Link von Odoo zu den Features:
https://www.odoo.com/de_DE/page/e-commerce-features#part_8

## Vordefinierte Designs (Themes)
Das App verfügt über vorgefertigte Design, die der User individuell anpassen kann.

## Einstellungen 
Beim Aufsetzen des Webshops sollen zuerst die Einstellungen gesetzt werden. Wie zum Beispiel in der Kategorie Produkte und Preiskalkulation

### Produkte
Die Einstellungen zu Varianten und Lager zu überprüfen macht Sinn.
Zudem wird über *Produktkategorie* die Einstellungen in der Finanzbuchhaltung (Erlöskonto, Aufwandskonto) vorgenommen. Somit entfällt eine weitere Eingabe im Reiter *Finanzen*. 

### Preiskalkulation
Sollen die Preise im Webshop inklusive der Mehrwertsteuer angezeigt werden, so ist unter Einstellungen, Preiskalkulation das Häckchen bei *Steuer-inkludiert* zu setzen.

## Produkte
Die Produkte für den WebShop werden entweder im Modul Lager, Produkte erfasst oder im Modul Webseite, Produkte. 

Die Produkte (Artikel) sollen möglichst einer Kategorie zugteilt werden, Produkte, eCommerce dann Kategorien. Auch lohnt es sich in der Ansicht eCommerce ein oder mehrere Alternativprodukte anzugeben. Der Kunde sieht diese nach der Auswahl des Artikels unten  angezeigt. 

Es macht Sinn, dass die Produkte mit einem Bild erfasst sind, da im WebShob dann diese auch mit einem Bild präsentiert werden. Das erfasste Produkt ist zuerst nicht "Published" (veröffentlicht), soll das Produkt als Artikel auf der Webseite zur Verfügung stehen, so ist es unter WebSite auf Status *Published* zu setzen.

## Zahlungsmittel 
Als Zahlungsmittel stehen Stand Oktober 2020 nur Paypal, Ingenico, Adyen, Buckaroo, Authorize.net, PayUmoney, Stripe und SIPS Wordline zur Verfügung. 

Eine Integration von den gängigen in der Schweiz eingesetzten Kreditkarten ist umgesetzt. Siehe dazu den Beschrieb in Odoo:
https://www.odoo.com/documentation/user/13.0/general/payment_acquirers/payment_acquirers.html

## Versandarten
Die Versandarten werden in *Finanzen > Konfiguration > Versandmethoden* erfasst. Zuerst ist die Versandmethode zu erstellen, danach wird das Auslieferungsprodukt hinterlegt. 
Falls eine Versandart über verschiedene Anbieter (Post, DHL, etc.) möglich ist, so werden die Preise und der Anbieter über das Auslieferungsprodukt hinterlegt.
Damit die Versandarten auf der WebSite sichtbar sind, müssen diese "published" werden.

Mit den Versandnethoden können verschiedene Kostenanteile angegeben werden.
Zum Beispiel, wenn der Warenwert mehr als CHF 250.05 ist, soll der Versand kostenlos sein.

## Varianten im Warenkorb
Automatischisches Produktzubehör oder vorgeschlagene Produkte und Alternativen, um den Kunden mehr Artikel zu zeigen, die sie vielleicht mögen, ist möglich.

## Allgemeine Geschäftsbedingungen
In der Regel wird eine separate Website mit dem Inhalt Geschäftsbedingungen dafür zur Verfügug gestellt. Der Link zur Seite kann im Header oder im Footer angelegt werden.
