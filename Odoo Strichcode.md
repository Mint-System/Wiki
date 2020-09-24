# Odoo Strichcode

Einführung zu Odoo Strichcode: https://www.youtube.com/watch?v=OTfss3WF0jI

Odoo generiert [[Barcode|Barcodes]] nach *1D Industrial Codes* (code128).

## Vorgänge

Die Strichcode-App kennt verschiedene Vorgänge:
* Dokument öffnen
* Transfer starten
* Übertragung Ort
* Anlieferung
* Interne Transfers
* Lieferaufträge
* Inventur

Odoo hat eine klare Vorstellung wie Lieferaufträge oder die Inventur erlediegt wird.

## Integration

**USB oder Bluetooth**

Jeder Barcode-Scanner, der über USB oder Bluetooth an einem Computer/Tablet angeschlossen werden kann, ist kompatibel.  
Im Normall wird beim Scannen eines Barcodes der Code eingefügt. Wenn auf dem Computer/Tablet die Odoo Strichcode-App im Browser aktiv ist, wird der eingefügt Code erfasst.

Als Scanner haben sich Produkte der Datalogic bewährt. So zum Beispiel der Gryphon 4500 (über USB-kabel). Der ist kostengünstig und robust. Zudem kann dieser Scanner ohne Konfiguration direkt verwendet werden. 

**Ventor App**

Die App und Geräte von Ventor funktionieren autonom. Das heisst sie stellen eine direkte Verbindung mit der Odoo-Schnittstelle her und kommunizieren die Barcode-Scans darüber.

Website: https://ventor.app/  
Anleitung: https://ventor.tech/warehouse-management/how-to-connect-a-barcode-scanner-with-odoo/  

**Barcode to PC**

Es gibt Lösungen um einen Scan vom Smartphone an den Computer zu senden.

Website https://barcodetopc.com/

Auf dem Computer startet man ein Program zum Empfang der Barcodes vom Smartphone. Auf dem Smartphone startet man die Strichcode-App und verbindet sich mit dem Computer-Program über Wifi. Dann öffnet man auf dem Computer Odoo im Browser, wählt die Strichcode-App und starte einen Vorgang. Wenn man mit dem Smartphone einen Barcode scannt, wird dieser über via Wifi übertragen, vom Program empfangen und in Odoo eingefügt.

## Mobile Apps

**iOS**

* [Scandit Keyboard Wedge](https://apps.apple.com/us/app/scandit-keyboard-wedge/id1275099694)
* [Barcode to PC: Wi-Fi scanner](https://apps.apple.com/us/app/barcode-to-pc-wi-fi-scanner/id1180168368)