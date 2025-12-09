---
section: template
kind:
  - reference
---

# Vorlage Datenmigration

Arbeitsschritte zum Export und Import von Daten müssen detailliert und nachvollziehbar festgehalten werden. Für jedes Geschäftsobjekt, das migriert wird, wird eine Dokumentation angelegt.

Prozess der Datenmigraton:

1. **Export**: Beschreibt wie die Daten aus dem Quellsystem exportiert werden
2. **Input**: Benennt die Input-Daten
3. **Prozess**: Verarbeitungsschritte der Input-Daten
4. **Output**: Benennt die Output-Daten
5. **Import**: Beschreibt wie die Output-Daten ins Zielsystem importiert werden

## Export

Wir werden die Daten aus dem Quellsystem exportiert?

## Input

Welche Input-Daten stehen zur Verfügung und wie heissen die Dateien?

- Lieferanten.xlsx

## Prozess

Wie müssen die Input-Daten transformiert werden? Wie heissen die transformierten Dateien?

- partner.csv
  - Add first row with external id

## Output

Welches Sie die Output-Daten aus dem Transformationsprozess? Wie heissen die Output-Dateien?

- partner.output.csv

## Import

Wie können die Output-Dateien im Zielsystem importiert werden?
