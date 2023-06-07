---
tags:
- Definition
---
# Odoo Continuous Delivery

Zur Entwicklung von Odoo-Modulen und Bereitstellung in der Serverumgebung verwendet mit Mint System Continuous Delivery Platform [[Drone]].

## Branches

Die Odoo-Module sind in einem Git-Repository eingecheckt.

![[Odoo Continuous Delivery.canvas|Odoo Continuous Delivery]]

### Production (main)

* Initiale Datenbank ist ohne Demodaten
* Umgebung kann nicht neu gebaut werden
* Es können keine Tests ausgeführt werden
* E-Mails werden versendet

###  Integration (int)

* Kopiert die produktive Datenbank
* Neutralisiert bestimmte Konfiguration
* Es werden Tests ausgeführt
* E-Mails werden nicht versendet

### Development (dev)

* Lädt eine leere Datenbank mit Demodaten
* Es werden Tests ausgeführt
* E-Mails werden  nicht versendet

## Serverumgebung

![[Serverumgebung.canvas|Serverumgebung]]