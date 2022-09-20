---
tags:
- Phasen
---
# Phase Produktentwicklung

Tätigkeiten:

* Alle Produkte importieren
* Stücklisten, Kits und Sets definieren
* Die Zuordnung von Produktzeichnungen einrichten
* Die Rückverfolgbarkeit des Ursprungslands einstellen
* Die Erfassung der Zolltarifnummer definieren

Ergebnis: Alle Produkte sind definiert.

## Produkte einrichten (Stufe 1)
In einer ersten Stufe werden die wichtigsten Daten erfasst. Nach einer Phase der Validierung erfolgt in der zweiten Stufe die finale Definition und Import.

Die grundsätzliche Definition der Produkte erfolgt durch das Engineering. Die Daten aus dem [Prozess Produktentwicklung](https://www.odoo-wiki.org/prozess-produktentwicklung.html) sind deshalb die Grundlage zur Definition der Produkte auf Stufe 1.

**Produktname und Interne Referenz**

- Mit welcher Bezeichnung soll das Produkt erscheinen?

**Abbildung**

- Werden die Produkte mit einem Bild hinterlegt?

**Verkaufsartikel/Einkaufsartikel**

 [Beschreibung im Wiki](https://www.odoo-wiki.org/fertigung-stammdaten.html#Verkaufsartikel/Einkaufsartikel)

- Welche Produkte können verkauft werden?
- Welche Produkte können eingekauft werden?

**Produktart**

[Beschreibung im Wiki](https://www.odoo-wiki.org/fertigung-stammdaten.html#produktart)

- Wie werden die Produkte in der Lagerverwaltung berücksichtigt?

**Strichcode**

[Beschreibung im Wiki](https://www.odoo-wiki.org/strichcode.html#strichcode)

- Werden die Produkte mit einem Strichcode bezeichnet? ⭐
- Wie setzt sich der Strichcode zusammen? ⭐
- Wird für die Generierung eine spezielle App verwendet? (Vorschlag: *Product Barcode Generator* von Cybrosys)
  
**Ursprungsland**

- Ist die Angabe des Urspungslands gefordert?

**Referenzeinheit**

- Welches ist die Referenzenheit pro Produkt?

### Todos

-  Produkte konfigurieren
-  Produktfelder programmieren
-  Produkte importieren
-  Produktimport prüfen


## Produkte einrichten (Stufe 2)

**Produktkategorie**

- Werden Produkte in Kategorien unterschieden? (Zum Beispiel um spezielle Routen einzurichten)

**Steuern**

- Wie sind die Steuern für Verkaufsartikel definiert?
- Sind spezielle Regeln einzurichten (Fiscal Position)?

**Produktzeichnungen**

- Wollen Sie pro Produkt jeweils eine Step-Datei und eine Zeichnung speichern? ⭐
- Wo sollen die Zeichnungsdateien gespeichert werden?  
- Sollen die Zeichnungsdateien den Lieferanten über das Portal und den RFQ/PO zugänglich gemacht werden? ⭐  
- Soll in der Tablet-Ansicht den Zugriff auf die Zeichnungsdatei möglich sein? ⭐

**Produktvarianten**

- Werden Produktvarianten verwendet? ⭐
