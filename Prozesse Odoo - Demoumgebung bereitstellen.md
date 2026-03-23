---
title: Prozesse Odoo - Demoumgebung bereitstellen
kind: howto
section: process
---

Beschreibt wie man eine [[Odoo Demoumgebung]] bereitstellt.

## Demoumgebung erstellen

Arbeitsschritte:

- Aufrufen Odoo Build Url: `https://$ALIAS.$ODOO_VERSION.odoo.build`

Beispiel: https://smart-me.19.odoo.build

- Erstellen Odoo-Datenbank
- Odoo Master-Passwort aus Passwordmanager laden
- Login mit admin Bentuzer
- Installation Konfiugrations-Module `ir_mail_server_data` und `ir_mail_server_mailpit`
- 

### Login Mint System konfigurieren

Integration in [[Login Mint System]].

Arbeitsschritte:

- Bei [[Login Mint System#mint-system ch Realm]] die Applikation registrieren
- Benutzer mit Rolle `access` austatten
- Zugriff testen

## Demoumgebung entfernen

Arbeitsschritte:

- Einträge aus Ansible Inventar löschen
- DNS-Einträge löschen
- OAuth Client URL von Liste _Valid Redirect URIs_ entfernen
- Projektaufgaben bereinigen
- Datenbank löschen
