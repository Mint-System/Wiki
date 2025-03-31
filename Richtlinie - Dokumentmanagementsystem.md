---
tags:
- Richtlinien
---
# Richtlinie - Dokumentmanagementsystem

Dokumentation zur Dokumentablage der Mint System.

## Ablagestruktur

Bestimmte Ordner erfordern die Erstellung eines Unterordners.

| Ordner                                    | Beschreibung                                                                        |
| ----------------------------------------- | ----------------------------------------------------------------------------------- |
| Akquise/[Name]                            | Ablage für Akquise                                                                  |
| Angebot                                   | Angebote der Mint System                                                            |
| Archiviert                                | Ablage zur Archivierung                                                             |
| Ausbildung                                | Unterlagen zur selbständigen Weiterbildung: Bücher, Methodik, Kurse und eLearning   |
| Bilder                                    | Fotoalben                                                                           |
| Corporate Design                          | Format- und Dokumentvorlagen, Bilder zur Publikation                                |
| Data                                      | Speicherung von Anwendungsdaten.  Beispielsweise Passwort-Dateien von [[KeePassXC]] |
| Entwicklung                               | Entwicklung Odoo und System Engineering                                             |
| Finanzen                                  | Finanz- und Kontenplan                                                              |
| Finanzen Datentransfer                    | Alle camt.53 und pain.001 Dateien werden hier abgelegt                              |
| Förderbeiträge                            | Dokumente Sponsoring Mint System                                                    |
| Generalversammlung/Geschäftsjahr-[YYYY]   | Unterlagen GV.                                                                      |
| Geschäftsführung                          | Strategische Informationen                                                          |
| Gründung                                  | Gründungsdokumente                                                                  |
| Infrastruktur                             | Dokumentation der Mint System Infrastruktur                                         |
| Kunden/[Name]                             | Kundenbeziehungen werden hier abgebildet                                            |
| Lieferanten/[Name]                        | Lieferantenbeziehungen werden hier abgebildet                                       |
| Management Handbuch                       | Dokumentation zu Methoden und Vorgehensmodellen                                     |
| Marketing                                 | Dokumente zu Marketing-Kampagnen                                                    |
| Meeting                                   | Meeting Protokolle der Mint System                                                  |
| Methodik/[Thema]                          | Angwendete Methoden                                                                 |
| Mitgliedschaften/[Name]                   | Dokumente zu Mitgliedschaften bei Vereinen und anderen Organisationen               |
| News                                      | Neuigkeiten aus Medien                                                              |
| Newsletter                                | Dokumente zum Newsletter Mint System                                                |
| Nextcloud                                 | Nextcloud Dokumente                                                                 |
| Odoo                                      | Odoo Dokumente                                                                      |
| Partner                                   | Dokumente zu unseren Partner                                                        |
| Personal                                  | Verträge und Abrechnungen                                                           |
| Produkte                                  | Dokumente zu den Mint System Produkten                                              |
| Projekte/[Name]                           | Die Projektablage ist unter [[Richtlinie - Projektmanagement]] definiert.           |
| Public Relations                          | Zeitungsartikel und allgemeine PR                                                   |
| Rechnungen/([YYYY]/[MM MONAT],[MM MONAT]) | Rechnung von Lieferanten gruppiert nach Rechnungsdatum                              |
| Recruiting/[YYYY]-[MM] [Name]             | Berwebungsunterlagen soritert nach Jahr und Monat.                                  |
| Secrets                                   | Schlüssel und Passwörter                                                            |
| Spesen/([YYYY]/[MM MONAT],[MM MONAT])     | Ablage Spesenbelege für Lohnabrechnung                                              |
| Steuern/[Jahr]                            | Dokumente Unternehmens- und Mehrwertssteuer                                         |
| Strategie                                 | Allgemeine Geschäftsstrategie und Businessplan                                      |
| Verkauf                                   | Vorlagen für Angebote                                                               |
| Verträge/[Name]                           | Alle Vertragsdokumente mit Externen                                                 |
| Vorlage                                   | Dokumentvorlagen mit Inhalt                                                         |
| Website                                   | Dateien zum Webauftritt                                                             |

## Format

Die Office-Dokumente werden im [[Office Open XML]]-Format gespeichert.

Dateien vom Typ `.zip` müssen immer entpackt sein, damit die Inhalte durchsuchbar sind.

## Versionierung

Dokumentversionen werden von Nextcloud verwaltet.

Ein Dokument soll immer nur einmal existieren, das heisst keine Versionsduplikate erstellen.

## Dateinamen

**Datum**

Sitzungsnotizen und datierte Dateien werden am Anfang mit dem Datumsstempel versehen: `YYYY-MM-DD Dateiname.md`

## Reservierte Namen

Bestimmte Ordnernamen sind reserviert.

**Input**

Ordner mit der Bezeichung *Input| sind Sammelordner mit Dokumenten zur Verarbeitung.

**Archiviert**

Zu Archivierung werden Dokument oder Ordner im selben Verzeichnis in den Ordner *Archiviert* verschoben.

**Output**

Dokument und Dateien zur Veröffentlichung freigeben.

**tmp**

Temporäre Dateien können hier abgelegt werden.

## Review-Workflow

Dokumente zur Review werden mit im Chat mit `@Person Review` getagged. Hat die Person das Dokument angeschaut und Kommentar hinterlassen, meldet Sie das über den Chat zurück.

## Tags

In Nextcloud existieren diese Tags:

| Tag     | Kommentar       |
| ------- | --------------- |
| Meeting | Meeting Notizen |
