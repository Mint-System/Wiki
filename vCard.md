# vCard

Statt Visitenkarten haben wir QR-Codes.

## Janik von Rotz

Die Kontaktangaben werden in der Textdatei [[janik.vcf]] gespeichert.

```text
BEGIN:VCARD
VERSION:3.0
N:von Rotz;Janik;;;
FN:Janik von Rotz
ORG: Mint System GmbH
TITLE:Chief Technical Officer
EMAIL:janik.vonrotz@mint-system.ch
ADR;type=work:;;Seedorferstrasse 29;Altdorf;;6460;Schweiz
TEL;TYPE=cell:+41 41 541 78 92
URL:https://www.mint-system.ch
END:VCARD
```

Mit dem Befehl `cat janik.vcf | qrencode -o "janik.vcf.png"` konvertiert man den Inhalt zu einem QR-Code.

![[janik.vcf.png]]

## Kurt Gisler

Die Kontaktangaben werden in der Textdatei [[kurt.vcf]] gespeichert.

```text
BEGIN:VCARD
VERSION:3.0
N:Gisler;Kurt;;;
FN:Kurt Gisler
ORG: Mint System GmbH
TITLE:Chief Executive Officer
EMAIL:kurt.gisler@mint-system.ch
ADR;type=work:;;Seedorferstrasse 29;Altdorf;;6460;Schweiz
TEL;TYPE=cell:+41415417864
URL:https://www.mint-system.ch
END:VCARD
```

Mit dem Befehl `cat kurt.vcf | qrencode -o "kurt.vcf.png"` konvertiert man den Inhalt zu einem QR-Code.

![[kurt.vcf.png]]