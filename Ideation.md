---

---

# Ideation

Kreativprozess für Produktentwicklung. Sammlung von Ideen für neue Produkte.

## Mint SaaS-Lösungen

Analog https://odoo.com eine SaaS-Lösung für Odoo und weitere Software entwickeln. Unter der Domain mint-cloud.ch könnte man einen Odoo Webshop / Portal hosten, wo Kunden Odoo-Hostings kaufen können. Auf Knopfdruck wird dann in einem Kubernetes-Cluster eine Odoo-Instanz bereitgestellt.

Das ganze kann auch für andere Software wie [[Nextcloud]], [[Gitea]], [[Moodle]] oder [[Mattermost]] funktionieren.

Mehr dazu unter [[Mint SaaS]], [[Mint Cloud]], [[Uri Cloud]].

## Open Source Business Intelligence Plattform

Siehe [[Apache Superset]].

## Branchenlösung Odoo

[[Aerodoo]] die Branchenlösung für Luftfahrtbetriebe.

Traceability.  
EASA Part 21.  
EASA Form 1.  
Qualitätsprüfung.

## draw.io Integration für Odoo

Beispiele für Iframe-Integrationen: <https://github.com/jgraph/drawio-integration>

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

- Notiz
- Aufgabe
- Aktivität
- Termin

Eine Aufgabe ist an ein Projekt gekoppelt. Das Protokoll wird einem Projekt zugeordnet.

Ein Sitzungsprotokoll hat folgende Attribute:

- Name
- Projekt -> Projekt
- Teilnehmer -> Kontakte
- Stufe:
  - Geplant
  - Aktiv
  - Abgeschlossen
- Datum Geplant -> Erstellt Kalendereintrag bei Teilnehmenden
- Datum Durchgeführt
- Protokoll-Linien

Das Protokoll kann gedruckt oder als HTML-Report geteilt werden. Darauf sind auch verlinkte Elemente abgedruckt.

## Information Security Management mit Odoo

Input: <https://github.com/OCA/management-system/tree/14.0>

Aufbau eines ISMS bei Unternehmen.

ISO 27001 / Compliance.

<https://www.camptocamp.com/de/maintenance_und_hosting>

> Wir arbeiten ausschliesslich mit Hosting-Providern zusammen, die ein hohes Qualitäts- und Sicherheitsniveau garantieren und nach ISO 9001:2008, ISO/IEC 27001:2013, PCI DSS 3.2, SOC-1 Typ II und SOC-2 Typ II zertifizierte Rechenzentren betreiben.

## Odoo Nextcloud Integration

Alle Odoo Dokumente `ir.attachment` in Nextcloud speichern.

Umgekehrt Zugriff auf Odoo-Daten mit Nextcloud-Tables.

[[Odoo Nextcloud Filestore]]
