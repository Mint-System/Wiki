---
title: Login Mint System
website: https://login.mint-system.ch
kind: explain
section: infrastructure
---

Identitäts-Anbieter der Mint System.

Administration: <https://login.mint-system.ch/admin/>

## HowTo

### Account verwalten

Wenn Sie ihren Benutzer verwalten möchten, rufen Sie den Link <https://login.mint-system.ch/auth/realms/mint-system.ch/account/> auf und loggen sich ein.

Um das Passwort zurückzusetzen steht ihnen die entsprechende Aktion im Login-Dialog zur Verfügung.

## Realms

Aktuell existieren die folgenden Realms:

### mint-system.ch

Zur Erfassung des OAuth-Providers stehen diese Informationen zur Verfügung:

- Client ID: `odoo.mint-system.ch`
- Profil URL: <https://login.mint-system.ch/realms/mint-system.ch/account>
- Authorisierungs URL: https://login.mint-system.ch/auth/realms/mint-system.ch/protocol/openid-connect/auth
- Validierungs URL: https://login.mint-system.ch/auth/realms/mint-system.ch/protocol/openid-connect/userinfo

Wird verwendet von:

- [[ERP Mint System]]
- [[ChatGPT Mint System]]
- [[Cloud Mint System]]
- [[Monitor Mint System]]
- [[Git Mint System]]
