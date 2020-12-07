# App Personalabrechnung
Installation Modul Personalabrechnung (hr_payroll).

## Initialsierung
Arbeitsscrhitte:
* HR-Stammdaten vorbereiten.
* Erfassen Standardarbeitsvertrag
* Mitarbeiter mit Vertrag erfassen
* [[Lohnarten]] importieren

## Erweiterungen installieren
Auswahl:
* Lohnbuchhaltung (hr_payroll_account)
* SEPA-Zahlungen für Gehaltsabrechnungen (hr_payroll_account_sepa)
* HR Payroll Shares (gio_payroll_custom)
* HR Payroll Report (gio_py3o_addon)

## Optionen aktivieren
Auswahl:
*  Payroll SEPA

## Lohnmodul konfigurieren
Arbeitsschritte:
* Archivieren der Standardlohnarten BASIC, GROSS und NET
* Festlegen Lohnjournal

## Daten Importieren
Arbeitsschritte:
* Erstellen Structure Type "Monaltiche Lohnabrechnung"
* Erstellen Lohnstruktur "Lohnabrechnung VORNAME NACHNAME" und speichern der ID
* Dokument `hr.salary.rule.xlsx` öffnen und *Vergütungsstruktur* die ID der Lohnstruktur einfügen.
* Unter Regeln die Datei `hr.salary.rule.xlsx` importieren.