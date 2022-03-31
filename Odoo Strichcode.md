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

Odoo hat eine klare Vorstellung wie Lieferaufträge oder die Inventur erledigt wird.

## Integration

**USB oder Bluetooth**

Jeder Barcode-Scanner, der über USB oder Bluetooth an einem Computer/Tablet angeschlossen werden kann, ist kompatibel.  
Im Normall wird beim Scannen eines Barcodes der Code eingefügt. Wenn auf dem Computer/Tablet die Odoo Strichcode-App im Browser aktiv ist, wird der eingefügt Code erfasst.

Als Scanner haben sich Produkte der Datalogic bewährt. So zum Beispiel der Gryphon 4500 (über USB-kabel). Der ist kostengünstig und robust. Zudem kann dieser Scanner ohne Konfiguration direkt verwendet werden. 

**Ventor App**

Die App und Geräte von Ventor funktionieren autonom. Das heisst Sie stellen eine direkte Verbindung mit der Odoo-Schnittstelle her und kommunizieren die Barcode-Scans darüber.

Website: https://ventor.app/  
Anleitung: https://ventor.tech/warehouse-management/how-to-connect-a-barcode-scanner-with-odoo/  

**Barcode to PC**

Es gibt Lösungen um einen Scan vom Smartphone an den Computer zu senden.

Website https://barcodetopc.com/

Auf dem Computer startet man ein Program zum Empfang der Barcodes vom Smartphone. Auf dem Smartphone startet man die Strichcode-App und verbindet sich mit dem Computer-Program über Wifi. Dann öffnet man auf dem Computer Odoo im Browser, wählt die Strichcode-App und starte einen Vorgang. Wenn man mit dem Smartphone einen Barcode scannt, wird dieser über via Wifi übertragen, vom Program empfangen und in Odoo eingefügt.

**Mobile Computer Barcode Scanner**

Moderne Mobile Computer Scanner sind Android-Smartphones mit entsprechender Hardware. Auf dem Gerät wird Odoo im Browser geöffnet und die Strichcode-App gestartet. Der Scan-Vorgang erfolgt direkt auf dem Gerät.

Eine Frage aus dem Odoo Forum:

> Does anyone have experience with mobile computer scanners that work with Odoo stock barcode module? Can you recommend a model/brand?

Und hier die Antwort:

> As Zebra partner we can recommend you Zebra MC40, Zebra 51 or Zebra 55, MC3300 or Zebra TC8000. You can find all of them here - https://www.zebra.com/us/en/products/mobile-computers  
> We have tested all of them. Scanners worked fine with Odoo Enterprise (only) and Odoo barcode module (Enterprise only). However, the screens of mobile computers are rather small and even with the enterprise version of Odoo (with responsive design) is not useful for industry use. It's OK for small warehouses where the speed of picking does not play a key role. You have to use at least 7" devices + connect external scanners (Wired or Bluetooth) in case of using Odoo Enterprise. And it's not very useful.  
> *From the other hand you can try Ventor (mERP Warehouse) app that works with all Zebra devices (Android based). The app connects to Odoo Community and Enterprise (Odoo 8/9/10 and 11), has adapted screen and buttons and provide even more inventory features and user experience.

Quelle: https://www.odoo.com/de_DE/forum/hilfe-1/question/mobile-computer-barcode-scanner-110218

## Mobile Apps

**iOS**

* [Scandit Keyboard Wedge](https://apps.apple.com/us/app/scandit-keyboard-wedge/id1275099694)
* [Barcode to PC: Wi-Fi scanner](https://apps.apple.com/us/app/barcode-to-pc-wi-fi-scanner/id1180168368)