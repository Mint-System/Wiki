---
title: Login Mint System
website: https://login.mint-system.ch
kind: explain
section: infrastructure
---

Identitäts-Anbieter der Mint System.

Administration: <https://login.mint-system.ch/admin/>

Weiterführende Links: [[Login mit login.mint-system.ch]]

## Realms

Aktuell existieren die folgenden Realms:

### mint-system.ch Realm

Zur Erfassung des OAuth-Providers stehen diese Informationen zur Verfügung:

- Client ID: `odoo.mint-system.ch`
- Authorisierungs URL: https://login.mint-system.ch/auth/realms/mint-system.ch/protocol/openid-connect/auth
- Validierungs URL: https://login.mint-system.ch/auth/realms/mint-system.ch/protocol/openid-connect/userinfo

## Integration

### Odoo

Für eine Odoo Integration müssen die folgenden Informationen verfügbar sein:

- Liste der Benutzer
- Domainname

Damit die Odoo Installation Zugriff auf den Identitäts-Anbieter hat, muss Odoo als Client erfasst werden.

Mehr Details zur Konfiguration sind hier verfügbar: https://janikvonrotz.ch/2020/04/30/role-based-access-control-for-multiple-keycloak-clients/.
