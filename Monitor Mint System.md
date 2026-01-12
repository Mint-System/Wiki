---
kind:
  - reference
section: infrastructure
titl: Monitor Mint System
website: https://monitor.mint-system.ch
---
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
