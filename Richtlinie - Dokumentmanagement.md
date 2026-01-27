---
title: Richtlinie - Dokumentmanagement
kind: explain
section: policy
---

[[DMS]] der Mint System.

## Ablagestruktur

Bestimmte Ordner erfordern die Erstellung eines Unterordners.

| Ordner                                    | Sichtbarkeit | Beschreibung                                                                       |
| ----------------------------------------- | ------------ | ---------------------------------------------------------------------------------- |
| Akquise/[Name]                            | Shared       | Ablage für Akquise                                                                 |
| Angebot                                   | Shared       | Angebote der Mint System                                                           |
| Archiviert                                | Shared       | Ablage zur Archivierung                                                            |
| Ausbildung                                | Shared       | Unterlagen zur selbständigen Weiterbildung: Bücher, Methodik, Kurse und eLearning  |
| Bilder                                    | Shared       | Fotoalben                                                                          |
| Corporate Design                          | Shared       | Format- und Dokumentvorlagen, Bilder zur Publikation                               |
| Data                                      | Shared       | Speicherung von Anwendungsdaten. Beispielsweise Passwort-Dateien von [[KeePassXC]] |
| Softwareentwicklung                       | Shared       | Entwicklung Odoo und System Engineering                                            |
| Finanzen                                  | Private      | Finanz- und Kontenplan                                                             |
| Finanzen Datentransfer                    | Private      | Alle camt.53 und pain.001 Dateien werden hier abgelegt                             |
| Förderbeiträge                            | Shared       | Dokumente Sponsoring Mint System                                                   |
| Generalversammlung/Geschäftsjahr-[YYYY]   | Private      | Unterlagen GV.                                                                     |
| Geschäftsführung                          | Private      | Strategische Informationen                                                         |
| Gründung                                  | Private      | Gründungsdokumente                                                                 |
| Infrastruktur                             | Shared       | Dokumentation der Mint System Infrastruktur                                        |
| Kunden/[Name]                             | Shared       | Kundenbeziehungen werden hier abgebildet                                           |
| Lieferanten/[Name]                        | Shared       | Lieferantenbeziehungen werden hier abgebildet                                      |
| Management Handbuch                       | Shared       | Dokumentation zu Methoden und Vorgehensmodellen                                    |
| Marketing                                 | Shared       | Dokumente zu Marketing-Kampagnen                                                   |
| Meetings                                  | Shared       | Meeting Protokolle der Mint System                                                 |
| Mitgliedschaften/[Name]                   | Shared       | Dokumente zu Mitgliedschaften bei Vereinen und anderen Organisationen              |
| News                                      | Shared       | Neuigkeiten aus Medien                                                             |
| Newsletter                                | Shared       | Dokumente zum Newsletter Mint System                                               |
| Odoo                                      | Shared       | Odoo Dokumente                                                                     |
| Partner                                   | Shared       | Dokumente zu unseren Partner                                                       |
| Personal                                  | Private      | Verträge und Abrechnungen                                                          |
| Produkte/\[Name\]                         | Shared       | Dokumente zu den Mint System Produkten                                             |
| Projekte/[Name]                           | Shared       | Die Projektablage ist unter [[Richtlinie - Projektmanagement]] definiert.          |
| Public Relations                          | Shared       | Zeitungsartikel und allgemeine PR                                                  |
| Rechnungen/([YYYY]/[MM MONAT],[MM MONAT]) | Shared       | Rechnung von Lieferanten gruppiert nach Rechnungsdatum                             |
| Recruiting/[YYYY]-[MM] [Name]             | Private      | Berwebungsunterlagen soritert nach Jahr und Monat.                                 |
| Secrets                                   | Shared       | Schlüssel und Passwörter                                                           |
| Steuern/[Jahr]                            | Private      | Dokumente Unternehmens- und Mehrwertssteuer                                        |
| Strategie                                 | Shared       | Allgemeine Geschäftsstrategie und Businessplan                                     |
| templates                                 | Shared       | Obsidian Voralgen                                                                  |
| Verkauf                                   | Shared       | Vorlagen für Angebote                                                              |
| Verträge/[Name]                           | Shared       | Alle Vertragsdokumente mit Externen                                                |
| Vorlage                                   | Shared       | Dokumentvorlagen mit Inhalt                                                        |
| Website                                   | Shared       | Dateien zum Webauftritt                                                            |
| task                                      | Shared       | Taskfile zur Verwaltung der Ablage                                                 |

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

Ordner mit der Bezeichung \*Input| sind Sammelordner mit Dokumenten zur Verarbeitung.

**Archiviert**

Zu Archivierung werden Dokument oder Ordner im selben Verzeichnis in den Ordner _Archiviert_ verschoben.

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
