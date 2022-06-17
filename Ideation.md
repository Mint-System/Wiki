# Ideation

Kreativprozess für Produktentwicklung. Sammlung von Ideen für neue Produkte.

## draw.io Integration für Odoo

Beispiele für iframe integrationen: <https://github.com/jgraph/drawio-integration>

Beispiel für Odoo-Widget: <https://apps.odoo.com/apps/modules/14.0/web_widget_flow_chart/>

Konkret könnte man ein Text-Feld in Odoo erstellen und dieses mit einem Widget `drawio_editor` verknüpfen.

Im Bearbeitungsmodus wird der Editor geladen, ansonsten die Preview.

## Odoo Dashboard mit Grafana

KPIs gemäss Odoo Digest definieren.

Odoo-Erweiterung rendert die KPIs unter /metrics.

Mit API-Key bzw. Basic-Auth kann Prometheus die Schnittstelle abrufen.

Die KPIs sind bereits gespeichert.

Sammlung verschiedener Metriken.

## Sitzungsprotokoll mit Odoo

Odoo App zum planen, durchführen und nachbearbeiten von Sitzungen.

Vorgefertigte Elemente und Vorlagen zur Gestaltung eines Sitzungsprotokolls.

Bei der Durchführt der Sitzung können folgende Elemente erfasst werden:

* Notiz
* Aufgabe
* Aktivität
* Termin

Eine Aufgabe ist an ein Projekt gekoppelt. Das Protokoll wird einem Projekt zugeordnet.

Ein Situngsprotokoll hat folgende Attribute:

* Name*
* Projekt* -> Projekt
* Teilnehmer -> Kontakte
* Stufe:
	* Geplant
	* Aktiv
	* Abgeschlossen
* Datum Geplant -> Erstellt Kalendereintrag bei Teilnehmenden
* Datum Durchgeführt
* Protokoll-Linien
	
Das Protokoll kann gedruckt oder als HTML-Report geteilt werden. Darauf sind auch verlinkte Elemente abgedruckt.