---
kind: reference
section: template
---

User Stories beschreiben Handlungen aus Sicht des Benutzer und weiteren Rollen.
Mit dieser Vorlage können erste Anforderungen für Odoo-Entwicklungen aufgenommen werden.

## App Buchhaltung

### Skonto auf Rechnung erfassen

1. Der Benutzer erstellen eine Lieferantenrechnung und wählt im Feld _Zahlungsbedinungen Skonto_ den Eintrag "10 Tage / 10%" aus.
2. Er sieht dass das Feld _Fälligkeit Skonto_ entsprechend angepasst wurde (Rechnungsdatum + 10 Tage). Nun überschreibt er das Feld mit -1 Tag.
3. Nun wählt der Benutzer _Aktion > Skonto aktualisieren_.
4. Der Benutzer sieht, dass eine neue Rechnungszeile gemäss Einstellungen und Zahlungsbedingung hinzugefügt wurde und der Rechnungsbetrag korrekt angepasst wurde.

### Lieferantenzahlungen mit Skonto bezahlen

1. Am Donnerstag zeigt der Benutzer die Lieferantezahlungen an und sortiert nach Fälligkeit Skonto.
2. Er wählt den Filter _Rechnungen ohne Skontozeile_, markiert die aufgelistet Rechnungen und wählt Aktion > Skonto aktualisieren.
3. Er entfernt den Filter und markiert alle Lieferantenrechnungen zur Zahlung.
4. Der Benutzer wählt _Aktion > Zahlung erfassen_.
