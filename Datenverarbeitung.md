---
title: Datenverarbeitung
kind: explain
section: methodology
---

In der Datenverarbeitung gibt es mehrere Bereiche:

1. **Migration**: Export und Import von Daten
2. **Synchronisation**: Abstimmung der Daten zwischen Systemen
3. **Analyse**: Sammlung und Auswertung von Daten

## Migration

Die Migration der Daten erfolgt nach dem Prinzip _Input, Process, Output_.

- **Input**: Daten aus dem Quellsystem und wenn nötig aus dem Zielsystem werden gesammelt.
- **Process**: Daten aus Input werden gemäss einem Drehbuch verarbeitet. Der Vorgang kann mit einem Script automatisiert werden
- **Output**: Daten werden für den Import in das Zielsystem vorbereitet

Synonym für dieses Prinzip steht auch _Extract Transform Load (ETL)_.

## Synchronisation

Wenn ein laufender Abgleich von Daten zwischen zwei oder mehreren Systemen stattfinden soll, wird mithilfe von [[N8N]] ein Workflow gebaut.

## Analyse

Wenn die Daten in Odoo sind, werden die Odoo Werkzeuge (Wissensdatenbank, Pivot) für Auswertungen verwendet.

Wenn Daten aus unterschiedlichen Systemen zusammengeführt werden müssen, wird dazu eine [[PostgreSQL]]-Datenank mit [[Foreign Data Wrapper]] erstellt. Die Abfrage und Visualisierung der Daten erfolgt mit [[Grafana]] oder [[Apache Superset]].

