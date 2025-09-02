---
tags:
  - Prozess
kind:
  - howto
section: process
---
# Prozesse Personal - Offboarding

## Personal

Arbeitsschritte:

- Kündigungsschreiben erstellen
- Abmelden bei Ausgleichskasse
- Arbeitsvertrag in Odoo terminieren
- Mitteilung bezl. Terminierung der Logins und Zugriffe an private Mail-Adresse

```
Guten Tag

Wir werden in Kürze ihr Mint System Login und Zugriffe auf Mint System Dienste deaktiveren.

Wir bitten Sie Unternehmens- und Projekt-Daten, sofern diese nicht öffentlich oder privat sind, von ihren Geräten zu entfernen. Insbesondere bitten wir Sie die KeePass-Datenbank und den Datenbank-Schlüssel zu löschen. Dazu gehören auch Zugangsdaten, die vom Browser gspeichert werden. 

In einem zweiten Schritt werden ihre Daten in unseren Systemen archivieren und ggf. entfernen.

Wir danken für die Kooperation.

Das Mint System Team
```
## Technisch

### Logins Mint System deaktivieren

Arbeitsschritte:

- Mitarbeiter-Eintrag in Wiki entfernen
- E-Mail-Account deaktivieren
- Matrix-Benutzer deaktivieren
- Keycloak-Benutzer deaktivieren
- Meldung Terminierung Benutzer-Accounts an private Mail-Adresse

## Zugriff entfernen

- GitHub-Benutzer aus der [[GitHub#Organisation]] entfernen
- GitHub-Benutzer aus Organisationen von Dritten entfernen
- GitLab-Benutzer aus der [[GitLab#Organisation]] entfernen
- Keycloak-Benutzer auf [[Cloud Mint System]] deaktivieren
- Keycloak-Benutzer auf [[ERP Mint System]] deaktivieren
- Zugriff auf [[Odoo Enterprise]] entfernen
- SSH-Schlüssel auf [[Hetzner]] und [[Exoscale]] entfernen
