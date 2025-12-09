---
kind:
  - howto
section: handbook
---

# Keycloak Handbuch

[[TOC]]

## 2-Faktor-Authentisierung aktivieren

Wählen im ausgewählten Realm _Manager > Users_ und zeigen Sie einen Bentuzer an. Im Bereich _Required actions_ wählen Sie _Configure TOTP_. Beim nächsten Login wird der Benutzer aufgefordert die 2FA zu aktivieren.

## Mobile Authenticator Setup einrichten

Wenn du in Keycloak einloggst und einen Dialog _Mobile Authenticator Setup_ erhältst hast du mehrere Optionen. Entweder scannst du den QR-Code mit der empfehlenen [[TOTP Auth]] App oder du klickst auf _Unable to scan?_. Mit dem Geheim-Code des Barcodes kann deine TOTP-App den zweiten Faktor für das Login generieren. Aktiviere das 2FA-Login indem du den genrierten Code eingibst.

::: tip
Als Namen für den TOTP-Eintrag wird das Schema `${URL}_${Benutzername}` empfohlen.
:::
