# Dokumentmanagementsystem

Dokumentation zur Dokumentablage der Mint System.

## Review-Workflow

Dokumente zur Review werden mit dem Tag `review-[kürzel]` in Nextcloud markiert.

Beispiel: Marco möchte, dass Janik das Dokument "Flyer" reviewed. Er zeigt die Datei in Nextcloud an und tagged diese mit `review-jvr`. Janik sieht sich seine Tags an, klick auf `review-janik` und sieht alle Dokumente, die er anschauen muss. Ist die Aufgabe erledigt, entfernt er seinen Tag und fügt den Tag `review-mr` hinzu. Nun weiss Marco, dass das Dokument angeschaut wurde.

## Format

Die Office-Dokumente werden als `.odt` gespeichert.

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

Zu Archivierung werden Dokument oder Ordner im selben Verzeichnis in den Ordnert *Archiviert| verschoben.

**Output**

Dokument und Dateien zur Veröffentlichung freigeben.

**tmp**

Temporäre Dateien können hier abgelegt werden.

## Ablagestruktur

Bestimmte Ordner erfordern die Erstellung eines Unterordners.

| Ordner                  | Beschreibung                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Angebot                 | Angebote der Mint System                                                                                           |
| Archiviert              | Ablage zur Archivierung                                                                                            |
| Bilder                  | Fotoalben                                                                                                          |
| Corporate Design        | Format- und Dokumentvorlagen, Bilder zur Publikation                                                               |
| Data                    | Speicherung von Anwendungsdaten.  Beispielsweise Passwort-Dateien von [[KeePassXC]]                                |
| Development             | Entwicklung Odoo und System Engineering                                                                            |
| Finanzen                | Finanz- und Kontenplan                                                                                             |
| Förderbeiträge          | Dokumente Sponsoring Mint System                                                                                   |
| Geschäftsführung        | Strategische Informationen                                                                                         |
| Gründung                | Gründungsdokumente                                                                                                 |
| Infrastruktur           | Dokumentation der Mint System Infrastruktur                                                                        |
| Lieferanten/[Name]      | Lieferantenbeziehungen werden hier abgebildet                                                                      |
| Management Handbuch     | Dokumentation zu Methoden und Vorgehensmodellen                                                                    |
| Marketing               | Dokumente zu Marketing-Kampagnen                                                                                   |
| Meeting                 | Meeting Protokolle der Mint System                                                                                 |
| Methodik/[Thema]        | Angwendet Methoden                                                                                                 |
| Mitgliedschaften/[Name] | Dokumente zu Mitgliedschaften bei Vereinen und anderen Organisationen                                              |
| News                    | Neuigkeiten aus Medien                                                                                             |
| Newsletter              | Dokumente zum Newsletter Mint System                                                                               |
| Odoo                    | Odoo Dokumente                                                                                                     |
| Odoo Handbuch           | Das Odoo Handbuch ist eine Referenzdokumentation der Odoo-Prozesse und bietet eine umfangreiche Benutzeranleitung. |
| Partner                 | Dokumente zu unseren Partner                                                                                       |
| Personal                | Verträge und Abrechnungen                                                                                          |
| Produkte                | Dokumente zu den Mint System Produkten                                                                             |
| Projekte/[Name]         | Projektablagen analog Odoo. Der Projektnahme enthält den Unternehmensname sowie eine Projektbezeichnung.           |
| Public Relations        | Zeitungsartikel und allgemeine PR                                                                                  |
| Rechnungen/[Monat]      | Rechnung von Lieferanten                                                                                           |
| Secrets                 | Schlüssel und Passwörter                                                                                           |
| Steuern/[Jahr]          | Dokumente Unternehmens- und Mehrwertssteuer                                                                        |
| Strategie               | Allgemeine Geschäftsstrategie und Businessplan                                                                     |
| Verkauf                 | Vorlagen für Angebote                                                                                              |
| Verträge/[Name]         | Alle Vertragsdokumente mit Externen                                                                                |
| Vorlage                 | Dokumentvorlagen mit Inhalt                                                                                        |
| Website                 | Dateien zum Webauftritt                                                                                            |
| Wiki Mint System        | Wissensdatenbank                                                                                                   |
