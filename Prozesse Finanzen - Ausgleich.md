# Ausgleich
Kontostand eBanking mit Odoo abgleichen.

## Kontodaten exportieren

Arbeitsschritte:
* Im eBanking einloggen
* Unter Datentransfer die Kontodaten als camt.053 XML-Datei herunterladen
* Die Datei unter *Finanzen > Datentransfer* ablegen
* Datei importieren *Finanzen > Übersicht > Journal Bank > Import*
* Die einzelnen Transaktionen mit Rechnungen abgleichen