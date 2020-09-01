# Odoo Lohnabrechnung
Jeder Mitarbeiter hat einen Arbeitsvertrag. Im Arbeitsvertrag wird festgehalten, welcher Lohn ausbezahlt wird. Dem Arbeitsvertrag ist eine Lohnstrukturtyp zugewiesen. Der Lohnstrukturtyp umfasst mehrere Lohnstrukturen. In einer Lohnstruktur wird festgehalten wie sich der ausbezahlte Lohn aus Abzügen und Ergänzungen zusammensetzt.

## Lohnstruktur

Die Liste der Lohnarten definiert die Abzüge und Zusätze. Jede Lohnart hat einen Code und eine Position in der Liste. Die Kalkulation der Lohnarten erfolgt tabellarisch basierend auf einer Berechnungsformel. Dazu ein Beispiel:

**AHV/IV/EO-Beiträge**

Um die Sozialleistungen in der Lohnabrechnung darzustellen muss man in der Lohnstruktur eine zusätzliche Lohnart erfassen.

Man wählt die Kategorie Abzüge. Als Code gibt man AHV an. Die Berechnungsart ist Prozentual mit folgenden Optionen:

* Prozent basieren auf: BASIC
* Menge: -1.0
* Prozent (%): 5.2750

BASIC ist eine Referenz auf eine andere Lohnart. Im Tab Finanzen gilt es die Konten für die Abrechnung der Sozialleistungen zu hinterlegen.

## Fehlende Optionen

Leider bietet die Lohnabrechnung einige Optionen nicht.

* Lohnpfändung
* Quellensteuer
* Krankentaggeld über Zeit

Dazu eine Auswahl an [[Lohnarten]].

## Erweiterungen

Odoo Partner wie [[Partner Gioardano|Giordano]] haben Erweiterungen entwickelt.

**Lohnprogramm CH-d**

Partner: [[Partner Gioardano|Giordano]]  
Website: [https://giordano.ch/produkte/odoo/odoo-l%C3%B6sungen/lohnprogramm-ch-d](https://giordano.ch/produkte/odoo/odoo-l%C3%B6sungen/lohnprogramm-ch-d)  
Beschreibung: Die Lösung stellt einerseits die Standardlohnarten für eine Schweizer Lohnbuchhaltung zur Verfügung und andererseits neue Ansichten um die Lohnarten und Anteile für Mitarbeiter und Unternehmen zu konfigurieren. Auch der Bericht zur Lohnabrechnung wurde überarbeitet. Die Berichtserstellung erfolgt mit der alterantiven [[Py3o Report Engine ]]. Somit ist diese Erweiterung nur mit [[Odoo Hosting - Odoo.sh|Odoo.sh]] und Odoo [[Odoo Hosting - On-Premise|On-Premise]] kompatibel.
