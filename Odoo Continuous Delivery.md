---
tags:
  - Definition
kind:
  - explain
section: product
---
# Odoo Continuous Delivery

Zur Entwicklung von Odoo-Modulen und Bereitstellung in der Serverumgebung verwendet mit Mint System Continuous Delivery Platform [[Jenkins]].

## Multibranch

Die Odoo Module sind in einem Git-Repository als Submodule eingecheckt. Im Build-Prozess wird das Repository geklont, ein ausgewählter Branch ausgecheckt und anschliessend werden die Submodule geklont und anhand der gespeicherten Referenz ausgecheckt.  

![[Odoo Continuous Delivery.canvas|Odoo Continuous Delivery]]

### Development (dev)

Mit Demodaten wird auf dieser Ebene ein initiales Odoo Modul entwickelt. 

* Datenbank mit Odoo Demodaten
* Ausführung von Tests in Build-Prozess
* Ausgehende E-Mails werden abgefangen 

###  Integration (int)

Das Odoo Modul wird in der Datenbank des Kunden bereitgestellt.

* Kopie der produktiven Datenbank
* Produktive Konfigurationen werden neutralisiert
* Optionale Ausführung von Tests in Build-Prozess
* Ausgehende E-Mails werden abgefangen

### Production (main)

Funktioniert das Modul korrekt, wird es promoted und in der produktiven Umgebung bereitgestellt.

* Produktive Datenbank
* Es werden keine Tests ausgeführt
* Ausgehende E-Mails werden versendet 

## Build-Umgebung

Die Integrations-Ebenen sind mit einem entsprechenden Branch im Git-Repository, mit einer CI/CD-Pipeline und mit einer Odoo Instanz gekoppelt. Damit ist es möglich Odoo Module von der Entwicklung bis zum produktiven Betrieb automatisiert zu testen und zu deployen. 

![[Build-Umgebung.canvas|Build-Umgebung]]

## Pipeline

![[Odoo CD Pipeline.canvas|Odoo CD Pipeline]]