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

## Reservierte Namen

Bestimmte Ordnernamen sind reserviert.

**Input**

Ordner mit der Bezeichung *Input* sind Sammelordner mit Dokumenten zur Verarbeitung.

**Archiviert**

Zu Archivierung werden Dokument oder Ordner im selben Verzeichnis in den Ordnert *Archiviert* verschoben.

**Output**

Dokument und Dateien zur Veröffentlichung freigeben.

**tmp**

Temporäre Dateien können hier abgelegt werden.

## Ablagestruktur

Bestimmte Ordner erfordern die Erstellung eines Unterordners.

* Angebot - Angebote der Mint System
* Archiv - Ablage zur Archivierung
* Bilder - Fotoalben
* Corporate Design - Format- und Dokumentvorlagen, Bilder zur Publikation
* Data - Speicherung von Anwendungsdaten.  Beispielsweise Passwort-Dateien von [[KeePassXC]]
* Development - Entwicklung Odoo und System Engineering
* Finanzen - Finanz- und Kontenplan
* Förderbeiträge - Dokumente Sponsoring Mint System
* Geschäftsführung - Strategische Informationen
* Gründung - Gründungsdokumente
* Infrastruktur - Dokumentation der Mint System Infrastruktur
* Knowledge Mint System - Wissensdatenbank
* Lieferanten/[Name] - Lieferantenbeziehungen werden hier abgebildet
* Methodik/[Thema] - Angwendet Methoden
* Mitgliedschaften/[Name] - Dokumente zu Mitgliedschaften bei Vereinen und anderen Organisationen
* Odoo - Odoo Dokumente
* Odoo Handbuch - Das Odoo Handbuch ist eine Referenzdokumentation der Odoo-Prozesse und bietet eine umfangreiche Benutzeranleitung. 
* Partner - Dokumente zu unseren Partner
* Rechnungen/[Monat] - Rechnung von Lieferanten
* Personal - Verträge und Abrechnungen
* Produkte - Dokumente zu den Mint System Produkten
* Projekte/[Name] - Projektablagen analog Odoo. Der Projektnahme enthält den Unternehmensname sowie eine Projektbezeichnung.
* Public Relations - Zeitungsartikel und allgemeine PR
* Strategie - Allgemeine Geschäftsstrategie und Businessplan
* Marketing - Dokumente zu Marketing-Kampagnen
* Verträge/[Name] - Alle Vertragsdokumente mit Externen
* Vorlage - Dokumentvorlagen mit Inhalt
* Website - Dateien zum Webauftritt
* Verkauf - Vorlagen für Angebote
* Secrets - Schlüssel und Passwörter