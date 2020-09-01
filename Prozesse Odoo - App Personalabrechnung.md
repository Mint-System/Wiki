# App Personalabrechnung
## Initialsierung
* HR-Stammdaten vorbereiten.
*  Erfassen Standardarbeitsvertrag
* Mitarbeiter mit Vertrag erfassen
* [[Lohnarten]] importieren

## Erweiterungen installieren
* Payroll Accounting (hr_payroll_account)

## Einstellungen festlegen:
*  Payroll SEPA

## Daten Importieren
* Erstellen Structure Type "Monaltiche Lohnabrechnung"
* Erstellen Lohnstruktur "Lohnabrechnung VORNAME NACHNAME" und speichern der ID
* Dokument `hr.salary.rule.xlsx` öffnen und *Vergütungsstruktur* die ID der Lohnstruktur einfügen.
* Unter Regeln die Datei `hr.salary.rule.xlsx` importieren.