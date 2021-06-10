# Phase Fertigung
  
Für praktisch alle Aspekte der Implementierung ist es wichtig, dass Produkte im System vorhanden sind. Deshalb werden bereits in der ersten Phase die Produkte thematisiert. Etwas speziell ist, dass bereits im ersten Schritt die Arbeitsplätze eingerichtet werden. Weil sie zur Definition der Vorgänge in den Stücklisten benötigt werden, wird dieses Thema bereits zu Beginn thematisiert.

## Arbeitsplätze anlegen

Die Arbeitsplätze werden in den Vorgängen referenziert. Deshalb müssen sie frühzeitig angelegt werden.

### Analyse

**Name des Arbeitsplatzes**

- Welche Arbeitsplätze gibt es und wie heissen sie?

**Code**

- Wie sind die Arbeitsplätze codiert?

## Produkte anlegen (Stufe 3)

### Analyse

**Verkaufspreis**

- Welche Verkaufsregeln sind hinterlegt?
- Wie funktionieren die Verkaufsregeln?

**Steuern (Verkauf)**

- Welche Steuern werden für den Verkauf des Produkts festgelegt?
  
[Erklärung im Handbuch](https://odoo-wiki.ch/theorie-mehrwertsteuer.html#steuersatze)

**Kosten**

- Ist die Währung korrekt eingestellt?

**Unternehmen**

- Welche Bedeutung hat das Zuordnen der Unternehmen?

**Mengeneinheit**

- Welches ist die Standard-Mengeneinheit des Produkts?
 
**Einkauf ME**

- Welches ist die Standard-Mengeneinheit für den Einkauf des Produkts?

## Zuordnen von Dateien zu Produkten

### Analyse

**Zuordnen von Zeichnungen**

- Welche technischen Informationen werden dem Produkt zugeordnet (z.B. Zeichnungen, step-Dateien)?
- Wie werden die technischen Informationen (z.B. Zeichnungen, step-Dateien) den Produkten zugeordnet?
- Entwicklung von Mint System installieren

## Stücklisten einrichten

Grundlagen: Alle Produkte wurden erfasst (importiert)

### Analyse

**Referenz**

- Was macht Sinn?

**Stücklisten Typ**

- Werden Bausätze (Kits) verwendet?

**Unternehmen**

- Warum diese Zuordnung?

**Komponenten**

- Welche Dateianhänge werden zugeordnet?
- Wird der Verbrauch von Material den einzelnen Vorgängen zugeordnet?
- Warum sollen Zeichnungen oder Spezifikationen in der Stückliste hinterlegt werden?

Erklärung im Handbuch (Attachment zu Produkten)\
Erklärung im Handbuch (Materialbezug beim Vorgang)

## Vorgänge einrichten

### Analyse

**Berechnung der Dauer**

- Wird die Dauer manuell oder automatisch festgelegt?

**Standardzeitraum**

- Was ist der vorgesehene Zeitbedarf?

**Arbeitsblatt**

- Werden den Vorgängen Arbeitsblätter zugeordnet?
- Welches Datei-Format wird für die Arbeitsblätter verwendet?

**Fertigungsbereitschaft**

**Flexible Consumption**

## Vorgänge importieren

### Analyse

**Typ**

-   Welche Schritt-Typen werden verwendet?

**Arbeitsblatt**

-   Werden die Schritte mit Bezug auf eine bestimmte Seite des Arbeitsblatts beschrieben?

**Arbeitsblattseite**

- Warum funktioniert das nicht?

**Anleitung**

Wie wird das Feld Anleitung verwendet?

**Notizen**

-   Wie wird das Feld Notizen verwendet?

## Fertigungsaufträge

### Analyse

-   Gibt es für die Bezeichnung der Sequenzen spezielle Anforderungen?  

Der Einfachheit halber sollten die Grundeinstellungen nicht geändert werden.

