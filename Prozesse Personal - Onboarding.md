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

- Unter [[Mint System GmbH - Mitarbeitende]] den Mitarbeitenden erfassen
- Infomaniak Account mit Rolle _Benutzer_ erstellen
	- Infomaniak Account dem Team _Mint System GmbH_ hinzufügen
	- E-Mail-Adresse gemäss Wiki-Definition erstellen
	- Einladungs-Informationen an private Mail-Adresse schicken
- In Infomaniak _Verwaltung der Kalender_ den Kalender des Benutzers mit der Organisation teilen

![[Infomaniak - Verwaltung der Kalender.png]]

### Login Mint System erstellen

Arbeitsschritte:

- Matrix-Benutzer auf dem [[Matrix Server]] erstellen
	- Das Matrix Standard-Passwort festlegen
- Auf [[Login Mint System]] einen Keycloak-Benutzer anlegen
	- Benötigte Benutzer-Aktionen festlegen: Configure OTP, Update Password
	- Rolle _Mitarbeitende_ hinzufügen
- Benutzer auf [[ERP Mint System]] einrichten
	- Benutzer erstellen oder als Portal-Benutzer einladen
	- Rolle _Mitarbeinde_ hinzufügen
	- OAuth-Provider _Login Mint System_ festlegen und als Benutzer-ID die Mail-Adresse definieren
	- Aktion _Mitarbeiter_ anlegen oder bestehenden Eintrag mit Benutzer vverknüpfen
- Zugriffsdaten and private Mail-Adresse schicken

```text
Betreff: Onboarding Mint System

Hallo VORNAME

Ich habe für dich unter der Adresse MAIL_ADRESS﻿﻿E mehrere Accounts erstellt:

- Infomaniak Account
- Infomaniak Postfach
- Login Mint System
- ERP Mint System
- Matrix Mint System

Der erste Schritt ist die Einrichtung des Postfachs. Du solltest auf deine private Mail-Adresse eine Einladungsmails mit Details erhalten haben.

In einem zweiten Schritt kannst du dein Passwort und die 2-Faktor-Authentisierung für das Login Mint System festlegen: https://wiki.mint-system.ch/prozesse-keycloak-login-verwalten.html

Mit diesem Login kannst dich anschliessend auf den folgenden Diensten einloggen:

- https://erp.mint-system.ch/
- https://cloud.mint-system.ch/
- https://monitor.mint-system.ch/

Anstatt den Benutzernamen und Passwort einzugeben, wählst du jeweils den Knopf "Login Mint System".

Als letzter Schritt kannst du den Nextcloud Desktop-Client auf deinem Gerät installieren: https://wiki.mint-system.ch/prozesse-nextcloud-desktop-client.html

Bitte teile mir, wenn das erledigt ist. Dann kann ich deinem Benutzer noch weitere Zugriffe auf unserer Nextlcoud und Infomaniak erteilen.

Lieber Gruss
```

### Zugriff erteilen

Arbeitsschritte:

- Benutzernamen für Git und SSH-Schlüssel erfragen

```
Hallo Vorname

Gerne möchten wir dir Zugriff auf die externen Organisations-Accounts von Mint System geben und bei Bedarf Zugriff auf unserer verwalteten Server erteilen. Um den Zugriff einzurichten brauchen wir die folgenden Informationen:

- GitHub Benutzernamen
- Codeberg Benutzernamen
- Öffentlicher SSH-Schlüssel

Kannst du uns diese Informationen mitteilen?

Du erhältst dann Einladungsmails der entsprechenden Dienste zur Bestätigung.
```

- GitHub-Benutzer der [[GitHub Organisation]] hinzufügen
- Für GitHub-Benutzer Zugriff auf [[Odoo Enterprise]] erteilen
- Codeberg-Benutzer der [[Codeberg Organisation]] hinzufügen
- Im Ansible Inventory den Benutzer mit SSH-Schlüssel erfassen

### Website Profil aktualisieren

Arbeitsschritte:

- Foto von Mitarbeitenden erstellen und bearbeiten
- Neue Mitarbeitenden-Eintrag in [[Mint System Website]] erstellen
- In Odoo die offene Stelle anpassen
