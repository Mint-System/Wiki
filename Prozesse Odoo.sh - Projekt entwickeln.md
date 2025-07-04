# Prozesse Odoo.sh - Projekt entwickeln

## Odoo.sh Repository einrichten

Arbeitsschritte:

* Klonen Sie das Repository des Odoo.sh Projekts:

```bash
cd ~
git clone --recurse-submodules --branch main git@github.com:$ORGANISATION/$PROJECT.git
```

* In der `.env`-Datei des Odoo-Build Projekts fügen Sie den Pfad zum Repository hinzu:

```bash
cd ~/Odoo-Build
vi .env
```

```bash
ODOO_ADDONS_PATH=../$PROJECT
```

::: warning
Diesen Schritt müssen Sie nur ausführen, wenn Odoo Module direkt im Odoo.sh Repository eingecheckt sind.
:::

* Laden Sie die Odoo-Version und installieren Sie Module aus dem Repository

## Submodul hinzufügen

Arbeitsschritte:

* Fügen Sie einem Odoo.sh Projekt ein Submodule hinzu.

```bash
cd ~/$PROJECT
git submodule add -b $ODOO_VERSION git@github.com:$ORGANISATION/Odoo-Apps-$REPO.git "$ORGANISATION-$REPO"
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

## Submodul aus Pull-Request hinzufügen

Kontext: Wenn ein Modul als Pull-Request verfügbar ist, kann der dazugehörige Fork als Submodul dem Projekt hinzguefügt werden.

Vorbereitung:

* `PROJECT`: Name des Odoo.sh Git-Repo
* `REPO`: Name des Submodules (ohne `Odoo-Apps`-Prefix)
* `ORGANISATION`: Organisationsname des Forks
* `PR_NUMBER`: Nummer des Pull-Request auf dem aktuellen Submodul-Repo.

Arbeitschritte:

* In der Komandozeile in das Odoo.sh Projekt navigieren und einen Branch auschecken: `cd ~/$PROJECT; git switch $BRANCH`
* In das Submodule navigieren und den Pull-Request auschecken: `gh pr checkout $PR_NUMBER`
* Zurück in das Projekt navigieren: `cd ..`
* Die `.gitmodule` Url aktualisieren:

```bash
git config -f.gitmodules --unset submodule.$REPO.url
git config -f.gitmodules --add submodule.$REPO.url git@github.com:$ORGANISATION$/Odoo-Apps-$REPO.git
```

* Die neue Submodul-Referenz committen: `git add $REPO; git commit -m "gcmsg "feat($REPO): checkout PR #$PR_NUMBER`
* Submodul synchronisieren

```bash
git submodule sync
```
