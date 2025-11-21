---
tags:
  - Prozess
kind:
  - howto
section: process
---

# Prozesse Personal - Onboarding

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
- Infomaniak Account mit Rolle "Benutzer" erstellen
- Infomaniak Account dem Team "Mint System GmbH" hinzufügen
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
Hallo Vorname

Ich habe für dich unter der Adresse ﻿﻿vorname.nachname@mint-system.ch﻿﻿ mehrere Accounts erstellt:

- Infomaniak Account
- Infomaniak Postfach
- Login Mint System
- ERP Mint System

Der erste Schritt ist die Einrichtung des Postfachs. Ich habe auf deine private Mail-Adresse eine Einladungsmails mit den Details geschickt.

In einem zweiten Schritt kannst du das Passwort für das Login Mint System festlegen: https://login.mint-system.ch/realms/mint-system.ch/account
Mit diesem Login kannst dich auf den folgenden Diensten einloggen:

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

### Desktop einrichten

Arbeitsschritte:

- Installation [[Nextcloud]] Desktop-Client und Einrichten Synchronisation
- Installation [[Obsidian]] und Einrichten Zugriff auf Wikis
- Installation [[KeePassXC]] und Einrichten Zugriff auf Passwörter
- Installation [[Element]] und Login auf [[Matrix Server]].
- Installation [[Thunderbird]] und Einrichten Mail und Kalender

### Smartphone einrichten

Arbeitsschritte:

- Installation Nextcloud-App
- Einrichten Mail und Kalender

### Entwicklungsumgebung einrichten

Arbeitsschritte:

- Auschecken [[Ansible Build]] und [[Ansible Inventory]] Projekt
- Auschecken [[Odoo Build]] Projekt

### Website Profil aktualisieren

Arbeitsschritte:

- Foto von Mitarbeitenden erstellen und bearbeiten
- Neue Mitarbeitenden-Eintrag in [[Mint System Website]] erstellen
- In Odoo die offene Stelle anpassen
