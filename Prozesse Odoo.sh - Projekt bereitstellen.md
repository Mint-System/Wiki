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

::: warning
Diesen Schritt müssen Sie nur ausführen, wenn Odoo Module direkt im Odoo.sh Repository eingecheckt sind.
:::

* Laden Sie die Odoo-Version und installieren Sie Module aus dem Repository

### Submodul hinzufügen

Arbeitsschritte

* Fügen Sie im Odoo.sh Projekt in einem ausgewählten Branch das Submodule hinzu.

```bash
cd ~/$REPO
git clone add -b XX.0 git@github.com:$ORGANISATION/$REPO.git "$ORGANISATION-$REPO"
```

* Committen Sie die `.gitmodules`-Datei und die Referenz.

```bash
git add --all
git commit -m "feat: new submodule $ORGANISATION/$REPO"
```

* Pushen Sie den Branch damit Odoo.sh einen neuen Build erstellt.

```bash
git push
```