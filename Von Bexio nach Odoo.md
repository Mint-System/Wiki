---
tags:
- Asset
---
# Von Bexio nach Odoo

## Ausgangslage

Wir kennen Bexio praktisch nur vom *Hörensagen*. Deshalb wollen wir hier keine Aussagen zur Qualität dieses Produktes machen. 
Das Ziel der folgenden Erläuterungen ist es, ein Beispiel-Projekt für den Wechsel von Bexio nach Odoo mit den wesentlichen Projektarbeiten zu beschreiben.

Einen konkreten Grund für den Wechsel will ich hier trotzdem nennen: Die Lagerverwaltung über verschiedene Standorte hinweg war in Bexio nicht möglich.


## Wesentliche Projektarbeiten

### Customizing

**Listen und Masken:** Der Kunde hatte sehr spezifische Anforderungen wie die Darstellung der Listen und Masken gestaltet werden soll. Mittels Snippets können in Odoo alle Ansichten kundenspezifisch geändert werden. Hierfür bedienen wir uns aus der Mint System Snippets-Library welche kontinuierlich ergänzt und auf github veröffentlicht wird.

**Business-Logik:** Unter anderem sollte der Verkäufer direkt erkennen können, ob die Rechnungen zu einem Auftrag schon bezahlt sind. Mit zusätzlichen Feldern in Verbindung mit Python-Code können komplexe Algorithmen realisiert werden. In diesem Fall hat ein Durchsuchen der mit dem Verkaufsauftrag in Verbindung stehenden Rechnungen und das Setzen eines Attributs genügt.

**Layout der Berichte:** Erfahrungsgemäss wird relativ viel Aufwand für das spezifische Gestalten der versendeten Dokumente  *Bestellung*, *Angebot*, *Verkaufsauftrag*, *Rechnung* usw. notwendig. Das geht von automatischen Texten im Bemerkungsfeld des Lieferscheins über spezielle Logiken für das Adressfeld bis zu spezifischen Schriftarten.


### Datenmigration

**Excel-Transfer:** Sehr oft ist ein Export/Import über Excel-Tabellen der einfachste Weg. Für die systematische Datenaufbereitung (Feldinhalte nach einer bestimmten Logik ändern, Spalten umbenennen usw.) verwenden wir *Jupyter Notebooks*. Wenn der Prozess stabil läuft, braucht es zum Zeitpunkt x nur ein schmales Zeitfenster für die vollständige Datenmigration zwischen den Systemen.

**Migration Buchhaltung:** Auf den Übertrag aller Buchungszeilen sollte verzichtet werden. Einfacher ist das Schliessen der Konti im Quellsystems und Einrichten der Konti mit je einer Eröffnungsbuchung im Zielsystem. Dieser Ansatz wurde auch hier gewählt.


### EDI-Anbindung

Der Kunde erhält täglich viele Bestellungen. Das Generieren entsprechender Verkaufsaufträge musste über eine EDI-Schnittstelle (electronic data interchange) automatisiert werden. Die Umwandlung in Artefakte die über API (Application Programming Interface) übertragen werden hat eine Partner-Firma entwickelt. Jetzt werden aus Bestellungen automatisch Verkaufsaufträge und die dazugehörigen Rechnungen erstellt und versendet.

### Lager-Routen

**Lager und Lagerorte:** Die Lagerung von Komponenten und Fertigprodukten ist auf mehrere Standorte mit diversen Lagerorten aufgeteilt. Das automatische Reservieren und das Kommissionieren über Barcode-Scannen ist eine Odoo Standardfunktion.

**Routen:** Über die Konfiguration von Lager-Routen konnte der kundenspezifische Prozess des Pickings an den Produktionsstandort und das Weiterreichen in die Verpackungsstelle eingerichtet werden. Das unkomplizierte Transferieren der Produkte mit Barcodes und der richtigen Hardware ist sehr wichtig für die Sicherstellung des korrekten Bestands.

### Mehrere Mandanten

**Sichtbarkeit der Stammdaten:** Auf einer Installation können unterschiedliche Unternehmungen betrieben werden. Das ist eine Spezialität von Odoo. Die Sichtbarkeit der Stammdaten kann konfiguriert werden. Zum Beispiel können die Produkte von beiden Unternehmen gemeinsam gepflegt werden.

**Unterschiedliche Kontenrahmen:** Die beiden Mandanten (Unternehmen) sind in der Schweiz und Deutschland lokalisiert. Entsprechend wurden zwei unterschiedliche Kontenrahmen angelegt:
- Unternehmung in der Schweiz: Kontenrahmen 2015 (Schweiz)
- Unternehmung in Deutschland: Deutscher Kontenplan SRK04
(Sobald die ersten Buchungen vollzogen sind, lässt sich diese Einstellung allerdings nur sehr schwer wieder ändern.)

**Steuerzuordnngen:** Auch die Steuern wurden länderspezifisch eingerichtet.


## Fazit

Aus unserer Sicht der wesentliche Vorteil von Odoo gegenüber anderen Systemen: Wir haben Zugriff auf den Source Code!

Die Wahrscheinlichkeit bezüglich Funktionsumfang in einer *Sackgasse* zu landen ist dadurch wesentlich kleiner.  Selbstverständlich muss immer das Mögliche vom Machbaren unterschieden werden. Der Aufwand um etwas zu bauen was dem Konzept von Odoo widerspricht kann absurd hoch werden.

Das haben wir aber bis heute noch nicht erlebt.

