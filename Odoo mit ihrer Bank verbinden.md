---
section: blog
kind:
  - explain
draft: true
---
# Odoo mit ihrer Bank verbinden

Odoo Enterprise bietet eine Drittanbieter-Integration zur Verbindung von Odoo mit einem Bankkonto.

https://www.odoo.com/documentation/master/applications/finance/accounting/bank/bank_synchronization.html

Die Synchronisierung hat mehrere Nachteile:

Funktioniert nur für Odoo Enterprise

Odoo-System ist abhängig von Drittanbieter

Die Synchronisation ist feheleranfällig

Es wird nicht jede Bank unterstützt

Es können keine Zahlungen hochgeladen werden

Gibt es eine bessere Lösung und vor allem: Gibt es Schnittstellen-Standard für alle Banken-Systeme?

Ja gibt es. Der Standard heisst EBICS.

## Über EBICS

EBICS bedeutet "Electronic Banking Internet Communication Standard".

https://www.ebics.org/

https://www.raiffeisen.ch/rch/de/firmenkunden/liquiditaet-und-zahlungsverkehr/electronic-banking/ebics.html
## EBICS für Odoo einrichten

Der initialie Aufwand um die Verbindung einzurichten ist hoch.

Der Aufwand ist aber nur einmalig.

Wenn die Verbindung eingerichtet ist, lassen sich Bank-Tansaktionen und -Zahlungen automatisch hoch- und runterladen.

Odoo kann out-of-the-box nicht im EBICS kommunizeren.

https://www.odoo-wiki.org/ebics.html

Wenn die Module installiert sind, können Sie bei ihrer Bank einen EBICS-Teilnehmer anfragen.

sie erhalten einen Brief mit einem "Bankparameterblatt für die Initalisierung des EBICS Teilnehmers in Ihrer Softwarelösung".

Damit haben Sie alle Informationen um in Odoo den sog. INI/HIA-Brief zu generien.

Diesen Teilen Sie der Bank mit.

![[Registrierung EBICS.png]]

Die Bank registriert die von Odoo generieren Zertifikate.

Wenn die Freigabe erteilt ist, können Sie alle Zahlungen herunterladen.

