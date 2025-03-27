---
tags:
  - Prozess
---

# Prozesse Projektmanagement - Freelancer%In

## Onboarding

Arbeitsschritte:

* In Infomaniak eine Postfach erstellen
* In Keycloak einen Benutzer anlegen
	* `access` Zugriff auf `erp.mint-system.ch` und `cloud.mint-system.ch` erteilen
* In Odoo einen Benutzer mit Rolle "Shared" anlegen
* In Odoo einen Mitarbeiter anlegen und mit "Shared" taggen
* Mail an Freelancer%In schicken:

```
Hallo $VORNAME

Du solltest mehrere Zugriffs-Einadungen erhalten haben.

---

Login Mint System / https://login.mint-system.ch/

Hier verwaltest du deinen Mint System Benutzer.

Odoo Mint System / https://erp.mint-system.ch/

Unser Odoo ERP-System. Du hast die Rolle "Shared" und bekommst damit Zugriff auf die Projekte, Zeiterfassung und Kundendienst.

Um einzuloggen verwendest du den OAuth-Provider "Login Mint System".

Cloud Mint Sysem / https://cloud.mint-system.ch/

Unsere Nextcloud Datei-Ablage. Bist du einmal eingeloggt können wir Projekte und Passwörter teilen.

Um einzuloggen verwendest du den OAuth-Provider "Login Mint System".

---

Kannst du bestätigen dass die Zugriffe funktionieren?

Viele Grüsse
```

## Passwörter teilen

Arbeitsschritte:

* Passwort in der Nextcloud Passwort-App im Ordner "Shared" anlegen

![[Nextcloud Passwort Shared.png]]

* Den Eintrag mit dem Benutzer teilen