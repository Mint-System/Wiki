# Odoo Finanzen Setup
Das Finanzmodul wird in folgenden Schritten konfiguriert:

**Unternehmensdaten**

Das Unternehmen muss vollständig konfiguriert werden. Insbesondere braucht es die USt-IdNr. und die Adresse.

**Bankverbindung**

Für jede Transaktion die eine Zahlung zur Folge hat, müssen die Bankdaten der Empfänger und Sender hinterlegt werden.

**Buchungsperioden**

Bevor gebucht werden kann muss die Periode eröffnet werden.

**Kontenplan**

Standardmässig steht der Kontenplan gemäss Sterchi/Mattle/Helbling zur Verfügung.

## Journale

Die Benennung und Konfiuguration der Journale ist essenziell. Ein Journal kann vom folgenden Typ sein:

* Verkäufe: Für Ausgangsrechnungen mit Kurzzeichen DFA
* Einkauf: Für Eingangsrechnungen mit Kurzzeichen KFA und dem E-Mail alias 	
eingangsrechnungen@
* Kasse/Bank: Für Kasse mit 
* Bank: Bankkonto ist hinterlegt mit Kurzzeichen BNK1
* Sonstiges: Andere Buchungen mit Kurzzeichen DIV
* Lohn: Sonstiges mit Kurzzeichen LHN
* Wechselkursdifferenzen: Sonstiges mit Kurzzeichen EXCH

Jedem Journal wird eine Definition für die Kurzzeiten hinterlegt. Bei Verkäufe und Einkauf wird das Kurzzeichnen in der Rechnungsreferenz verwendet. Weitere Informationen sind im Oddo Wiki zu finden.
