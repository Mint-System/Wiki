# Richtlinie - Dokumentmanagementsystem

Dokumentation zur Dokumentablage der Mint System.

## Ablagestruktur

Bestimmte Ordner erfordern die Erstellung eines Unterordners.

| Ordner                        | Beschreibung                                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Angebot                       | Angebote der Mint System                                                                                           |
| Archiviert                    | Ablage zur Archivierung                                                                                            |
| Bilder                        | Fotoalben                                                                                                          |
| Corporate Design              | Format- und Dokumentvorlagen, Bilder zur Publikation                                                               |
| Data                          | Speicherung von Anwendungsdaten.  Beispielsweise Passwort-Dateien von [[KeePassXC]]                                |
| Development                   | Entwicklung Odoo und System Engineering                                                                            |
| Finanzen                      | Finanz- und Kontenplan                                                                                             |
| Förderbeiträge                | Dokumente Sponsoring Mint System                                                                                   |
| Geschäftsführung              | Strategische Informationen                                                                                         |
| Gründung                      | Gründungsdokumente                                                                                                 |
| Infrastruktur                 | Dokumentation der Mint System Infrastruktur                                                                        |
| Lieferanten/[Name]            | Lieferantenbeziehungen werden hier abgebildet                                                                      |
| Management Handbuch           | Dokumentation zu Methoden und Vorgehensmodellen                                                                    |
| Marketing                     | Dokumente zu Marketing-Kampagnen                                                                                   |
| Meeting                       | Meeting Protokolle der Mint System                                                                                 |
| Methodik/[Thema]              | Angwendet Methoden                                                                                                 |
| Mitgliedschaften/[Name]       | Dokumente zu Mitgliedschaften bei Vereinen und anderen Organisationen                                              |
| News                          | Neuigkeiten aus Medien                                                                                             |
| Newsletter                    | Dokumente zum Newsletter Mint System                                                                               |
| Odoo                          | Odoo Dokumente                                                                                                     |
| Odoo Handbuch                 | Das Odoo Handbuch ist eine Referenzdokumentation der Odoo-Prozesse und bietet eine umfangreiche Benutzeranleitung. |
| Partner                       | Dokumente zu unseren Partner                                                                                       |
| Personal                      | Verträge und Abrechnungen                                                                                          |
| Produkte                      | Dokumente zu den Mint System Produkten                                                                             |
| Projekte/[Name]               | Projektablagen analog Odoo. Der Projektnahme enthält den Unternehmensname sowie eine Projektbezeichnung.           |
| Public Relations              | Zeitungsartikel und allgemeine PR                                                                                  |
| Rechnungen/([YYYY]/[MM],[MM]) | Rechnung von Lieferanten                                                                                           |
| Secrets                       | Schlüssel und Passwörter                                                                                           |
| Steuern/[Jahr]                | Dokumente Unternehmens- und Mehrwertssteuer                                                                        |
| Spesen/([YYYY]/[MM],[MM])     | Ablage Spesenbelege für Lohnabrechnung                                                                             |
| Strategie                     | Allgemeine Geschäftsstrategie und Businessplan                                                                     |
| Verkauf                       | Vorlagen für Angebote                                                                                              |
| Verträge/[Name]               | Alle Vertragsdokumente mit Externen                                                                                |
| Vorlage                       | Dokumentvorlagen mit Inhalt                                                                                        |
| Website                       | Dateien zum Webauftritt                                                                                            |
| Wiki Mint System              | Wissensdatenbank                                                                                                   |

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

Dokumente zur Review werden mit im Chat mit `@Person Review` getagged. Hat die Person das Dokument angeschaut und Kommentar hinterlassen, meldet sie das über den Chat zurück.

## Tags

In Nextcloud existieren diese Tags:

| Tag     | Kommentar       |
| ------- | --------------- |
| Meeting | Meeting Notizen |
|         |                 |