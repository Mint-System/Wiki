# Barcode

## Codes

Standard ist Code128.

Es gibt auch andere Barcodes wie zum Beispiel Code39. Dieser enthält keine Prüfziffer. Der Vorteil daran liegt bei der Lesbarkeit. Der Code39 kann dadurch fast immer gelsesen werden, auch wenn der Code beschädigt ist. Ein Nachteil von Code39 ist die Grösse (Breite) bei komplexen Inhalten.  
Der Code128 enthält eine Prüfziffer und kann komplexe Inhalte in schmale Barcodes umsetzen. Zum Teil können beschädigte Codes nicht mehr geelesen werden. 

## Scanner

In der Regel sind simmulieren die Barcode-Scanner nichts anderes als eine Tastatur. der gescannte Code wird umgesetzt und auf dem PC als Tastaturcode eingesetzt. Setzt man zum Beispiel der Cursor in einem Textverarbeitungsprogramm und liest einen Barcode, so schreibt der Scanner den Text ins Dokument.

## Barcodes drucken

Der Druck von Barcodes geht einfach über installierte Fonts. Es lohnt sich den Font so auszuwählen, dass er HumanReading dazu fügt. Das heisst, unter dem BarCode wird der Inhalt für Menschen lesbar angedruckt.

Vorgehen für den Druck von Barcode:
- Text oder Textfeld aus der Datenbank im Dokument einfügen
- Falls der BarCode39 verwendet wird, so muss das Textfeld mit einem * beginnen und mit einem * enden. Zum Beispiel *12-789a*
- Das eingefügte Textfeld mit dem Font Barcode128 oder Barcode39 versehen
- Achtung, wenn der Barcode zum Beipiel in einem Textverarbeitungsprogrmm verwendet wird, so darf der Font nur über den zu scannenden Text eingesetzt werden. Microsoft Word zum Beipiel markiert jeweils auch die Zeilenschaltung (CRL) oder den Leerschlag zum nächsten Wort mit. Dies kann der Scanner nicht lesen.

Achtung, der Font für den BarCode128 kann unter dem Betriebssystem Windows Probleme mit der Prüfziffer geben. Mit einem Sicherheitsupdate von Windows 10 wurde die GDI-Schnittestelle verändert, sodass bei 1000 gedruckten Barcode deren 18 nicht gelesen werden können.
