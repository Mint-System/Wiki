---
title: Richtlinie - Dokumentmanagement
kind: explain
section: policy
---

[[DMS]] der Mint System. 

Dokumente müssen an der vorgesehenen Stelle abgelegt und gemäss Schutzbedarf behandelt werden.

Es gelten folgende Grundsätze:

- keine unkontrollierten Kopien vertraulicher Dokumente erstellen
- Dokumente nur in freigegebenen Ablagen speichern
- Freigaben an Externe gezielt und nachvollziehbar erteilen
- Archive, Input-, Output- und tmp-Ordner gemäss Vorgaben verwenden

## Ablagestruktur

Bestimmte Ordner erfordern die Erstellung eines Unterordners.

| Ordner                                    | Sichtbarkeit | Beschreibung                                                                       |
| ----------------------------------------- | ------------ | ---------------------------------------------------------------------------------- |
| templates                                 | Shared       | Obsidian Voralgen                                                                  |
| task                                      | Shared       | Taskfile zur Verwaltung der Ablage                                                 |
| Website                                   | Shared       | Dateien zum Webauftritt                                                            |
| Vorlagen                                  | Shared       | Dokumentvorlagen mit Inhalt                                                        |
| Verträge/[Name]                           | Shared       | Alle Vertragsdokumente mit Externen                                                |
| Verkauf                                   | Shared       | Vorlagen für Angebote                                                              |
| Tools                                     | Shared       | HTML-Apps and Links to Tools                                                       |
| Strategie                                 | Shared       | Allgemeine Geschäftsstrategie und Businessplan                                     |
| Softwareentwicklung                       | Shared       | Entwicklung Odoo und System Engineering                                            |
| Secrets                                   | Shared       | Schlüssel und Passwörter                                                           |
| Public Relations                          | Shared       | Zeitungsartikel und allgemeine PR                                                  |
| Projekte/[Name]                           | Shared       | Die Projektablage ist unter [[Richtlinie - Projektmanagement]] definiert.          |
| Produkte/\[Name\]                         | Shared       | Dokumente zu den Mint System Produkten                                             |
| Odoo                                      | Shared       | Odoo Dokumente                                                                     |
| Newsletter                                | Shared       | Dokumente zum Newsletter Mint System                                               |
| News                                      | Shared       | Neuigkeiten aus Medien                                                             |
| Mitgliedschaften/[Name]                   | Shared       | Dokumente zu Mitgliedschaften bei Vereinen und anderen Organisationen              |
| Meetings                                  | Shared       | Meeting Protokolle der Mint System                                                 |
| Marketing                                 | Shared       | Dokumente zu Marketing-Kampagnen                                                   |
| Management Handbuch                       | Shared       | Dokumentation zu Methoden und Vorgehensmodellen                                    |
| Lösungen                                  | Shared       | Ablage Lösungs-Portfolio                                                           |
| Lieferanten/[Name]                        | Shared       | Lieferantenbeziehungen werden hier abgebildet                                      |
| Kunden/[Name]                             | Shared       | Kundenbeziehungen werden hier abgebildet                                           |
| Infrastruktur                             | Shared       | Dokumentation der Mint System Infrastruktur                                        |
| Förderbeiträge                            | Shared       | Dokumente Sponsoring Mint System                                                   |
| Data                                      | Shared       | Speicherung von Anwendungsdaten. Beispielsweise Passwort-Dateien von [[KeePassXC]] |
| Corporate Design                          | Shared       | Format- und Dokumentvorlagen, Bilder zur Publikation                               |
| Bilder                                    | Shared       | Fotoalben                                                                          |
| Ausbildung                                | Shared       | Unterlagen zur selbständigen Weiterbildung: Bücher, Methodik, Kurse und eLearning  |
| Archiviert                                | Shared       | Ablage zur Archivierung                                                            |
| Angebote                                  | Shared       | Angebote der Mint System                                                           |
| Akquise/[Name]                            | Shared       | Ablage für Akquise                                                                 |
| Steuern/[Jahr]                            | Private      | Dokumente Unternehmens- und Mehrwertssteuer                                        |
| Recruiting/[YYYY]-[MM] [Name]             | Private      | Berwebungsunterlagen soritert nach Jahr und Monat.                                 |
| Rechnungen/([YYYY]/[MM MONAT],[MM MONAT]) | Private      | Rechnung von Lieferanten gruppiert nach Rechnungsdatum                             |
| Personal                                  | Private      | Verträge und Personal-Dokumente                                                    |
| Partner                                   | Private      | Dokumente zu unseren Partner                                                       |
| Lohnabrechnung/\[Jahr\]                   | Private      | Dokumente Lohnabrechnung                                                           |
| Gründung                                  | Private      | Gründungsdokumente                                                                 |
| Geschäftsführung                          | Private      | Strategische Informationen                                                         |
| Generalversammlung/Geschäftsjahr-[YYYY]   | Private      | Unterlagen GV.                                                                     |
| Finanzen Datentransfer                    | Private      | Alle camt.53 und pain.001 Dateien werden hier abgelegt                             |
| Finanzen                                  | Private      | Finanz- und Kontenplan                                                             |
| Beurteilung/\[Name\]                      | Private      |                                                                                    |

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
