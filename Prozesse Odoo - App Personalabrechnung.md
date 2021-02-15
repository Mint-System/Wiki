# Prozess App Personalabrechnung
Installation Modul Personalabrechnung (hr_payroll).

## Erweiterungen installieren
Auswahl:
* Lohnbuchhaltung (hr_payroll_account)
* SEPA-Zahlungen für Gehaltsabrechnungen (hr_payroll_account_sepa)
* HR Payroll Share (gio_payroll_custom)

### Optionen aktivieren
Auswahl:
*  Payroll SEPA

## 2. Initialsierung
Arbeitsscrhitte:
* HR-Stammdaten vorbereiten.
* Erfassen Standardarbeitsvertrag
* Mitarbeiter mit Vertrag erfassen und konfigurieren
* [[Lohnarten]] importieren

### Lohnmodul konfigurieren
Arbeitsschritte:
* Archivieren der Standardlohnarten BASIC, GROSS und NET
* Import `hr.salary.rule.basis.csv`
* Festlegen Lohnjournal

## 3. Customzing

### Daten Importieren
Arbeitsschritte:
* Erstellen Structure Type "Monatliche Lohnabrechnung"
* Erstellen Lohnstruktur "Lohnabrechnung VORNAME NACHNAME" und speichern der ID
* Dokument `hr.salary.rule.csv` öffnen und *Vergütungsstruktur* die ID der Lohnstruktur einfügen.
* Unter Regeln die Datei `hr.salary.rule.csv` importieren.