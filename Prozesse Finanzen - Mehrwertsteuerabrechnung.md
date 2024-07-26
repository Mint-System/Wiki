---
tags:
- Prozess
---
# Prozesse Finanzen - Mehrwertsteuerabrechnung

## Saldosteuern berechnen

Arbeitsschritte:
* Erstellen Sie mit Odoo einen einfachen Umsatzsteuerbericht
* Rechnen Sie die Beträge gruppiert nach [[Mehrwertsteuersätze#Saldosteuersätze]]:
	* Leistungen nach Steuersatz 
* Berechnen Sie die Leistungen aus Rechnungen:
	* Umsatz im Ausland
	* Umsatz in der Schweiz

## MWST abrechnen

Arbeitsschritte:
* Öffnen Sie <https://mwstabrechnen.estv.admin.ch/>
* Erstellen Sie CH-Login und aktivieren Sie die 2-Faktor-Authentisierung
* Zeigen Sie "VAT declaration easy" an
* Kopieren Sie den Abrechnungscode aus dem [[Passwortmanager]]
* Starten Sie die Eingaben und verwenden Sie die Ziffern wie folgt:
	* `200`: Gesamter Umsatz im In- und Ausland
	* `220`: Umsatz im Ausland
	* `322`: Leistungen gemäss Steuersatz 6.20%
	* `332`: Leistungen gemäss Steuersatz 6.80%
* Erstellen Sie die MWST-Abrechnung und erfassen Sie die generierte Rechnung
* Speichern Sie den neuen Code im Passwortmanager