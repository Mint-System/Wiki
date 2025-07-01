---
tags:
  - Handbuch
kind:
  - howto
---
# Keycloak Handbuch

## 2-Faktor-Authentisierung aktivieren

Wählen im ausgewählten Realm *Manager > Users* und zeigen Sie einen Bentuzer an. Im Bereich *Required actions* wählen Sie *Configure TOTP*. Beim nächsten Login wird der Benutzer aufgefordert die 2FA zu aktivieren.

## Mobile Authenticator Setup einrichten

Wenn du in Keycloak einloggst und einen Dialog *Mobile Authenticator Setup* erhältst hast du mehrere Optionen. Entweder scannst du den QR-Code mit der empfehlenen [[TOTP Auth]] App oder du klickst auf *Unable to scan?*. Mit dem Geheim-Code des Barcodes kann deine TOTP-App den zweiten Faktor für das Login generieren. Aktiviere das 2FA-Login indem du den genrierten Code eingibst.

::: tip
Als Namen für den TOTP-Eintrag wird das Schema `${URL}_${Benutzername}` empfohlen.
:::