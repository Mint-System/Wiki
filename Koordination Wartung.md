---
tags:
- Assets
---
# Koordination Wartung

Beschreibt die Verantwortung des Kunden und Mint System für bestimmte Aufgaben im Rahmen des [[Wartungsauftrag]].

## [[Odoo Hosting]]

### Docker Image aktualisieren

Einmal im Monat aktualisiert Mint System die Odoo Revision gemäss [[Prozesse Infrastruktur - Odoo Revision]]. 
### Odoo Apps in Produktion aktualisieren

Mint System stellt sicher, dass Odoo Apps (Community und Enterprise) auf die Odoo-Umgebungen des Kunden bereitgestellt und aktualisiert werden. Das Deployment der Apps erfolgt Kunden-spezifisch.

Der Kunde aktualisiert und testet Apps von Dritten in der Testumgebung und nimmt die Aktualisierung in der Produktion selbständig vor.
### Datenbank upgraden

Ein Datenbank-Upgrade ist ein iterativer Prozess und erfordert eine enge Zusammenarbeit zwischen Kunden und Mint System. Der Upgrade-Prozess ist unter [[Odoo Enterprise Upgrade]] und [[Odoo Community Upgrade]] beschrieben.

## Sicherheitspatches anwenden

Wenn Odoo S.A. eine Sicherheitsmeldung (Security Advisory) mit einem Patch veröffentlicht, wird dieser Patch so schnell wie möglich von Mint System angewendet. Konkret werden gepatchte Docker Images auf betroffenen Umgebungen ausserplanmässig installiert.  
## [[Jenkins Hosting]]

### Probleme Build Pipelines lösen

Der Kunde prüft die Fehlermeldung der Build-Pipeline und führt nach Bedarf ein Rollback aus. Der Kunde sammelt Log-Daten und Metriken und das Problem zu beschreiben.

Die Mint System analysiert anhand Log-Daten und Metriken das Problem und entwickelt eine Lösung.
