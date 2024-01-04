---
tags:
- Assets
---
# Koordination Wartung

Beschreibt die Verantwortung des Kunden und Mint System für bestimmte Aufgaben im Rahmen des [[Wartungsauftrag]].

## Odoo

### Docker Image aktualisieren

Einmal im Monat aktualisiert Mint System die Odoo Revision gemäss [[Prozesse Infrastruktur - Odoo Revision]]. 
### Odoo Apps in Produktion aktualisieren

Mint System stellt sicher, dass Odoo Apps auf die Odoo-Umgebungen des Kunden bereitgestellt werden. Das Deployment erfolgt Kunden-spezifisch.

Der Kunde aktualisiert und testet die Apps in der Testumgebung und nimmt die Aktualisierung in der Produktion selbständig vor.
### Datenbank upgraden

Ein Datenbank-Upgrade ist ein iterativer Prozess und erfordert eine enge Zusammenarbeit zwischen Kunden und Mint System. Der Upgrade-Prozess ist unter [[Odoo Enterprise Upgrade]] und [[Odoo Community Upgrade]] beschrieben.

## Jenkins

### Probleme Build Pipelines lösen

Der Kunde prüft die Fehlermeldung der Build-Pipeline und führt nach Bedarf ein Rollback aus. Der Kunde sammelt Log-Daten und Metriken und das Problem zu beschreiben.

Die Mint System analysiert anhand Log-Daten und Metriken das Problem und entwickelt eine Lösung.
