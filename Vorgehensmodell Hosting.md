---
tags:
  - Prozess
kind:
  - explain
---
# Vorgehensmodell Hosting

Das vorliegende Vorgehensmodell erläutert beschreibt wie die Mint System GmbH Hosting-Projekte umsetzt.
## Rollen

Projektrollen auf Seiten Mint System und Kunde.

### Projektleiter (Mint System)

Leitet und Koordiniert die Projektabwicklung. Vereinbart Termine und regelt die Verbindlichkeiten.

Koordinierte die Konfiguration der Anwendungen im Betrieb.
### System Engineer (Mint System)

Stell die Hosting-Infrastruktur bereit und initialisiert die Anwendungen. Nimmt Integrationen mit Login-Diensten und anderen Systemen des Kunden vor.
### Systemadministrator (Kunde)

Ist der zentrale Ansprechpartner auf Kundenseite für technische Fragen. Nimmt technische Konfiguration in der Infrastruktur des Kunden vor.

## Vorgehen

## Infrastruktur

Die Server für das Hosting werden beim ausgewählten Anbieter erstellt. Der System Engineer erhält Zugriff auf den Server und kann eine Verbindung vom lokalen Computer aufbauen.

## Bereitstellung

Das Deployment-Tool ist [[Ansible]]. Mit dem [[Ansible Build]] werden Server- und Anwendungs-Konfigurationen beschrieben und auf einem Server angewendet.

Der Deployment-Prozess wird manuell angestossen und läuft dann automatisiert. Auf dem Server erfolgt keine manuelle Konfiguration.

## Monitoring und Backup

Die Dienste auf dem Server werden in das Monitoring-System ([[Prometheus]] und [[Grafana]]) integriert. Damit wird die Verfügbarkeit des Server und Anwendungen sichergestellt.

Es besteht die Möglichkeit, dass Applikationsspezifische Metriken in das Monitoring-System integriert werden.

## Testen

Die Hosting-Umgebung muss autonom funktionieren. Die Resilienz des System und Ausfallsicherheit wird mit verschiedenen Methoden getestet.