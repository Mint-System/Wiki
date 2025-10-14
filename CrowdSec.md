---
kind:
  - reference
section: tool
---

# CrowdSec

Website: <https://crowdsec.net/>

## Beschreibung

Die CrowdSec Security Engine läuft. Sie sammelt Metriken in den Server-Logs und wertet diese aus (ähnlich fail2ban, aber im grösseren Stil).

Um die IP-Adressen aus den CrowdSec Blocklists zu blockieren, verwende wir den CrowdSec Firewall Bouncer: <https://docs.crowdsec.net/u/bouncers/firewall/>

Diese Komponente kommuniziert mit der CrowdSec Security Engine und konfiguriert die Blocklists mit iptables.
