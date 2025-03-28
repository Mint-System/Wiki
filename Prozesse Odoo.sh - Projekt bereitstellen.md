---
tags:
- Prozess
---
# Prozesse Odoo.sh - Projekt bereitstellen

## Initialisierung

### Bestehendes Projekt übernehmen

Arbeitsschritte:

* Kontaktaufnahme mit Besitzer des GitHub Repository
* Anfrage zum Transfer des Repository machen
* Anfrage zur Freigabe auf das bestehende Odoo.sh Projekt machen

### Neues Projekt erstellen

Arbeitsschritte:

* Einloggen auf <https://odoo.sh>
* Neues Projekt anlegen
* Erstellen `dev` und `main` Branch
* Deployment des produktiven Branches

### Berechtigung Kunde einrichten

Arbeitsschritte:

* Kunde auffordern zur Erstellung eines GitHub-Accounts
* Freigabe des GitHub und des Odoo.sh-Projekts an den Kunden


## Entwicklung

### Odoo.sh Repository einrichten

Arbeitsschritte:

* Klonen Sie das Repository ihres Odoo.sh Projekts

```bash
cd ~
git clone --recurse-submodules --branch main git@github.com:$ORGANISATION/$REPO.git
```

* In der `.env`-Datei des Odoo-Build Projekts fügen Sie den Pfad zum Repository hinzu:

```bash
cd ~/Odoo-Build
vi .env
```

```
ODOO_ADDONS_PATH=../$REPO
```

* Laden Sie die Odoo-Version und installieren Sie Module aus dem Repository

