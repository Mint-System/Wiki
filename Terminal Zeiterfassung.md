# Terminal Zeiterfassung
Das "Terminal Zeiterfassung" ist ein Produkt der [[Mint System GmbH]].

![[Produktbild.png]]

## Beschreibung

Mit dem Terminal Zeiterfassung erfassen Mitarbeitende ihre Präsenzeit ohne Tastatureingaben. Das Terminal ist mit einem Touchscreen bedienbar und ist mit dem Odoo-Kioskmodus integriert. Mitarbeitende können mittels PIN, RFID oder NFC ihre Identität bestätigen und ihre Anwesenheit registrieren.

Wir setzen auf Open Source Hardware.  Heisst alle Komponenten des Terminals werden von verschiedenen Hardwarehersteller angeboten. Die Hardware ist zuverlässiger und als Kunde ist man vom Lieferanten unabhängig.

Die Mint System übernimmt die Montage vor Ort und unterstützt den Kunden bei der Konfiguration oder allfälligen Problemen. 

## Hardware

Als Terminal verwenden wir einen [[Raspberry Pi]] mit einem RFID-Scanner.

Dazu die Stückliste:

**Raspberry Pi 3 Model B+**

Mini-Computer der die Odoo Zeiterfassung im Kiosk-Modus darstellt.

[Mouser](https://www.mouser.ch/new/raspberry-pi/raspberry-pi-3-bplus/) - CHF 40.44

**Raspberry Pi Touchsccreen 7"**

Touchscreen für Raspberry Pi.

[Mouser](https://www.mouser.ch/ProductDetail/474-LCD-13733/) - CHF 77.23

**Raspberry Pi Touchscreen Case**

Gehäuse für Raspberry Pi Computer und Touchscreen.

[Mouser](https://www.mouser.ch/ProductDetail/713-114992003/) - CHF 17.38

Kann mit dieser [Zeichnung](https://www.thingiverse.com/thing:1585924) auch selber gedruckt werden.

**RFID Card Reader**

Liest die RFID-Karten aus.

[Yarongtech](https://www.yarongtech.com/collections/rfid-reader/products/mifare-classic-card-reader-hf-rfid-usb-13-56mhz-iso14443a-ic-reader) CHF 12.90

**RFID Chip**

Sendet den RFID-Code an den Leser. Gibt es in unterschiedlichen Ausführungen.
Getestet wurden System "Glutz" und "Zaugg"

[Mouser](https://www.mouser.ch/ProductDetail/Mikroe/MIKROE-1475/?qs=Jl8P5Tpu6m3JMLFFxNymZw%3D%3D) - CHF 1.83
