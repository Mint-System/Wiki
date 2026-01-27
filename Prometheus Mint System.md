---
kind: reference
website: https://prometheus.mint-system.ch
section: infrastructure
---

[[Prometheus]]-Instanz der Mint System.

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
