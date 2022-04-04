# Ideation

Kreativprozess für Produktentwicklung. Sammlung von Ideen für neue Produkte.

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