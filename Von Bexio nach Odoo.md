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

**Business-Logik:** Der Verkäufer soll direkt erkennen können, ob die Rechnungen zu einem Auftrag schon bezahlt sind. Mit zusätzlichen Feldern in Verbindung mit Python-Code können komplexe Algorithmen realisiert werden. In diesem Fall hat ein Durchsuchen der mit dem Verkaufsauftrag in Verbindung stehenden Rechnungen mit setzen eines Attributs genügt.

**Layout der Berichte:** Erfahrungsgemäss wird relativ viel Aufwand für das spezifische Gestalten der versendeten Dokumente  *Bestellung*, *Angebot*, *Verkaufsauftrag*, *Rechnung* usw. betrieben. Das geht von automatischen Texten im Bemerkungsfeld des Lieferscheins über spezielle Logiken für das Adressfeld bis zu spezifischen Schriftarten.


### Datenmigration

**Excel-Transfer:** Sehr oft ist ein Export/Import über Excel-Tabellen der einfachste Weg. Für die systematische Datenaufbereitung (Feldinhalte nach einer bestimmten Logik ändern, Spalten umbenennen usw.) verwenden wir *Jupyter Notebooks*. Wenn der Prozess stabil läuft, braucht es zum Zeitpunkt x nur ein schmales Zeitfenster für die Migration zwischen den Systemen.

**Finanzbuchhaltung:** Auf den Übertrag aller Buchungszeilen sollte verzichtet werden. Einfacher ist das Schliessen der Konti im Quellsystems und Einrichten der Konti mit je einer Eröffnungsbuchung im Zielsystem.


### EDI-Anbindung


Automatische Aktionen zum Erstellen der Rechnung aus dem Verkaufsauftrag.


### Lager-Routen

Hier konnte man aus dem Vollen schöpfen.


### Mehrere Mandanten



Unternehmung in der Schweiz: Kontenrahmen 2015 (Schweiz)
Unternehmung in Deutschland: Deutscher Kontenplan SRK04

Automatische Steuerzuordnungen.


## Fazit

Aus unserer Sicht der wesentliche Vorteil von Odoo gegenüber anderen Systemen: Wir haben Zugriff auf den Source Code!

Die Wahrscheinlichkeit bezüglich Funktionsumfang in einer *Sackgasse* zu landen ist dadurch wesentlich kleiner.  Selbstverständlich muss immer das Mögliche vom Machbaren unterschieden werden. Der Aufwand um etwas zu bauen was dem Konzept von Odoo widerspricht kann absurd hoch werden.

Das haben wir aber bis heute noch nicht erlebt.

