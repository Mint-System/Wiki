---

---

# Login Mint System

Login Mint System ist ein Identitäts-Anbieter, der unter https://login.mint-system.ch verfügbar ist.

Weiterführende Links: [[Login mit login.mint-system.ch]].

## Integration

### Odoo

Für eine Odoo Integration müssen die folgenden Informationen verfügbar sein:

- Liste der Benutzer
- Domainname

Damit die Odoo Installation Zugriff auf den Identitäts-Anbieter hat, muss Odoo als Client erfasst werden.

Mehr Details zur Konfiguration sind hier verfügbar: https://janikvonrotz.ch/2020/04/30/role-based-access-control-for-multiple-keycloak-clients/.

## Realms

Aktuell exisiteren die foglenden Realms:

### mint-system.ch Realm

Zur Erfassung des OAuth-Providers stehen diese Informationen zur Verfügung:

- Client ID: odoo.mint-system.ch
- Authorisierungs URL: https://login.mint-system.ch/auth/realms/mint-system.ch/protocol/openid-connect/auth
- Validierungs URL: https://login.mint-system.ch/auth/realms/mint-system.ch/protocol/openid-connect/userinfo
