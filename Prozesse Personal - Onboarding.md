---
title: Prozesse Personal - Onboarding
kind: howto
section: process
---

## Personal

Arbeitsschritte:

- Arbeitsvertrag erstellen
- Anmeldung bei der Ausgleichskasse
- Personalien erfassen
- AHV-/IV-/EO-Anmeldung
- Unfallversicherung / Krankentaggeldversicherung
- Arbeitsbewilligung (falls erforderlich)

## Technisch

### Login Infomaniak erstellen

Arbeitsschritte:

- Mitarbeiter-Eintrag in Wiki erfassen
- Infomaniak Account mit Rolle _Benutzer_ erstellen
- Infomaniak Account dem Team _Mint System GmbH_ hinzufügen
- E-Mail-Adresse gemäss Wiki-Definition erstellen
- Einladungs-Informationen an private Mail-Adresse schicken
- In Infomaniak "Verwaltung der Kalender" den Kalender des Benutzers mit der Organisation teilen

### Login Mint System erstellen

Arbeitsschritte:

- Matrix-Benutzer erstellen
- Keycloak-Benutzer anlegen
- Rolle hinzufügen:
  - cloud.mint-system.ch access
  - erp.mint-system.ch access
  - monitor.mint-system.ch admin
- Keycloak-Benutzer auf [[ERP Mint System]] einladen und entsprechende Rollen vergeben
- Zugriffsdaten and private Mail-Adresse schicken

```text
Betreff: Zugriffsinfirmationen Mint System

Hallo Vorname

Ich habe für dich unter der Adresse ﻿﻿vorname.nachname@mint-system.ch﻿﻿ mehrere Accounts erstellt:

- Infomaniak Account
- Infomaniak Postfach
- Login Mint System
- ERP Mint System

Der erste Schritt ist die Einrichtung des Postfachs. Ich habe auf deine private Mail-Adresse eine Einladungsmails mit den Details geschickt.

In einem zweiten Schritt kannst du das Passwort und die 2-Faktor-Authentisierung für das Login Mint System festlegen: https://login.mint-system.ch/realms/mint-system.ch/account
Mit diesem Login kannst dich anschliessend auf den folgenden Diensten einloggen:

- https://erp.mint-system.ch/
- https://cloud.mint-system.ch/
- https://monitor.mint-system.ch/

Anstatt den Benutzernamen und Passwort einzugeben, wählst du jeweils den Knopf "Login Mint System".

Lieber Gruss
```

### Zugriff erteilen

Arbeitsschritte:

- Benutzernamen für Git und SSH-Schlüssel erfragen

```
Hallo Vorname

Gerne möchten wir dir Zugriff auf die Organisations-Accounts von Mint System geben und bei Bedarf Zugriff auf die verwalteten Server erteilen. Um den Zugriff einzurichten brauchen wir die folgenden Informationen:

- GitHub Benutzernamen
- GitLab Benutzernamen
- Öffentlicher SSH-Schlüssel

Kannst du uns diese Informationen mitteilen?

Du erhältst dann Einladungsmails der entsprechenden Dienste zur Bestätigung.
```

- GitHub-Benutzer der [[GitHub#Organisation]] hinzufügen
- Für GitHub-Benutzer Zugriff auf [[Odoo Enterprise]] erteilen
- GitLab-Benutzer der [[GitLab#Organisation]] hinzufügen
- Im Ansible Inventory den Benutzer mit SSH-Schlüssel definieren
