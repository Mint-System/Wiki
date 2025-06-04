---
tags:
  - Blog
kind:
  - explain
draft: false
---
# Den eigenen Login-Anbieter mit Keycloak betreiben

Welche Software heutzutage für Login-Dienste zum Einsatz kommt.

Vielleicht ist ihnen auch schon aufgefallen, dass wenn Sie auf einer Webmail-Seite wie Outlook oder im eBanking-Portal wie bei Raiffeisen einloggen wollen, werden Sie immer zuerst umgeleitet.

Ruft man zum Beispiel <https://outlook.live.com> auf und klickt auf *Sign in*, dann landet man bei <https://login.live.com>. Man ist genau genommen nicht mehr bei Outlook, sondern auf einer separaten Login-Seite.

**SP und IdP**

Man unterscheidet hier zwischen Service-Provider (SP) und Identity-Provider (IdP). Der SP erlaubt die Nutzung eines Dienstes wie Mail oder eBanking, kümmert sich aber nicht darum wie Sie authentifiziert werden. Der IdP regelt die Authentifizierung und stellt ihre Identität sicher.

**Der Vorteil**

Der grosse Vorteil dieses Ansatzes ist, dass man einen IdP für mehrere SPs verwenden kann. Wenn man sich einmal eingeloggt hat, sind die Anmeldeinformationen für weitere Dienste gültig. Das gilt natürlich nur für Dienste, denen vertraut wird.

**Die Technologie**

Die Technologie hinter diesen Anmeldeverfahren nennt sich [OpenID Connect](https://openid.net/connect/). Das ist eine Schicht im Webverkehr, die mit Hilfe des [OAuth 2.0 protocol](https://oauth.net/2/) den Austausch von Identitäten regelt.

Diese Software-Architekturen waren früher eine komplexe Angelegenheit. Open Source sei Dank,  kann man heutzutage ganz einfach einen eigenen IdP betreiben und diesen mit verschiedenen Diensten integrieren.

**Keycloak**

Ein solcher IdP ist [Keycloak](https://www.keycloak.org/). Diese Software wird von Unternehmen weltweit eingesetzt. Mit Keycloak kann man Benutzer, Gruppen, Richtlinien und Berechtigungen verwalten. Registrierte SP können mit Keycloak ein Single-Sing On (SSO) bewerkstelligen.

**Kein ActiveDirectroy**

Vielleicht haben Sie schon von ActiveDirectory gehört. Das ist sozusagen der IdP in Windows-Netzwerken. Im ActiveDirectory werden ebenfalls Benutzer, Gruppen, Berechtigungen und Richtlinien verwaltet.

In naher Zukunft wird es ActiveDirectory nicht mehr geben. Da fast alle Anwendungen im Browser funktionieren und somit das lokale Login auf dem Windows-Computer im Unternehmensnetzwerk überflüssig wird, braucht es auch keine Authentifizierungsschicht für lokale Unternehmensnetze.

**Seit Stunde 0**

Natürlich hat die Mint System Keycloak für ihre Dienste (Odoo, Nextcloud, Monitoring) im Einsatz. Wir haben bereits gute Erfahrungen gemacht und empfehlen jedem Unternehmen, die viele Webanwendungen im Einsatz haben zu prüfen, ob sich der Einsatz von Keycloak lohnt.