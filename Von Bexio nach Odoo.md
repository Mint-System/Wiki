---
title: Von Bexio nach Odoo
kind: explain
draft: false
section: blog
---

Ein Erfahrungsbericht zur Migration von Bexio nach Odoo.

Das Ziel der folgenden Erläuterungen ist es, ein Beispiel-Projekt für den Wechsel von Bexio nach Odoo mit den wesentlichen Projektarbeiten zu beschreiben.

Wir kennen Bexio praktisch nur vom _Hörensagen_. Deshalb wollen wir hier keine Aussagen zur Qualität dieses Produktes machen. Einen konkreten Grund für den Wechsel will ich hier trotzdem nennen: Die Lagerverwaltung über verschiedene Standorte hinweg war in Bexio nicht möglich.

## Customizing

**Listen und Masken:** Der Kunde hatte sehr spezifische Anforderungen wie die Darstellung der Listen und Masken gestaltet werden soll. Mittels Snippets können in Odoo alle Ansichten kundenspezifisch geändert werden. Hierfür bedienen wir uns aus der Mint System Snippets-Bibliothek welche kontinuierlich ergänzt und auf GitHub veröffentlicht wird.

**Business-Logik:** Unter anderem sollte der Verkäufer direkt erkennen können, ob die Rechnungen zu einem Auftrag schon bezahlt sind. Mit zusätzlichen Feldern in Verbindung mit Python-Code können komplexe Algorithmen realisiert werden. In diesem Fall hat ein Durchsuchen der mit dem Verkaufsauftrag in Verbindung stehenden Rechnungen und das Setzen eines Attributs genügt.

**Layout der Berichte:** Erfahrungsgemäss wird relativ viel Aufwand für das spezifische Gestalten der versendeten Dokumente _Bestellung_, _Angebot_, _Verkaufsauftrag_, _Rechnung_ usw. notwendig. Das geht von automatischen Texten im Bemerkungsfeld des Lieferscheins über spezielle Logiken für das Adressfeld bis zu spezifischen Schriftarten.

## Datenmigration

**Excel-Transfer:** Sehr oft ist ein Export/Import über Excel-Tabellen der einfachste Weg. Für die systematische Datenaufbereitung (Feldinhalte nach einer bestimmten Logik ändern, Spalten umbenennen usw.) verwenden wir _Jupyter Notebooks_. Wenn der Prozess stabil läuft, braucht es zum Zeitpunkt x nur ein schmales Zeitfenster für die vollständige Datenmigration zwischen den Systemen.

**Migration Buchhaltung:** Auf den Übertrag aller Buchungszeilen sollte verzichtet werden. Einfacher ist das Schliessen der Konti im Quellsystem und Einrichten der Konti mit je einer Eröffnungsbuchung im Zielsystem. Dieser Ansatz wurde auch hier gewählt.

## EDI-Anbindung

Eine entscheidende Anforderung war, dass Odoo in das bestehende EDI-System (electronic data interchange) integriert werden kann. Ein EDI-System ermöglicht den Austausch von Dokumenten (Bestellungen, Rechnungen usw.) zwischen Systemen mit unterschiedlichen Schnittstellen. Diese Entwicklung wurde von uns mit dem bestehenden EDI-Partner koordiniert. Mit der EDI-Anbindung wurde die Erstellung von Verkaufsaufträgen und dazugehörigen Rechnungen vollständig automatisiert.

## Lager-Routen

**Lager und Lagerorte:** Die Lagerung von Komponenten und Fertigprodukten ist auf mehrere Standorte mit diversen Lagerorten aufgeteilt. Das automatische Reservieren und das Kommissionieren über Barcode-Scannen ist eine Odoo Standardfunktion.

**Routen:** Über die Konfiguration von Lager-Routen konnte der kundenspezifische Prozess des Rüsten an den Produktionsstandort und das Weiterreichen an die Verpackungsstelle eingerichtet werden. Das unkomplizierte Transferieren der Produkte mit Barcodes und der richtigen Hardware ist sehr wichtig für die Sicherstellung des korrekten Bestands.

## Mehrere Mandanten

**Sichtbarkeit der Stammdaten:** Auf einer Installation können unterschiedliche Unternehmungen betrieben werden. Das ist eine Spezialität von Odoo. Die Sichtbarkeit der Stammdaten kann konfiguriert werden. Zum Beispiel können die Produkte von beiden Unternehmen gemeinsam gepflegt werden.

**Unterschiedliche Kontenrahmen:** Die beiden Mandanten (Unternehmen) sind in der Schweiz und Deutschland lokalisiert. Entsprechend wurden zwei unterschiedliche Kontenrahmen angelegt:

- Unternehmung in der Schweiz: Kontenrahmen 2015 (Schweiz)
- Unternehmung in Deutschland: Deutscher Kontenplan SRK04

## Fazit

Aus unserer Sicht der wesentliche Vorteil von Odoo gegenüber anderen Systemen: Wir haben Zugriff auf die Daten und den Quellcode!

Die Wahrscheinlichkeit bezüglich Funktionsumfang in einer _Sackgasse_ zu landen ist dadurch wesentlich kleiner. Selbstverständlich muss immer das Mögliche vom Machbaren unterschieden werden. Der Aufwand um etwas zu bauen was dem Konzept von Odoo widerspricht kann absurd hoch werden.

Der Import aus Odoo war wesentlich leichter als der Export aus Bexio.
Durch die Zugänglichkeit auf das Odoo-System konnten wir Automatismen einrichten die vorher nicht möglich waren.
