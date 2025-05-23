---
tags:
  - HowTo
kind:
  - howto
---
# Odoo Email Konfiguration

Um diese Funktion einzurichten müssen folgende Einstellung gemacht werden:

* Registration Mail Account `odoo@example.com`
* Festlegen aliase für diesen Mail Account: catchall, sales, eingangsrechnung, ausgangsrechnung
* Festlegen einer Mail-Domäne `erp.example.com`
* Konfiguration der Mail-Domäne für Mail Account und Odoo
* Konfiguration eingehender E-Mail Server in Odoo
* MX-DNS-Eintrag für die Mail-Domäne

## Relay Server konfigurieren

Odoo verwendet den SMTP-Server als Relay. Das heisst Odoo kann unter verschiedenen Adressen E-Mails verwschicken.

[[Office 365 Exchange für Odoo konfigurieren]]

## Verbindung testen

Zum testen stehen verschiedene [[SMTP-Skripte]] und eine Übersicht der [[SMTP-Fehler]] zur Verfügung.