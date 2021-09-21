# Prozess Ausgleich
Kontostand eBanking mit Odoo abgleichen.

## Kontoauszug importieren und abgelichen

Arbeitsschritte:
* Im eBanking einloggen
* Unter Datentransfer die Kontodaten als camt.053 XML-Datei mit Details herunterladen
* Die Datei unter *Finanzen > Datentransfer* ablegen
* Datei importieren *Finanzen > Übersicht > Journal Bank > Import*
* Die einzelnen Transaktionen mit Rechnungen abgleichen und dabei [[Richtlinie - Finanzen#Ausgleich Bank-Buchungen]] beachten

::: tip
**Hinweis zu Export bei Raiffeisenbank**

Der Export kann auch als camt.053 mit Details exportiert werden. Dabei entfällt ein weiterer Export der Dateils mit camt.054. Dazu wird beim Export die Option *mit Details* angewählt. 
:::