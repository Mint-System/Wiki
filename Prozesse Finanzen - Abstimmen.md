---
kind: howto
section: process
---

Kontostand eBanking mit Odoo abgleichen.

## Kontoauszug importieren und abgleichen

Arbeitsschritte:

- Im eBanking einloggen und Kontodaten-Download starten

![[Raiffeisen Kontoauszug herunterladen.png]]

- Unter Datentransfer die Kontodaten als camt.053 XML-Datei mit Details herunterladen

![[camt.053 XML-Datei mit Details.png]]

- Die Datei im ORdner _Finanzen Datentransfer > NN Monat_ ablegen
- Datei importieren _Finanzen > Übersicht > Journal Bank > Import_
- Die einzelnen Transaktionen mit Rechnungen abgleichen und dabei [[Richtlinie - Finanzen#Ausgleich Bank-Buchungen]] beachten

::: tip
**Hinweis zu Export bei Raiffeisenbank**

Der Export kann auch als camt.053 mit Details exportiert werden. Dabei entfällt ein weiterer Export der Dateils mit camt.054. Dazu wird beim Export die Option _mit Details_ angewählt.
:::
