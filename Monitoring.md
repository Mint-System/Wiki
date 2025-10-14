---
tags:
  - Definition
---

# Monitoring

Für das Monitoring der Systeme setzt Mint System [[Grafana]] and [[Prometheus]] ein.

Website: <https://monitor.mint-system.ch>

Weiterführende Links: [[Monitoring Server]]

## Metriken

Es werden fünf Typen von Metriken gesammelt:

**Host/Server**

Metriken zum physikalischen Server:

- CPU
- RAM
- Disk

**Container**

Metriken zur Container-Engine:

- CPU
- RAM
- Disk

**Applikationen**

Applikations-spezifische Metriken:

- Odoo: Anzahl User
- Postgres: Connection Pool
- Nextcloud: Anzahl User

**HTTP**

Die Webservices werden angepingt.

**Container Logs**

Alle Logs der Container.
