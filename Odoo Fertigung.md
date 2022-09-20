---
tags:
- Definition
---
# Odoo Fertigung
Eine der Stärken von Odoo ist die Fertigung.

Module Fertigung:

* [[Odoo Produktdatenmanagement (PDM)]]
* [[Odoo Fertigungsaufträge Tabletansicht]]

## Themen

Die Fertigung ist ein umfangreiches Themengebiet. Begriffe und Aspekte werden hier erläutert:

### Seriennummer

Für jedes Produkt kann entschieden werden, ob eine Los- oder Seriennummer zugeordnet weden soll. Entsprechend wird im Produktionsprozess verlangt, dass beim Material ein- und ausbuchen jeweils Angaben zum Los/Seriennummer gemacht werden. Auf den gedruckten Fertigungsdokumenten sind die Los/Sereinnummern sichtbar.

### Information an Produktion

Ein Verkaufsauftrag löst automatisch die notwendigen Bestellungen und Fertigungsaufträge aus. Gleichzeitig wird die Lieferung als zukünftiger "Lagertransfer an den Kunden" angelegt. Detailbeschreibung im Portal [Odoo Wiki](https://www.odoo-wiki.org/) von Mint System.

### Kapazitätsplanung / Zeiterfassung

Für jedes Produkt kann ein Arbeitsplan mit Stückliste und Vorgängen angelegt werden. Für jeden Vorgang wird eine Sollzeit hinterlegt. Jeder Vorgang ist einem Arbeitsplatz zugeordnet. Den Arbeitsplätzen werden wiederum Ressourcen in Form von Mitarbeitenden und deren verfügbaren Arbeitszeit hinterlegt. Die automatisierte Fertigungsplanung berücksichtigt für die Zeitplanung die verfügbaren Stunden an den einzelnen Arbeitsplätzen.

### Produktionsauftrag Auslösung

Alle für die Erfüllung eines Verkaufsaufrages notwendigen Produkte (und deren Unterprodukte) werden mit dem Lagerbestand abgeglichen. Falls eine vordefinierte Mindestbestandsmenge unterschritten wird, werden vom System die notwendigen Einkaufs- und Fertigungsaufträge vorgeschlagen. Die/Der Einkäufer/in und die/der Produktionsleiter/in können in einer Übersicht die Vorschläge anzeigen lassen.
