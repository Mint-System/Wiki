---
tags:
  - Definition
section: communication
kind:
  - explain
---

# Odoo Security

Odoo verwaltet besonderns schützenswerte Daten und ist zugleich über das Internet erreichbar. Das setzt besondere Anforderungen an die Security voraus.

Für die Sicherheit der Software trägt [[Odoo S.A.]] die Verantwortung: <https://www.odoo.com/de_DE/security>.

Für das Odoo-Hosting trägt die [[Mint System GmbH]] die Verantwortung.

**Brute-Force Login**

Login-Aufrufe werden verzögert. Dadurch werden die Kosten für Brute-Force-Angriffe gesteigert.

**Leak Login-Daten**

Wenn Odoo Login-Daten bekannt werden, reicht das für ein Login von Extern nicht aus. Externe Logins erfordern eine 2-Faktor-Authentisierung.

**Zugriffskontrolle**

Die Berechtigungsstrukturen in Odoo sind sehr strikt. Auch wenn ein Unbefugte Zugriff auf die Odoo-Installation erlangen, haben Sie nur einen beschränkten Zugriff auf die Daten.

**Sicherheitslücken**

Die Odoo Imgebung wird regelmässig aktualisiert. Dadurch werden die grössten [[OWASP-Sicherheitslücken]] mitigiert. Eine Ausführung dazu gibt es hier: <https://www.odoo.com/de_DE/security#owasp>.

Enterprise-Kunden werden über Sicherheitslücken über die [[Odoo Security Advisory]] benachrichtigt.
